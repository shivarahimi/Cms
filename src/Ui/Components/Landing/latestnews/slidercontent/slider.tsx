import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import swiper
import "../slidercontent/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation, Thumbs, Autoplay } from "swiper";
// import components
import { GetNewsText } from "src/Core/services/public/api-newstext";
// import react
import { AiOutlineLoading } from "react-icons/ai";

type tabId = {
  type: any;
};

const Slider = ({ type }: tabId) => {
  const { mutate, isLoading } = GetNewsText();
  const [newsSlider, setNewsSlider] = useState([]);

  const obj = {
    page: 1,
    pageSize: 3,
    categoryIds: [type],
    isActive: true,
  };
  useEffect(() => {
    mutate(obj, {
      onSuccess: (val: any) => {
        try {
          const news = val?.data?.result.newsList;
          setNewsSlider(news);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <div>
      <Swiper
        className="slider1"
        loop={true}
        modules={[Navigation, Thumbs, Autoplay]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
      >
        {isLoading ? (
          <p>
            <AiOutlineLoading />
          </p>
        ) : newsSlider && newsSlider.length > 0 ? (
          newsSlider?.map((lastN: any) => {
            return (
              <SwiperSlide key={lastN.id}>
                <div className="content grid grid-cols-12 pt-6">
                  <div className="sliderImg col-span-12 lg:col-span-4 sm:w-full">
                    <img
                      className="lg:w-[30rem]
                      lg:!h-[27rem] h-[14rem] w-full"
                      src={`https://adminapi.agroom.org/${lastN.imagePath}`}
                      alt=""
                    />
                  </div>
                  <div className="col-span-12 mx-6 lg:col-span-8 mt-0">
                    <div className="my-4">
                      <p className="text-[#3A3B3C] font-bold">{lastN.title}</p>
                      <p className="text-[#6A6A6B] my-3 text-sm">
                        {lastN.publishedDateTimeAsJalali}
                      </p>
                    </div>
                    <div className="my-8">
                      <p className="text-[#0C0C0C] mb-6 text-sm sm:w-full lg:w-[500px]">
                        {lastN.subTitle}
                      </p>
                      <Link
                        to={`news/textnew/${lastN.id}`}
                        className="text-[#066E48] text-xs border-b border-[#066E48] p-1 hover:text-[#066E48]"
                      >
                        مشاهده کامل خبر
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="text-[#333333] h-96 flex items-center justify-center">
            {" "}
            اطلاعاتی جهت نمایش وجود ندارد
          </p>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
