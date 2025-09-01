"use client";
import { CourseProgress } from "@/components/course-progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";

const EnrolledCourseCard = ({ enrollment }) => {
  const course = enrollment.course;

  return (
    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full bg-white">
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image
          src={`/assets/${course?.thumbnail}`}
          alt={course?.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col pt-2">
        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
          {course?.title}
        </div>
        <span className="text-xs text-muted-foreground">
          {enrollment.courseCategory?.title}
        </span>
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div className="flex items-center gap-x-1 text-slate-500">
            <BookOpen className="w-4" />
            <span>{enrollment.totalModuleCount} Chapters</span>
          </div>
        </div>
        <div className="border-b pb-2 mb-2">
          <div className="flex items-center justify-between">
            <span className="text-md md:text-sm font-medium text-slate-700">
              Total Modules: {enrollment.totalModuleCount}
            </span>
            <div className="text-md md:text-sm font-medium text-slate-700">
              Completed Modules{" "}
              <Badge variant="success">{enrollment.totalCompletedModules}</Badge>
            </div>
          </div>
        </div>
        <CourseProgress size="sm" value={enrollment.totalProgress} />
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
