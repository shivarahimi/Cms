import axios from "axios";

import { toast } from "react-toastify";
const SERVER_URL = "https://api.dev.agroom.org";
export const API = axios.create({
  baseURL: SERVER_URL,
});



API.interceptors.response.use(null, error => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    // console.log("error",error);
    toast.error("مشکلی از سمت سرور رخ داده است", {
      position: "top-right",
      closeOnClick: true,
    });
  }
  // console.log(expectedErrors);
  return Promise.reject(error);
});
