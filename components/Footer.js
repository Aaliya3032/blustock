import React from "react";
import bg from "../assets/footer_bg.jpg";
import { IoMdArrowDropright } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa";;
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white">
      {/* Upper Footer */}
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-60"></div>
        <div className="w-[85%] mx-auto py-12 relative z-10 flex md:flex-row flex-col gap-8 justify-between">
          <div className="flex flex-col md:w-1/4 w-3/4 items-start">
            <div className="text-xl font-bold pb-6">Company</div>
            <ul className="flex flex-col items-start">
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">Testimonials</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">FAQs</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">About Us</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">Contact</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">Testimonials</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">FAQs</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">About Us</span>
              </li>
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">Contact</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/4 w-3/4 items-start">
            <div className="text-xl font-bold pb-6">Courses</div>
            <ul className="flex flex-col items-start">
              <li className="flex items-center pb-2">
                <IoMdArrowDropright className="text-lg flex-none" />
                <span className="ml-1 font-normal text-sm">
                  Basic to advance
                </span>
              </li>
              <li className="flex items-start pb-2">
                <IoMdArrowDropright className="text-lg flex-none mt-1" />
                <span className="ml-1 font-normal text-sm">
                  Mentorship classes + Stock Advisory Services
                </span>
              </li>
              <li className="flex items-start pb-2">
                <IoMdArrowDropright className="text-lg flex-none mt-1" />
                <span className="ml-1 font-normal text-sm">
                  Mentorship classes + Stock Advisory + Options Advisory
                  Services
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/4 w-3/4 items-start">
            <div className="text-xl font-bold pb-6">Follow Us</div>
            <ul className="flex flex-row items-start gap-2 pb-4">
              <li>
                <FaFacebook className="text-xl flex-none" />
              </li>
              <li>
                <FaInstagram className="text-xl flex-none" />
              </li>
              <li>
                <FaXTwitter className="text-xl flex-none" />
              </li>
              <li>
                <FaLinkedinIn className="text-xl flex-none" />
              </li>
            </ul>
            <ul className="flex flex-col items-start">
              <li className="flex items-center pb-2">
                <FaLocationDot className="text-xl flex-none pr-2" />
                <span className="ml-2 font-normal text-sm">Plot 212/A, Joshi Marg, Jhotwara, Jaipur ( 302012 )</span>
              </li>
              <li className="flex items-center pb-2">
                <FaPhoneAlt className="text-lg flex-none" />
                <span className="ml-2 font-normal text-sm">+91 6376-520654</span>
              </li>
              <li className="flex items-center pb-2">
                <MdOutlineMailOutline className="text-xl flex-none" />
                <span className="ml-2 font-normal text-sm">blustockconsultants@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/4 w-3/4 items-start">
            <div className="text-xl font-bold pb-6">BluStock consultants</div>
            <div className="pb-4 w-[90%] mx-auto md:h-56 h-72 lg:h-72 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.6284072398744!2d75.73350617405826!3d26.946992358619006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db33f7fcf2685%3A0x2c7b1c7adb6e1448!2sBluStock%20Consultants!5e0!3m2!1sen!2sin!4v1742630713978!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Footer */}
      <div className="w-full bg-gradient-to-r from-primary to-secondary">
        <div className="w-[85%] mx-auto py-3">
          Copyright © 2025 by BluStock Consultants Pvt. Ltd. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
