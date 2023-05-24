import { useEffect, useState } from "react";
// swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Thumbs, Autoplay, EffectFade } from "swiper";
// api
import { useSlider } from "src/Core/services/public/api-slider";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";
// css
import "../../Landing/Slider/Slider.css";
import { UseGetSetting } from "src/Core/services/public/api-footer";

const Slider = () => {
  const [sliders, setSlider] = useState([]);
  const { mutate, isLoading } = useSlider();
  const [sliderCount, setSliderCount] = useState([]);
  const { data, isLoading: isLoadingCount } = UseGetSetting();
  useEffect(() => {
    const sliderImage = data?.data.result.sliderImageCount;
    setSliderCount(sliderImage);
  }, [isLoadingCount]);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const obj = {
      page: 1,
      pageSize: sliderCount,
      title: "",
      description: "",
      canShow: true,
      startShowDateTime: "",
      endShowDateTime: "",
    };

    // getSliderMute.mutate(obj)
    mutate(obj, {
      onSuccess: (val: any) => {
        // console.log("val", val);
        try {
          const slider = val?.data?.result?.sliderList;
          // console.log("slider", slider);
          setSlider(slider);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, [sliderCount, isLoadingCount]);

  return (
    <div className="md:relative md:top-[27px] pt-[3.5rem] md:pt-[2rem] lg:pt-[3.4rem] siwperHeader">
      <Swiper
        loop={true}
        className="mySiwper"
        modules={[Pagination, Autoplay, Thumbs, EffectFade]}
        navigation={true}
        pagination={true}
        effect={"fade"}
        spaceBetween={20}
        grabCursor={true}
        autoplay={{
          delay: 2500,
        }}
      >
        {isLoading ? (
          <p className="flex justify-center">
            <AiOutlineLoading />
          </p>
        ) : sliders && sliders.length > 0 ? (
          sliders?.map((slid: any) => {
            return (
              <SwiperSlide key={slid.id}>
                <div className="h-full flex items-center justify-center relative">
                  <img
                    src={`https://api.dev.agroom.org/${slid.imagePath}`}
                    className="h-[380px] object-cover md:h-[500px] w-full"
                    alt=""
                  />
                  <div className="hidden md:flex md:flex-col absolute bg-[rgba(233,232,232,0.9)] md:bottom-[25px] lg:bottom-[76px]  md:left-[30%] lg:left-[49%] mr-8 px-4 py-3 rounded-lg">
                    <h5 className="text-Main-green md:text-base lg:text-xl">
                      {" "}
                      {slid.title}
                    </h5>
                    <p className="text-[#707070] pt-2 "> {slid.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="text-[#333333] flex justify-center">
            {" "}
            اسلایدر جهت نمایش وجود ندارد
          </p>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
