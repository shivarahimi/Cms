import { useEffect, useState } from "react";
import { GetMap } from "src/Core/services/public/api-map";
import Map from "../map";

const IranMap = () => {
  const { data } = GetMap();

  const map = data?.data.result;
  const [currentProvince, setCurrentProvince] = useState(0);
  const provinces = [
    "استان ها",
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "اصفهان",
    "البرز",
    "ایلام",
    "بوشهر",
    "تهران",
    "چهارمحال وبختیاری",
    "خراسان جنوبی",
    "خراسان رضوی",
    "خراسان شمالی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان وبلوچستان",
    "فارس",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهگیلویه وبویراحمد",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد",
  ];

  useEffect(() => {}, [currentProvince]);
  // console.log("datamap-555", map);
  console.log();
  return (
    <div className="px-[20px] lg:px-[50px] mt-20">
      <div className=" py-2 border-b-[8px] border-[#066E48]">
        <h3 className="text-2xl text-[#333333]">نقشه</h3>
      </div>
      <div className="grid lg:grid-cols-2 py-6">
        <div className="mb-4 md:mb-0">
          <Map
            activeMap={data?.data.result}
            currentProvince={currentProvince}
            setCurrentProvince={setCurrentProvince}
          />
        </div>
        <div className="p-2 lg:p-0 md:!mt-[-3rem] lg:!mt-0">
          <span>{provinces[currentProvince]}</span>
          <p className="province-description w-full text-justify text-sm md:text-base xl:w-[35rem] ">
            {currentProvince === 0
              ? "جهت مشاهده توضیحات هر استان ماوس(موشواره) را بر بروی مکان آن از روی نقشه ببرید و جهت مشاهوه وبسایت استان مورد نظر روی موقعیت مکانی آن کلیک کنید"
              : map
                  .map((item: any) => item.province.province)
                  .includes(currentProvince)
              ? map.filter(
                  (item: any) => item.province.province === currentProvince
                )[0].description
              : "توضیحاتی برای این استان ثبت نشده است"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IranMap;
