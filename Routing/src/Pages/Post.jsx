import React from "react";
import { useLoaderData } from "react-router-dom";

export function Post() {
  const post = useLoaderData();

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h1 className='page-title'>{post.title}</h1>
      <span className='page-subtitle'>By: {post.author}</span>
      <div>{post.body}</div>
    </div>
  );
}
