import React, { useState} from "react";
// react icons
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";


type searchProps = {
  className: string;
  show: boolean;
  onCancle: () => void;
};

const Search = ({ className, show, onCancle }: searchProps) => {

  const [inputValue, seInputValue] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    seInputValue(e.target.value);
  };

  return (
    <>
      <div className="BackSearch slideDown flex justify-center items-center fixed w-full h-[100px] lg:h-[107px] left-0 top-0 bg-black/70 z-[50]">
        <FaTimes
          className="rotateIn text-2xl  text-white absolute top-[18px] right-[8px] "
          onClick={onCancle}
        />
        <form className="relative">
          <div className="flex items-center !justify-center ">
            <input
              type="text"
              value={inputValue}
              onChange={inputHandler}
              placeholder="جستجو..."
              className="rounded-lg text-black outline-0 !py-[0.3rem] px-4  bg-[#F0F0F0] w-[16rem] md:w-[25rem]"
            />
          </div>
          <div className="text-white absolute left-0 top-0 bg-Main-green p-[0.6rem] rounded-lg">
            <BsSearch />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;

