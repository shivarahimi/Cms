import { useQuery,useMutation } from "react-query";
import { API } from "../api/api";

const GetSettingApi = async () => {
  return await API.get("/api/Setting/GetSetting");
};

export const UseGetSetting = () => {
  return useQuery("GetSettingApi", GetSettingApi);
};

// related-link
const getRelatedLink = async (value:any)=>{
  return await API.post("/GetRelatedLink", value);
};

export const useGetRelatedLink = () => {
  return useMutation(getRelatedLink);
};

// quick-access
const getQuickAccess = async (value:any)=>{
  return await API.post("/GetQuickAccess", value);
};

export const useQuickAccess = () => {
  return useMutation(getQuickAccess);
};