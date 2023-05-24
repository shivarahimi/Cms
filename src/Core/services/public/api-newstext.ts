import { useMutation, useQuery } from "react-query";
import { API } from "../api/api";

const getCategory = async () => {
  return await API.get("/api/Statement/Category/GetCategory");
};

export const GetCategory = (onSuccess: any, onError: any) => {
  return useQuery("category", getCategory, {
    onSuccess,
    onError,
  });
};

const getNewsText = async (value: any) => {
  return await API.post("/api/News/TextNews/GetNews", value);
};

export const GetNewsText = () => {
  return useMutation(getNewsText);
};
