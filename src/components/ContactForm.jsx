import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import HeadingText from "./HeadingText";
import SubHeadingText from "./SubHeadingText";

const ContactForm = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handlechange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToast = toast.loading(
      <div className="w-full text-start">
        Hold on we are processing your request ....
      </div>
    );
    axios
      .post("https://api.feedbagagrihub.com/mail.php", data)
      .then((response) => {
        // Handle success
        // const res = JSON.parse(response.data);
        console.log(response);
        toast.success(
          <div className="w-full text-start">
            {response.data.message + ", we will get back to you shortly"}
          </div>,
          {
            id: loadingToast,
            duration: 6000,
          }
        );
        e.target.reset();
        setData({});
      })
      .catch((error) => {
        // Handle error
        toast.error(<div className="w-full text-start">{error.message}</div>, {
          id: loadingToast,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-white mx-auto flex flex-col px-4 md:px-10 lg:px-20 justify-center py-8 lg:py-14  text-black gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-stretch  gap-2 text-[#131313] font-medium">
          <div className="w-1 rounded-md bg-gradient-to-br from-[#49C01F] to-[#1FC043]"></div>
          <h2 className=" text-2xl ">Contact Us</h2>
        </div>
        <p className="md:text-lg lg:text-2xl text-[#241F19]">
          Drop Us a Message Anytime, We'd Love to Hear From You
        </p>
      </div>

      <form
        action=""
        className="w-full mx-auto  flex flex-col gap-7 items-center md:items-start"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full ">
          <label>Full name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter your full name"
            className=" px-6 py-4  rounded-2xl md:text-lg lg:text-2xl bg-[#F1FCF3]"
            onChange={handlechange}
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter your email "
            className=" px-6 py-4  rounded-2xl md:text-lg lg:text-2xl bg-[#F1FCF3]"
            onChange={handlechange}
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label>Comment</label>
          <textarea
            type="text"
            name="message"
            placeholder="Leave a comment"
            className=" px-6 py-4  rounded-2xl md:text-lg lg:text-2xl bg-[#F1FCF3] min-h-[125px] md:min-h-40 lg:min-h-52"
            onChange={handlechange}
          >
            {data.message}
          </textarea>
        </div>
        <input
          type="submit"
          value="Save"
          className=" py-3 lg:px-6 lg:py-4 px-2 bg-gradient-to-br from-[#49C01F] to-[#1FC043] text-white lg:rounded-2xl md:rounded-xl rounded-xl min-w-[120px] md:min-w-[170px] lg:min-w-[200px] font-poppins font-medium text-sm md:text-base lg:text-lg"
        />
      </form>
    </div>
  );
};

export default ContactForm;
