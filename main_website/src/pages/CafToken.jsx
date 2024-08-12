import React from "react";
import { useNavigate } from "react-router-dom";
import cryptoBackground from "../assets/images/FBH-7.png";
import image1 from "../assets/images/FBH-2.png";
import image2 from "../assets/images/FBH-8.png";
import image3 from "../assets/images/FBH-9.png";
import Headline from "../components/Headline";
import Button from "../components/Button";
import ImageTile from "../components/ImageTile";
import HeadingText from "../components/HeadingText";

const CafToken = () => {
  return (
    <div className="relative pt-[10vh] md:pt-[15vh]">
      <section>
        <Headline imgUrl={cryptoBackground}>
          <div className="flex">
            <div className="text-white z-[2] md:w-3/5 flex flex-col items-center text-center md:text-start md:items-start gap-4 lg:gap-6 ">
              <div className="font-medium font-sfPro">
                <span className=" bg-gradient-to-br from-[#47C020] to-[#1FC043] text-transparent bg-clip-text lg:text-2xl">
                  Fresh Food. Secure Data.{" "}
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-6xl">
                  The CAF Token
                </h2>
              </div>

              <div className="text-base md:text-lg lg:text-xl lg:leading-[30px] flex flex-col gap-2 md:gap-4 lg:gap-6 font-poppins font-normal">
                <p>
                  The CAF token provides a catalyst propelling the continuous
                  growth of the Interconnected Farmer ecosystem. Feedbag Agrihub
                  is launching CAF token to accelerate achieving our mission,
                  enabling nutritious food accessible all year round.
                </p>

                <p>
                  Through technology and building the future of farming globally
                  by empowering farmers and consumers, thereby encouraging
                  inclusion and sustainability.
                </p>
              </div>

              <Button text={"Read the white paper"} />
            </div>
          </div>
        </Headline>
      </section>
      <section
        className="text-[#131313] relative md:px-20 px-5 w-full flex flex-col-reverse md:flex-row items-center font-medium
       py-20 gap-10 lg:gap-20"
      >
        <ImageTile image1={image1} image2={image2} image3={image3} />
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="font-sfPro font-medium flex flex-col gap-2">
            <HeadingText text={"About The CAF Token"} />
          </div>
          <div className="font-poppins flex items-start md:text-lg lg:text-xl font-normal flex-col gap-7">
            <p>
              By joining our ITO, you are not only securing an asset with
              potential but also becoming part of a vision that extends beyond
              the blockchain.
            </p>
            <p>
              Token holders help drive platform growth, ecosystem development,
              and expedite the delivery of our app to millions of farmers. Our
              token offers significant utility within our ecosystem, and the
              continual expansion of our platform will generate a compounding
              impact on the network for years ahead.
            </p>
            <div className="absolute left-0 bottom-4 md:static md:w-fit w-full flex justify-center">
              <Button text={"Learn more"} />
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-20 py-7  font-sfPro flex flex-col gap-5 lg:gap-10 bg-[#EEFFF1]">
        <div className="md:px-20 px-5 flex flex-col justify-center items-center text-center gap-3 lg:gap-5 font-normal">
          <h2 className="lg:text-[40px] md:text-[32px] text-2xl">Staking</h2>
          <p className="lg:text-[24px] md:text-[20px]">
            Token holders participate in the operation of a blockchain network
            by locking up a certain amount of their tokens in order to support
            various network functions, such as transaction validation,
            governance, and security
          </p>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden font-bold ">
          {Array.from({ length: 3 }, (i, v) => i).map((index, num) => {
            return (
              <div className="animate-slider_animation bg-gradient-to-br from-[#47C020] to-[#1FC043] text-transparent bg-clip-text">
                <span className="lg:text-6xl md:text-3xl text-2xl">
                  COMING SOON !......
                </span>
              </div>
            );
          })}
          {Array.from({ length: 3 }, (i, v) => i).map((index, num) => {
            return (
              <div className="animate-slider_animation bg-gradient-to-br from-[#47C020] to-[#1FC043] text-transparent bg-clip-text">
                <span className="lg:text-6xl  md:text-3xl text-2xl">
                  COMING SOON !......
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CafToken;
