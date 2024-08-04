import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/FBH-2.png";
import image2 from "../assets/images/FBH-3.png";
import image3 from "../assets/images/FBH-4.png";
import image4 from "../assets/images/Ellipse-2007.svg";
import image5 from "../assets/images/Ellipse-2008.svg";
import image6 from "../assets/images/FBH-5.png";
import ButtonedInput from "../components/ButtonedInput";
import Button from "../components/Button";
import HeadingText from "../components/HeadingText";
import SubHeadingText from "../components/SubHeadingText";
import ShoppingCart from "../assets/images/shopping-cart.svg";
import TruckIcon from "../assets/images/truck.svg";
import FinanceIcon from "../assets/images/binance-usd-(busd).svg";
import BookIcon from "../assets/images/book.svg";
import SectionCard from "../components/SectionCard";
import TestimonialCard from "../components/TestimonialCard";
import Headline from "../components/Headline";
import ImageTile from "../components/ImageTile";
import { GoDotFill } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import image7 from "../assets/images/FBH-20.jpg";
import image8 from "../assets/images/FBH-21.jpg";

const sectionData = [
  {
    title: "Marketplace",
    imgUrl: ShoppingCart,
    subTitle:
      "Connects buyers and sellers globally. By leveraging advanced blockchain technology.",
  },
  {
    title: "Transport & Logistics",
    imgUrl: TruckIcon,
    subTitle:
      "Apply as a truck driver/owner, search for drivers, rent a warehouse, rent farm machineries e.t.c",
  },
  {
    title: "Education",
    imgUrl: BookIcon,
    subTitle:
      "Predictive farming using A.I, Get insights on regional weather forecasts, crops & livestock treatment and diagnosis, e.t.c",
  },
  {
    title: "Finance",
    imgUrl: FinanceIcon,
    subTitle:
      "Unlock multiple financial tools- Agro insurance, Defi, Caf token and keep a secure farm record and inventory. ",
  },
];

const Testimonials = [
  {
    name: "Mohammed",
    content:
      "Supplied total 150kg of carrots, cabbage and cucumber vegetables via the marketplace from North to Onitsha. The reliability about the platform’s advanced escrow in securing the transactions for all parties involved kept my mind at ease. Highly recommend.",
    occupation: "Organic Farmer",
    img: image7,
    location: "Zaria, Nigeria.",
  },
  {
    name: "Tobe Obi",
    content:
      "Purchased pack of maize and bell pepper seeds via the Caf marketplace, the delivery and transactions was a seamless experience. Overall a reliable customer support.",
    occupation: "Distributor",
    img: image8,
    location: "Owerri, Nigeria. ",
  },
  {
    name: "Mohammed",
    content:
      "Supplied total 150kg of carrots, cabbage and cucumber vegetables via the marketplace from North to Onitsha. The reliability about the platform’s advanced escrow in securing the transactions for all parties involved kept my mind at ease. Highly recommend.",
    occupation: "Organic Farmer",
    img: image7,
    location: "Zaria, Nigeria.",
  },
];

