import { Link } from "react-router-dom";
import Container from "../Container";
import Heading from "../Heading";

const DealTimer = () => {
  return (
    <section className="mt-24">
        <Container>
        <div className="grid grid-cols-2 gap-x-8">
      <div className="pt-[235px] pb-[48px] pl-[50px] bg-[url('/src/assets/banner_1.jpg')] bg-no-repeat bg-center bg-cover">
      <Heading heading={"STARTING AT $19"} as={"h4"} className={"font-jost font-medium text-[18px] text-white"} />
      <Heading heading={"Women’s T-Shirts"} as={"h3"} className={"font-jost font-medium text-[26px] text-white pt-[10px] pb-[16px]"} />
      <Link to={"/"}>
        <button className={"font-jost font-medium text-sm text-white relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white after:w-[50px] after:content-[''] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"}>SHOP NOW</button>
      </Link>
      </div>
      <div className="pt-[235px] pb-[48px] pl-[50px] bg-[url('/src/assets/banner_2.jpg')] bg-no-repeat bg-center bg-cover">
      <Heading heading={"STARTING AT $39"} as={"h4"} className={"font-jost font-medium text-[18px] text-menu"} />
      <Heading heading={"Men’s Sportswear"} as={"h3"} className={"font-jost font-medium text-[26px] text-menu pt-[10px] pb-[16px]"} />
      <Link to={"/"}>
        <button className={"font-jost font-medium text-sm text-menu relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-menu after:w-[50px] after:content-[''] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"}>SHOP NOW</button>
      </Link>
      </div>
    </div>
    </Container>
    </section>
  );
};

export default DealTimer;
