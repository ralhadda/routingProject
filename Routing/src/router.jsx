import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  useNavigation,
  redirect
} from "react-router-dom";
import { Posts } from "./Pages/Posts";
import { New } from "./Pages/New";
import { Edit } from "./Pages/Edit";
import { Post } from "./Pages/Post";
import { User } from "./Pages/User";
import { Users } from "./Pages/Users";
import { Todos } from "./Pages/Todos";
import { Navbar } from "./Navbar";
import { fetchPosts, fetchPostWithUserAndComments } from "./api/posts";
import { fetchUsers, fetchUserWithPostAndTodo } from "./api/users";
import { fetchTodos } from "./api/todos";
import { newPage } from "./api/newPage";

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
            loader: fetchPostWithUserAndComments
          },
          {
            path: ":id/Edit",
            element: <Edit />,
            loader: fetchPostWithUserAndComments
          },
          {
            path: "New",
            element: <New />,
            loader: newPage,
            action: async ({ request }) => {
              const formData = await request.formData();
              const title = formData.get("title");
              const body = formData.get("body");
              const userId = formData.get("userId");

              const post = await fetch("http://127.0.0.1:3000/posts", {
                method: "POST",
                signal: request.signal,
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, body, userId })
              }).then(res => res.json());

              return redirect(`/Posts/${post.id}`);
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
            loader: fetchUsers
          },
          ,
          {
            path: ":id",
            element: <User />,
            loader: fetchUserWithPostAndTodo
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
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>
      }
    ]
  }
]);

function NavLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      {isLoading && <div className='loading-spinner' />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
