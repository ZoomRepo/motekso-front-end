import Axios from "axios";

var CancelToken = Axios.CancelToken;
var callCancel = CancelToken.source();

const handleSuccess = response => {
  return response.data;
};

const handleError = error => {
  
};

const axiosInstance = () => {
  // TODO: Fix CORS Issue
  const axiosInstance = Axios.create({
    headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json',
    // Authorization: localStorage.getItem("token"),
    },
    cancelToken: callCancel.token
  });
  axiosInstance.interceptors.response.use(handleSuccess, handleError);
  return axiosInstance;
};

export const AxiosPost = (url, data, config) => {
  return axiosInstance().post(url, data, config);
};

export const AxiosDelete = (url, config) => {
    return axiosInstance().delete(url, data, config);
  };

export const AxiosGet = (url, config) => {
  return axiosInstance().get(url, data, config);
};