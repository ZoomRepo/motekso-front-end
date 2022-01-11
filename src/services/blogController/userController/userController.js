import { AxiosPost, AxiosGet, AxiosDelete } from "../AxiosWrapper";

export const upsertUser = (username, password, email) => {
    // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`/user`, {
    username: username,
    password: password,
    email: email
    });
};

export const getUser = (username) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`/users`,{
    username: username
  });
};

export const getUsers = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`/users`);
};

export const deleteUser = (username) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete(`http://motekso.co.uk/user`,{
    username: username
  });
};
