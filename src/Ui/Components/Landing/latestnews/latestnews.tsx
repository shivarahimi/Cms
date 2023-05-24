import { Link } from "react-router-dom";

import Agriculture from "./tabs/agriculture/Agriculture";

const LatestNews = () => {
  return (
    <div className="px-[20px] lg:px-[50px] mt-20">
      <div className="flex justify-between items-center border-b-[8px] border-[#066E48] py-2">
        <h3 className="text-2xl text-[#333333]">آخرین اخبار</h3>
        <Link
          to="/News/TextNews"
          className="text-[#066E48] hover:text-[#066E48] text-[10px] lg:text-sm font-bold border-none"
        >
          مشاهده همه اخبار
        </Link>
      </div>
      <Agriculture />
    </div>
  );
};

export default LatestNews;
