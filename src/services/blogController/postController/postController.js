import { AxiosPost, AxiosGet, AxiosDelete } from "../../AxiosWrapper";

export const upsertPost = (post) => {
  const postData = {
    _id: post._id,
    title: post.title,
    description: post.description, 
    author: post.author, 
    image: post.image,
    date: post.date,
  }
  return AxiosPost(`/post`, postData);
};

export const getAllPosts = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`/posts`);
};

export const getPost = (id) => {
  var url = "/post/"+id
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(url);
};

export const updatePost = (id) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`/post`);
};

export const deletePost = (id) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete("/post/"+id);
};