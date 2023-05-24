import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// api
import { GetNewsText } from "src/Core/services/public/api-newstext";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";

const TextNews = () => {
  const { textId } = useParams();

  const [singleNews, setSingleNews] = useState<any[]>([]);
  console.log("singleNews1", singleNews);

  const { mutate, isLoading } = GetNewsText();

  useEffect(() => {
    const obj = {
      page: 1,
      pageSize: 1,
      id: `${textId}`,
      isActive: true,
    };

    mutate(obj, {
      onSuccess: (val: any) => {
        // console.log("val", val);
        try {
          const newsSingle = val?.data?.result.newsList;
          setSingleNews(newsSingle);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="flex justify-center items-center mt-5">
          <AiOutlineLoading size={20} />
        </p>
      ) : (
        singleNews.map((item) => (
          <>
            <div
            key={item.id}
              className="rounded-lg bg-white shadow-sm 
                    my-12 p-4 mx-[20px] lg:mx-[50px]
                    border border-solid border-[#ecf0f4]"
            >
              <h1 className="text-xl md:text-2xl mb-8 text-center text-[#3A3B3C] ">
                {item.headTitle}
              </h1>
              <h2 className="text-base md:text-xl mb-8 text-center text-[#333] ">
                {item.title}
              </h2>

              <div className="w-[85%] mx-auto">
                <img
                  src={`https://adminapi.agroom.org/${item.imagePath}`}
                  alt=""
                  className="sm:h-[500px] sm:w-[70%] my-0 mx-auto block  object-cover"
                />

                <div
                  className="bg-[#c9c9c930] rounded-lg p-2 mt-3 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: `<p >${item.lead}</p>`,
                  }}
                ></div>

                <div
                  className="text-justify leading-10 mt-8 text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: ` 
                <p> ${item?.content}</p>
               
                `,
                  }}
                ></div>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
};

export default TextNews;
