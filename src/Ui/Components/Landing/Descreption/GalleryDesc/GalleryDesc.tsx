import { gallerydata } from "src/Core/data/GalleryData";

import "../GalleryDesc/GalleryDesc.css";

const GalleryDesc = () => {
  // const { data, mutate } = useImageGallery();
  // console.log("gallery" ,myObject)


  // useEffect(() => {
  //   const obj = {
  //     page: 1,
  //     pageSize: 1000,
  //     title: "",
  //     description: "",
  //     isActive: true,
  //   };

  //   mutate(obj);
  // }, []);

  return (
    <div className="gallery  sm:w-[600px] h-[370px] md:h-[500px] grid grid-cols-2 grid-rows-3 !gap-2">
      {gallerydata.map((item) => {
        return (
          <figure
            key={item.id}
            className={`galleryitem col-span-1 ${item.figurecss}`}
          >
            <img
              src={item.img}
              className={`${item.imgcss} ${item.imgcss2}  w-full `}
              alt="img"
            />
          </figure>
        );
      })}
    </div>
  );
};

export default GalleryDesc;
