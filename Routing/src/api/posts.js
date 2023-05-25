import { fetchData } from "./base";

export async function fetchPosts({ request: { signal } }) {
  return fetchData("http://127.0.0.1:3000/posts", signal);
}

export async function fetchPost({ params, request: { signal } }) {
  return fetchData(`http://127.0.0.1:3000/posts/${params.id}`, signal);
}

export async function fetchComments({ params, request: { signal } }) {
  return fetchData(`http://127.0.0.1:3000/posts/${params.id}/comments`, signal);
}
