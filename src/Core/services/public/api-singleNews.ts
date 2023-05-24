import { useMutation } from "react-query";
import { API } from "../api/api";

const getsSingleNews = async (obj: any) => {
  // console.log("queryKey" ,queryKey)
  // console.log("queryKey2" ,queryKey.id)
  const newsId = obj.id;
  //  console.log("newsId" ,newsId)
  return await API.post(`/api/News/TextNews/GetNews${newsId}`);
};

export const useSingleNews = () => {
  return useMutation(getsSingleNews);
};
