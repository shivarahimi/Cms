import { Button } from "reactstrap";

const TextDesc = () => {
  return (
    <div className="text-center  mt-8 md:mt-12 lg:mt-0 sm:w-[90%] ">
      <div className="sm:flex sm:justify-center sm:items-center">
        <h3 className=" text-2xl xl:text-3xl text-center sm:border-r-4 sm:border-solid sm:border-Main-green sm:pr-1">
          سامانه جامع بهره برداران
        </h3>
        <h3 className="text-Main-green text-xl  xl:text-[1.7rem] sm:pr-2">
          کشاورزی
        </h3>
      </div>

      <p className=" text-[1.1rem] text-[#4F4C4C] text-justify lg:w-[88%] xl:w-[90%]  mx-auto my-4">
        به سامانه جامع بهره برداران کشاورزی خوش آمدید شما می توانید با ثبت نام
        در این سامانه از خدمات نظام صنفی بهره مند شوید
      </p>

      <div className="flex justify-end lg:w-[90%]">
        <a href="#services">
          <Button
            className="py-[0.3rem] px-4 text-sm md:text-base text-white !bg-[#066E48]">
            مشاهده خدمات ما
          </Button>
        </a>
      </div>
    </div>
  );
};

export default TextDesc;
