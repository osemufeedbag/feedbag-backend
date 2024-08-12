import React, { useState } from "react";
import HeadingText from "./HeadingText";
import Button from "./Button";

const data = [
  {
    title: "Revolutionizing Food Production",
    text: "Feedbag Agrihub is dedicated to transforming food production through innovative soilless farming techniques and a blockchain- powered platform. Joining us, means being part of a  movement that is reshaping the way we grow, distribute and consume food, paving the way for a more sustainable future.",
  },
  {
    title: "Impactful Mission",
    text: "Our mission aligns with the United Nations sustainable development goals, focusing oneradicating poverty, achieving zero hunger, fostering economic growt , and promoting responsible production and Consumption. By joining Feedbag Agrihub, you become part of a team dedicated to making a tangible difference in the world.",
  },
  {
    title: "Global Network Expansion",
    text: "Feedbag Agrihub is your last stop for getting connected and rewarded, ensuring no one is left behind while we prioritize equity, sustainability and nutrition from farm2table. Get access to local and international audience to scale your agribusinesses into new heights.",
  },
  {
    title: "Enhanced Funding",
    text: "The CAF Token utilizes the Algorand blockchain, a globally recognized carbon-neutral blockchain technology, to unlock diverse funding options through Decentralized Finance (DeFi).Tokenizing real-world assets not only enhances fractional ownership but also increases liquidity, improves transparency, and enables the automation of agricultural operations through smart contracts.",
  },
  {
    title: "DAO/Governance",
    text: " As an active participant in the food supply chain, you play a key role in championing a sustainable future for farm projects by exercising your voting rights.",
  },
  {
    title: "Transparent Supply Chain",
    text: ": Our blockchain-powered platform ensures enhanced supply chain transparency, mitigates climate impact, and reduces food waste. Joining us means being part of a movement towards a more transparent, efficient and sustainable agricultural economy.",
  },
];

const WhyUs = () => {
  const [count, setCount] = useState(3);

  let slicedData = data.slice(0, count);

  return (
    <div className="p-5 md:px-20 flex flex-col md:py-10 text-[#131313] w-full bg-[#EEFFF1] font-poppins">
      <section className="w-full flex flex-col items-start gap-5 font-medium ">
        <HeadingText text={"Why you should join Feedbag Agrihub"} />
        <ol className="flex flex-col gap-5 ">
          {slicedData.map((item, id) => {
            return (
              <li className="md:text-lg lg:text-xl font-normal">
                <span className=" font-medium bg-gradient-to-br from-[#49C01F] to-[#1FC043] bg-clip-text text-transparent">
                  {item.title}:{" "}
                </span>{" "}
                {item.text}
              </li>
            );
          })}
        </ol>

        <div className="w-full flex justify-center">
          <Button
            text={data.length !== slicedData.length ? "Load More" : "Show Less"}
            handleClick={() => {
              data.length !== slicedData.length
                ? setCount((prev) => prev + 3)
                : setCount(3);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
