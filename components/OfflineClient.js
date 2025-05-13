"use client"
import Link from "next/link";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const OfflineClient = ({ courses }) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 w-full py-8">
      {courses.map((course, index) => (
           <div
             key={course.id}
             className="bg-white rounded-lg md:w-1/3 w-3/4 mx-auto flex flex-col justify-between"
             data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
           >
             <div className="flex flex-col h-full relative p-4">
               <div className="flex flex-col mb-10 mt-2">
                 <div className="lg:text-3xl md:text-2xl text-3xl font-bold text-primary">
                   {course.title}
                 </div>
                 <div className="text-sm text-gray-400 font-medium">
                   ({course.duration})
                 </div>
               </div>
               <ul className="flex flex-col lg:text-sm md:text-xs sm:text-sm text-xs justify-end text-gray-500">
                 <li className="flex flex-row">
                   <IoMdArrowDropright className="text-lg mt-0.5" />
                   <div className="font-semibold">Duration :&nbsp;</div>
                   <div>{course.duration}</div>
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
                 <div className="text-sm text-gray-300 font-medium">price</div>
                 <div className="lg:text-2xl md:text-xl sm:text-2xl text-xl font-bold">
                   {course.price}
                 </div>
               </div>
               <Link href={`/courses/${course.id}`} className="z-20 relative inline-flex items-center justify-start lg:px-5 md:px-2 sm:px-5 px-2 lg:py-3 md:py-2 sm:py-3 py-2 overflow-hidden font-bold rounded-full group cursor-pointer">
                 <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                 <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                 <span  className="relative w-full text-left text-white lg:text-lg md:text-xs sm:text-lg text-xs transition-colors duration-200 ease-in-out group-hover:text-primary">
                   ENROLL NOW
                 </span>
                 <span className="absolute inset-0 border-2 border-white rounded-full"></span>
               </Link>
             </div>
           </div>
         ))}
    </div>
  );
};

export default OfflineClient;
