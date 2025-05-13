'use client';
import React from "react";
import bg from "../assets/footer_bg.jpg";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
              <Link href="/testimonials">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">Testimonials</span>
                </div>
              </Link>
              <Link href="/faq">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">FAQs</span>
                </div>
              </Link>
              <Link href="/about">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">About Us</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">Contact</span>
                </div>
              </Link>
              <Link href="/testimonials">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">Testimonials</span>
                </div>
              </Link>
              <Link href="/faq">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">FAQs</span>
                </div>
              </Link>
              <Link href="/about">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">About Us</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">Contact</span>
                </div>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/4 w-3/4 items-start">
            <div className="text-xl font-bold pb-6">Courses</div>
            <ul className="flex flex-col items-start">
              <Link href="/courses">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none" />
                  <span className="ml-1 font-normal text-sm">
                    Basic to advance
                  </span>
                </div>
              </Link>
              <Link href="/courses">
                <div className="flex items-start pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none mt-1" />
                  <span className="ml-1 font-normal text-sm">
                    Mentorship classes + Stock Advisory Services
                  </span>
                </div>
              </Link>
              <Link href="/courses">
                <div className="flex items-start pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoMdArrowDropright className="text-lg flex-none mt-1" />
                  <span className="ml-1 font-normal text-sm">
                    Mentorship classes + Stock Advisory + Options Advisory
                    Services
                  </span>
                </div>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/4 w-3/4 items-start">
            <div className="text-xl font-bold pb-6">Follow Us</div>
            <ul className="flex flex-row items-start gap-2 pb-4">
              <Link href="https://www.facebook.com/share/16A6BCEboT/" target="_blank">
                <FaFacebook className="text-xl flex-none cursor-pointer hover:scale-105 ease-in-out duration-300" />
              </Link>
              <Link href="https://www.instagram.com/blustockconsultants/" target="_blank">
                <FaInstagram className="text-xl flex-none cursor-pointer hover:scale-105 ease-in-out duration-300" />
              </Link>
              <Link href="/contact" target="_blank">
                <FaXTwitter className="text-xl flex-none cursor-pointer hover:scale-105 ease-in-out duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/company/bluestock-consultants/posts/?feedView=all" target="_blank">
                <FaLinkedinIn className="text-xl flex-none cursor-pointer hover:scale-105 ease-in-out duration-300" />
              </Link>
            </ul>
            <ul className="flex flex-col items-start">
              <Link href="https://www.google.com/maps/place/BluStock+Consultants/@26.9469876,75.7335062,17z/data=!3m1!4b1!4m6!3m5!1s0x396db33f7fcf2685:0x2c7b1c7adb6e1448!8m2!3d26.9469876!4d75.7360811!16s%2Fg%2F11w2db88tf?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <FaLocationDot className="text-xl flex-none pr-2" />
                  <span className="ml-2 font-normal text-sm">
                    Plot 212/A, Joshi Marg, Jhotwara, Jaipur ( 302012 )
                  </span>
                </div>
              </Link>
              <Link href="tel:+918955934636" target="_blank">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <FaPhoneAlt className="text-lg flex-none" />
                  <span className="ml-2 font-normal text-sm">
                    +91 6376-520654
                  </span>
                </div>
              </Link>
              <Link href="mailto:blustockconsultants@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center pb-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <MdOutlineMailOutline className="text-xl flex-none" />
                  <span className="ml-2 font-normal text-sm">
                    blustockconsultants@gmail.com
                  </span>
                </div>
              </Link>
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
        <div className="w-[85%] mx-auto py-3 flex flex-row justify-between gap-4 items-center">
          <div className="text-xs sm:text-sm">
            Copyright © 2025 by BluStock Consultants Pvt. Ltd. All rights
            reserved.
          </div>
          <div
            className="sm:text-3xl text-2xl hover:scale-105 ease-in-out duration-300 flex-none cursor-pointer"
            onClick={scrollToTop}
          >
            <FaArrowAltCircleUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
