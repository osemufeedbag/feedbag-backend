import React from "react";

const HeadingText = ({ text }) => {
  return (
    <div className="flex items-stretch  gap-2">
      <div className="w-1 rounded-md bg-gradient-to-br from-[#49C01F] to-[#1FC043]"></div>
      <h2 className=" md:text-lg lg:text-xl ">{text}</h2>
    </div>
  );
};

export default HeadingText;
