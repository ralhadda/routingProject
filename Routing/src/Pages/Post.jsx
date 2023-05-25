import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

export function Post() {
  const { userId, title, body } = useLoaderData();
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://127.0.0.1:3000/users/${userId}`),
      fetch(`http://127.0.0.1:3000/posts/${userId}/comments`)
    ])
      .then(([userResponse, commentsResponse]) =>
        Promise.all([userResponse.json(), commentsResponse.json()])
      )
      .then(([userData, commentsData]) => {
        setUser(userData);
        setComments(commentsData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setPosts([]);
        setTodos([]);
      });
  }, [userId]);

  return (
    <div className='container'>
      <h1 className='page-title'>{title}</h1>
      <span className='page-subtitle'>
        By:{" "}
        <Link to={`/Users/${userId}`} className='link-style'>
          {user.name}
        </Link>
      </span>
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
