import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import farmImage1 from "../../src/assets/images/farm-1.jpg";
import farmImage2 from "../../src/assets/images/farm-2.jpg";
import farmImage3 from "../../src/assets/images/farm-3.jpg";
import farmImage4 from "../../src/assets/images/farm-4.jpg";
import farmImage5 from "../../src/assets/images/farm-5.jpg";
import { Slide } from "react-slideshow-image";

const OurPlatform = () => {
  const [shift, setShift] = useState(0);
  const [imagePos, setImagePos] = useState(0);
  const data = [
    {
      problem:
        "David Ubong from Nigeria wanted to send 25 liters of palm oil to his sister in the UK. Unsure of how to proceed while ensuring the safety of his goods.",
      solution:
        "He registered on our platform, navigates to CAF Transport & Logistics, identified the nearest shipping location, and made a payment, which was secured in our advanced escrow until delivery. Additionally, he was able to continuously track the journey of his goods until they reached the final destination.",
    },
    {
      problem:
        "Farmer Mohammed Bello a farmer from Northern Nigeria supplies goods to new aggregators in south and south-western Nigeria but issues of trust mostly arises which leads to low supplies.",
      solution:
        "To protect both parties interest involved, farmer Bello registers on our platform showcases his goods specifications on our CAF Marketplace, aggregators & consumers also register on our platform and are able to order from his digital store. All parties involved enjoy the benefits of secured transactions. Furthermore, farmer Bello can track his business financial records, access agro-insurance, explore funding options for his farm expansion through Decentralized Finance (DeFi) and fractional assets trading (tokenization) on our CAF Finance platform. Additionally, both aggregators and consumers can enjoy the benefits of tokenization, which can optimize food prices for easier access.",
    },
    {
      problem:
        "Farmer Azeez has hjs farm situated in Ondo state. He’s plagued with issue of access to better market to sell his farm produces at a fair price. ",
      solution:
        "He registers on CAF digital platform where he showcase his products on our  marketplace, he gets multiplied visibility both locally and globally. Now he can get maximum value for his input.",
    },
    {
      problem:
        "Miss Joy a vegetable farmer based in Jos capital of Plateau, a region plagued by violent weather instability.",
      solution:
        "She registers on our platform, navigates to CAF Education. Now she can gain firsthand insights into weather conditions, regional farming seasons, treating her plants & preventing diseases, plus other benefits to accurately plan her farm operations.",
    },
  ];

  const imageSliderData = [
    farmImage1,
    farmImage2,
    farmImage3,
    farmImage4,
    farmImage5,
  ];

  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchPosition == null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }
    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  const handleNext = () => {
    if (shift < data.length - 1) {
      setShift((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (shift > 0) {
      setShift((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      imagePos === imageSliderData.length - 1
        ? setImagePos(0)
        : setImagePos((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [imagePos]);
  return (
    <div>
      <section className=" text-gray-800 flex flex-col gap-7">
        <div
          className={
            " py-52 h-screen relative bg-no-repeat bg-cover bg-center text-white  px-10 md:px-20 flex flex-col gap-7 justify-center md:justify-start  overflow-hidden"
          }
        >
          <div className="absolute w-full h-full left-0 top-0 bg-black z-[1] opacity-30"></div>
          <div
            className="absolute flex items-start w-full top-0 left-0 z-0 transition-all duration-1000"
            style={{ transform: `translateX(-${imagePos * 100}%)` }}
          >
            {imageSliderData.map((image, index) => {
              return (
                <div
                  key={index}
                  className="min-w-full h-screen overflow-hidden"
                >
                  <img
                    src={image}
                    alt=""
                    className="object-cover min-w-full h-full"
                  />
                </div>
              );
            })}
          </div>

          <div className="z-[1] flex flex-col gap-5">
            <h2 className="font-bold  md:text-7xl text-5xl  bg-gradient-to-br from-[#47C020] to-[#1FC043] text-transparent bg-clip-text font-sfPro">
              Our Platform
            </h2>
            <p className="w-full md:w-3/5 font-medium text-sm md:text-lg text-gray-50 font-poppins">
              {" "}
              CAF isn’t just an app, it’s a transformative movement towards a
              more connected agricultural landscape, integrating tech as an
              enabler for simplifying farmers and consumers tangible
              requirements. Bringing the agricultural economy on-chain with our
              improved food systems built on sustainability, equity and
              nutrition from farm2table.{" "}
            </p>
          </div>

          {/* </div> */}
        </div>

        <div className="py-10 flex flex-col w-full overflow-hidden relative">
          <h2 className="text-center text-3xl font-medium px-10">
            Case studies and solution provided by CAF Token
          </h2>
          {shift > 0 && (
            <div
              className="hidden md:block absolute left-10 z-10 top-[50%] bg-[rgba(84,87,89,0.2)] backdrop-blur-[1px] shadow-md p-2 rounded-full cursor-pointer "
              onClick={handlePrev}
            >
              <FaChevronLeft size={50} color="#3b3c3d" />
            </div>
          )}

          {shift < data.length - 1 && (
            <div
              className="hidden md:block absolute right-10 z-10  top-[50%] bg-[rgba(84,87,89,0.2)] backdrop-blur-[1px] shadow-md p-2 rounded-full cursor-pointer"
              onClick={handleNext}
            >
              <FaChevronRight size={50} />
            </div>
          )}
          <div
            className={
              "flex items-start w-full  relative transition-all duration-500 ease-in-out  mt-14"
            }
            style={{ transform: `translateX(-${shift * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {data.map(({ problem, solution }) => {
              return (
                <div className="min-w-full  px-10 md:px-20">
                  <div className="relative md:h-fit overflow-auto scrollbar-none flex flex-col gap-4 h-[70vh]">
                    <div className="relative w-full md:w-1/2 px-3 md:mb-[20%]">
                      <div className="bg-gradient-to-br from-white to-gray-100 min-h-40 p-5 flex flex-col gap-4 rounded-xl shadow-lg">
                        <h2 className="font-semibold text-2xl">The Problem</h2>
                        <p className="text-sm">{problem}</p>
                      </div>
                      <div
                        className="md:hidden absolute bottom-[-28px] left-[calc(50%-20px)] text-[#1FC043]"
                        style={{ transform: `rotate(90deg)` }}
                      >
                        <FaArrowRightArrowLeft size={40} />
                      </div>
                    </div>
                    <div className="hidden absolute right-[calc(50%-18px)] top-20 w-12 h-12 md:flex items-center justify-center rounded-full bg-gradient-to-br from-[#47C020] to-[#1FC043] z-10 text-white">
                      <FaArrowRightArrowLeft size={30} />
                    </div>
                    <div className="md:w-1/2 px-3 md:absolute right-0 top-20 ">
                      <div className="bg-gradient-to-br from-white to-gray-100 min-h-40 p-5 flex flex-col gap-4 rounded-xl shadow-lg mb-5">
                        <h2 className="font-semibold text-2xl">The Solution</h2>
                        <p className="text-sm">{solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mx-auto">
            {data.map((item, id) => {
              return (
                <>
                  {shift == id ? (
                    <GoDotFill size={30} color="#47C020" />
                  ) : (
                    <GoDot size={30} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPlatform;
