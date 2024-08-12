import React from "react";

const SectionCard = ({ imgUrl, title, subTitle }) => {
  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-4 xl:px-8 flex flex-col items-center gap-7 rounded-3xl shadow-md shadow-[#B0B0B026] w-80 md:min-w-[292px]">
      <img
        src={imgUrl}
        alt=""
        className="bg-gradient-to-br from-[#49C01F] to-[#1FC043] p-2 rounded-[10px]"
      />
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="font-medium text-2xl xl:h-16">{title}</h2>
        <p className="font-poppins ">{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionCard;
