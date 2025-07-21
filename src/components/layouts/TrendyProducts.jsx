import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import productOne from "/src/assets/product_1.jpg";
import productOneHover from "/src/assets/product_1-1.jpg";
import productTwo from "/src/assets/product_2.jpg";
import productTwoHover from "/src/assets/product_2-1.jpg";
import productThree from "/src/assets/product_3.jpg";
import productThreeHover from "/src/assets/product_3-1.jpg";
import productFour from "/src/assets/product_4.jpg";
import productFourHover from "/src/assets/product_4-1.jpg";
import productFive from "/src/assets/product_5.jpg";
import productFiveHover from "/src/assets/product_5-1.jpg";
import productSix from "/src/assets/product_6.jpg";
import productSixHover from "/src/assets/product_6-1.jpg";
import productSeven from "/src/assets/product_7.jpg";
import productSevenHover from "/src/assets/product_7-1.jpg";
import productEight from "/src/assets/product_8.jpg";
import productEightHover from "/src/assets/product_8-1.jpg";
import ProductItem from "../ProductItem";
import mixitup from "mixitup";

const TrendyProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const mixItUpRef = useRef(null);

  useEffect(() => {
    if (mixItUpRef.current) {
      mixitup(mixItUpRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 300,
        },
      });
    }
  }, []);

  return (
    <section className="pt-24">
      <Container>
        <Heading
          heading={
            <>
              OUR TRENDY <b>PRODUCTS</b>
            </>
          }
          as={"h3"}
          className={"text-center font-jost text-[35px]"}
        />
        <Flex className={"gap-x-10 justify-center py-10"}>
          <button
            onClick={() => {
              setActiveFilter("all");
            }}
            className={`filter-btn font-jost font-medium text-base uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300 focus:outline-none focus:ring-0 ${
              activeFilter === "all"
                ? "after:w-full text-menu"
                : "after:w-0 text-trendProducts"
            } `}
            data-filter={"all"}>
            All
          </button>
          <button
            onClick={() => {
              setActiveFilter("new");
            }}
            className={`filter-btn font-jost font-medium text-base uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300 focus:outline-none focus:ring-0 ${
              activeFilter === "new"
                ? "after:w-full text-menu"
                : "after:w-0 text-trendProducts"
            }`}
            data-filter={".new"}>
            NEWARRIVALS
          </button>
          <button
            onClick={() => setActiveFilter("best")}
            className={`filter-btn font-jost font-medium text-base uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300 focus:outline-none focus:ring-0 ${
              activeFilter === "best"
                ? "after:w-full text-menu"
                : "after:w-0 text-trendProducts"
            }`}
            data-filter={".best"}>
            BEST SELLER
          </button>
          <button
            onClick={() => setActiveFilter("top")}
            className={`filter-btn font-jost font-medium text-base uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-menu hover:after:w-full hover:text-menu after:transition-all after:duration-300 focus:outline-none focus:ring-0 ${
              activeFilter === "top"
                ? "after:w-full text-menu"
                : "after:w-0 text-trendProducts"
            }`}
            data-filter={".top"}>
            TOP RATING
          </button>
        </Flex>
        <div
          ref={mixItUpRef}
          className="grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-10">
          <div className="mix best">
            <ProductItem
              src={productOne}
              alt={"product_1.jpg"}
              hoverSrc={productOneHover}
              normalPrice={"29"}
              productTitle={"Cropped Faux Leather Jacket"}
              isReview
              forDiscount
            />
          </div>
          <div className="mix new best">
            <ProductItem
              src={productTwo}
              alt={"product_2.jpg"}
              hoverSrc={productTwoHover}
              normalPrice={"62"}
              productTitle={"Calvin Shorts"}
            />
          </div>
          <div className="mix top best">
            <ProductItem
              src={productThree}
              alt={"product_3.jpg"}
              hoverSrc={productThreeHover}
              normalPrice={"17"}
              productTitle={"Kirby T-Shirt"}
            />
          </div>
          <div className="mix new top">
            <ProductItem
              src={productFour}
              alt={"product_4.jpg"}
              hoverSrc={productFourHover}
              isDiscount
              regularPrice={"129"}
              discountPrice={"99"}
              productTitle={"Cableknit Shawl"}
            />
          </div>
          <div className="mix best new">
            <ProductItem
              src={productFive}
              alt={"product_5.jpg"}
              hoverSrc={productFiveHover}
              normalPrice={"29"}
              productTitle={"Colorful Jacket"}
            />
          </div>
          <div className="mix top best new">
            <ProductItem
              src={productSix}
              alt={"product_6.jpg"}
              hoverSrc={productSixHover}
              normalPrice={"62"}
              productTitle={"Shirt In Botanical Cheetah Print"}
            />
          </div>
          <div className="mix new top">
            <ProductItem
              src={productSeven}
              alt={"product_7.jpg"}
              hoverSrc={productSevenHover}
              normalPrice={"17"}
              productTitle={"Cotton Jersey T-Shirt"}
            />
          </div>
          <div className="mix new top">
            <ProductItem
              src={productEight}
              alt={"product_8.jpg"}
              hoverSrc={productEightHover}
              isDiscount
              regularPrice={"129"}
              discountPrice={"99"}
              productTitle={"Zessi Dresses"}
            />
          </div>
        </div>
        <div className="text-center">
          <p className="font-jost font-medium text-sm text-center text-menu uppercase relative after:absolute cursor-pointer inline-block after:content-[''] after:-bottom-1 after:left-0 after:h-0.5 after:w-24 after:bg-menu hover:after:w-full after:transition-all after:duration-300 pt-11">
            see all product
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TrendyProducts;
