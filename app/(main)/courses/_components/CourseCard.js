"use client";
import React, { useEffect, useState } from 'react'
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";
import EnrollCourse from '@/components/enroll-course';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const CourseCard = ({ preloadedData = null }) => {
  // ✅ Initialize with preloaded data if available (SSR)
  const [courses, setCourses] = useState(preloadedData || []);
  const [loading, setLoading] = useState(!preloadedData);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Only fetch if we don't have preloaded data (CSR fallback)
    if (preloadedData) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/api/courses`);
        const data = await res.json();

        if (data.success) {
          setCourses(data.data);
        } else {
          setError(data.message || "Failed to load courses");
        }
      } catch (err) {
        console.error("Client error:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [preloadedData]);


  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className='text-primary font-semibold text-xl'>Loading courses...</p>
      </div>
    );
  }

 if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-red-500 font-semibold text-xl">
          {error}
        </p>
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-primary font-semibold text-xl">
          No courses found.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
          <Link href={`/courses/${course.id}`} className="flex flex-col flex-1">
            <div className="relative w-full aspect-video">
              <Image
                src={`/assets/${course?.thumbnail}`}
                alt={course?.title || "course"}
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                  {course?.category?.title || "Course"}
                </span>
                <div className="flex items-center gap-x-1 text-xs text-gray-500">
                  <BookOpen className="w-3 h-3" />
                  <span>{course?.modules?.length || 0} Chapters</span>
                </div>
              </div>
              <CardTitle className="text-xl mb-2 line-clamp-2">
                {course?.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {course?.description || "Comprehensive stock market training course"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-primary">
                  {formatPrice(
                    typeof course?.price === "number"
                      ? course.price
                      : Number(course?.price ?? 0)
                  )}
                </p>
                <span className="text-sm text-secondary font-medium">
                  View Details →
                </span>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default CourseCard;

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