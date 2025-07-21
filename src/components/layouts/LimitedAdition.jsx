import Slider from "react-slick";
import Container from "../Container";
import Heading from "../Heading";
import ProductItem from "../ProductItem";
import Leather from "/src/assets/product-0-1.jpg";
import Cap from "/src/assets/product-1-1.jpg";
import Bag from "/src/assets/product-2-1.jpg";
import Belt from "/src/assets/product-3-1.jpg";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";

const LimitedAdition = () => {
  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section className="mt-24">
      <Container>
        <Heading
          heading={
            <>
              LIMITED <b>EDITION</b>
            </>
          }
          as={"h4"}
          className={"font-jost text-[35px] text-menu text-center mb-10"}
        />
        <div className={"-mx-4 relative limited-slider"}>
          <Slider {...settings}>
            <div className={"px-4"}>
              <ProductItem
                src={Leather}
                className={"group-hover:opacity-100"}
                productTitle={"Hub Accent Mirror"}
                normalPrice={"29"}
              />
            </div>
            <div className={"px-4"}>
              <ProductItem
                src={Cap}
                className={"group-hover:opacity-100"}
                productTitle={"Hosking Blue Area Rug"}
                normalPrice={"62"}
                isReview
                forDiscount
              />
            </div>
            <div className={"px-4"}>
              <ProductItem
                src={Bag}
                className={"group-hover:opacity-100"}
                productTitle={"Hanneman Pouf"}
                normalPrice={"17"}
              />
            </div>
            <div className={"px-4"}>
              <ProductItem
                src={Belt}
                className={"group-hover:opacity-100"}
                productTitle={"Cushion Futon Slipcover"}
                regularPrice={"129"}
                discountPrice={"99"}
                isDiscount
              />
            </div>
            {/* <div className={"px-4"}>
                            <ProductItem src={Leather} className={"group-hover:opacity-100"} productTitle={"Hub Accent Mirror"} normalPrice={"29"}  />
                        </div> */}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default LimitedAdition;
