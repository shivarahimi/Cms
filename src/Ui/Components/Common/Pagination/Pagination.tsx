import React, { useState } from "react";
// utils
import { _range } from "src/Core/utils/helperFunctions";
// react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type paginateProps = {
  totalCount: number;
  currentPage: number;
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalCount,
  currentPage,
  setcurrentPage,
  pageSize,
  setPage,
}: paginateProps) => {
  const round = Math.ceil(totalCount / pageSize); //6/4=1.5 ===2
  const pages = _range(round);
  // console.log("totalCount", totalCount);
  // console.log("pageSize", pageSize); //[1,2]
  // console.log("pages", pages);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (event: any) => {
    setcurrentPage(Number(event.target.id));
    setPage(Number(event.target.id));
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    setPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrev = () => {
    setcurrentPage(currentPage - 1);
    setPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn: any = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNext}>&hellip;</li>;
  }
  let pageDecrementBtn: any = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrev}>&hellip;</li>;
  }
  return (
    <nav aria-label="Page navigation example" className="mx-auto">
      <ul
        className="pagination  flex flex-row-reverse justify-center items-center
       my-20 bg-white rounded-lg dark:bg-slate-900 "
      >
        <li>
          <button
            type="button"
            aria-label="Previous"
            onClick={handlePrev}
            className="w-full grid place-content-center dark:bg-[#1B314C] dark:text-white "
            disabled={currentPage === pages[0] ? true : false}
          >
            <div className=" bg-[#066E48] text-white p-3">
              <IoIosArrowBack />
            </div>
          </button>
        </li>
        <li
          className="page-item h-12 border-2 border-r-0 cursor-pointer text-[#1f1f1f]
                   border-[#066E48] bg-opacity-30 w-12 flex justify-center items-center 
                    dark:!border-[rgb(66,63,81)]"
        >
          {pageDecrementBtn}
        </li>

        {pages.map((number: any) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                id={number}
                onClick={handleClick}
                className={`page-item h-12 border-2 border-r-0 cursor-pointer text-[#1f1f1f]
                   border-[#066E48] bg-opacity-30 w-12 flex justify-center items-center 
                    dark:!border-[rgb(66,63,81)]   ${
                      currentPage === number ? "active bg-[#acfde4]  " : null
                    } `}
              >
                {number}
              </li>
            );
          } else {
            return null;
          }
        })}
        <li
          className="page-item h-12 border-2 border-r-0 cursor-pointer text-[#1f1f1f]
                   border-[#066E48] bg-opacity-30 w-12 flex justify-center items-center 
                    dark:!border-[rgb(66,63,81)]"
        >
          {pageIncrementBtn}
        </li>

        <li>
          <button
            type="button"
            aria-label="Next"
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            onClick={handleNext}
            className="w-full grid place-content-center  dark:bg-[#1B314C] dark:text-white"
          >
            <div className=" bg-[#066E48] text-white p-3">
              <IoIosArrowForward />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
