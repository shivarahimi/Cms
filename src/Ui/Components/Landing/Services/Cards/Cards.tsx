import { NavLink } from "react-router-dom";
import style from "../Cards/Card.module.css";

type serviceProps = {
  title: string;
  imagePath: string;
  linkService: string;
};

const Cards = (item: serviceProps) => {
  // console.log("item" ,item.linkService)
  return (
    <div className="md:col-span-6 sm:col-span-6 col-span-12 mx-auto lg:mb-8  slideUp ">
      <div
        className={` py-[0.9rem] cursor-pointer  rounded-lg 
        w-[14rem] h-[12rem] 
        lg:w-[13rem] lg:h-[10rem] 
        xl:w-[14rem] xl:h-[12rem] 
        ${style.cardCustom}  `}
      >
        <div className={` ${style.imgservice}`}>
          <div className={style.img}>
            <img
              alt="img"
              src={`https://api.dev.agroom.org/${item.imagePath}`}
              className="w-[250px] h-[200px] m-auto rounded-lg"
            />
          </div>

          <div className={style.info}>
            <h3
              className={`text-[#333333] text-center lg:w-[14rem] xl:w-full text-base lg:text-sm xl:text-base  ${style.cardText}  `}
            >
              {item.title}
            </h3>

            <div className={style.servicesMore}>
              <NavLink
                to={`${item.linkService}`}
                className=" text-sm border-b border-solid
             border-white pb-2 text-white hover:text-white"
              >
                مشاهده بیشتر
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
