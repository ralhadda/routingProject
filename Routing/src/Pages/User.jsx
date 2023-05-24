import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function User() {
  const { id, name, email, address, company, website } = useLoaderData();
  const { street, suite, city, zipcode } = address;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/posts?userId=${id}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        console.error("Error fetching posts:", error);
        setPosts([]);
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
      <h3 class='mt-4 mb-2'>Posts</h3>
      <div className='card-grid'>
        {posts.map(post => (
          <div className='card' key={post.id}>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>
              <div className='card-preview-text'>{post.body}</div>
            </div>
            <div className='card-footer'>
              <a className='btn' href='posts.html'>
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
