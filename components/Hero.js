"use client";
import React from "react";
import bg from "../assets/Hero5.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-primary overflow-hidden flex flex-col items-center py-12">
      <div className="flex md:flex-row flex-col items-center w-[85%] mx-auto gap-4 ">
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h3 className="sm:text-3xl text-2xl font-bold text-white">
            MASTER TRADING AND INVESTMENT IN STOCK MARKET
          </h3>
          <span className="my-8 text-white sm:text-sm text-xs">
            At BluStock Consultants,we are dedicated to providing top-tier
            education in stock market trading and investment. Our expert
            programs are designed to equip our clients with the essentials
            skills and knowledge needed to navigate and excel in the financial
            markets. Join us to master the art of trading and investment with
            confidence.
          </span>
          <a className="z-20 relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group cursor-pointer">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Enroll now
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
          {/* <a className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">Enroll now</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>  */}
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <Image src={bg} alt="bg" className="w-400 h-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// style={{
//       backgroundImage: `url(${bg.src})`,
//     }}
