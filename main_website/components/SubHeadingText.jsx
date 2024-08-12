import React from "react";

const SubHeadingText = ({ text }) => {
  return (
    <div>
      <h3 className="text-[24px] md:text-[32px] leading-7 md:leading-9">
        {text}
      </h3>
    </div>
  );
};

export default SubHeadingText;
