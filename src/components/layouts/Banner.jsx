import React, { useState, useEffect } from "react";
import Container from "../Container";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import slideOne from "/src/assets/slideshow-character1.png";
import slideTwo from "/src/assets/slideshow-character2.png";
import Slider from "react-slick";


const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [textAnimate, setTextAnimate] = useState(false);
  const [imageAnimate, setImageAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on initial render
    setTextAnimate(true);
    setTimeout(() => {
      setImageAnimate(true)
    }, 300)
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => {
      setTextAnimate(false);
      setImageAnimate(false)
      setActiveSlide(newIndex);
    },
    afterChange: () => {
      setTextAnimate(true);
      setTimeout(() => setImageAnimate(true), 300);
    },
    customPaging: (i) => (
      <div className="w-[35px] h-[35px] flex items-center justify-center relative"></div>
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10">
        <ul className="flex gap-4 justify-center items-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-fit border-2 border-bgColor p-2 m-auto relative">
      <div className="w-[93vw] bg-[url('/src/assets/bg.png')] bg-no-repeat bg-center bg-cover">
        <Container>
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="pt-[273px] pb-[283px] relative">
              <div
                className={`transition-all duration-700 ease-in-out transform ${
                  activeSlide === 0 && textAnimate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Flex className={"gap-x-2"}>
                  <div className="w-[30px] h-[2.5px] bg-headingTitle"></div>
                  <Heading
                    className={
                      "text-headingTitle font-jost font-medium text-sm"
                    }
                    as={"h3"}
                    heading={"NEW TREND"}
                  />
                </Flex>
                <Heading
                  className={"text-[70px] text-menu font-jost leading-20 pt-4"}
                  as={"h1"}
                  heading={
                    <>
                      SUMMER SALE STYLISH <br />
                      <span className="font-bold">WOMENS</span>{" "}
                    </>
                  }
                />
                <Link to={"/"}>
                  <p className="font-jost font-medium text-sm text-menu pt-6 relative inline-block after:absolute after:content-[''] after:h-0.5 after:w-[86px] after:bg-menu after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full ">
                    DISCOVER MORE
                  </p>
                </Link>
              </div>
              <Image
                src={slideOne}
                alt={"slideshow-character1.png"}
                className={`absolute bottom-0 left-[54%] transition-all duration-700 ease-in-out ${
                  activeSlide === 0 && imageAnimate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              />
              <div className="relative">
                <p className={`uppercase font-bold text-[120px] text-transparent rotate-90 summer absolute bottom-[0%] left-[72%] w-[550px] transition-all duration-700 ease-in-out ${
                  activeSlide === 0 && imageAnimate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}>
                  {
                    <>
                      <span className="font-jost">summ</span>
                    </>
                  }
                  er
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="pt-[273px] pb-[283px] relative">
              <div
                className={`transition-all duration-700 ease-in-out transform ${
                  activeSlide === 1 && textAnimate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Flex className={"gap-x-2"}>
                  <div className="w-[30px] h-[2.5px] bg-headingTitle"></div>
                  <Heading
                    className={
                      "text-headingTitle font-jost font-medium text-sm"
                    }
                    as={"h3"}
                    heading={"SUMMER 2024"}
                  />
                </Flex>
                <Heading
                  className={
                    "text-[70px] font-bold uppercase text-menu font-jost leading-20 pt-4"
                  }
                  as={"h1"}
                  heading={"Hello New Season"}
                />
                <Heading
                  className={
                    "text-base font-medium text-menu font-jost pt-4 pb-2"
                  }
                  as={"h6"}
                  heading={"Limited Time Offer - Up to 60% off & Free Shipping"}
                />
                <Link to={"/"}>
                  <p className="font-jost font-medium text-sm text-menu pt-6 relative inline-block after:absolute after:content-[''] after:h-0.5 after:w-[86px] after:bg-menu after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full ">
                    DISCOVER MORE
                  </p>
                </Link>
              </div>
              <Image
                src={slideTwo}
                alt={"slideshow-character2.png"}
                className={`absolute -bottom-8 left-[60%] transition-all duration-700 ease-in-out ${
                  activeSlide === 1 && imageAnimate
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              />
            </div>
          </Slider>
        </Container>
      </div>

      {/* Social Icons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[2%]">
        <Link to={"https://www.facebook.com"}>
          <GrFacebookOption className="text-[#767676] mb-8" />
        </Link>
        <Link to={"https://www.twitter.com"}>
          <FaTwitter className="text-[#767676] mb-8" />
        </Link>
        <Link to={"https://www.instagram.com"}>
          <FaInstagram className="text-[#767676] mb-8" />
        </Link>
        <Link to={"https://www.pinterest.com"}>
          <FaPinterest className="text-[#767676] mb-24" />
        </Link>
        <p className="font-jost font-medium text-sm text-[#767676] uppercase -rotate-90 origin-left pt-[15px]">
          follow us
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[5%] -right-[4.75%] -rotate-90 cursor-pointer">
        <Flex className={"gap-x-3"}>
          <div className="h-[2.5px] w-[35px] bg-menu"></div>
          <p className="font-jost font-medium text-sm text-menu">SCROLL</p>
        </Flex>
      </div>
    </div>
  );
};

export default Banner;
