import { useMutation } from "react-query";
import { API } from "../api/api";

const getSlider = async (value: any) => {
  return await API.post("/api/Slider/GetSlider", value);
};

export const useSlider = () => {
  return useMutation(getSlider);
};
