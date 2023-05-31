import React from "react";

export const TodoCard = ({ todo }) => {
  return (
    <li className={todo.completed ? "strike-through" : ""}>{todo.title}</li>
  );
};
