import React from "react";
import Container from "../Container";
import Logo from "/src/assets/logo.png";
import Image from "../Image";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Flex from "../Flex";
import Heading from "../Heading";
import Logos from "/src/assets/payment_logos.png";
import { GrUp } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="pt-24 pb-8 bg-footerBg mt-[100px]">
      <Container>
        <div className="grid grid-cols-[27%_16%_16%_16%_25%]">
          <div className="">
            <Image src={Logo} alt={"logo.png"} />
            <p className="font-jost text-sm leading-6 pt-12 pb-7 w-[86%]">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="font-jost text-sm font-medium pb-2">sale@uomo.com</p>
            <p className="font-jost text-sm font-medium">+1 246-345-0695</p>
            <Flex className={"gap-x-5 mt-10"}>
              <Link to={"https://www.facebook.com"}>
                <GrFacebookOption className="text-menu" />
              </Link>
              <Link to={"https://www.twitter.com"}>
                <FaTwitter className="text-menu" />
              </Link>
              <Link to={"https://www.instagram.com"}>
                <FaInstagram className="text-menu" />
              </Link>
              <Link to={"https://www.instagram.com"}>
                <FaYoutube className="text-menu text-[19px]" />
              </Link>
              <Link to={"https://www.pinterest.com"}>
                <FaPinterest className="text-menu" />
              </Link>
            </Flex>
          </div>
          <div className="">
            <Heading
              heading={"COMPANY"}
              className={"font-jost font-medium text-[18px] text-menu mb-10"}
              as={"h3"}
            />
            <ul>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>About Us</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Careers</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Affiliates</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Blog</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit">
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Heading
              heading={"Shop"}
              className={
                "uppercase font-jost font-medium text-[18px] text-menu mb-10"
              }
              as={"h3"}
            />
            <ul>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>New Arrivals</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Accessories</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Men</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Women</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit">
                <Link to={"/"}>Shop All</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Heading
              heading={"help"}
              className={
                "uppercase font-jost font-medium text-[18px] text-menu mb-10"
              }
              as={"h3"}
            />
            <ul>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Customer Service</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>My Account</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Find a Store</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Legal & Privacy</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit mb-6">
                <Link to={"/"}>Contact</Link>
              </li>
              <li className="font-jost text-sm text-menu relative after:inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-menu after:content-[''] after:transition-all after:duration-300 hover:after:w-7 w-fit">
                <Link to={"/"}>Gift Card</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Heading
              heading={"subscribe"}
              className={
                "uppercase font-jost font-medium text-[18px] text-menu mb-8"
              }
              as={"h3"}
            />
            <p className="font-jost text-sm text-menu w-fit">
              Be the first to get the latest news about trends, promotions, and
              much more
            </p>
            <form action="/" className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="placeholder:text-footerMenu font-jost text-sm py-[20px] px-[21px] bg-white mt-[19px] w-full focus:outline-0"
              />
              <input
                type="submit"
                value={"join"}
                className="absolute top-1/2 right-[21px] font-jost font-medium text-sm text-menu uppercase cursor-pointer"></input>
            </form>
            <Heading
              heading={"Secure payments"}
              className={
                "font-jost font-medium text-[15px] text-menu pt-11 pb-4"
              }
              as={"h4"}
            />
            <Image src={Logos} alt={"payment_logos.png"} />
          </div>
        </div>
        <hr className="text-[#cfcdcd] mt-24 mb-10" />
        <Flex className={"justify-between"}>
          <p className="font-jost text-sm text-menu">&copy; 2025 Uomo</p>
          <Flex>
            <p className="font-jost text-sm text-footerMenu">Language</p>
            <div className="relative mr-5">
              <select
                name="language"
                id="language"
                className="font-jost text-sm text-menu pl-5 pr-8 appearance-none focus:outline-0">
                <option value="english">United Kingdom | English</option>
                <option value="english">United States | English</option>
                <option value="german">German</option>
                <option value="french">French</option>
                <option value="swedish">Swedish</option>
              </select>
              <div className="absolute top-1.5 right-0 pointer-events-none">
                <GrUp className="ml-6"/>
              </div>
            </div>
            <p className="font-jost text-sm text-footerMenu">Currency</p>
            <div className="relative">
              <select
                name="currency"
                id="currency"
                className="appearance-none font-jost text-sm text-menu pl-5 pr-5 focus:outline-0">
                <option value="usd">$ USD</option>
                <option value="gbp">&pound; GBP</option>
                <option value="euro">&euro; EURO</option>
              </select>
              <div className="pointer-events-none absolute top-1 right-0 inset-y-0 flex items-center">
                <GrUp />
              </div>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
