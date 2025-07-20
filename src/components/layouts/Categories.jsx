import React from "react";
import Container from "../Container";
import Image from "../Image";
import gridTwo from "/src/assets/collection_grid_2.jpg";
import gridThree from "/src/assets/collection_grid_3.jpg";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="pt-24">
      <Container>
        <div className="grid grid-cols-2 gap-x-7">
          <div
            className={
              "bg-[url('/src/assets/collection_grid_1.jpg')] bg-no-repeat bg-center bg-cover pt-[435px] pb-10 pl-10"
            }>
            <p className="font-jost text-sm text-menu">HOT LIST</p>
            <Heading
              heading={
                <>
                  <b>WOMEN</b> COLLECTION
                </>
              }
              as={"h3"}
              className={
                "font-jost text-menu text-[26px] font-medium pt-[10px] pb-[14px]"
              }
            />
            <Link to={"/"}>
              <p className="font-jost font-medium text-sm text-menu relative after:absolute inline-block after:-bottom-1 after:left-0 after:bg-menu after:h-0.5 after:w-[50px] after:content-[''] after:transition-all after:duration-300 hover:after:w-full">
                SHOP NOW
              </p>
            </Link>
          </div>
          <div className="grid grid-rows-2 gap-7">
            <div
              className={
                "bg-[url('/src/assets/collection_grid_2.jpg')] bg-no-repeat bg-center bg-cover pt-[130px] pb-10 pl-10"
              }>
              <p className="font-jost text-sm text-menu">HOT LIST</p>
              <Heading
                heading={
                  <>
                    <b>MEN</b> COLLECTION
                  </>
                }
                as={"h3"}
                className={
                  "font-jost text-menu text-[26px] font-medium pt-[10px] pb-[14px]"
                }
              />
              <Link to={"/"}>
                <p className="font-jost font-medium text-sm text-menu relative after:absolute inline-block after:-bottom-1 after:left-0 after:bg-menu after:h-0.5 after:w-[50px] after:content-[''] after:transition-all after:duration-300 hover:after:w-full">
                  SHOP NOW
                </p>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-7">
              <div
                className={
                  "bg-[url('/src/assets/collection_grid_3.jpg')] bg-no-repeat bg-center bg-cover pt-[138px] pb-10 pl-10"
                }>
                <p className="font-jost text-sm text-menu">HOT LIST</p>
                <Heading
                  heading={
                    <>
                      <b>KIDS</b> COLLECTION
                    </>
                  }
                  as={"h3"}
                  className={
                    "font-jost text-menu text-2xl font-medium pt-[10px] pb-[14px]"
                  }
                />
                <Link to={"/"}>
                  <p className="font-jost font-medium text-sm text-menu relative after:absolute inline-block after:-bottom-1 after:left-0 after:bg-menu after:h-0.5 after:w-[50px] after:content-[''] after:transition-all after:duration-300 hover:after:w-full">
                    SHOP NOW
                  </p>
                </Link>
              </div>
              <div className="bg-catagories pt-[104px] pb-10 pl-10">
                <Heading
                  heading={
                    <>
                      <b>E-GIFT</b> CARDS
                    </>
                  }
                  as={"h3"}
                  className={
                    "font-jost text-menu text-[26px] font-medium pb-[13px]"
                  }
                />
                <Link to={"/"}>
                  <p className="font-jost text-sm text-menu leading-6 pb-[10px] w-[90%]">Surprise someone with the gift they really want.</p>
                  <p className="font-jost font-medium text-sm text-menu relative after:absolute inline-block after:-bottom-1 after:left-0 after:bg-menu after:h-0.5 after:w-[50px] after:content-[''] after:transition-all after:duration-300 hover:after:w-full">
                    DISCOVER MORE
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
