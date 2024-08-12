import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineContents = [
    {
      title: "Q2 2024",
      text: [
        "Launch CAF Marketplace",
        "CAF Finance",
        "CAF Transportation & Logistics",
        "Initial token offering – ITO",
      ],
    },
    {
      title: "Q3 2024",
      text: [
        "Launch CAF Education",
        "Greenhouse Setups/soilless farming structure",
      ],
    },
    {
      title: "Q4 2024",
      text: ["CAF Waste2earn", "CAF Tourism"],
    },
    {
      title: "Q1 2025 ",
      text: ["Launch CAF Ghana, kenya"],
    },
  ];

  useEffect(() => {
    gsap.utils.toArray(".section").forEach((element) => {
      let grandParentHeight = element.clientHeight;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom",
          end: "+=10px",
          scrub: 1,
        },
      });
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: element.querySelector(".inner-line-container"),
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl2.to(element.querySelector(".inner-line-container"), {
        overflow: "visible",
        ease: "circ.inOut",
      });
      tl2.to(element.querySelector(".inner-line"), {
        height: grandParentHeight,
        duration: 5,
        ease: "expo.inOut",
      });

      tl.to(element.querySelector(".section-item"), {
        x: 0,
        opacity: 1,
        duration: 3,
        // overflow: "hidden",
      });
      tl.to(element.querySelector(".section-item>div"), {
        opacity: 1,
      });

      tl.to(element.querySelector(".circle"), {
        opacity: 1,
        zIndex: 1,
      });
    });
  }, []);
  return (
    <div className="timeline ">
      {timelineContents.map(({ title, text }, id) => {
        return (
          <section className="section " key={id}>
            <div class="circle"></div>
            {id !== timelineContents.length - 1 ? (
              <>
                <div className="line"></div>
                <div className="inner-line-container">
                  <div className="inner-line"></div>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="section-item ">
              <div
                className={
                  " flex w-[fit-content] rounded-2xl overflow-hidden shadow-lg shadow-gray-800 bg-white opacity-60" +
                  `${id % 2 == 0 ? " flex-row-reverse " : " "}`
                }
              >
                <div className="w-4 h-[inherit] bg-gradient-to-br from-[#49C01F] to-[#1FC043]"></div>
                <div className={"w-fit p-3 flex flex-col gap-3"}>
                  <h3 className="font-bold text-lg lg:text-3xl leading-4">
                    {title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {text.map((item) => (
                      <div className="flex items-center">
                        <div>
                          <GoDotFill color={"#75757526"} />
                        </div>

                        <p className="text-sm lg:text-base">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Timeline;
