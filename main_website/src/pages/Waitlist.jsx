import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Waitlist = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const colors = {
    farmer: "green",
    aggregator: "black",
    consumer: "blue",
  };
  const handlechange = (e) => {
    setUser((prev) => {
      if (e.target.type == "radio") {
        return {
          ...prev,
          [e.target.name]: e.target.id,
          ["color"]: colors[e.target.id],
        };
      }
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
      .post("https://api.feedbagagrihub.com/save_user.php", user)
      .then((response) => {
        // Handle success
        const res = JSON.parse(response.data);
        toast.success(<div className="w-full text-start">{res.message}</div>, {
          id: loadingToast,
          duration: 6000,
        });
        e.target.reset();
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        // Handle error
        toast.error(
          <div className="w-full text-start">
            {"something went wrong, please try again later"}
          </div>,
          {
            id: loadingToast,
          }
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className=" pt-36 pb-10 bg-gray-300 ">
      {isLoading && (
        <div className="bg-black opacity-20 absolute w-full h-full top-0 z-10"></div>
      )}
      <div className="bg-white w-[90%] md:w-3/5 mx-auto flex flex-col px-4 md:px-10 justify-center items-center py-14 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-semibold  bg-gradient-to-br from-[#47C020] to-[#1FC043] bg-clip-text text-transparent">
          Join Waitlist
        </h2>
        <form
          action=""
          className="w-full text-gray-600 flex flex-col gap-3 items-start"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 font-medium text-lg w-full">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="border-2 p-2 border-gray-200 rounded-lg "
              onChange={handlechange}
            />
          </div>
          <div className="flex flex-col gap-2 font-medium text-lg w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              className="border-2 p-2 border-gray-200 rounded-lg"
              onChange={handlechange}
            />
          </div>
          <div className="flex flex-col gap-2 font-medium text-lg w-full">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              value={user.phone_number}
              className="border-2 p-2 border-gray-200 rounded-lg"
              onChange={handlechange}
            />
          </div>
          <div className="flex flex-col gap-2 font-medium text-lg">
            <h3>Agro Sector</h3>
            <div className="flex gap-4 flex-wrap">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="agro_sector"
                  id="farmer"
                  onChange={handlechange}
                />
                <label htmlFor="farmer">Farmer</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="agro_sector"
                  id="consumer"
                  onChange={handlechange}
                />
                <label htmlFor="consumer">Consumer</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="agro_sector"
                  id="aggregator"
                  onChange={handlechange}
                />
                <label htmlFor="aggregator">Aggregrator</label>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className=" bg-gradient-to-br from-[#47C020] from-25% to-[#1FC043] py-2 px-8 text-white rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
