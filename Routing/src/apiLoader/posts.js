import { fetchData } from "./base";

export const fetchPosts = async ({ request: { signal, url } }) => {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const userId = searchParams.get("userId");

  let apiUrl = `http://127.0.0.1:3000/posts`;

  if (query) {
    apiUrl += `?q=${query}`;
  }

  if (userId && userId !== "") {
    apiUrl += `${query ? "&" : "?"}userId=${userId}`;
  }

  const posts = await fetchData(apiUrl, signal);
  return {
    searchParams: { query, userId },
    posts: posts
  };
};

export const fetchPostWithUserAndComments = async ({ params, request }) => {
  const postId = params.id;
  const signal = request.signal;

  const post = await fetchData(`http://127.0.0.1:3000/posts/${postId}`, signal);
  const userId = post.userId;

  const [user, comments] = await Promise.all([
    fetchData(`http://127.0.0.1:3000/users/${userId}`, signal),
    fetchData(`http://127.0.0.1:3000/posts/${postId}/comments`, signal)
  ]);

  return { user, post, comments };
};

export const newPage = async ({ request: { signal } }) => {
  return fetchData("http://127.0.0.1:3000/posts", signal);
};
