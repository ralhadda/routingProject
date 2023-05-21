import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams(); // Access the ID from the URL path
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // Display a loading state while fetching the post data
  }

  return (
    <div className='container'>
      <h1 className='page-title'>{post.title}</h1>
      <span className='page-subtitle'>By: {post.author}</span>
      <div>{post.body}</div>
    </div>
  );
}
