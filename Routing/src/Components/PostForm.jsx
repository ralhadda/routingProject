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
              {/* {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))} */}
              <option value='1'>Leanne Graham</option>
              <option value='2'>Ervin Howell</option>
              <option value='3'>Clementine Bauch</option>
              <option value='4'>Patricia Lebsack</option>
              <option value='5'>Chelsey Dietrich</option>
              <option value='6'>Mrs. Dennis Schulist</option>
              <option value='7'>Kurtis Weissnat</option>
              <option value='8'>Nicholas Runolfsdottir V</option>
              <option value='9'>Glenna Reichert</option>
              <option value='10'>Clementina DuBuque</option>
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
