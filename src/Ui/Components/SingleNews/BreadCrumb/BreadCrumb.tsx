import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import components
import TitleSingleNews from "../TitleSingleNews/TitleSingleNews";
// api
import { GetNewsText } from "src/Core/services/public/api-newstext";
// import react-icons
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLoading } from "react-icons/ai";

import style from "../BreadCrumb/BreadCrumb.module.css";

const BreadCrumb = () => {
  const { textId } = useParams();
  const [title, setTitle] = useState("");
  const [dataNews, setDataNews] = useState<number>();
  const { mutate, isLoading } = GetNewsText();

  useEffect(() => {
    const obj = {
      page: 1,
      pageSize: 1,
      id: `${textId}`,
      isActive: true,
    };

    mutate(obj, {
      onSuccess: (val: any) => {
        try {
          const res = val?.data?.result.newsList;
          const title = res[0].newsCategories[0].title;
          const date = res[0].publishedDateTimeAsJalali;
          // console.log("date", date);
          setTitle(title);
          setDataNews(date);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <AiOutlineLoading />
      ) : (
        <>
          <Breadcrumb tag="nav" className={`${style.breadcrumb} my-1`}>
            <BreadcrumbItem
              className={`${style.home} text-base leasing-[1.2rem] flex justify-center items-end `}
            >
              <NavLink to="/" className="text-[#0C0C0C] hover:text-[#0C0C0C]">
                <AiFillHome className="text-Main-green text-2xl" />
              </NavLink>
            </BreadcrumbItem>

            <BreadcrumbItem
              className={`${style.news} text-base leasing-[1.2rem] flex justify-center items-end `}
            >
              <NavLink to="" className="text-[#0C0C0C] hover:text-[#0C0C0C]">
                {" "}
                اخبار
              </NavLink>
            </BreadcrumbItem>

            <TitleSingleNews title={title} />
          </Breadcrumb>

          <div className="flex align-self-center">
            <p className="text-[#0C0C0C] text-muted">{dataNews}</p>
          </div>
        </>
      )}
    </>
  );
};

export default BreadCrumb;
