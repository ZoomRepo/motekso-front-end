import { AxiosPost, AxiosGet, AxiosDelete } from "../../AxiosWrapper";

export const uploadFile = (fileData) => {

  return AxiosPost(`/fileUpload`, fileData);
};

export const deleteFile = (id) => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
  return AxiosDelete("/deleteFile/"+id);
};

export const getFile = (id) => {
    // Assign Dynamic value to change on enviornment change and for different services if needed
    return AxiosPost("/getFile", {id: id});
  };