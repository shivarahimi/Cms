import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";

// api
import { GetStatement } from "src/Core/services/public/api-statement";
// components
import Statement from "./statement/statement";
const Statements = () => {
  const { mutate, data, isLoading } = GetStatement();
  // console.log("datastatement",data);
  const [statement, setStatement] = useState([]);

  const obj = {
    page: 1,
    pageSize: 100,
    title: "",
    description: "",
    isActive: true,
    loadPublishStatements: true,
  };
  useEffect(() => {
    mutate(obj, {
      onSuccess: (val: any) => {
        // console.log("val", val);
        try {
          const statement = val?.data?.result?.statementList;
          // console.log("slider", slider);
          setStatement(statement);
        } catch (error) {
          console.log(error);
        }
      },
    });
  }, []);

  return (
    <div className="px-[20px] lg:px-[50px] mt-20">
      <div className="flex justify-between items-center border-b-[8px] border-[#066E48] py-2">
        <h3 className="text-2xl text-[#333333]">بیانیه و اطلاعیه</h3>
        <Link
          to="/allnews"
          className="text-[#066E48] hover:text-[#066E48] text-[10px] lg:text-sm font-bold border-none"
        >
          مشاهده همه بیانیه ها
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-12 py-6">
        {statement?.map((st: any) => (
          <Statement key={st.id} {...st} />
        ))}
      </div>
    </div>
  );
};

export default Statements;
