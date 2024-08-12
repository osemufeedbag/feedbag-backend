import React from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const MemberCard = ({ name, title, img, socials }) => {
  return (
    <div className=" w-[350px] ">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full h-[331px] rounded-xl"
      />
      <div className={" w-full py-2 flex items-center justify-between"}>
        <div className="z-10 flex flex-col gap-1 font-sfPro text-[#000]">
          <span className="text-sm ">{title}</span>
          <h2 className="text-2xl font-medium">{name}</h2>
        </div>

        {socials && (
          <div className="flex gap-2 items-center">
            {socials.map((item, index) => {
              return (
                <>
                  {item["name"] == "linkedIn" ? (
                    <a
                      href={item["link"]}
                      className="text-white bg-[#B0B0B0] p-1 rounded-lg"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  ) : item["name"] == "twitter" ? (
                    <a
                      href={item["link"]}
                      className="text-white bg-[#B0B0B0] p-1 rounded-lg"
                    >
                      <FaXTwitter size={20} />
                    </a>
                  ) : (
                    <a
                      href={item["link"]}
                      className="text-white bg-[#B0B0B0] p-1 rounded-lg"
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
