import { useState, useEffect } from "react";
// api
import { GetNewsText } from "src/Core/services/public/api-newstext";
// components
import NewsCard from "src/Ui/Components/NewsList/NewsCard/NewsCard";
import TopNewsList from "src/Ui/Components/NewsList/topNewsList/topNewsList";
import Pagination from "../Common/Pagination/Pagination";
// react-icons
import { AiOutlineLoading } from "react-icons/ai";

const NewsList = () => {
  const [currentPage, setcurrentPage] = useState(1);
  // console.log("currentPage",currentPage)
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  // console.log("page",page)
  const [search, setSearch] = useState("");

  const getMutation = GetNewsText();
  // console.log("mutatinon", getMutation);

  const [newsCard, setNewsCard] = useState<any | []>({
    totalCount: 0,
    news: [],
  });

  useEffect(() => {
    getMutation.mutate({
      page: page,
      pageSize: pageSize,
      isActive: true,
    });
  }, [pageSize, page]);

  useEffect(() => {
    if (getMutation.isSuccess) {
      const news = getMutation.data.data.result.newsList;
      const totalCount = getMutation.data.data.result.totalCount;
      setNewsCard({
        totalCount: totalCount,
        news: news,
      });
      // console.log("result1", news);
      // console.log("result2", totalCount);
    }
  }, [getMutation.isSuccess]);

  // search
  const filteredSearch = newsCard.news.filter((data: any) =>
    data.title.includes(search)
  );

  return (
    <>
      <TopNewsList setSearch={setSearch} setPageSize={setPageSize} />
      <div className="container min-h-[600px] grid xl:grid-cols-4 xl:justify-evenly lg:flex flex-wrap lg:items-center md:grid-cols-2 md:items-center md:flex justify-evenly grid-col items-center mt-10">
        {getMutation.isLoading ? (
          <AiOutlineLoading />
        ) : (
          filteredSearch &&
          filteredSearch.map((newsCard: any) => (
            <NewsCard key={newsCard.id} {...newsCard} />
          ))
        )}
      </div>

      <Pagination
        totalCount={newsCard.totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
        setPage={setPage}
      />
    </>
  );
};

export default NewsList;
