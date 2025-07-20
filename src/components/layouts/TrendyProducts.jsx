import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import productOne from "/src/assets/product_1.jpg"
import productOneHover from "/src/assets/product_1-1.jpg"
import productTwo from "/src/assets/product_2.jpg"
import productTwoHover from "/src/assets/product_2-1.jpg"
import productThree from "/src/assets/product_3.jpg"
import productThreeHover from "/src/assets/product_3-1.jpg"
import productFour from "/src/assets/product_4.jpg"
import productFourHover from "/src/assets/product_4-1.jpg"
import productFive from "/src/assets/product_5.jpg"
import productFiveHover from "/src/assets/product_5-1.jpg"
import productSix from "/src/assets/product_6.jpg"
import productSixHover from "/src/assets/product_6-1.jpg"
import productSeven from "/src/assets/product_7.jpg"
import productSevenHover from "/src/assets/product_7-1.jpg"
import productEight from "/src/assets/product_8.jpg"
import productEightHover from "/src/assets/product_8-1.jpg"
import ProductItem from "../ProductItem";


const TrendyProducts = () => {
  return (
    <section className="pt-24">
      <Container>
        <Heading heading={<>OUR TRENDY <b>PRODUCTS</b></>} as={"h3"} className={"text-center font-jost text-[35px]"} />
        <Flex className={"gap-x-10 justify-center py-10"}>
            <p className="font-jost font-medium text-base text-trendProducts uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300">All</p>
            <p className="font-jost font-medium text-base text-trendProducts uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300">NEWARRIVALS</p>
            <p className="font-jost font-medium text-base text-trendProducts uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300">BEST SELLER</p>
            <p className="font-jost font-medium text-base text-trendProducts uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300">TOP RATING</p>
        </Flex>
        <div className="grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-10">
            <ProductItem src={productOne} alt={"product_1.jpg"} hoverSrc={productOneHover} normalPrice={"29"} productTitle={"Cropped Faux Leather Jacket"}/>
            <ProductItem src={productTwo} alt={"product_2.jpg"} hoverSrc={productTwoHover} normalPrice={"62"} productTitle={"Calvin Shorts"}/>
            <ProductItem src={productThree} alt={"product_3.jpg"} hoverSrc={productThreeHover} normalPrice={"17"} productTitle={"Kirby T-Shirt"}/>
            <ProductItem src={productFour} alt={"product_4.jpg"} hoverSrc={productFourHover} isDiscount regularPrice={"129"} discountPrice={"99"} productTitle={"Cableknit Shawl"}/>
            <ProductItem src={productFive} alt={"product_5.jpg"} hoverSrc={productFiveHover} normalPrice={"29"} productTitle={"Colorful Jacket"}/>
            <ProductItem src={productSix} alt={"product_6.jpg"} hoverSrc={productSixHover} normalPrice={"62"} productTitle={"Shirt In Botanical Cheetah Print"}/>
            <ProductItem src={productSeven} alt={"product_7.jpg"} hoverSrc={productSevenHover} normalPrice={"17"} productTitle={"Cotton Jersey T-Shirt"}/>
            <ProductItem src={productEight} alt={"product_8.jpg"} hoverSrc={productEightHover} isDiscount regularPrice={"129"} discountPrice={"99"} productTitle={"Zessi Dresses"}/>
        </div>
        <div className="text-center">
            <p className="font-jost font-medium text-sm text-center text-menu uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:-bottom-1 after:left-0 after:h-0.5 after:w-24 after:bg-menu hover:after:w-full after:transition-all after:duration-300 pt-11">see all product</p>
        </div>
      </Container>
    </section>
  );
};

export default TrendyProducts;
