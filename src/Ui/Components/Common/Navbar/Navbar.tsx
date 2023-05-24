import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import components
import { MenuItems } from "src/Core/data/MenuItems";
import Buttons from "../Button/Button";
import NavbarMob from "./NavbarMob/NavbarMob";
import Search from "../Search/Search";
// axe
import logo from "src/Assests/Img/logo/logo.png";
// react-icons
import { BsSearch } from "react-icons/bs";

import style from "../Navbar/Navbar.module.css";
import { useUserAuth } from "src/Core/Context/AuthenticationContext";
import { showToast } from "src/Core/utils/toast/show-toast";
import { login } from "src/Core/services/athentication/athentication.servic";
import { ToastTypes } from "src/Core/utils/toast/show-toast";

type navProps = {
  isHome: boolean;
};

const Navbar = ({ isHome }: navProps) => {
  const navigate = useNavigate();
  const { token, userInfo } = useUserAuth();
  // console.log("token" ,token)
  // console.log("userInfo" ,userInfo)
  const [isSearch, setIsSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchHandler = () => {
    setIsSearch(!isSearch);
  };
  const handleToLogin = () => {
    setLoading(true);
    showToast(["در حال انتقال به صفحه ورود ..."], ToastTypes.success);
    login();
  };

  const logOut = () => {
    navigate("/signout-oidc");
  };

  return (
    <>
      <div className={isHome ? "" : style.backNav}>
        <div
          className={`w-[96.4%] lg:w-[97.5%] ${
            isHome ? "absolute  z-[10] !mt-[10px]" : "relative z-[9] mt-0 p-4 "
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex md:items-center lg:items-end  mr-8">
              <div className=" hidden lg:flex">
                <img src={logo} alt="logo" className=" w-[40px] lg:w-[4rem]" />
              </div>

              <ul
                className={`${style.listGroup} lg:gap-[0.8rem] mr-8 hidden lg:flex`}
              >
                {/* menu items */}
                {MenuItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <li className="nav text-base lg:text-[1.1rem] hover:mb-[-1px] font-light ">
                        <NavLink
                          to={item.path}
                          // className="text-[#5E5757] hover:text-[#066E48] pb-2 hover:border-b hover:hover:border-solid hover:border-[#066E48] "
                          className={({ isActive }) =>
                            isActive
                              ? `text-[#066E48] hover:text-[#066E48] pb-2 hover:border-b hover:hover:border-solid hover:border-[#066E48]  `
                              : "text-[#1B1B1B] hover:text-[#066E48] pb-2 hover:border-b hover:hover:border-solid hover:border-[#066E48]"
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>

            <div className="items-center gap-2 hidden lg:flex">
              <div className=" bg-[#F0F0F0]  p-[0.5rem] rounded-lg w-8 h-8 relative ">
                <button>
                  {isSearch ? (
                    <Search
                      show={isSearch}
                      onCancle={searchHandler}
                      className="text-2xl"
                    />
                  ) : null}

                  <BsSearch
                    onClick={searchHandler}
                    className="text-Main-green absolute  top-[0.6rem]"
                  />
                </button>
              </div>

              {token ? (
                <>
                  <div className="bg-[#F0F0F0] rounded-lg px-2 py-[0.3rem] ">
                    <button className="">
                      <NavLink to="/" className="hover:text-[#066e48]  ">
                        {userInfo.name}
                        {userInfo.family_name}
                      </NavLink>
                    </button>
                  </div>
                  <div className="bg-[#F0F0F0] rounded-lg px-2 py-[0.3rem] ">
                    <button  className="hover:text-[#066e48]">
                      پنل ادمین
                    </button>
                  </div>

                  <div className="bg-[#F0F0F0] rounded-lg px-2 py-[0.3rem] ">
                    <button onClick={logOut} className="hover:text-[#066e48]">
                      خروج
                    </button>
                  </div>
                </>
              ) : (
                <div className="bg-[#F0F0F0]   rounded-lg ">
                  <Buttons text={"ورود"} path="" onclick={handleToLogin} />
                  <Buttons text={"ثبت نام"} path="" />
                </div>
              )}
            </div>
          </div>
          {/* mobilemenu */}
          <NavbarMob />
        </div>
      </div>
    </>
  );
};

export default Navbar;
