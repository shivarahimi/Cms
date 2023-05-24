import { useMutation } from "react-query";
import { API } from "../api/api";

// export const getNews = async () => {
//   return await API.post("/api/News/VideoNews/GetNews");
// };
// export const GetNews = () => {
//   const queryClient = useQueryClient();
//   return useMutation(getNews, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("new");
//     },
//   });
// };

const getVideo = async (value: any) => {
  return await API.post("/api/News/VideoNews/GetNews", value);
};

export const GetVideo = () => {
  return useMutation(getVideo);
};
