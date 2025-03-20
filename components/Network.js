import React from "react";
import bg from "../assets/worldmap.jpeg";
import { FaShieldAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineCandlestickChart } from "react-icons/md";

const Network = () => {
  return (
    <div
      className="w-full relative "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-tertiary opacity-90"></div>
      <div className="w-[85%] mx-auto sm:py-20 py-12 relative z-10 text-white flex flex-col justify-center items-center">
        <div
          className="lg:text-7xl sm:text-5xl text-3xl font-bold sm:pb-16 pb-8"
          data-aos="flip-down"
        >
          Why Us?
        </div>
        <div className="w-full flex sm:flex-row justify-between flex-col sm:gap-0 gap-4 sm:pb-16 pb-0">
            <div className="flex flex-col items-center sm:gap-6 gap-2">
              <div
                className="lg:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                13+
              </div>
              <div className="font-medium lg:text-xl sm:text-md text-xs">
                Years of Experience
              </div>
              <FaShieldAlt className="lg:text-5xl sm:text-3xl text-xl" />
            </div>

            <div className="flex flex-col items-center sm:gap-6 gap-2">
              <div
                className="lg:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                100+
              </div>
              <div className="font-medium lg:text-xl sm:text-md text-xs">
                Learners
              </div>
              <IoPeople className="lg:text-5xl sm:text-3xl text-xl" />
            </div>
      

            <div className="flex flex-col items-center sm:gap-6 gap-2">
              <div
                className="lg:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                5 STAR
              </div>
              <div className="font-medium lg:text-xl sm:text-md text-xs">
                Google Ratings
              </div>
              <FaStar className="lg:text-5xl sm:text-3xl text-xl" />
            </div>

            <div className="flex flex-col items-center sm:gap-6 gap-2">
              <div
                className="lg:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                Professional
              </div>
              <div className="font-medium lg:text-xl sm:text-md text-xs">
                Trainer
              </div>
              <MdOutlineCandlestickChart className="lg:text-5xl sm:text-3xl text-xl" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
