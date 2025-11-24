import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from '@/lib/formatPrice';
import EnrollCourse from '@/components/enroll-course';
import { auth } from '@/auth';
import { getUserByEmail } from '@/queries/users';
import { hasEnrollmentForCourse } from '@/queries/enrollments';

const CourseDetailsIntro = async({course}) => {

  const session = await auth()
  const loggedInUser = await getUserByEmail(session?.user?.email)
  const  hasEnrollment = await hasEnrollmentForCourse(course?.id,loggedInUser?.id)

  return (
    <div className="mb-12">
      <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded">
            {course?.category?.title || "Course"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {course?.title}
        </h1>

        {/* Subtitle */}
        {course?.subtitle && (
          <p className="text-lg text-gray-700 mb-6">
            {course?.subtitle}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-start flex-wrap gap-4 mb-6">
          {
            hasEnrollment ? (
              <Link href={`/courses/${course?.id}/lesson`} className={cn(
                buttonVariants({size: "lg"}),
                "bg-secondary text-white hover:bg-secondary/90"
              )}>
                Access Course
              </Link>
            ) : (
              <EnrollCourse courseId={course?.id} price={course?.price}/>
            )
          }
          <div className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-semibold">
            Price: {formatPrice(course?.price)}
          </div>
        </div>

        {/* Course Image */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-md border border-gray-200">
            <Image
              className="object-cover"
              fill
              src={`/assets/${course?.thumbnail}`}
              alt={course?.title || "Course thumbnail"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsIntro