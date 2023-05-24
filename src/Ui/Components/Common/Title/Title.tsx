type titleProps = {
  text: string;
};

const Title = ({ text }: titleProps) => {
  return (
    <>
      <h3 className="text-center text-[#333333] text-2xl"> {text}</h3>
    </>
  );
};

export default Title;
