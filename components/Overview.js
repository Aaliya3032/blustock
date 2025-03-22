"use client";
import React, { useState } from "react";
import Syllabus from "./Syllabus";
import Candidate from "./Candidate";
import Included from "./Included";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("syllabus");
  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="w-[85%] mx-auto py-12">
        <div className="md:text-4xl text-2xl font-bold mb-8 flex justify-center" data-aos="flip-down">
          Stock Trading Course Overview
        </div>
        <ul className="flex flex-row flex-wrap gap-4">
          <li
            className={`cursor-pointer py-2 border-b-2 px-2 ${
              activeTab === "syllabus"
                ? "border-secondary text-secondary font-bold bg-transparent"
                : "border-transparent bg-gray-300"
            }`}
            onClick={() => setActiveTab("syllabus")}
          >
            Course Syllabus
          </li>
          <li
            className={`cursor-pointer py-2 border-b-2 px-2 ${
              activeTab === "who"
                ? "border-secondary text-secondary font-bold bg-transparent"
                : "border-transparent bg-gray-300 "
            }`}
            onClick={() => setActiveTab("who")}
          >
            Who it&apos;s for
          </li>

          <li
            className={`cursor-pointer py-2 border-b-2 px-2  ${
              activeTab === "included"
                ? "border-secondary text-secondary font-bold bg-transparent"
                : "border-transparent bg-gray-300"
            }`}
            onClick={() => setActiveTab("included")}
          >
            Additional Benefit
          </li>
        </ul>

        {/* Conditionally Render Components Based on Active Tab */}
        <div className="mt-4">
          {activeTab === "syllabus" && <Syllabus />}
          {activeTab === "who" && <Candidate />}
          {activeTab === "included" && <Included/>}
        </div>
      </div>
    </div>
  );
};

export default Overview;
