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
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://127.0.0.1:3000/posts/${params.id}`, {
                signal
              });
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
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://127.0.0.1:3000/users/${params.id}`, {
                signal
              });
            }
          }
        ]
      },
      { path: "/Todos", element: <Todos /> }
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
