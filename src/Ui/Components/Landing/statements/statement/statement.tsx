import ImgState from "src/Assests/Img/Pages/home/statement/icons8-check-circle-24.png"

type serviceProps = {
  img: string;
  description: string;
  title:string;
  imagePath:string;
};



const Statement = (st:serviceProps) => {
  return (
        <div className="md:col-span-4 md:mr-4 col-span-12 mr-0">
          <div className="flex lg:mb-6">
            <img src={ImgState} alt="" className="w-6 h-6 " />
            <p className="w-80 text-[15px] text-[#333333] mr-1 text-justify">{st.title}</p>
          </div>
        </div>
  );
};

export default Statement;
