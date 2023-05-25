import { fetchData } from "./base";

export async function fetchUsers(request) {
  return fetchData("http://127.0.0.1:3000/users", request.signal);
}

export async function fetchUser({ params, request }) {
  const userId = params.id;
  const signal = request.signal;

  return fetchData(`http://127.0.0.1:3000/users/${userId}`, signal);
}
