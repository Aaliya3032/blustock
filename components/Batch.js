import React from "react";
import bg from '../assets/Hero_bg.jpg';
import ClientTabs from "./clientTabs";
import { getCategories } from "@/queries/categories";
import { getCourseList } from "@/queries/courses";

const Batch = async () => {
  // ✅ Fetch data server-side
  let preloadedCategories = [];
  let preloadedCourses = [];
  try {
    [preloadedCategories, preloadedCourses] = await Promise.all([
      getCategories(),
      getCourseList()
    ]);
  } catch (error) {
    console.error("Error preloading batch data:", error);
  }

  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 bg-primary opacity-0"></div>
      <div className="w-[85%] mx-auto py-12 relative z-10">
        <div
          className="md:text-4xl text-2xl font-bold mb-8 text-white flex justify-center items-center"
          data-aos="flip-down"
        >
          Choose Your Batch
        </div>
       
          <ClientTabs preloadedCategories={preloadedCategories} preloadedCourses={preloadedCourses} />
      
      </div>
    </div>
  );
};

export default Batch;
