import React from "react";
import ContactForm from "../components/ContactForm";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import image1 from "../assets/images/FBH-10.png";
import mapImage from "../assets/images/FBH-11.png";
import clockLogo from "../assets/images/clock.svg";
import buildingLogo from "../assets/images/building-4.svg";
import mailLogo from "../assets/images/direct-normal.svg";
import phoneLogo from "../assets/images/phone.svg";

const ContactUs = () => {
  return (
    <div className="pt-[10vh] md:pt-[15vh] flex flex-col items-center  font-poppins bg-white">
      <section className="flex flex-col md:flex-row items-stretch">
        <div className="md:w-[47%]">
          <img src={image1} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="md:w-[53%]">
          <ContactForm />
        </div>
      </section>

      <section className=" flex flex-col-reverse  md:flex-row-reverse items-stretch">
        <div className="md:w-[55%]">
          <img src={mapImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center px-5 py-10  justify-center md:w-[45%] bg-whute gap-10 md:gap-16">
          <h2 className="font-sfPro font-medium text-2xl md:text-3xl lg:text-[40px]">
            Contact Information
          </h2>
          <div className="flex flex-col w-fit text-xl lg:text-2xl gap-10">
            <div className="flex items-center gap-3  md:gap-7 flex-wrap ">
              <img src={mailLogo} alt="" className="w-6 md:w-10" />

              <a
                href="mailto:info@feedbagagrihub.com"
                className="hover:text-[#C3E022]"
              >
                info@feedbagagrihub.com
              </a>
            </div>
            <div className="flex items-center justify-start gap-3  md:gap-7">
              <img src={phoneLogo} alt="" className="w-6 md:w-10" />
              <a href="tel:+2348064191000" className="hover:text-[#C3E022]">
                +2348064191000
              </a>
            </div>
            <div className="flex items-center  gap-3  md:gap-7 md:w-[360px]">
              <img src={buildingLogo} className="w-6 md:w-10" />

              <p>Farm estate, Aiyetoro, Ipokia Lga, Ogun state.</p>
            </div>
            <div className="flex items-center gap-3  md:gap-7 ">
              <img src={clockLogo} className="w-6 md:w-10" />

              <p>8:00 am - 6:00 pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
