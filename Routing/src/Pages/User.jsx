import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

export function User() {
  const { id, name, email, address, company, website } = useLoaderData();
  const { street, suite, city, zipcode } = address;
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/posts?userId=${id}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        console.error("Error fetching posts:", error);
        setPosts([]);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/todos?userId=${id}`)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => {
        console.error("Error fetching posts:", error);
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
          <div className='card' key={post.id}>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>
              <div className='card-preview-text'>{post.body}</div>
            </div>
            <div className='card-footer'>
              <Link to={`/Posts/${post.id}`} className='btn'>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h3 className='mt-4 mb-2'>Todos</h3>
      <ul>
        {todos.map(todo => (
          <li className={todo.completed ? "strike-through" : ""} key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
