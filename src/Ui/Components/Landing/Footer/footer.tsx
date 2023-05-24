import { useState, useEffect } from "react";
// import components
import {
  UseGetSetting,
  useGetRelatedLink,
  useQuickAccess,
} from "src/Core/services/public/api-footer";
// import react-icons
import { FaFax } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrGooglePlus } from "react-icons/gr";

// style
import style from "../../Landing/Footer/footer.module.css";
// img
import Imgfooter from "src/Assests/Img/Pages/home/footer/closeup-pins-map-planning-travel-journey_53876-14827.png";

const Footer = () => {
  // api links
  const [Footer, setFooter] = useState<any>();
  const { data, isLoading } = UseGetSetting();
  useEffect(() => {
    const footerData = data?.data.result;
    setFooter(footerData);
  }, [isLoading]);
  // related-link
  const [relatedLink, setRelatedLink] = useState([]);
  const { mutate } = useGetRelatedLink();

  useEffect(() => {
    const obj = {
      page: 1,
      pageSize: 1000,
      title: "",
      link: "",
      isActive: true,
    };

    mutate(obj, {
      onSuccess: (val: any) => {
        try {
          const relatedLink = val?.data?.result?.relatedLinkList;
          setRelatedLink(relatedLink);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);
  // quick-access
  const [quickaccess, setQuickAccess] = useState([]);

  const { mutate: quickAccessMutate } = useQuickAccess();
  useEffect(() => {
    const obj = {
      page: 1,
      pageSize: 1000,
      title: "",
      link: "",
      isActive: true,
    };

    quickAccessMutate(obj, {
      onSuccess: (val: any) => {
        try {
          const quickAccessData = val?.data.result.quickAccessList;
          setQuickAccess(quickAccessData);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);
  return (
    <div className="mx-auto px-[20px] lg:px-[100px] bg-[#ECEFEA] mt-5 lg:mt-20 p-2">
      <div className="flex flex-col lg:flex-row lg:justify-evenly border-b-[1px] border-[#066E48] p-8 items-center justify-center">
        <ul className="lg:col-span-3 lg:justify-start lg:items-start flex flex-col items-start mb-3 lg:mb-0 p-0 m-0">
          <h6 className="mb-2 lg:mb-4"> لینک های مرتبط </h6>
          {/* link-items */}
          {relatedLink.map((link: any) => (
            <li
              key={link.id}
              className={`text-sm mb-1 list-disc cursor-pointer ${style.info}`}
            >
              {link.title}
            </li>
          ))}
        </ul>
        <ul className="lg:col-span-3 lg:justify-start lg:items-start flex flex-col items-start mb-3 lg:mb-0 p-0 m-0">
          <h6 className=" mb-2 lg:mb-4">دسترسی سریع</h6>
          {/* link-items */}
          {quickaccess.map((item: any) => (
            <li
              key={item.id}
              className={`text-sm mb-1 list-disc cursor-pointer ${style.info}`}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="lg:col-span-3 flex flex-col items-center mb-3 lg:mb-0">
          <h6 className="mb-2 lg:mb-4">ارتباط با ما</h6>
          <div className="flex mb-2 items-center">
            <BsTelephone className="w-4 h-4 ml-1 text-[#066e48ad]" />
            <span className="text-sm">{Footer?.tell}</span>
          </div>

          <div className="flex mb-2 items-center">
            <MdOutlineMarkEmailRead className="w-4 h-4 ml-1 text-[#066e48ad]" />
            <span className="text-sm">{Footer?.postalCode}</span>
          </div>
          <div className="flex mb-2 items-center">
            <FaFax className="w-4 h-4 ml-1 text-[#066e48ad]" />
            <span className="text-sm">{Footer?.fax}</span>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col items-center mb-3">
          <div className="flex mb-2">
            <CiLocationOn className="w-5 h-5 ml-1 text-[#066e48ad]" />
            <p className="text-sm w-[17rem]">{Footer?.address}</p>
          </div>

          <img src={Imgfooter} alt="" className="xl:w-72 h-32" />
        </div>
        <div className="lg:col-span-3 flex flex-col items-center mb-3 lg:mb-1">
          <p className="lg:text-xs xl:text-sm text-sm mb-2">
            برای دریافت اخبار از طریق ایمیل ثبت نام کنید
          </p>
          <div className="mb-3">
            <button className="bg-[#066E48] text-white p-2 rounded text-xs">
              ارسال
            </button>
            <input
              type="text"
              placeholder="info@gmail.com"
              className="p-2 text-left rounded-bl rounded text-xs xl:w-60 outline-[#066e48ad]"
            />
          </div>
          <div className="flex ">
            <GrGooglePlus className="w-5 h-5 ml-1 text-[#066E48]" />
            <AiFillTwitterCircle className="w-5 h-5 text-[#066E48]" />
            <TiSocialFacebook className="w-5 h-5 text-[#066E48]" />
          </div>
        </div>
      </div>
      <p className="text-center text-[#404040] pt-2 text-sm">
        کلیه حقوق مادی و معنوی متعلق به نظام صنفی کشور می باشد.
      </p>
    </div>
  );
};

export default Footer;
