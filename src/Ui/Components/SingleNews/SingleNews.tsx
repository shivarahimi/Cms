import BreadCrumb from "./BreadCrumb/BreadCrumb";

import TextNews from "./TextNews/TextNews";

const SingleNews = () => {
  return (
    <>
      <div className=" border border-solid border-[#ecf0f4] flex justify-between  shadow-sm py-1 px-4 mt-4 mx-[20px] lg:mx-[50px] rounded-lg">
        <BreadCrumb />
      </div>
      <TextNews />
    </>
  );
};

export default SingleNews;
