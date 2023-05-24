import { createBrowserRouter, Outlet } from "react-router-dom";
import { Posts } from "./Pages/Posts";
import { Post } from "./Pages/Post";
import { User } from "./Pages/User";
import { Users } from "./Pages/Users";
import { Todos } from "./Pages/Todos";
import { Navbar } from "./Navbar";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Posts />,
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/posts", { signal });
        }
      },
      {
        path: "/Posts",
        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/posts", { signal });
            }
          },
          {
            path: ":id",
            element: <Post />,
            loader: async ({ params, request: { signal } }) => {
              const postResponse = await fetch(
                `http://127.0.0.1:3000/posts/${params.id}`,
                { signal }
              );
              const post = await postResponse.json();

              const userResponse = await fetch(
                `http://127.0.0.1:3000/users/${post.userId}`,
                { signal }
              );
              const user = await userResponse.json();

              const commentsResponse = await fetch(
                `http://127.0.0.1:3000/posts/${params.id}/comments`,
                { signal }
              );
              const comments = await commentsResponse.json();

              return { ...user, ...post, comments };
            }
          }
        ]
      },
      {
        path: "/Users",
        children: [
          {
            index: true,
            element: <Users />,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/users", { signal });
            }
          },
          ,
          {
            path: ":id",
            element: <User />,
            loader: async ({ params, request: { signal } }) => {
              const userResponse = await fetch(
                `http://127.0.0.1:3000/users/${params.id}`,
                { signal }
              );

              const {
                id,
                name,
                email,
                address,
                company,
                website
              } = await userResponse.json();

              return { id, name, email, address, company, website };
            }
          }
        ]
      },
      {
        path: "/Todos",
        children: [
          {
            index: true,
            element: <Todos />,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/todos", { signal });
            }
          }
        ]
      }
    ]
  }
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
