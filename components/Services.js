"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import longterm from "../assets/longterm.jpg";
import portfolio from "../assets/portfolio.jpeg";
import psycology from "../assets/psycology.png";
import swingIntra from "../assets/swingIntra.jpg";
import longterm2 from "../assets/longterm3.png";
import { MdMoreTime } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full bg-[#f0f0f0]">
      <div className="w-[85%] mx-auto py-8">
      <div
              className="sm:text-3xl text-2xl font-bold md:mb-4 mb-8 flex justify-center"
              data-aos="flip-down"
            >
              Learn with Our Expert Training 
            </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-[60%] w-full flex flex-col justify-center">
            <div className="text-md font-medium flex text-[#406191]">
              BluStock Consultants, with over 12 years of experience in the
              Indian markets, is your go-to for financial education and
              mentorship. We help you gain the knowledge and skills needed for
              financial freedom and the freedom of time. Join us to improve your
              financial understanding and reach your full potential. Trust
              BluStock Consultants for expert guidance and support on your path
              to financial success!
            </div>
          </div>

          <div className="md:w-[40%] sm:w-[50%] w-[80%] mx-auto">
            <Image src={longterm2} alt="lt2" />
          </div>
        </div>
        <div className="flex flex-col py-8 w-full gap-4">
          <div className="flex sm:flex-row flex-col justify-between w-full gap-4">
            {/* LONG TERM */}
            <div className="relative sm:w-1/2 w-full flex items-center justify-center py-8 px-4 rounded-xl hover:text-white text-primary overflow-hidden transition-all duration-500 group">
              {/* Background Image - Initially Hidden, Appears on Hover */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Image
                  src={longterm}
                  alt="longterm"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>

              {/* Dark Overlay - Always Present, Becomes Lighter on Hover */}
              <div className="absolute inset-0 bg-primary opacity-10 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="flex flex-row gap-2 justify-center">
                  <MdMoreTime className="text-xl mt-1" />
                  <h2 className="text-xl font-bold">
                    Long Term Investment Guidance
                  </h2>
                </div>
                <p className="mt-3 text-md text-start">
                  We help you build a strong and diverse investment portfolio
                  for long-term growth. Our advice ensures your investments
                  match your financial goals.
                </p>
              </div>
            </div>

            {/* PORTFOLIO */}
            <div className="relative sm:w-1/2 w-full flex items-center justify-center py-8 px-4 rounded-xl hover:text-white text-primary overflow-hidden transition-all duration-500 group">
              {/* Background Image - Initially Hidden, Appears on Hover */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Image
                  src={portfolio}
                  alt="Portfolio"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>

              {/* Dark Overlay - Always Present, Becomes Lighter on Hover */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="flex flex-row gap-2 justify-center">
                  <FaPenFancy className="text-xl mt-1" />
                  <h2 className="text-xl font-bold ">Portfolio Corrections</h2>
                </div>
                <p className="mt-3 text-md text-start">
                  We optimize your current investments by analyzing your
                  portfolio and suggesting changes to better align with your
                  financial goals, ensuring top performance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col justify-between w-full gap-4">
            {/* INTRADAY */}
            <div className="relative sm:w-1/2 w-full flex items-center justify-center py-8 px-4 rounded-xl hover:text-white text-primary overflow-hidden transition-all duration-500 group">
              {/* Background Image - Initially Hidden, Appears on Hover */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Image
                  src={swingIntra}
                  alt="swing"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>

              {/* Dark Overlay - Always Present, Becomes Lighter on Hover */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="flex flex-row gap-2 justify-center">
                  <GiDuration className="text-xl mt-1" />
                  <h2 className="text-xl font-bold ">
                    Trading - Intraday & Swing
                  </h2>
                </div>
                <p className="mt-3 text-md text-start">
                  For active traders, we offer expert strategies for intraday
                  and swing trading. Whether you are trading within a day or
                  over a few days, we provide the knowledge and tools to
                  succeed.
                </p>
              </div>
            </div>

            {/* PSYCHOLOGY */}
            <div className="relative sm:w-1/2 w-full flex items-center justify-center py-8 px-4 rounded-xl hover:text-white text-primary overflow-hidden transition-all duration-500 group">
              {/* Background Image - Initially Hidden, Appears on Hover */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Image
                  src={psycology}
                  alt="Psychology"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>

              {/* Dark Overlay - Always Present, Becomes Lighter on Hover */}
              <div className="absolute inset-0 bg-primary opacity-10 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="flex flex-row gap-2 justify-center">
                  <MdOutlinePsychology className="text-xl mt-1" />
                  <h2 className="text-xl font-bold ">
                    {" "}
                    Mastering Financial Psychology
                  </h2>
                </div>
                <p className="mt-3 text-md text-start">
                  We teach you how to manage your emotions for successful
                  investing. Our guidance helps you develop the mental strength
                  needed to confidently handle market ups and downs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
