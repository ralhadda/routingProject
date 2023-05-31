import React from "react";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <div className='card'>
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
  );
};
