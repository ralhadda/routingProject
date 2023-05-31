import { fetchData } from "./base";

export const fetchTodos = async request => {
  return fetchData("http://127.0.0.1:3000/todos", request.signal);
};
