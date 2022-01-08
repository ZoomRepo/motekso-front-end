import { AxiosPost } from "../AxiosWrapper";

export const signIn = (username, password) => {
    // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosPost(`https://cors-anywhere.herokuapp.com/http://api.motekso.co.uk/token`, {
    username: username,
    password: password
  });
};

export const signOut = () => {
  localStorage.removeItem("token");
  window.location.reload(false);

};