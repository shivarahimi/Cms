import { useMutation, useQueryClient } from "react-query";
import { API } from "../api/api";

const getsServices = async (value: any) => {
  return await API.post("/api/ServiceDesk/GetServiceDesk", value);
};

export const useServices = () => {
  const queryClient = useQueryClient();

  return useMutation(getsServices);
};
