import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import componets
import { MenuItems } from "src/Core/data/MenuItems";
import Buttons from "src/Ui/Components/Common/Button/Button";
import Search from "src/Ui/Components/Common/Search/Search";

import logo from "src/Assests/Img/logo/logo.png";
// react icons
import { BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

import style from "../NavbarMob/NavbarMob.module.css";
import { useUserAuth } from "src/Core/Context/AuthenticationContext";
import { ToastTypes, showToast } from "src/Core/utils/toast/show-toast";
import { login } from "src/Core/services/athentication/athentication.servic";

const NavbarMob = () => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const { token, userInfo } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const searchHandler = () => {
    setIsSearch(!isSearch);
  };

  const [click, setClick] = useState(false);
  const toggleHandler = () => {
    setClick(!click);
  };

  const handleToLogin = () => {
    setLoading(true);
    showToast(["در حال انتقال به صفحه ورود ..."], ToastTypes.success);
    login();
  };

  const logOut = () => {
    navigate("/signout-oidc");
  };
  useEffect(() => {
    window.onresize = () => {
      setClick(false);
    };
  }, [click]);

  return (
    <>
      {/* back */}
      {click ? (
        <div className={style.preScrim} onClick={toggleHandler}></div>
      ) : (
        ""
      )}
      {/* navbar */}
      <div className="w-full ">
        <div className="flex justify-between  items-center">
          <div
            className="block lg:hidden z-[6] mr-4 md:mr-8"
            onClick={toggleHandler}
          >
            {click ? (
              <FaTimes size="18px" className="text-black" />
            ) : (
              <BiMenuAltRight size="30px" className="text-black " />
            )}
          </div>

          <div
            className={
              click
                ? " w-[55%] sm:w-[48%] md:w-[30%] h-[110vh] bg-[rgba(255,255,255,0.9)]   text-white absolute top-[-33px] right-0 transition-all duration-[0.5s] ease  z-[5] "
                : " w-[55%] sm:w-[48%] md:w-[30%] absolute h-[110vh]  top-[-33px] right-[-100%] transition-all duration-[0.5s] ease  z-[5]"
            }
          >
            <div className=" flex justify-end lg:hidden pt-8 pr-8 border-b  border-solid border-[#cbcbcc] w-[90%] m-auto pb-4 ">
              <img src={logo} alt="logo" className=" w-[80px] " />
            </div>

            <ul className="gap-3 lg:gap-4 mr-8 mt-8 flex flex-col lg:hidden">
              {MenuItems.map((item, index) => {
                return (
                  <div key={index}>
                    <li
                      className="navItemMob  h-[2rem] sm:text-[1.2rem] 
                     hover:w-fit hover:border-b hover:border-solid hover:border-[#066E48] 
                    "
                    >
                      <NavLink
                        to={item.path}
                        onClick={toggleHandler}
                        className="text-[#1B1B1B] hover:text-[#066E48]"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>

          <div className="items-center gap-[0.25rem] sm:gap-2 md:gap-3 flex  lg:hidden">
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
                <div className="bg-[#F0F0F0] rounded-lg px-1 py-[0.2rem] sm:px-2 sm:py-[0.3rem] ">
                  <button className="">
                    <NavLink
                      to=""
                      className="hover:text-[#066e48] text-sm md:text-base  "
                    >
                      {userInfo.name}
                      {userInfo.family_name}
                    </NavLink>
                  </button>
                </div>
                <div className="bg-[#F0F0F0] rounded-lg px-1 py-[0.2rem] sm:px-2 sm:py-[0.3rem] ">
                  <button className="hover:text-[#066e48]">
                    <NavLink
                      to=""
                      className="hover:text-[#066e48] text-sm md:text-base  "
                    >
                      پنل ادمین
                    </NavLink>
                  </button>
                </div>

                <div className="bg-[#F0F0F0] rounded-lg px-1 py-[0.2rem] sm:px-2 sm:py-[0.3rem] ">
                  <button
                    onClick={logOut}
                    className="hover:text-[#066e48] text-sm md:text-base"
                  >
                    خروج
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-[#F0F0F0]   rounded-lg">
                <Buttons text={"ورود"} path="" onclick={handleToLogin} />
                <Buttons text={"ثبت نام"} path="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMob;
