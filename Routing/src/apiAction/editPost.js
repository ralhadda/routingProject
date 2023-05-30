import { redirect } from "react-router-dom";
import { errorFormValidation } from "../apiUtils/utils";

export async function editPost({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const error = errorFormValidation(title, body, userId);
  if (Object.keys(error).length !== 0) return error;

  const postId = params.id;
  await fetch(`http://127.0.0.1:3000/posts/${postId}`, {
    method: "PUT",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body, userId })
  });

  return redirect(`/Posts/${postId}`);
}
