import { useLoaderData } from "react-router-dom";
import { TodoCard } from "../components/TodoCard";

export const Todos = () => {
  const todos = useLoaderData();

  return (
    <div className='container'>
      <h1 className='page-title'>Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
