import React from "react";
import farmImage from "../assets/images/FBH-1.png";

const Headline = ({ children, imgUrl = farmImage }) => {
  return (
    <div className="relative h-fit overflow-hidden px-5 py-14 md:py-20 lg:py-[103px] md:px-20">
      {children}
      <div className="bg-[#131313] absolute top-0 left-0 w-full z-[1] h-full opacity-45"></div>
      <div className="w-full absolute h-full left-0 top-0 z-[0]">
        <img
          src={imgUrl}
          alt=""
          className="z-0 relative h-full w-full object-cover  object-top"
        />
      </div>
    </div>
  );
};

export default Headline;
