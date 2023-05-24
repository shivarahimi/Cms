import { Input, Label } from "reactstrap";
type SelectProps = {
  title: string;
  option1:string;
  option2:string;
  option3:string;
  option4?:string;
   setPageSize?: any; 
};
const InputSelect = ({ title,option1,option2,option3,option4,setPageSize }: SelectProps) => {
  const handlePaginate = (e:any) => {
    setPageSize(e.target.value)
  }
  return (
    <div className="flex flex-col md:flex md:flex-row text-sm items-center ml-6">
      <Label className="xl:ml-2 ml-0">{title}</Label>
      <Input type="select" className="!w-[100px] !h-[36px] mr-2 shadow-none focus:border-[#ccc]" onChange={handlePaginate}>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
      </Input>
    </div>
  );
};

export default InputSelect;
