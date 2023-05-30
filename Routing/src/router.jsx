import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  useNavigation
} from "react-router-dom";
import { Posts } from "./Pages/Posts";
import { NewPost } from "./Pages/NewPost";
import { Edit } from "./Pages/EditPost";
import { Post } from "./Pages/Post";
import { User } from "./Pages/User";
import { Users } from "./Pages/Users";
import { Todos } from "./Pages/Todos";
import { Navbar } from "./Navbar";
import { fetchPosts, fetchPostWithUserAndComments } from "./apiLoader/posts";
import { fetchUsers, fetchUserWithPostAndTodo } from "./apiLoader/users";
import { fetchTodos } from "./apiLoader/todos";
import { newPage } from "./apiLoader/posts";
import { editPost } from "./apiAction/editPost";
import { newPost } from "./apiAction/newPost";

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
            loader: fetchPostWithUserAndComments,
            action: editPost
          },
          {
            path: "New",
            element: <NewPost />,
            loader: newPage,
            action: newPost
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
