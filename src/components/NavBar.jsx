import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useNavContext } from "../helper/NavContext";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import playstoreLogo from "../assets/images/icons8-playstore.svg";
import { IoLogoApple } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
const NavBar = ({ show }) => {
  const location = useLocation();
  let pathName = location.pathname;
  pathName =
    pathName !== "/"
      ? pathName.split("")[1].toUpperCase() +
        pathName.slice(2).split("-").join(" ")
      : "Home";
  const [navActive, setNavActive] = useState(pathName);
  const [dropdownName, setDropdownName] = useState({});
  const { setShowNav } = useNavContext();
  const navContents = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
      subPath: [
        "UN SDG and caf mission",
        "Roadmap Project Development",
        "Our Team",
        "Partners",
        "Our Platform",
      ],
    },
    {
      name: "CAF Token",
      path: "/caf-token",
      subPath: ["Tokenomics", "Whitepaper", "Staking"],
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact us",
      path: "/contact-us",
    },
  ];

  const navigate = useNavigate();

  const toggleDropdown = (key, name) => {
    setDropdownName((prev) => ({ ...prev, [key]: name }));
  };

  useEffect(() => {
    setNavActive(pathName);
  }, [pathName]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <div
      className={
        "flex-col z-20 md:z-0 gap-7 md:gap-0 md:flex md:flex-row items-start md:items-center text-center md:justify-between  absolute bg-[#F1F1F1] md:static md:bg-transparent md:text-white top-0 py-10 px-5 w-4/5 md:w-fit md:py-0 h-screen overflow-visible md:h-fit  transition-all ease-in-out duration-500 " +
        `${show ? "flex left-0" : " left-[-80%]"}`
      }
    >
      {show && (
        <div
          onClick={() => setShowNav(false)}
          className="md:hidden self-end mr-5"
        >
          <IoClose size={35} />
        </div>
      )}

      <ul className="flex gap-4 md:gap-5 lg:gap-8  md:items-center text-[#131313] flex-col md:flex-row font-poppins w-full md:w-fit ">
        {navContents.map((content, id) => {
          return (
            <div
              className={
                " flex gap-2 md:items-center justify-center relative w-max " +
                `${content.subPath && " static flex-col items-start"}`
              }
              onMouseEnter={
                !show
                  ? () => {
                      setDropdownName({});
                      toggleDropdown(content.name, content.name);
                    }
                  : null
              }
            >
              <div
                className={
                  " flex w-fit  justify-between md:justify-start gap-3 items-center "
                }
              >
                <Link
                  key={id}
                  className={`${
                    navActive.toLowerCase() === content.name.toLowerCase()
                      ? "nav-active bg-gradient-to-br from-[#49C01F] to-[#1FC043] bg-clip-text text-transparent font-medium"
                      : "nav-link font-normal"
                  }`}
                  onClick={() => {
                    // setNavActive(content.name);
                    console.log(navActive);
                    setShowNav(false);
                  }}
                  to={content.path}
                >
                  {content.name}
                </Link>
                {show && content.subPath && (
                  <span>
                    {dropdownName[content.name] === content.name ? (
                      <AiFillCaretUp
                        onClick={() => toggleDropdown(content.name, "")}
                      />
                    ) : (
                      <AiOutlineRight
                        onClick={() =>
                          toggleDropdown(content.name, content.name)
                        }
                      />
                    )}
                  </span>
                )}
              </div>

              {content.subPath &&
                dropdownName[content.name] === content.name && (
                  <ul
                    className=" md:absolute top-10  bg-white text-[#332C2C] px-2 py-4 flex flex-col gap-3 shadow-lg rounded-md w-fit items-start"
                    onMouseEnter={
                      !show
                        ? () => toggleDropdown(content.name, content.name)
                        : null
                    }
                    onMouseLeave={
                      !show ? () => toggleDropdown(content.name, "") : null
                    }
                  >
                    {content.subPath.map((path, id) => (
                      <li key={id} className="md:w-max">
                        <HashLink
                          smooth
                          className="nav-link"
                          to={
                            path == "Our Platform"
                              ? "/Our-platform"
                              : `${content.path}` +
                                "/#" +
                                `${path.split(" ").join("-")}`
                          }
                          onClick={() => {
                            toggleDropdown(content.name, "");
                            setShowNav(false);
                          }}
                          scroll={(el) => scrollWithOffset(el)}
                        >
                          {path}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          );
        })}
      </ul>
      <button
        className="inline-block bg-gradient-to-br from-[#47C020] to-[#1FC043] hover:scale-105 hover:shadow-md hover:shadow-gray-700 text-white  px-3 py-2 rounded-lg active:scale-100 active:shadow-none md:hidden"
        onClick={() => {
          navigate("/contact-us");
          setShowNav(true);
        }}
      >
        Get Started
      </button>

      <div className="md:hidden text-start text-gray-800">
        <h3>Download App</h3>
        <div className="flex items-center gap-2">
          <a href="" className=" rounded-lg py-2 flex gap-2 items-center ">
            <img src={playstoreLogo} alt="" className="w-8" />
            <div className="text-base  leading-4 font-medium">
              <p className="text-[9px] font-light">GET IT ON</p>
              <p>Google Play</p>
            </div>
          </a>
          <a href="" className=" rounded-lg py-2 flex gap-2 items-center">
            <IoLogoApple color="#CECCCD" size={32} />

            <div className="text-base  leading-4 font-medium">
              <p className="text-[9px] font-light">Download on the</p>
              <p>App Store</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
