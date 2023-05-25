import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import { Posts } from "./Pages/Posts";
import { Post } from "./Pages/Post";
import { User } from "./Pages/User";
import { Users } from "./Pages/Users";
import { Todos } from "./Pages/Todos";
import { Navbar } from "./Navbar";
import { fetchPosts, fetchPost } from "./api/posts";
import { fetchUsers, fetchUser } from "./api/users";
import { fetchTodos } from "./api/todos";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Posts />,
        loader: fetchPosts
      },
      {
        path: "/Posts",
        children: [
          {
            index: true,
            element: <Posts />,
            loader: fetchPosts
          },
          {
            path: ":id",
            element: <Post />,
            loader: fetchPost
          }
        ]
      },
      {
        path: "/Users",
        children: [
          {
            index: true,
            element: <Users />,
            loader: fetchUsers
          },
          ,
          {
            path: ":id",
            element: <User />,
            loader: fetchUser
          }
        ]
      },
      {
        path: "/Todos",
        children: [
          {
            index: true,
            element: <Todos />,
            loader: fetchTodos
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
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
