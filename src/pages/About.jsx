import React, { useState } from "react";
import productionImage from "../assets/images/image-4.jpeg";
import sdg1 from "../assets/images/SDG1.svg";
import sdg2 from "../assets/images/SDG2.svg";
import sdg8 from "../assets/images/SDG3.svg";
import sdg12 from "../assets/images/SDG4.svg";
import Timeline from "../components/Timeline";
import { useNavContext } from "../helper/NavContext";
import MemberCard from "../components/MemberCard";
import founder from "../assets/images/Future.jpg";
import cio from "../assets/images/Joseph.jpg";
import algorandLogo from "../assets/images/Algorand-logo.svg";
import founderLogo from "../assets/images/founder.png";
import WhyUs from "../components/WhyUs";
import image1 from "../assets/images/FBH-6.png";
import Headline from "../components/Headline";
import HeadingText from "../components/HeadingText";
import SubHeadingText from "../components/SubHeadingText";

const About = () => {
  const { showNav } = useNavContext();
  const team = [
    {
      img: founder,
      title: "Captain & Founder",
      name: "Future Ahiate",
      socials: [
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/future-ahiate-classicryptofarmer-560757171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "twitter",
          link: "https://x.com/c_cryptofarmer?s=21",
        },
      ],
    },

    {
      img: cio,
      title: "Chief Information Officer",
      name: "Joseph Montgomery",
    },
  ];
  const [sdgContents, setSdgContents] = useState([
    {
      image: sdg1,
      text: " If current trends persist by 2030, 575  million people could still be in extreme poverty.  Increased action and investment aimed at fostering  economic opportunities, enhancing education and  expanding social protection, especially for  marginalized groups, is essential for fulfilling the  core pledge to eradicate poverty and ensure  inclusivity for all.",
      bgColor: "#E6002F",
      showDetails: false,
    },
    {
      image: sdg2,
      text: "Achieve food security & improved  nutrition and promote sustainable agriculture – its  very easy to grow food but not easy to grow  superior food. With over 600 million people  globally projected to face hunger in 2030 and 1 in 3  people worldwide struggling with moderate to  severe food insecurity, high food prices continue to  plague many nations. Malnutrition persists  worldwide, jeopardizing children’s well-being and  future development.",
      bgColor: "#E6A308",
      showDetails: false,
    },
    {
      image: sdg8,
      text: "By leveraging  soilless farming and blockchain technology, we pioneer a  dual solution approach to revolutionize food production  while fostering economic prosperity and employment  opportunities within the agricultural sector. Our  blockchain-powered platform connects and rewards  farmers, aggregators, and consumers, ensuring equity and  nutrition from farm to table. Through enhanced supply  chain transparency, climate impact mitigation, and  reduced food waste, we contribute to sustainable  economic growth, promoting inclusive development and  aligning with the core principles of United Nations  Sustainable Development Goals. Join us in reshaping the  agriculture economy for a brighter and more equitable  future.",
      bgColor: "#A2003D",
      showDetails: false,
    },
    {
      image: sdg12,
      text: " Can  technology make a difference? Technology both new and  digital has massive potential for achieving economic  growth and sustainable development. With only 60 years  of farmable soil remaining, and earth losing 1/3 of its  farmable soil in the last 4 decades, how to feed the earth  without destroying the planet is an issue. This shows we  all have a role to play crucially in reducing our ecological  footprint by transforming the way we grow, distribute and  consume food and resources.",
      bgColor: "#CA8802",
      showDetails: false,
    },
  ]);

  const toggleDetails = (index) => {
    const updatedItems = [...sdgContents];

    updatedItems[index].showDetails = !updatedItems[index].showDetails;

    setSdgContents(updatedItems);
  };

  return (
    <div
      className={
        "relative z-0 pt-[10vh] md:pt-[15vh] font-poppins no-scrollbar"
      }
    >
      {/* <div className=" bg-gradient-to-br from-[#2f1300] from-25%  to-[#69C63A] z-0 w-full absolute h-[-webkit-fill-available] left-0 top-0 "></div> */}
      <Headline>
        <div className="flex">
          <div className="flex flex-col text-center w-full  z-[3] font-sfPro text-white gap-7 lg:px-[11%]">
            <div className="font-sfPro font-medium flex flex-col gap-2">
              <h2 className="text-2xl md:text-4xl lg:text-6xl">About Us</h2>
            </div>
            <p className="font-poppins font-normal md:text-xl md:leading-8">
              Feedbag Agrihub is a dual solution enterprise revolutionizing food
              production through soiless farming and a Blockchain - powered
              platform that connects and rewards active players (farmers,
              aggregators &consumers) in the the food supply chain and sets to
              transform the way we grow, distribute and consume food.
            </p>
          </div>
        </div>
      </Headline>
      <section className="flex flex-col-reverse bg-[#EEFFF1] md:flex-row items-center py-10  md:pt-24 md:pb-16 relative z-10 px-4 md:px-20 gap-10 md:gap-5 lg:gap-10 ">
        <div className="w-full md:w-1/2 lg:w-[55%] text-[#131313]  flex flex-col gap-3 md:gap-7 text-center md:text-start">
          <h2 className=" font-medium text-2xl md:text-4xl lg:text-6xl font-sfPro">
            Revolutionizing Food Production
          </h2>
          <p className=" text-base  lg:text-xl  text-start ">
            Feedbag Agrihub is a dual solution enterprise revolutionizing food
            production through soilless farming and a Blockchain-powered
            platform that connects and rewards active players (farmers,
            aggregators & consumers) in the food supply chain and sets to
            transform the way we grow, distribute and consume food.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-[45%] h-[40vh] md:h-[60vh] flex items-center gap-3 md:gap-7">
          <div className=" w-1/2 h-full rounded-3xl overflow-hidden">
            <img
              src={productionImage}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <div className="  w-1/2 h-4/5  rounded-3xl overflow-hidden">
            <img
              src={image1}
              alt=""
              className="h-full object-cover object-left"
            />
          </div>
        </div>
      </section>
      <section>
        <WhyUs />
      </section>

      <section
        className=" z-10 relative w-full flex flex-col  gap-7 p-4 md:p-20 bg-white"
        id="UN-SDG-and-caf-mission"
      >
        <div className="w-fit ">
          <h2 className="font-medium font-sfPro text-2xl md:text-4xl w-full  md:w-4/5 lg:w-3/5 text-center mx-auto rounded-lg">
            UN Sustainable Development Goals and CAF’s mission.
          </h2>

          <div className="flex flex-col gap-10 pt-10 text-base md:text-lg lg:text-xl">
            <p className=" text-start ">
              The Sustainable Development Goals (SDGs) set forth by the United
              Nations serve as a global directive to eliminate poverty, protect
              the environment, and promote prosperity and peace universally. At
              the core of CAF’s mission lie the fundamental tenets of these
              objectives: Poverty Alleviation and Hunger Eradication.{" "}
            </p>
            <p className=" text-start ">
              CAF, we establish pathways for financial inclusion while enabling
              users to leverage passive income opportunities via the
              decentralized finance (DEFI) features of the Algorand ecosystem.
              CAF stands as a beacon of hope, heralding a new era where economic
              prospects are accessible to all, particularly those traditionally
              marginalized from conventional financial services.{" "}
            </p>
            <p className=" text-start ">
              Our platform reimagines peer-to-peer transactions in emerging
              markets, a groundbreaking initiative poised to reshape entire
              economies. Yet, our ambitions extend beyond this horizon. By
              tackling the intricacies of food distribution and supply-chain
              dynamics, CAF endeavors to redefine the power dynamics within the
              food and agriculture sectors, ensuring fair access, transparency,
              and sustainability for all stakeholders. We invite you to join us
              on this transformative journey toward a more inclusive and
              promising future.
            </p>
          </div>
        </div>
        <div className="gap-10 lg:gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-xs font-poppins">
          {sdgContents.map(({ image, text, bgColor, showDetails }, index) => {
            return (
              <div className="flex flex-col gap-7  items-center  " key={index}>
                <div
                  className={`text-white w-full text pb-7 rounded-2xl`}
                  style={{ backgroundColor: bgColor }}
                >
                  <img src={image} alt="" className="w-full" />
                  <span
                    className=" px-[10%] underline block text-xl font-bold font-sfPro"
                    onClick={() => toggleDetails(index)}
                  >
                    Learn More
                  </span>
                </div>
                {showDetails && (
                  <div>
                    <p className="leading-[18px] text-xs md:text-sm lg:text-base">
                      {text}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="relative bg-[#EEFFF1] w-full  flex flex-col justify-center items-center py-10 gap-7  font-sfPro"
        id="Roadmap-Project-Development"
      >
        <div className="w-fit">
          <h2 className="font-medium text-2xl md:text-4xl text-center mx-auto ">
            {" "}
            Roadmap Project Development
          </h2>
        </div>

        <div className="w-full">
          <Timeline />
        </div>
      </section>

      <section
        className="relative bg-white py-10 md:px-20 flex flex-col justify-center items-center gap-10 px-10 "
        id="Our-Team"
      >
        <div className="font-sfPro flex flex-col items-center text-center ">
          <HeadingText text={"Our Team"} />
          <SubHeadingText text={"Innovators Driving Agricultural Excellence"} />
        </div>

        <div className="flex  gap-10 w-full justify-center flex-wrap">
          {team.map(({ img, title, name, socials }, id) => {
            return (
              <MemberCard
                img={img}
                title={title}
                name={name}
                key={id}
                socials={socials}
              />
            );
          })}
        </div>
      </section>
      <section
        className=" py-10 px-5 md:px-20 flex flex-col items-center md:flex-row md:items-start gap-5"
        id="Partners"
      >
        <div className="flex flex-col w-full items-center md:items-start md:w-1/2 gap-4">
          <div className="font-medium">
            <HeadingText text={" Patners"} />
          </div>

          <div className="flex justify-center items-center gap-3 w-full  md:justify-start">
            <a
              href="https://algorandtechnologies.com/"
              className="text-center lg:w-1/6 md:w-2/5 w-1/5 text-lg font-medium"
            >
              <img src={algorandLogo} alt="" className="" />
            </a>
          </div>
        </div>

        <div className="font-medium flex flex-col items-center md:items-start md:w-1/2 gap-4">
          <HeadingText text={" Media Features"} />

          <div className="flex items-center text-center justify-center md:justify-start gap-7">
            <a
              href="https://x.com/algodevs/status/1764418106213204052?s=46"
              className="w-1/5 md:w-2/5 lg:w-1/6 inline-block"
              target="_blank"
            >
              <img src={algorandLogo} alt="" className=" max-w-full" />
            </a>
            <a
              href="https://thefounder.africa/from-seeds-to-sustainability-the-visionary-journey-of-feedbag-agrihub/"
              className="w-1/3 md:w-2/5 lg:w-1/3 inline-block"
              target="_blank"
            >
              <img src={founderLogo} alt="" className="mx-auto max-w-full" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
