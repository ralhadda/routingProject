import { fetchData } from "./base";

export async function fetchTodos(request) {
  return fetchData("http://127.0.0.1:3000/todos", request.signal);
}
