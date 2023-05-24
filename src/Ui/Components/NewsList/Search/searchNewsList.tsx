import { useEffect, useState } from "react";
import { GetNewsText } from "src/Core/services/public/api-newstext";


type searchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ setSearch }: searchProps) => {
  const { data, mutate, isLoading } = GetNewsText();
  const [newsCard, setNewsCard] = useState<any | []>({
    count: 0,
    news: [],
  });
  const obj = {
    page: 1,
    pageSize: 1000,
    isActive: true,
  };
  useEffect(() => {
    mutate(obj, {
      onSuccess: (val: any) => {
        // console.log("val", val);
        try {
          const news = val?.data?.result.newsList;
          // console.log("525", news);
          setNewsCard(news);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <div className="flex justify-start items-center text-muted mb-1 md:mb-0">
      <input
        type="search"
        placeholder="جستجو در عنوان..."
        className="text-sm border p-2 rounded md:w-[16rem] w-[18rem] outline-[#066e48ad]"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* <BiSearch className="text-lg"/> */}
    </div>
  );
};

export default Search;
