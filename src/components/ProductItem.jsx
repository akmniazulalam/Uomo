import React from "react";
import Image from "./Image";
import Heading from "./Heading";
import Flex from "./Flex";
import { CiHeart } from "react-icons/ci";

const ProductItem = ({
  src,
  alt,
  hoverSrc, 
  hoverAlt,
  productTitle,
  isDiscount = false,
  normalPrice,
  regularPrice,
  discountPrice,
  className,
}) => {
  return (
    <div className="relative group w-fit">
      <Image src={src} alt={alt} className={`pb-[18px] h-[400px] w-[300px] object-cover transition-all duration-500 group-hover:opacity-0 ${className}`} />
      <Image src={hoverSrc} alt={hoverAlt} className={`pb-[18px] absolute top-0 left-0 h-[400px] w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 ${className}`} />
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
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-28 transition-all duration-300">
        <button className="font-jost font-medium uppercase text-menu text-sm cursor-pointer py-2.5 w-[240px] text-center bg-white hover:bg-[#F2F2F2] transition-all duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
