import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { TodoCard } from "../components/TodoCard";

export function User() {
  const { id, name, email, address, company, website } = useLoaderData();
  const { street, suite, city, zipcode } = address;
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://127.0.0.1:3000/posts?userId=${id}`),
      fetch(`http://127.0.0.1:3000/todos?userId=${id}`)
    ])
      .then(([postsResponse, todosResponse]) =>
        Promise.all([postsResponse.json(), todosResponse.json()])
      )
      .then(([postsData, todosData]) => {
        setPosts(postsData);
        setTodos(todosData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setPosts([]);
        setTodos([]);
      });
  }, [id]);

  return (
    <div className='container'>
      <h1 className='page-title'>{name}</h1>
      <div className='page-subtitle'>{email}</div>
      <div>
        <b>Company:</b> {company.name}
      </div>
      <div>
        <b>Website:</b> {website}
      </div>
      <div>
        <b>Address:</b> {street}, {suite}, {city}, {zipcode}
      </div>
      <h3 className='mt-4 mb-2'>Posts</h3>
      <div className='card-grid'>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <h3 className='mt-4 mb-2'>Todos</h3>
      <ul>
        {todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
