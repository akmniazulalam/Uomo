import ShippingIcon from "../../assets/icons/ShippingIcon";
import HeadphoneIcon from "../../assets/icons/HeadphoneIcon";
import SurfaceIcon from "../../assets/icons/SurfaceIcon";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";

const Icons = () => {
  return (
    <section className="pt-[100px]">
      <Container>
        <div className="px-[104px]">
          <Flex className={"justify-between"}>
            <div className="text-center">
                <ShippingIcon/>
                <Heading heading={"FAST AND FREE DELIVERY"} as={"h3"} className={"font-jost font-medium text-[18px] text-menu pt-6 pb-3.5"} />
                <p className="font-jost text-[15px] text-footerMenu">Free delivery for all orders over $140</p>
            </div>
            <div className="text-center">
                <HeadphoneIcon/>
                <Heading heading={"24/7 CUSTOMER SUPPORT"} as={"h3"} className={"font-jost font-medium text-[18px] text-menu pt-6 pb-3.5"} />
                <p className="font-jost text-[15px] text-footerMenu">Friendly 24/7 customer support</p>
            </div>
            <div className="text-center">
                <SurfaceIcon/>
                <Heading heading={"MONEY BACK GUARANTEE"} as={"h3"} className={"font-jost font-medium text-[18px] text-menu pt-6 pb-3.5"} />
                <p className="font-jost text-[15px] text-footerMenu">We return money within 30 days</p>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Icons;
