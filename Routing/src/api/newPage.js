import { fetchData } from "./base";

export async function newPage({ request: { signal } }) {
  return fetchData("http://127.0.0.1:3000/posts", signal);
}
