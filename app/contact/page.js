import React from "react";
import bg from "../../assets/contact2.jpg";
import map from "../../assets/map.png";
import call from "../../assets/Call.png";
import mail from "../../assets/mail.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="w-[85%] mx-auto py-12 relative z-10">
        {/* Heading */}
        <div
          className="md:text-5xl text-3xl font-bold mb-2 text-white flex justify-start items-center"
        >
          Contact Us
        </div>
        <span className="text-white md:text-4xl text-2xl mb-12 font-medium flex justify-start items-center p b-4">
          Book A Free Consultation
        </span>

        <div className="flex sm:flex-row flex-col justify-end gap-4 w-full">
          <div
            className="lg:w-[25%] sm:w-[35%] w-[65%] relative rounded-lg bg-no-repeat"
            style={{
              backgroundImage: `url(${map.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-right"
          >
            <div className="flex flex-col justify-between relative z-10 md:p-8 p-4 h-full lg:gap-6 md:gap-4 gap-3">
               <div className="font-bold text-secondary lg:text-3xl md:text-2xl text-xl">Visit Us</div>
               <div className="text-gray-400 lg:text-md sm:text-sm text-xs mb-2 break-words">Plot 212/A, Joshi Marg, Jhotwara, Jaipur ( 302012 )</div>
               <Link
               href="https://www.google.com/maps/place/BluStock+Consultants/@26.9469876,75.7335062,17z/data=!3m1!4b1!4m6!3m5!1s0x396db33f7fcf2685:0x2c7b1c7adb6e1448!8m2!3d26.9469876!4d75.7360811!16s%2Fg%2F11w2db88tf?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank"
               className="text-secondary font font-medium md:text-lg sm:text-sm text-xs flex justify-center cursor-pointer hover:text-primary hover:scale-105 duration-300 ease-in-out">PLAN YOUR ROUTE</Link>
            </div>
          </div>
          <div
            className="lg:w-[25%] sm:w-[35%] w-[65%] relative rounded-lg"
            style={{
              backgroundImage: `url(${call.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-down"
          >
             <div className="flex flex-col justify-between relative z-10 md:p-8 p-4 h-full lg:gap-6 md:gap-4 gap-3">
               <div className="font-bold text-secondary lg:text-3xl md:text-2xl text-xl">Say Hello</div>
               <div className="text-gray-400 lg:text-md sm:text-sm text-xs mb-2 break-words">+91 6376-520654</div>
               <Link
               href="tel:+916376520654" target="_blank"
               className="text-secondary font font-medium md:text-lg sm:text-sm text-xs flex justify-center items-end cursor-pointer hover:text-primary hover:scale-105 duration-300 ease-in-out">CALL NOW</Link>
            </div>
          </div>
          <div
            className="lg:w-[25%] sm:w-[35%] w-[65%] relative rounded-lg"
            style={{
              backgroundImage: `url(${mail.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
          >
             <div className="flex flex-col justify-between relative z-10 md:p-8 p-4 h-full lg:gap-6 md:gap-4 gap-3">
               <div className="font-bold text-secondary lg:text-3xl md:text-2xl text-xl">Write to Us</div>
               <div className="text-gray-400 lg:text-md sm:text-sm text-xs  mb-2 break-words">blustockconsultants@gmail.com</div>
               <Link
               href="mailto:blustockconsultants@gmail.com"
               target="_blank"
               className="text-secondary font font-medium md:text-lg sm:text-sm text-xs flex justify-center items-end cursor-pointer hover:text-primary hover:scale-105 duration-300 ease-in-out">SEND-EMAIL</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
