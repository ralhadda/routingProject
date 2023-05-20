import { createBrowserRouter, Outlet } from "react-router-dom";
import { Posts } from "./Pages/Posts";
import { Post } from "./Pages/Post";
import { Users } from "./Pages/Users";
import { Todos } from "./Pages/Todos";
import { Navbar } from "./Navbar";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
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
          { path: "Post", element: <Post name='sally' /> }
        ]
      },
      { path: "/Users", element: <Users /> },
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
