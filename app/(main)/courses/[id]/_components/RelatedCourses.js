import React from 'react'
import { BookOpen } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/formatPrice';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RelatedCourses = ({id,courses}) => {
  const filteredCourses = courses.filter(course => course.id !== id);
  
  if (filteredCourses.length === 0) {
    return null;
  }
  
  return (
    <section className="mt-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Related Courses
        </h2>
        <p className="text-gray-700">
          Explore more courses to enhance your trading skills
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.slice(0, 6).map((course) => (
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
                    {formatPrice(course?.price)}
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
    </section>
  )
}

export default RelatedCourses