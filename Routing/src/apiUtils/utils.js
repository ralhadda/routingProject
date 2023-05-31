export const errorFormValidation = (title, body) => {
  const error = {};

  if (!title) {
    error.title = "Title is Required";
  }

  if (!body) {
    error.body = "Body is Required";
  }

  return error;
};
