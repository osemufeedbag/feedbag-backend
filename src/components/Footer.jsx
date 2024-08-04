import React from "react";
import Logo from "../assets/images/logo.png";
import instagramLogo from "../assets/images/instagram.svg";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import playstoreLogo from "../assets/images/icons8-playstore.svg";
import appleLogo from "../assets/images/icons8-apple-logo.svg";
import { CgFacebook } from "react-icons/cg";

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    {
      link: "https://www.instagram.com/feedbagagrihub/?igsh=MXRpaDd6ZDdkN2xyOA%3D%3D&utm_source=qr",
      alt: "instagram",
      icon: <img src={instagramLogo} className="w-5" />,
    },
    {
      link: "https://www.facebook.com/profile.php?id=61550618076207&mibextid=dGKdO6",
      alt: "facebook",
      icon: <CgFacebook size={20} />,
    },
    {
      link: "https://www.linkedin.com/showcase/feedbag-agrihub/",
      alt: "linkedIn",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      link: "https://twitter.com/feedbagagrihub?s=21",
      alt: "twitter",
      icon: <FaTwitter size={20} />,
    },
  ];

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="bg-[#131313] w-full text-white pb-10 font-inter md:font-poppins px-5 md:px-20 pt-10 relative bottom-0 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 ">
        <div className="flex flex-col gap-4 items-start md:w-4/5 lg:w-1/4 xl:w-2/5">
          <a href="/">
            <img src={Logo} alt="" className="w-24" />
          </a>
          <p className="font-light hidden md:block">
            Connecting African Farmers to the Global Market and Cultivating
            change beyond soil
          </p>
          <ul className="flex items-center gap-3">
            {socials.map(({ link, alt, icon }, id) => {
              return (
                <li key={id}>
                  <a href={link}>
                    <div className="bg-gradient-to-br from-[#49C01F] to-[#1FC043] rounded-lg p-2">
                      {icon}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex  flex-col md:hidden gap-7 w-full font-light font-inter">
          <h2 className=" font-semibold ">Privacy and Terms</h2>
          <ul className="flex flex-col">
            <li className="cursor-pointer">
              <Link to={"/privacy"}>Terms of Service</Link>{" "}
            </li>
            <li className="cursor-pointer">
              <Link to={"/privacy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 ">
          <h2 className=" font-medium">Contact/support</h2>
          <div className=" flex flex-col gap-3 font-normal underline">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center justify-center">
                <IoMail color="#C3E022" size={20} />
              </div>

              <a
                href="mailto:info@feedbagagrihub.com"
                className="hover:text-[#C3E022]"
              >
                info@feedbagagrihub.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className=" flex items-center justify-center">
                <IoCall color="#C3E022" size={20} />
              </div>
              <a href="tel:+2348064191000" className="hover:text-[#C3E022]">
                +2348064191000
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className=" flex items-center justify-center">
                <IoLocationSharp color="#C3E022" size={20} />
              </div>

              <p>Farm estate, Aiyetoro, Ipokia LGA, Ogun state.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <h2 className="text-base font-medium">Download On</h2>
          <div className="text-xs inline-flex flex-col gap-3 text-gray-600 items-stretch font-inter">
            <a href="" className=" rounded-lg flex gap-2 items-center">
              <img src={playstoreLogo} alt="" className="w-8" />
              <div className="text-sm text-white leading-4 font-medium">
                <p className="text-[9px] font-light">Get it on</p>
                <p>Google Play</p>
              </div>
            </a>
            <a href="" className=" rounded-lg flex gap-2 items-center">
              <img src={appleLogo} alt="" className="w-8" />
              <div className="text-sm text-white leading-4 font-medium">
                <p className="text-[9px] font-light">Download on the</p>
                <p>App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="gap-7 w-full font-light hidden md:flex">
          <ul className="text-xs flex justify-between underline  w-full">
            <li className="cursor-pointer">
              <Link to={"/privacy"}>Terms of Service</Link>{" "}
            </li>
            <li className="cursor-pointer">
              <Link to={"/privacy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <hr className="bg-gray-600 h-[1px] border-none md:mt-5 mb-10" />
        <div className="md:text-xs w-full mx-auto text-center">
          <p>
            Copyright @ 2024. Classic African Farmer and CAF Token are
            registered trademark of Feedbag Agrihub Limited. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
