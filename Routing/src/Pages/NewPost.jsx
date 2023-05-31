// newPost.jsx
import React from "react";
import { useActionData } from "react-router-dom";
import { PostForm } from "../Components/PostForm";

export const NewPost = () => {
  const errorMessage = useActionData();

  return (
    <div className='container'>
      <h1 className='page-title'>New Post</h1>
      <PostForm title='' body='' userId='' errorMessage={errorMessage} />
    </div>
  );
};
