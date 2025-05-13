"use client";
import { useState } from "react";
import Offline from "./Offline";
import Online from "./Online";

const ClientTabs = ({ categories}) => {
  const [activeTab, setActiveTab] = useState("offline");

  return (
    <>
      <ul className="flex flex-row flex-wrap gap-4 mb-4 justify-center">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`cursor-pointer py-2 border-b-2 px-2 text-white ${
              activeTab.toLowerCase() === cat.title.toLowerCase()
                ? "border-white text-white font-bold bg-transparent"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab(cat.title.toLowerCase())}
          >
            {cat.title}
          </li>
        ))}
      </ul>

      <div className="font-medium text-xl text-white py-4" data-aos="fade-right">
        Live Trading Session On Monday & Wednesday
      </div>

      <div>
        {activeTab === "offline" && <Offline/>}
        {activeTab === "online" && <Online />}
      </div>
    </>
  );
};

export default ClientTabs;
