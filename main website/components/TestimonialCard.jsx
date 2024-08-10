import React from "react";
import ratingIcon from "../assets/images/teenyicons_star-outline.svg";
import { GoDotFill } from "react-icons/go";

const TestimonialCard = React.forwardRef(
  ({ content, name, occupation, location, img }, ref) => {
    return (
      <div
        className="flex flex-col bg-white md:p-[40px] p-4 font-poppins w-[calc(100vw-40px)] md:w-[503px] gap-7 rounded-3xl justify-between"
        ref={ref}
      >
        <div>
          <p>{content}</p>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="w-1/6">
            <div className="w-14 h-14 rounded-full bg-gray-600 overflow-hidden">
              <img src={img} alt="" className="w-full " />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium font-sfPro ">{name}</h2>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (v, i) => i).map((x) => {
                  return <img src={ratingIcon} alt="" />;
                })}
              </div>
            </div>

            <div className="flex items-stretch text-xs md:text-sm gap-[6px] text-[#B0B0B0]">
              <p>{occupation}</p>
              <div className="w-[2px] bg-gradient-to-br from-[#49C01F] to-[#1FC043] rounded-md"></div>
              <p>{location} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default TestimonialCard;
