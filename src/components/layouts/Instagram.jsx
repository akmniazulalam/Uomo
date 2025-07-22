import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import InstaOne from "/src/assets/insta1.jpg";
import InstaTwo from "/src/assets/insta2.jpg";
import InstaThree from "/src/assets/insta3.jpg";
import InstaFour from "/src/assets/insta4.jpg";
import InstaFive from "/src/assets/insta5.jpg";
import InstaSix from "/src/assets/insta6.jpg";
import InstaSeven from "/src/assets/insta7.jpg";
import InstaEight from "/src/assets/insta8.jpg";
import InstaNine from "/src/assets/insta9.jpg";
import InstaTen from "/src/assets/insta10.jpg";
import InstaEleven from "/src/assets/insta11.jpg";
import InstaTwelve from "/src/assets/insta12.jpg";
import { Link } from "react-router-dom";

const Instagram = () => {
  return (
    <section className={"mt-[100px]"}>
      <Container>
        <Heading
          heading={"@UOMO"}
          as={"h3"}
          className={"font-jost text-[35px] text-menu text-center pb-10"}
        />
        <div className="grid grid-cols-6 grid-rows-2 gap-1.5">
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaOne} alt={"insta1.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaTwo} alt={"insta2.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaThree} alt={"insta3.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaFour} alt={"insta4.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaFive} alt={"insta5.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaSix} alt={"insta6.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaSeven} alt={"insta7.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaEight} alt={"insta8.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaNine} alt={"insta9.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaTen} alt={"insta10.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaEleven} alt={"insta11.jpg"} />
            </div>
          </Link>
          <Link to={"https://instagram.com"}>
            <div className="image-container">
              <Image src={InstaTwelve} alt={"insta12.jpg"} />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Instagram;
