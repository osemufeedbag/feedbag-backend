import React from "react";
import img from "../assets/images/FBH-13.jpg";

const CafCommunityCard = () => {
  return (
    <div className="flex bg-gradient-to-br from-[#49C01F] to-[#1FC043] px-5 md:px-20 py-10 md:gap-10 lg:gap-20 gap-5 rounded-2xl lg:rounded-3xl items-stretch flex-col md:flex-row">
      <div className="text-white md:w-1/2 flex flex-col gap-3 md:gap-5 items-start md:py-10 w-full">
        <h2 className="text-[20px] md:text-[26px] lg:text-[32px] font-semibold">
          CAF Community
        </h2>
        <p className="lg:text-xl text-sm md:text-base ">
          We're more than just a platform for fresh, local produce. We're
          passionate about fostering connections between the people who grow our
          food, the retailers who bring it to you, and the families who enjoy it
          on their tables.{" "}
        </p>
        <button
          className="bg-transparent border-[1.5px] rounded-xl  lg:rounded-2xl p-2 lg:py-4 lg:px-6 border-white text-xs md:text-base
         lg:text-[18px]"
        >
          Join the community
        </button>
      </div>
      <div className="md:w-1/2 rounded-2xl overflow-hidden">
        <img src={img} alt="" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default CafCommunityCard;
