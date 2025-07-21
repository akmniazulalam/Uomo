import React from "react";
import Image from "./Image";
import Heading from "./Heading";
import Flex from "./Flex";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const ProductItem = ({
  src,
  alt,
  hoverSrc, 
  hoverAlt,
  productTitle,
  isDiscount = false,
  isReview = false,
  forDiscount = false,
  normalPrice,
  regularPrice,
  discountPrice,
  className,
  secondClassName,
}) => {
  return (
    <div className="relative group w-fit">
      <Image src={src} alt={alt} className={`pb-[18px] h-[400px] w-[300px] object-cover transition-all duration-500 group-hover:opacity-0 ${className}`} />
      <Image src={hoverSrc} alt={hoverAlt} className={`pb-[18px] absolute top-0 left-0 h-[400px] w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 ${secondClassName}`} />
      <Flex className={"justify-between"}>
        <p className="font-jost text-sm text-footerMenu">Dresses</p>
        <CiHeart className="text-footerMenu text-[19px]" />
      </Flex>
      <Heading
        heading={productTitle}
        as={"h5"}
        className={"font-jost text-base text-menu pt-[6px] pb-[4px]"}
      />
      <p className={"font-jost text-base"}>
        {isDiscount ? (
          
          <Flex className={"gap-x-4"}>
            <del className="text-footerMenu">${regularPrice}</del>
            <span className="text-[#D6001C]">${discountPrice}</span>
          </Flex>
        ) : (
          <p className="text-menu">${normalPrice}</p>
        )}
      </p>
      {isReview && (
        <Flex className={"gap-x-0.5 pt-3"}>
        <FaStar className="text-[#ffc78b]"/>
        <FaStar className="text-[#ffc78b]"/>
        <FaStar className="text-[#ffc78b]"/>
        <FaStar className="text-[#ffc78b]"/>
        <FaStar className="text-[#ffc78b]"/>
        <p className={"font-jost text-sm text-footerMenu ml-2"}>8k+ reviews</p>
      </Flex>
      )}
      <div className={`absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${forDiscount ? "bottom-32 group-hover:bottom-36" : "bottom-24 group-hover:bottom-28"}`}>
        <button className="font-jost font-medium uppercase text-menu text-sm cursor-pointer py-2.5 w-[240px] text-center bg-white hover:bg-[#F2F2F2] transition-all duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
