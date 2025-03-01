"use client";
import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const Theme = () => {
     const { theme, setTheme } = useTheme();

  return (
    <div>
    {theme === "dark" ? (
      <button onClick={() => setTheme("light")}>
        <MdOutlineLightMode />
      </button>
    ) : (
      <button onClick={() => setTheme("dark")}>
        <MdOutlineDarkMode />
      </button>
    )}
  </div>
  )
}

export default Theme