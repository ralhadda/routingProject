import React from "react";
import { useLoaderData, useActionData } from "react-router-dom";
import { PostForm } from "../Components/PostForm";

export const EditPost = () => {
  const { user, post, users } = useLoaderData();
  const errorMessage = useActionData();

  return (
    <div className='container'>
      <h1 className='page-title'>Edit Post</h1>
      <PostForm
        title={post.title}
        body={post.body}
        userId={user.id}
        users={users}
        errorMessage={errorMessage}
      />
    </div>
  );
};
