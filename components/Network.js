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
        <div className="w-full flex flex-wrap justify-between sm:pb-16 pb-0">
            <div className="w-1/2 lg:w-1/4 flex flex-col items-center text-center gap-2 p-4">
              <div
                className="md:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                13+
              </div>
              <div className="font-medium md:text-xl text-md">
                Years of Experience
              </div>
              <FaShieldAlt className="md:text-5xl text-3xl"/>
            </div>

            <div className="w-1/2 lg:w-1/4 flex flex-col items-center text-center gap-2 p-4">
              <div
                className="md:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                100+
              </div>
              <div className="font-medium md:text-xl text-md">
                Learners
              </div>
              <IoPeople className="md:text-5xl text-3xl" />
            </div>
      
            <div className="w-1/2 lg:w-1/4 flex flex-col items-center text-center gap-2 p-4">
              <div
                className="md:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                5 STAR
              </div>
              <div className="font-medium md:text-xl text-md">
                Google Ratings
              </div>
              <FaStar className="md:text-5xl text-3xl" />
            </div>

            <div className="w-1/2 lg:w-1/4 flex flex-col items-center text-center gap-2 p-4">
              <div
                className="md:text-5xl sm:text-3xl text-xl font-bold"
                data-aos="flip-right"
              >
                Professional
              </div>
              <div className="font-medium md:text-xl text-md">
                Trainer
              </div>
              <MdOutlineCandlestickChart className="md:text-5xl text-3xl" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
