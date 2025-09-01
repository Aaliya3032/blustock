"use client";
import { useEffect, useState } from "react";
import OfflineClient from "./OfflineClient";
import OnlineClient from "./OnlineClient";

const ClientTabs = () => {
   const [activeTab, setActiveTab] = useState("offline");
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, courseRes] = await Promise.all([
          fetch("/api/categories").then((res) => res.json()),
          fetch("/api/courses").then((res) => res.json()),
        ]);
        setCategories(catRes || []);
        setCourses(courseRes || []);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center text-white font-bold">
        Loading courses...
      </div>
    );
  }

  if (categories.length === 0 && courses.length === 0) {
    return (
      <div className="flex justify-center text-white font-bold">
        No batches available
      </div>
    );
  }

  const offlineCourses = courses.filter(
    (c) => c?.category?.title?.toLowerCase() === "offline"
  );
  const onlineCourses = courses.filter(
    (c) => c?.category?.title?.toLowerCase() === "online"
  );


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
        Live trading session on 3 days a week
      </div>

      <div>
        {activeTab === "offline" && <OfflineClient courses={offlineCourses}/>}
        {activeTab === "online" && <OnlineClient courses={onlineCourses}/>}
      </div>
    </>
  );
};

export default ClientTabs;
