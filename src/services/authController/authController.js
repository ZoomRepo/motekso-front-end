import { AxiosPost } from "../AxiosWrapper";

export const signIn = (username, password) => {
  return AxiosPost(`/token`, {
    username: username,
    password: password
  });
};

export const signOut = () => {
  localStorage.removeItem("token");
  window.location.reload(false);

};