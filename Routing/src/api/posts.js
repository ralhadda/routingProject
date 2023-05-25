import { fetchData } from "./base";

export async function fetchPosts({ request: { signal } }) {
  return fetchData("http://127.0.0.1:3000/posts", signal);
}

export async function fetchPost({ params, request }) {
  const userId = params.id;
  const signal = request.signal;
  return fetchData(`http://127.0.0.1:3000/posts/${userId}`, signal);
}
