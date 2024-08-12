import React from "react";
import { cutString } from "../helper/utils/stringUtils";
import { GoDotFill } from "react-icons/go";

const PostDisplay = ({ img, title, content, date, category }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[230px] bg-gray-500 rounded-2xl overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">{title}</h2>
        <p>{cutString(content, 138) + "...."}</p>
        <div className="text-[#B0B0B0] text-sm flex gap-1 items-center">
          <span>{category}</span>
          <GoDotFill />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostDisplay;
