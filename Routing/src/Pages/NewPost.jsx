import React from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

export function NewPost() {
  const errorMessage = useActionData();
  const { state } = useNavigation();

  return (
    <div className='container'>
      <h1 className='page-title'>New Post</h1>
      <Form method='post' action='/posts/new' className='form'>
        <div className='form-row'>
          <div
            className={`form-group ${
              errorMessage === "Title is Required" ? "error" : ""
            }`}
          >
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' />
            {errorMessage === "Title is Required" ? (
              <div className='error-message'>Title is Required</div>
            ) : (
              ""
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select name='userId' id='userId'>
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
          <div
            className={`form-group ${
              errorMessage === "Body is Required" ? "error" : ""
            }`}
          >
            <label htmlFor='body'>Body</label>
            <textarea name='body' id='body'></textarea>
            {errorMessage === "Body is Required" ? (
              <div className='error-message'>Body is Required</div>
            ) : (
              ""
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
}