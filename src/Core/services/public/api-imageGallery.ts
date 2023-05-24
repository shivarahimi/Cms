import { useMutation, useQueryClient } from "react-query";
import { API } from "../api/api";

const getImageGallery = async (value: any) => {
  return await API.post("/api/ImageGalery/GetImageGallery", value);
};

export const useImageGallery = () => {
  const queryClient = useQueryClient();

  return useMutation(getImageGallery);
};
