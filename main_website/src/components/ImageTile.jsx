import React from "react";

const ImageTile = ({ image1, image2, image3 }) => {
  return (
    <div className="md:w-1/2 flex items-stretch gap-5 h-50vh md:h-[70vh] lg:h-[85vh]">
      <div className="w-1/2 flex flex-col gap-5 ">
        <img src={image1} alt="" className="h-2/3 object-cover rounded-3xl" />
        <img src={image2} alt="" className="h-1/3 object-cover rounded-3xl" />
      </div>
      <div className="w-1/2 overflow-hidden">
        <img src={image3} alt="" className="h-full object-cover rounded-3xl" />
      </div>
    </div>
  );
};

export default ImageTile;
