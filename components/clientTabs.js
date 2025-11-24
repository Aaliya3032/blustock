"use client";
import { useEffect, useState } from "react";
import OfflineClient from "./OfflineClient";
import OnlineClient from "./OnlineClient";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const ClientTabs = ({ preloadedCategories = null, preloadedCourses = null }) => {
  const [activeTab, setActiveTab] = useState("offline");
  // ✅ Initialize with preloaded data if available (SSR)
  const [categories, setCategories] = useState(preloadedCategories || []);
  const [courses, setCourses] = useState(preloadedCourses || []);
  const [loading, setLoading] = useState(!preloadedCategories || !preloadedCourses);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Only fetch if we don't have preloaded data (CSR fallback)
    if (preloadedCategories && preloadedCourses) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const [catRes, courseRes] = await Promise.all([
          fetch(`${baseUrl}/api/categories`),
          fetch("/api/courses"),
        ]);

        // Check response before parsing
        const catData = catRes.ok ? await catRes.json().catch(() => ({})) : {};
        const courseData = courseRes.ok ? await courseRes.json().catch(() => ({})) : {};

        setCategories(Array.isArray(catData.data) ? catData.data : []);
        setCourses(Array.isArray(courseData.data) ? courseData.data : []);
      } catch (err) {
        console.error("Error fetching:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [preloadedCategories, preloadedCourses]);


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

       {/* Loader / Error / Courses */}
      <div>
        {loading ? (
          <div className="flex justify-center py-10 text-white font-bold">
            Loading courses...
          </div>
        ) : error ? (
          <div className="flex justify-center py-10 text-red-500 font-bold">
            {error}
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
