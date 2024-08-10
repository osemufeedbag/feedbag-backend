import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="py-3 lg:px-6 lg:py-4 px-2 bg-gradient-to-br from-[#49C01F] to-[#1FC043] text-white lg:rounded-2xl rounded-xl  min-w-[120px] md:min-w-[170px] lg:min-w-[200px] font-poppins font-medium text-sm md:text-base lg:text-lg"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
