import { AxiosPost, AxiosGet, AxiosDelete } from "../AxiosWrapper";

export const upsertPost = (title, description, category, author, date) => {
    // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`/post`, {
    title: title,
    description: description,
    category: category,
    author: author,
    date: date
    });
};

export const getPost = (title) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`/posts`,{
    title: title
  });
};

export const getPosts = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`/posts`);
};

export const deletePost = (postname) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete(`/post`,{
    title: title
  });
};