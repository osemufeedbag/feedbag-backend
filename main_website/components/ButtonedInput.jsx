import React from "react";
import Button from "./Button";

const ButtonedInput = ({ placeholder, handleClick }) => {
  return (
    <div className="flex justify-between font-poppins w-fit md:w-full text-[#000] gap-2 md:p-2 md:bg-white lg:rounded-[20px] md:rounded-2xl rounded-lg items-center">
      <div className="h-full w-3/5 hidden md:block">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-full outline-none placeholder:text-[#131313] md:text-base lg:text-xl pl-4"
        />
      </div>

      <Button text={"Log In"} handleClick={handleClick} />
    </div>
  );
};

export default ButtonedInput;
