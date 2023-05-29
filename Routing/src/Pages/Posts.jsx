import { useLoaderData, Link, Form } from "react-router-dom";
import { useRef, useEffect } from "react";

export function Posts() {
  const {
    searchParams: { query, userId },
    posts
  } = useLoaderData();
  const queryRef = useRef("");
  const userIdRef = useRef("");

  useEffect(() => {
    queryRef.current.value = query;
    if (userId) {
      userIdRef.current.value = userId;
    } else {
      userIdRef.current.value = "";
    }
  }, [query, userId]);

  return (
    <div className='container'>
      <h1 className='page-title'>
        Posts
        <div className='title-btns'>
          <Link to={"/posts/new"} className='btn btn-outline'>
            New
          </Link>
        </div>
      </h1>
      <Form method='get' action='/posts' className='form mb-4'>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='query'>Query</label>
            <input type='search' name='query' id='query' ref={queryRef} />
          </div>
          <div className='form-group'>
            <label htmlFor='userId'>Author</label>
            <select type='search' name='userId' id='userId' ref={userIdRef}>
              <option value=''>Any</option>
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
          <button className='btn'>Filter</button>
        </div>
      </Form>
      <div className='card-grid'>
        {posts.map(post => (
          <div className='card' key={post.id}>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>
              <div className='card-preview-text'>{post.body}</div>
            </div>
            <div className='card-footer' key={post.id}>
              <Link to={`/Posts/${post.id}`} className='btn'>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
