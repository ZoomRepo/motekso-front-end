import { AxiosPost, AxiosGet, AxiosDelete } from "../AxiosWrapper";

export const upsertPost = (title, description, category, author, date) => {
    // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`http://api.motekso.co.uk/post`, {
    title: title,
    description: description,
    category: category,
    author: author,
    date: date
    });
};

export const getPost = (title) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`http://api.motekso.co.uk/posts`,{
    title: title
  });
};

export const getPosts = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`http://api.motekso.co.uk/posts`);
};

export const deletePost = (postname) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete(`http://api.motekso.co.uk/post`,{
    title: title
  });
};