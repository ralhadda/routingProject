export const errorFormValidation = (title, body, userId) => {
  const error = {};

  if (!title) {
    error.title = "Title is Required";
  }

  if (!body) {
    error.body = "Body is Required";
  }

  if (!userId) {
    error.userId = "Author is Required";
  }

  return error;
};
