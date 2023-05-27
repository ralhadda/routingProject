import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export function Post() {
  const { user, post, comments } = useLoaderData();

  return (
    <div className='container'>
      <h1 className='page-title'>{post.title}</h1>
      <span className='page-subtitle'>
        By:{" "}
        <Link to={`/Users/${post.userId}`} className='link-style'>
          {user.name}
        </Link>
      </span>
      <div>{post.body}</div>
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
