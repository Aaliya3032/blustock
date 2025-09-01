"use client";
import React, { useEffect, useState } from 'react'
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";
import EnrollCourse from '@/components/enroll-course';

const courseCard = () => {
   const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses"); // API call
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  if (loading) {
    return <p className='text-primary font-semibold flex justify-center items-center mt-4 text-xl'>Loading courses...</p>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <Link key={course.id} href={`/courses/${course.id}`}>
          <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <Image
                src={`/assets/${course?.thumbnail}`}
                alt={"course"}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col pt-2">
              <div className="text-lg md:text-base font-medium group-hover:text-tertiary line-clamp-2 text-primary">
                {course?.title}
              </div>
              <p className="text-xs text-muted-foreground text-gray-600">
                {course?.category?.title}
              </p>
              <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                <div className="flex items-center gap-x-1 text-slate-500">
                  <BookOpen className="w-4" />
                  <span>{course?.modules.length} Chapters</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-md md:text-sm font-medium text-slate-700">
                  {formatPrice(course?.price)}
                </p>
                <EnrollCourse asLink={true} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default courseCard;

  //   <Link key={course.id} href={`/courses/${course.id}`}>
  //   <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
  //     <div className="relative w-full aspect-video rounded-md overflow-hidden">
  //       <Image
  //         src={`/assets/${course?.thumbnail}`}
  //         alt={"course"}
  //         className="object-cover"
  //         fill
  //       />
  //     </div>
  //     <div className="flex flex-col pt-2">
  //       <div className="text-lg md:text-base font-medium group-hover:text-tertiary line-clamp-2 text-primary">
  //         {course?.title}
  //       </div>
  //       <p className="text-xs text-muted-foreground text-gray-600">
  //         {course?.category?.title}
  //       </p>
  //       <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
  //         <div className="flex items-center gap-x-1 text-slate-500">
  //           <div>
  //             <BookOpen className="w-4" />
  //           </div>
  //           <span>{course?.modules.length} Chapters</span>
  //         </div>
  //       </div>

  //       <div className="flex items-center justify-between mt-4">
  //         <p className="text-md md:text-sm font-medium text-slate-700">
  //           {formatPrice(course?.price)}
  //         </p>

  //        <EnrollCourse asLink={true}/>
  //       </div>
  //     </div>
  //   </div>
  // </Link>