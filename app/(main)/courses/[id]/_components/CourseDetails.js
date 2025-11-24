import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseOverview } from "./CourseOverview";
import CourseCurriculam from "./CourseCurriculam";
import CourseInstructor from "./CourseInstructor";
import Image from "next/image";
import { Kanban } from "lucide-react";
import { NotebookTabs } from "lucide-react";
import { ContactRound } from "lucide-react";
import { formatMyDate } from "@/lib/date";

const CourseDetails = ({ course }) => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        {/* Instructor and Date Info */}
        <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-8 mb-8 pb-6 border-b">
          <div className="flex items-center gap-3">
            <Image
              className="w-[50px] h-[50px] rounded-full border-2 border-secondary/20"
              src={
                course?.instructor?.profilePicture
                  ? course.instructor.profilePicture
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              width={50}
              height={50}
              alt={course?.instructor?.firstName}
            />
            <div>
              <p className="font-bold text-primary text-lg">
                {course?.instructor?.firstName} {course?.instructor?.lastName}
              </p>
              <p className="text-sm text-gray-600">Instructor</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700">
              Last Updated:{" "}
            </span>
            <span className="text-gray-600">
              {formatMyDate(course?.modifiedOn)}
            </span>
          </div>
        </div>

        {/* Tab */}
        <div>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 text-primary bg-gray-50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white">
                <Kanban className="sm:w-5 w-3 mr-2 flex-none" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-white">
                <NotebookTabs className="sm:w-5 w-3 mr-2 flex-none" />
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="instructor" className="data-[state=active]:bg-white">
                <ContactRound className="sm:w-5 w-3 mr-2 flex-none" />
                Instructor
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <CourseOverview course={course} />
            </TabsContent>
            <TabsContent value="curriculum" className="mt-6">
              <CourseCurriculam course={course} />
            </TabsContent>
            <TabsContent value="instructor" className="mt-6">
              <CourseInstructor course={course} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
