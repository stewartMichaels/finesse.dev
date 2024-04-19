// react imports
import React, { useRef } from "react";

// icons import
import { IoChevronForwardCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

// image import
import bg from "../assets/bg.png";
function Hero() {
  const hero = useRef();

  return (
    <>
      <section id="hero" ref={hero} className="pt-[140px]">
        <div className="content-wrapper flex items-center justify-center mx-[10%] px- bg-[#cbfaff68] rounded-xl px-[2%]">
          <div className="left-content-wrapper leading-relaxed font-poppins">
            <h2>
              <span className="text-[48px] font-semibold">
                Elevate Your Digital Presence With Us
              </span>
              {/* <br />
            <span className="text-[78px] font-bold">finesse.dev</span> */}
            </h2>
            <p>
              Are you ready to take your business to the next level? Our expert
              team will craft a stunning, high-performing website to showcase
              your brand and drive results.
            </p>

            <div className="button pt-10">
              <button
                type="button"
                className="text-white flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
              >
                Get Started
                <IconContext.Provider value={{ size: "25px", color: "#fff" }}>
                  <IoChevronForwardCircle />
                </IconContext.Provider>
              </button>
            </div>
          </div>
          <div className="right-content-wrapper">
            <img src={bg} alt="bg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
