import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Offline = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 w-full py-8" >
      <div className="bg-white rounded-lg md:w-1/3 w-3/4 mx-auto flex flex-col justify-between" data-aos="fade-up">
        <div className="flex flex-col h-full relative p-4">
          <div className="flex flex-col items-end justify-end">
            <div className="text-sm text-gray-400 font-medium">
              Cohort 8 Starts on{" "}
            </div>
            <div className="text-xl font-bold">26 APR</div>
          </div>
          <div className="flex flex-col mb-10 mt-2">
            <div className="lg:text-3xl md:text-2xl text-3xl font-bold">
              Mentorship classes
            </div>
            <div className="text-sm text-gray-400 font-medium">
              (Basic to advance)
            </div>
          </div>
          <ul className="flex flex-col lg:text-sm md:text-xs sm:text-sm text-xs justify-end text-gray-500">
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Duration :&nbsp;</div>
              <div>1.5 months</div>
            </li>
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Weekday Batch :&nbsp;</div>
              <div>Mon & Wed</div>
            </li>
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Weekend Batch :&nbsp;</div>
              <div>Sat & Sun</div>
            </li>
          </ul>
          <div className="font-semibold lg:text-md md:text-sm sm:text-md text-sm text-primary mt-auto">
            Live Trading Session On Mon & Wed
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between rounded-b-lg px-4 py-6 bg-secondary text-white">
          <div className="flex flex-col">
            <div className="text-sm text-gray-300 font-medium">Cost</div>
            <div className="lg:text-2xl md:text-xl sm:text-2xl text-xl font-bold">
              ₹20,000
            </div>
          </div>
          <a className="z-20 relative inline-flex items-center justify-start lg:px-5 md:px-2 sm:px-5 px-2 lg:py-3 md:py-2 sm:py-3 py-2 overflow-hidden font-bold rounded-full group cursor-pointer">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white lg:text-lg md:text-xs sm:text-lg text-xs transition-colors duration-200 ease-in-out group-hover:text-primary">
              ENROLL NOW
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg md:w-1/3 w-3/4 mx-auto flex flex-col justify-between" data-aos="fade-down">
        <div className="flex flex-col h-full relative p-4">
          {/* <div className="flex flex-col items-end justify-end">
            <div className="text-sm text-gray-400 font-medium">
              Cohort 8 Starts on{" "}
            </div>
            <div className="text-xl font-bold">26 APR</div>
          </div> */}
          <div className="flex flex-col mb-10 mt-2">
            <div className="lg:text-3xl md:text-2xl sm:text-3xl text-xl font-bold">
              Mentorship classes + Stock Advisory Services
            </div>
            <div className="text-sm text-gray-400 font-medium">( 1 year )</div>
          </div>
          <ul className="flex flex-col lg:text-sm md:text-xs sm:text-sm text-xs justify-end text-gray-500">
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Duration :&nbsp;</div>
              <div>1 year</div>
            </li>
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Weekday Batch :&nbsp;</div>
              <div>Mon & Wed</div>
            </li>
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Weekend Batch :&nbsp;</div>
              <div>Sat & Sun</div>
            </li>
          </ul>
          <div className="font-semibold lg:text-md md:text-sm sm:text-md text-sm text-primary mt-auto">
              Live Trading Session On Mon & Wed
            </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between rounded-b-lg px-4 py-6 bg-secondary text-white">
          <div className="flex flex-col">
            <div className="text-sm text-gray-300 font-medium">Cost</div>
            <div className="lg:text-2xl md:text-xl sm:text-2xl text-xl font-bold">
              ₹35,000
            </div>
          </div>
          <a className="z-20 relative inline-flex items-center justify-start lg:px-5 md:px-2 sm:px-5 px-2 lg:py-3 md:py-2 sm:py-3 py-2 overflow-hidden font-bold rounded-full group cursor-pointer">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white lg:text-lg md:text-xs sm:text-lg text-xs transition-colors duration-200 ease-in-out group-hover:text-primary">
              ENROLL NOW
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg md:w-1/3 w-3/4 mx-auto flex flex-col justify-between" data-aos="fade-up">
        <div className="flex flex-col h-full relative p-4">
          {/* <div className="flex flex-col items-end justify-end">
            <div className="text-sm text-gray-400 font-medium">
              Cohort 8 Starts on{" "}
            </div>
            <div className="text-xl font-bold">26 APR</div>
          </div> */}
          <div className="flex flex-col mb-10 mt-2">
            <div className="lg:text-3xl md:text-2xl sm:text-3xl text-xl font-bold">
              Mentorship classes + Stock Advisory + Options Advisory Services
            </div>
            <div className="text-sm text-gray-400 font-medium">( 1 year )</div>
          </div>
          <ul className="flex flex-col lg:text-sm md:text-xs sm:text-sm text-xs justify-end text-gray-500">
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Duration :&nbsp;</div>
              <div>1 year</div>
            </li>
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Weekday Batch :&nbsp;</div>
              <div>Mon & Wed</div>
            </li>
            <li className="flex flex-row">
              <IoMdArrowDropright className="text-lg mt-0.5" />
              <div className="font-semibold">Weekend Batch :&nbsp;</div>
              <div>Sat & Sun</div>
            </li>
          </ul>
          <div className="font-semibold lg:text-md md:text-sm sm:text-md text-sm text-primary mt-auto">
              Live Trading Session On Mon & Wed
            </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between rounded-b-lg px-4 py-6 bg-secondary text-white">
          <div className="flex flex-col">
            <div className="text-sm text-gray-300 font-medium">Cost</div>
            <div className="lg:text-2xl md:text-xl sm:text-2xl text-xl font-bold">
              ₹50,000
            </div>
          </div>
          <a className="z-20 relative inline-flex items-center justify-start lg:px-5 md:px-2 sm:px-5 px-2 lg:py-3 md:py-2 sm:py-3 py-2 overflow-hidden font-bold rounded-full group cursor-pointer">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white lg:text-lg md:text-xs sm:text-lg text-xs transition-colors duration-200 ease-in-out group-hover:text-primary">
              ENROLL NOW
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offline;
