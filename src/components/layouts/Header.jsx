import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import NavIcon from "../../assets/icons/NavIcon";

const Header = () => {
  return (
    <section className={"py-7"}>
      <Container>
        <Flex>
          <Image src={Logo} alt={"logo.png"} />
          <ul className="flex items-center gap-x-11 pl-14">
            <Link to={"/"}>
              <li className="font-jost font-medium text-sm text-menu uppercase relative after:w-0 inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:content-[''] after:bg-menu after:transition-all after:duration-300 hover:after:w-[30px]">Home</li>
            </Link>
            <Link to={"/"}>
              <li className="font-jost font-medium text-sm text-menu uppercase relative after:w-0 inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:content-[''] after:bg-menu after:transition-all after:duration-300 hover:after:w-[30px]">Shop</li>
            </Link>
            <Link to={"/"}>
              <li className="font-jost font-medium text-sm text-menu uppercase relative after:w-0 inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:content-[''] after:bg-menu after:transition-all after:duration-300 hover:after:w-[30px]">Collection</li>
            </Link>
            <Link to={"/"}>
              <li className="font-jost font-medium text-sm text-menu uppercase relative after:w-0 inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:content-[''] after:bg-menu after:transition-all after:duration-300 hover:after:w-[30px]">Journal</li>
            </Link>
            <Link to={"/"}>
              <li className="font-jost font-medium text-sm text-menu uppercase relative after:w-0 inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:content-[''] after:bg-menu after:transition-all after:duration-300 hover:after:w-[30px]">Lookbook</li>
            </Link>
            <Link to={"/"}>
              <li className="font-jost font-medium text-sm text-menu uppercase relative after:w-0 inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:content-[''] after:bg-menu after:transition-all after:duration-300 hover:after:w-[30px]">Pages</li>
            </Link>
          </ul>
          <div className="ml-auto">
            <Flex className={"gap-x-8"}>
                <FiSearch className="text-[22px] cursor-pointer text-menu"/>
                <FaRegUser className="text-[19px] cursor-pointer text-menu"/>
                <FaRegHeart className="text-[21px] cursor-pointer text-menu"/>
                <AiOutlineShopping className="text-[26px] cursor-pointer text-menu"/>
                <NavIcon/>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
