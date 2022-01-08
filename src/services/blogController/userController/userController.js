import { AxiosPost, AxiosGet, AxiosDelete } from "../AxiosWrapper";

export const upsertUser = (username, password, email) => {
    // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`https://cors-anywhere.herokuapp.com/http://api.motekso.co.uk/user`, {
    username: username,
    password: password,
    email: email
    });
};

export const getUser = (username) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`https://cors-anywhere.herokuapp.com/http://api.motekso.co.uk/users`,{
    username: username
  });
};

export const getUsers = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosGet(`https://cors-anywhere.herokuapp.com/http://api.motekso.co.uk/users`);
};

export const deleteUser = (username) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete(`https://cors-anywhere.herokuapp.com/http://api.motekso.co.uk/user`,{
    username: username
  });
};
