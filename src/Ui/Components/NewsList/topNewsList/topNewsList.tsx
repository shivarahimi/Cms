import InputSelect from "src/Ui/Components/Common/InputSelect/InputSelect";
import Search from "../Search/searchNewsList";
type paginateProps = {
  setSearch:React.Dispatch<React.SetStateAction<string>>;
   setPageSize?: React.Dispatch<React.SetStateAction<number>>; 
}
const TopNewsList = ({setPageSize,setSearch}:paginateProps) => {
  return (
    <div className="container flex flex-col-reverse !w-[19.5rem] md:flex md:flex-row md:!w-[90rem] items-center justify-between rounded-md shadow-sm p-4 border border-solid border-[#ecf0f4] mt-10">
      <div className="flex items-center">
        <InputSelect setPageSize={setPageSize}
          option1="10"
          option2="20"
          option3="30"
          option4="50"
          title="تعداد نمایش"
        />
        <InputSelect
          option1="تصویری"
          option2="متنی"
          option3="ویدیوئی"
          title="نوع خبر"
        />
      </div>
      <Search setSearch={setSearch} />
    </div>
  );
};

export default TopNewsList;
