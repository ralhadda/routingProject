import React from "react";
import { useLoaderData } from "react-router-dom";

export function User() {
  const user = useLoaderData();

  if (!user) {
    return <div>Loading...</div>; // Display a loading state while fetching the user data
  }

  const { street, suite, city, zipcode } = user.address;

  return (
    <div className='container'>
      <h1 className='page-title'>{user.name}</h1>
      <div className='page-subtitle'>{user.email}</div>
      <div>
        <b>Company:</b>
        {user.company.name}
      </div>
      <div>
        <b>Website:</b>
        {user.website}
      </div>
      <div>
        <b>Address:</b>
        {street}, {suite}, {city}, {zipcode}
      </div>
    </div>
  );
}
