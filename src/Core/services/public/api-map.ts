import { useQuery } from "react-query";
import { API } from "../api/api";


const getMap = async () => {
    return await API.get("/api/Map/GetProvince");
  };
  
  export const GetMap = () => {
    return useQuery("map", getMap);
  };
  