const Homepage = () => {
  const sliderRef = useRef(null);
  const [translationPercentage, setTranslationPercentage] = useState(0);

  useEffect(() => {
    const sliderElement = sliderRef.current;

    const handleScroll = () => {
      const containerWidth = sliderElement.offsetWidth;
      const scrollWidth = sliderElement.scrollWidth;
      const scrollLeft = sliderElement.scrollLeft;

      // Calculate percentage
      const percentage = (scrollLeft / (scrollWidth - containerWidth)) * 100;
      setTranslationPercentage(percentage);
    };

    sliderElement.addEventListener("scroll", handleScroll);
    return () => {
      sliderElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <div className="  flex flex-col bg-cover bg-center bg-white  text-gray-800 pt-[10vh] md:pt-[15vh] min-w-full ">
      {/* <div className=" bg-gradient-to-br from-[#2f1300] from-15%  to-[#00000088] z-0 w-full absolute h-[-webkit-fill-available]"></div> */}
      <Headline>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center md:items-start text-center w-full md:w-3/5 lg:w-1/2 gap-6 md:gap-12 lg:gap-36 md:text-start z-[3] font-sfPro text-white">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col ">
                <p className="bg-gradient-to-br from-[#49C01F] to-[#1FC043] bg-clip-text text-transparent font-medium">
                  Fresh Food. Secure Data.{" "}
                </p>
                <h2 className="lg:text-6xl md:text-4xl text-2xl font-medium  lg:leading-[71.6px]">
                  Blockchain in Agriculture
                </h2>
              </div>
              <div className="flex flex-col gap-3 md:gap-7 items-center md:items-start">
                <p className="lg:text-xl font-poppins">
                  Connecting African Farmers to the Global Market and
                  Cultivating change beyond soil.
                </p>
                <ButtonedInput 
                placeholder={"Enter your email"}
                handleClick={() => navigate("/contact-us")} />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[12px] lg:text-sm italic font-lato ">
              <blockquote className="md:text-lg lg:text-xl">
                “The food supply chain’s strength stems from participant
                contributions, engagements, earnings and growth”
              </blockquote>
              <span className="flex w-full md:text-end self-center md:self-end items-center justify-center md:justify-end font-poppins not-italic text-xs md:text-base">
                Future Ahiate, Captain – Feedbag Agrihub
              </span>
            </div>
          </div>

          <div className="flex z-[3] text-white gap-3">
            <div className="rounded-2xl w-[54px] h-[54px] border-[2px] border-white flex justify-center items-center">
              <FaChevronLeft className="w-3 h-5" />
            </div>
            <div className="rounded-2xl w-[54px] h-[54px] border-[2px] border-white flex justify-center items-center">
              <FaChevronRight className="w-3 h-5" />
            </div>
          </div>
        </div>
      </Headline>

      <section
        className="text-[#131313] relative  md:px-20 px-5 w-full flex flex-col-reverse md:flex-row items-center font-medium
       py-20 gap-10 lg:gap-20"
      >
        <ImageTile image1={image1} image2={image2} image3={image3} />
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="font-sfPro font-medium flex flex-col gap-2">
            <HeadingText text={"About Us"} />

            <SubHeadingText text={"Who are we, and What do we do?"} />
          </div>
          <div className="font-poppins flex flex-col gap-7 items-start">
            <p className="md:text-lg lg:text-xl font-normal">
              Feedbag Agrihub is a dual solution enterprise revolutionizing food
              production through soiless farming and a Blockchain - powered
              platform that connects and rewards active players (farmers,
              aggregators &consumers) in the the food supply chain and sets to
              transform the way we grow, distribute and consume food.
            </p>
            <Button
              text={"Learn more"}
              handleClick={() => {
                navigate("/about");
              }}
            />
          </div>
        </div>
      </section>

      <section className="px-5 md:px-20 bg-[#F1FCF3] py-16 flex flex-col gap-7">
        <div className="font-sfPro font-medium flex flex-col text-center md:text-start items-center gap-4">
          <HeadingText text={"Features"} />
          <SubHeadingText text={"Contribute. Engage. Earn. and Grow"} />
        </div>

        <div className="flex gap-7 lg:gap-7 md:grid-cols-2 md:gap-12 flex-wrap w-fit justify-center">
          {sectionData.map((section) => {
            return (
              <SectionCard
                title={section.title}
                subTitle={section.subTitle}
                imgUrl={section.imgUrl}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center md:items-start md:flex-row gap-10 px-5 md:px-20 py-14 relative overflow-hidden">
        <div className="md:w-1/2 flex flex-col gap-5 items-center md:items-start md:pr-10">
          <div className="flex flex-col gap-10 items-center md:items-start ">
            <HeadingText text={"How it works"} className="font-sfPro" />
            <div className="flex gap-5">
              <img src={image4} alt="" />
              <img src={image5} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-4 font-poppins items-center md:items-start text-center md:text-start">
            <p>
              Leveraging the Algorand blockchain, CAF enhances food transparency
              and champions global financial inclusion.
            </p>
            <p>
              CAF is built on Algorand, the global leading carbon-neutral
              blockchain.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:absolute right-0 top-0 h-full">
          <img src={image6} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className=" bg-[#F1FCF3] py-16 w-full relative  overflow-hidden flex flex-col gap-7">
        <div className="font-sfPro font-medium flex flex-col gap-2 items-center">
          <HeadingText text={"Testimonials"} />

          <SubHeadingText text={"What our satisfied users say..."} />
        </div>
        <div className=" flex overflow-x-auto no-scrollbar " ref={sliderRef}>
          <div className="flex gap-10 md:px-20 px-5 ">
            {Testimonials.map(
              ({ name, content, occupation, location, img }, id) => {
                return (
                  <TestimonialCard
                    name={name}
                    content={content}
                    occupation={occupation}
                    location={location}
                    key={id}
                    img={img}
                  />
                );
              }
            )}
          </div>
        </div>

        <div className="flex gap-1 mt-3 md:mt-0 mx-auto items-center">
          {Array.from({ length: Testimonials.length }, (v, i) => i).map((x) => {
            return (
              <GoDotFill
                className={`${
                  translationPercentage >=
                    (x / (Testimonials.length - 1)) * 100 &&
                  translationPercentage <
                    ((x + 1) / (Testimonials.length - 1)) * 100
                    ? "text-[#49C01F] "
                    : "text-[#D9D9D9]"
                }`}
                size={
                  translationPercentage >=
                    (x / (Testimonials.length - 1)) * 100 &&
                  translationPercentage <
                    ((x + 1) / (Testimonials.length - 1)) * 100
                    ? 24
                    : 16
                }
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
