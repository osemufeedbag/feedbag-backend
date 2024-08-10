import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import NavBar from "./NavBar";
import { useNavContext } from "../helper/NavContext";
import { useNavigate } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import ExternalCallButton from "./ExternalCallButton";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { showNav, setShowNav } = useNavContext();
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".navBar",
        start: "top top",
        scrub: 1,
      },
    });

    tl.to(".navBar", {
      // backgroundColor: "#fff",
      boxShadow: "0px 10px 22px #00000044",
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className=" z-10 px-10 md:px-20  fixed w-full bg-white navBar h-[10vh] md:h-[15vh] flex items-center ">
      <div
        className={
          "bg-black opacity-80 absolute h-screen w-full top-0 left-0 z-10 blur-lg overflow-hidden " +
          `${showNav ? "block " : "hidden"}`
        }
        onClick={() => setShowNav(false)}
      ></div>
      <div className="flex items-center w-full justify-between ">
        <a href="/" className="md:w-[10%]">
          <img src={Logo} alt="company logo" className="w-24" />
        </a>
        <div className="md:w-[70%] flex justify-center">
          <NavBar show={showNav} />
        </div>

        <div className="hidden md:flex">
          <a href = "http://localhost:4000/signUp" ><ExternalCallButton
            text={"Get Started"}
            //handleClick={() => navigate("/contact-us")}
          /></a>
        </div>

        <div onClick={() => setShowNav(true)} className=" md:hidden">
          <RiMenu5Line color="#757575" size={35} />
        </div>
      </div>
    </div>
  );
};

export default Header;
