import { redirect } from "react-router-dom";
import { errorFormValidation } from "../apiUtils/utils";

export const newPost = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const error = errorFormValidation(title, body);
  if (Object.keys(error).length) return error;

  const post = await fetch("http://127.0.0.1:3000/posts", {
    method: "POST",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body, userId })
  }).then(res => res.json());

  return redirect(`/Posts/${post.id}`);
};
