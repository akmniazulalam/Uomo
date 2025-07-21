import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = ({onClick}) => {
  return (
    <div onClick={onClick}
      className={
        "bg-white rounded-full h-[35px] w-[35px] border-[1px] border-[#e4e4e4] flex items-center justify-center absolute top-1/2 left-1 -translate-y-1/2 z-10 cursor-pointer"
      }>
      <IoIosArrowBack className={"text-footerMenu text-base"} />
    </div>
  );
};

export default PrevArrow;
