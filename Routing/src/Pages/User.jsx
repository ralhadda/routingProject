import React from "react";
import { useLoaderData } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { TodoCard } from "../components/TodoCard";

export const User = () => {
  const { user, post, todo } = useLoaderData();
  const { street, suite, city, zipcode } = user.address;
  return (
    <div className='container'>
      <h1 className='page-title'>{user.name}</h1>
      <div className='page-subtitle'>{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {street}, {suite}, {city}, {zipcode}
      </div>
      <h3 className='mt-4 mb-2'>Posts</h3>
      <div className='card-grid'>
        {post.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <h3 className='mt-4 mb-2'>Todos</h3>
      <ul>
        {todo.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
