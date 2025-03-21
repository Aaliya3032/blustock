"use client";
import React, { useState } from "react";
import bg from '../assets/trading_bg1.webp'
import Offline from "./Offline";
import Online from "./Online";

const Batch = () => {
    const [activeTab, setActiveTab] = useState("offline");
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
        <div
          className="sm:text-3xl text-2xl font-bold mb-8 text-white flex justify-center items-center"
          data-aos="flip-down"
        >
          Choose Your Batch
        </div>
        <ul className="flex flex-row flex-wrap gap-4 mb-4 justify-center">
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

        <div className="font-medium text-xl text-white py-4" data-aos="fade-right">Live Trading Session On Monday & Wednesday</div>

        {/* Conditionally Render Components Based on Active Tab */}
        <div>
          {activeTab === "offline" && <Offline/>}
          {activeTab === "online" && <Online/>}
        </div>
      </div>
    </div>
  );
};

export default Batch;
