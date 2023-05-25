import React from "react";

export function TodoCard({ todo }) {
  return (
    <li className={todo.completed ? "strike-through" : ""}>{todo.title}</li>
  );
}
