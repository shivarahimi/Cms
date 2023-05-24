import { Link } from "react-router-dom";
import CardVideo from "./videocard/card";
import "../video/video.css";

const Video = () => {
  return (
    <div className="px-[20px] lg:px-[50px] mt-14">
      <div className="flex justify-between items-center border-b-[8px] border-[#066E48] py-2">
      
        <h3 className="text-2xl text-[#333333]">ویدئوها</h3>
        <Link
          to="/allnews"
          className="text-[#066E48] hover:text-[#066E48] text-[10px] lg:text-sm font-bold border-none"
        >
          مشاهده همه ویدئوها
        </Link>
      </div>
      <div className="px-[20px] lg:px-[100px] w-full bg-video py-6">
        <CardVideo />
      </div>
    </div>
  );
};

export default Video;
