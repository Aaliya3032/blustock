"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession , signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/logo2.png";
import bg from "../assets/trading_bg1.webp";
import Image from "next/image";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileNav from "./Mobile_Nav";

const Header = ({loggedInUser}) => {
  // console.log("lhkfbs",loggedInUser);
  
  const { data: session } = useSession();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [loginSession, setLoginSession] = useState(null);

  useEffect(() => {
    setLoginSession(session);
  }, [session]);

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "About us",
      href: "/about",
    },

    {
      title: "Courses",
      href: "/courses",
    },

    {
      title: "Contact us",
      href: "/contact",
    },
  ];

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div
        className="w-full bg-gray-50 relative"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-60"></div>
        <div className="min-h-screen flex justify-center items-center text-xl text-white relative z-20">
          Loading...
        </div>
      </div>
    ); // Avoid hydration issues

  return (
    <div className="sticky z-30 bg-white shadow-sm w-full top-0 left-0 right-0">
      <div className="w-[85%] mx-auto flex items-center py-1">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="logo"
            className="sm:h-28 h-24 sm:w-28 w-24 py-2"
          />
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
          <div className="hidden lg:flex flex-row gap-4 text-lg font-medium text-primary">
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
            {!loginSession && (
              <>
                <Link
                  href="/login"
                  className={`${pathname === "/login" ? "font-bold" : ""}`}
                >
                  Login
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div
                     className={`${
                      pathname === "/register/instructor" || pathname === "/register/student"
                        ? "font-bold"
                        : ""
                    }`}
                    >
                      Register
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 mt-4 bg-white text-primary">
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/register/student">Student</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/register/instructor">Instructor</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>


          {showMobileMenu && navLinks && (
            <MobileNav navLinks={navLinks} closeMenu={() => setShowMobileMenu(false)} loginSession={loginSession}></MobileNav>
          )}
          {loginSession && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <Avatar>
                    <AvatarImage
                      src={loggedInUser?.profilePicture}
                      alt="blustock"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-4  bg-white text-primary">
                <DropdownMenuItem className="cursor-pointer hover:font-medium" asChild>
                  <Link href="/account">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:font-medium" asChild>
                  <Link href="account/enrolled-courses">My Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:font-medium" asChild>
                  <Link href="">Testimonials & Certificates</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:font-medium" asChild>
                  <Link href="" onClick={(e) => {e.preventDefault(); signOut();}}>Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <button
            className="flex items-center space-x-2 lg:hidden text-primary"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
