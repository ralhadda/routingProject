import { fetchData } from "./base";

export async function fetchUsers(request) {
  return fetchData("http://127.0.0.1:3000/users", request.signal);
}

export async function fetchUser({ params, request }) {
  const userId = params.id;
  const signal = request.signal;

  return fetchData(`http://127.0.0.1:3000/users/${userId}`, signal);
}

export async function fetchUserWithPostAndTodo({ params, request }) {
  const userId = params.id;
  const signal = request.signal;

  const [user, post, todo] = await Promise.all([
    fetchData(`http://127.0.0.1:3000/users/${userId}`, signal),
    fetchData(`http://127.0.0.1:3000/posts?userId=${userId}`, signal),
    fetchData(`http://127.0.0.1:3000/todos?userId=${userId}`, signal)
  ]);

  return { user, post, todo };
}
