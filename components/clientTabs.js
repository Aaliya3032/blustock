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

       {/* Loader ya Courses */}
      <div>
        {loading ? (
          <div className="flex justify-center py-10 text-white font-bold">
            Loading courses...
          </div>
        ) : courses.length === 0 ? (
          <div className="flex justify-center py-10 text-white font-bold">
            No batches available
          </div>
        ) : activeTab === "offline" ? (
          <OfflineClient courses={offlineCourses} />
        ) : (
          <OnlineClient courses={onlineCourses} />
        )}
      </div>
    </>
  );
};

export default ClientTabs;
