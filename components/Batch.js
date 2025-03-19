"use client";
import React, { useState } from "react";
import bg from '../assets/trading_bg1.webp'
import Offline from "./Offline";
import Online from "./Online";

const Batch = () => {
    const [activeTab, setActiveTab] = useState("offline");
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
      <div className="w-[85%] mx-auto py-12 relative z-10">
        <div
          className="sm:text-3xl text-2xl font-bold mb-4 text-white"
          data-aos="fade-right"
        >
          Choose Your Batch :
        </div>
        <ul className="flex flex-row flex-wrap gap-4">
          <li
            className={`cursor-pointer py-2 border-b-2 px-2 text-white ${
              activeTab === "offline"
                ? "border-white text-white font-bold bg-transparent"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("offline")}
          >
            OFFLINE
          </li>
          <li
            className={`cursor-pointer py-2 border-b-2 px-2 text-white ${
              activeTab === "online"
                ? "border-white text-white font-bold bg-transparent"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("online")}
          >
            ONLINE
          </li>
        </ul>

        {/* Conditionally Render Components Based on Active Tab */}
        <div className="mt-4">
          {activeTab === "offline" && <Offline/>}
          {activeTab === "online" && <Online/>}
        </div>
      </div>
    </div>
  );
};

export default Batch;
