import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

import style from "./Buttons.module.css";
import { ToastTypes, showToast } from "src/Core/utils/toast/show-toast";
import { login } from "src/Core/services/athentication/athentication.servic";
import { AiOutlineLoading } from "react-icons/ai";

type btnProps = {
  text: string;
  // customBtn?:string;
  path: string;
  onclick?: any;
  loading?: boolean;
};

const Buttons = ({ text, path, loading, onclick }: btnProps) => {
  return (
    <Link to={path}>
      <Button
        className={` text-sm md:text-base ${style.customBtn} `}
        onClick={onclick}
      >
        <div className="flex justify-center items-center flex-row-reverse">
          {loading && <AiOutlineLoading className="text-white text-base" />}
          <span className="">{text}</span>
        </div>
      </Button>
    </Link>
  );
};

export default Buttons;

// AiOutlineLoading

// {loading ? (
//   <AiOutlineLoading />
// ) : (
// <Link to={path}>
//   <Button
//     className={` text-sm md:text-base ${style.customBtn} `}
//     onClick={handleToLogin}
//   >

//   </Button>
//   </Link>
// )}
