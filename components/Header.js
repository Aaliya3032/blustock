"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/logo2.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    ); // Avoid hydration issues

  return (
    <div className="relative">
      {isScrolled && <div className="h-[80px] w-full"></div>}
    <div
      className={`bg-white shadow-sm ${
        isScrolled ? "fixed top-0 left-0 right-0" : "relative"
      } z-30 transition-[top] duration-300 ease-in-out`}
    >
      <div className="w-[85%] mx-auto flex items-center py-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="logo" className="sm:h-32 h-24 sm:w-32 w-24 py-2" />
        </div>

        {/* Tag name */}
        <div className="flex flex-col text-primary ml-4">
          <h1 className="sm:text-3xl text-xl font-bold ">
            BluStock Consultants
          </h1>
          <p className="sm:flex hidden sm:text-sm text-xs justify-end font-medium">
            A Stock Market Academy
          </p>
        </div>

        {/* Navbar */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden lg:flex flex-row gap-4 text-lg font-medium">
            <Link href="/" className={`${pathname === "/" ? "font-bold" : ""}`}>
              Home
            </Link>
            <Link
              href="/about"
              className={`${pathname === "/about" ? "font-bold" : ""}`}
            >
              About us
            </Link>
            <Link
              href="/courses"
              className={`${pathname === "/courses" ? "font-bold" : ""}`}
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "font-bold" : ""}`}
            >
              Contact us
            </Link>
          </div>
          <button
            className="lg:hidden p-2 bg-transparent focus:outline-none ml-auto text-primary"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      </div>
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden w-[85%] mx-auto pb-2 flex flex-col items-end">
          <nav className="flex flex-col text-sm font-medium">
            <Link
              href="/"
              className={`w-full text-right ${
                pathname === "/" ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`w-full text-right ${
                pathname === "/about" ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/courses"
              className={`w-full text-right ${
                pathname === "/courses" ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className={`w-full text-right ${
                pathname === "/contact" ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </div>
    </div>
  );
};

export default Header;
