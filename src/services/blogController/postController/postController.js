import { AxiosPost, AxiosGet, AxiosDelete } from "../../AxiosWrapper";

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

export const getAllPosts = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`/posts`);
};

export const getPost = (id) => {
  var url = "/story/"+id
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(url);
};

export const updatePost = (id) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`/post`);
};

export const deletePost = (id) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete(`/post`,{
    _id: id
  });
};