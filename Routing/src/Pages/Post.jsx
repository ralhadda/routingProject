import React from "react";
import { useLoaderData } from "react-router-dom";

export function Post() {
  const { title, body, comments } = useLoaderData();

  return (
    <div className='container'>
      <h1 className='page-title'>{title}</h1>
      <span className='page-subtitle'>By: {}</span>
      <div>{body}</div>
      <h3 className='mt-4 mb-2'>Comments</h3>
      <div className='card-stack'>
        {comments.map(comment => (
          <div className='card' key={comment.id}>
            <div className='card-body'>
              <div className='text-sm mb-1'>{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
