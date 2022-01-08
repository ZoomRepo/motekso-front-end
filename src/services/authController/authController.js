import { AxiosPost } from "../AxiosWrapper";

export const signIn = (username, password) => {
  return AxiosPost(`http://api.motekso.co.uk/token`, {
    username: username,
    password: password
  });
};

export const signOut = () => {
  localStorage.removeItem("token");
  window.location.reload(false);

};