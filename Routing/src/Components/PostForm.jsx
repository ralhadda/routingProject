import React from "react";
import { Form, useNavigation } from "react-router-dom";

export const PostForm = ({ title, body, userId, users, errorMessage }) => {
  const { state } = useNavigation();

  return (
    <div className='container'>
      <Form method='post' action='/posts/new' className='form'>
        <div className='form-row'>
          <div className={`form-group ${errorMessage?.title ? "error" : ""}`}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' defaultValue={title} />
            {errorMessage?.title && (
              <div className='error-message'>{errorMessage.title}</div>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select name='userId' id='userId' defaultValue={userId}>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className={`form-group ${errorMessage?.body ? "error" : ""}`}>
            <label htmlFor='body'>Body</label>
            <textarea name='body' id='body' defaultValue={body}></textarea>
            {errorMessage?.body && (
              <div className='error-message'>{errorMessage.body}</div>
            )}
          </div>
        </div>
        <div className='form-row form-btn-row'>
          <a className='btn btn-outline' href='/posts'>
            Cancel
          </a>
          <button className='btn' disabled={state === "loading" ? true : false}>
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};
