import GalleryDesc from "./GalleryDesc/GalleryDesc";
import TextDesc from "./TextDesc/TextDesc";

const Descreption = () => {
  return (
    <div className="mx-8 mt-12 md:mt-[4rem] lg:mt-24">
      <div className="grid lg:grid-cols-12">
        <div className=" col-span-12 lg:col-span-7 ">
          <div className="flex justify-center slideUp">
            <GalleryDesc />
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-5  flex">
          <div className="slideDown flex justify-center xl:justify-start items-center sm:w-[80%] m-auto lg:w-full ">
            <TextDesc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descreption;
