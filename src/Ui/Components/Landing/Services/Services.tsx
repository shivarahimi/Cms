import { useEffect, useState } from "react";
// import components
import Title from "src/Ui/Components/Common/Title/Title";
import Cards from "./Cards/Cards";
// api
import { useServices } from "src/Core/services/public/api-services";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";

const Services = () => {
  const [services, setServices] = useState([]);
  // console.log("services" ,services)
  const { mutate, isLoading } = useServices();

  useEffect(() => {
    const obj = {
      page: 1,
      pageSize: 10000,
      isActive: true,
    };

    // getServicesMute.mutate(obj);
    mutate(obj, {
      onSuccess: (val: any) => {
        // console.log("val-service", val);
        try {
          const service = val?.data?.result?.serviceDeskList;
          // console.log("services", service);
          setServices(service);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <div className=" mt-12 md:mt-20" id="services">
      <div >
        <Title text={"خدمات ما"} />
      </div>

      <div className="container mx-auto mt-10	sm:mt-16 ">
        <div className=" flex flex-wrap lg:justify-evenly gap-4">
          {isLoading ? (
            <p className="flex justify-center">
              <AiOutlineLoading />
            </p>
          ) : services && services.length > 0 ? (
            services?.map((item: any) => {
              return <Cards key={item.id} {...item} />;
            })
          ) : (
            <p className="text-[#333333] flex justify-center">
              خدمات وجود ندارد
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;







// console.log("getnewsMute", getServicesMute.data && getServicesMute.data.data.result.serviceDeskList);
