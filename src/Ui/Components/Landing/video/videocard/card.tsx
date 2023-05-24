import { useEffect, useState } from "react";
import { Card, CardBody, CardText } from "reactstrap";
// import siwper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation, Thumbs, Autoplay } from "swiper";

import { GetVideo } from "./../../../../../Core/services/public/api-video";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";
import "../../video/videocard/card.css";

const CardVideo = () => {
  const { data, mutate, isLoading } = GetVideo();
  // console.log("datavideo",data);
  const [videoSlider, setVideoSlider] = useState([]);

  const obj = {
    page: 1,
    pageSize: 1000,
    title: "",
    summary: "",
    isActive: true,
    loadPublishedNews: true,
    startDateTime: "",
    endDateTime: "",
  };
  useEffect(() => {
    mutate(obj, {
      onSuccess: (val: any) => {
        try {
          const news = val?.data?.result.newsList;
          // console.log(news, "news");
          setVideoSlider(news);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <Swiper
      className="slider2"
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
      slidesPerView={2}
      grabCursor={true}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {isLoading ? (
        <p>
          <AiOutlineLoading />
        </p>
      ) : videoSlider && videoSlider.length > 0 ? (
        videoSlider?.map((vd: any) => {
          return (
            <SwiperSlide
              key={vd.id}
              className="lg:grid grid-cols-12 flex-col items-center lg:flex-row"
            >
              <Card
                className="cardHover shadow-md hover:bg-[#066E48] cursor-pointer lg:col-span-4 col-span-12 mb-2"
                style={{
                  width: "18rem",
                }}
              >
                {/* <video width="320" height="240" controls>
                  <source
                    src={`https://adminapi.agroom.org/${vd.imagePath}`}
                    type="video/mp4"
                  />
                </video> */}
                <img
                  alt="Sample"
                  src={`https://adminapi.agroom.org/${vd.imagePath}`}
                />
                <CardBody>
                  <CardText className=" description text-[#1B1B1B] text-xs text-center">
                    {vd.title}
                  </CardText>
                </CardBody>
              </Card>
            </SwiperSlide>
          );
        })
      ) : (
        <p className="text-[#333333] flex items-center justify-center"> اسلایدر جهت نمایش وجود ندارد</p>
      )}
    </Swiper>
  );
};

export default CardVideo;
