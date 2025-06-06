import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseOverview } from './CourseOverview';
import CourseCurriculam from './CourseCurriculam';
import CourseInstructor from './CourseInstructor';
import Image from 'next/image';
import { Kanban } from 'lucide-react';
import { NotebookTabs } from 'lucide-react';
import { ContactRound } from 'lucide-react';
import { formatMyDate } from '@/lib/date';

const CourseDetails = ({course}) => {
  
  return (
    <section className="py-8 md:py-12 lg:py-24">
        <div className="container">
          <span className="bg-green-500 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
            {course?.category?.title}
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold 2xl:text-5xl mt-3">
            {course?.title}
          </h3>
          <p className="mt-3 text-gray-600 text-sm">
            {course?.subtitle}
          </p>
          {/*  */}
          <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
            <div className="flex items-center gap-2">
              <Image
                className="w-[40px] h-[40px] rounded-full"
                src={course?.instructor?.profilePicture}
                width={20}
                height={20}
                alt={course?.instructor?.firstName}
              />
              <p className="font-bold text-gray-700">{course?.instructor?.firstName} {" "} {course?.instructor?.lastName}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-success font-semibold text-gray-700">Last Updated: </span>
              <span className='text-gray-600'>{formatMyDate(course?.modifiedOn)}</span>
            </div>
          </div>  

          {/* Tab */}
          <div className="my-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px] text-primary">
                <TabsTrigger value="overview"><Kanban className='sm:w-5 w-3 mr-2 flex-none'/>Overview</TabsTrigger>
                <TabsTrigger value="curriculum"><NotebookTabs className='sm:w-5 w-3 mr-2 flex-none'/>Curriculum</TabsTrigger>
                <TabsTrigger value="instructor"><ContactRound className='sm:w-5 w-3 mr-2 flex-none'/>Instructor</TabsTrigger>
                {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
              </TabsList>
              <TabsContent value="overview">
                {/* each tab content can be independent component */}
                <CourseOverview course={course}/>
              </TabsContent>
              <TabsContent value="curriculum">
               <CourseCurriculam course={course}/>
              </TabsContent>
              <TabsContent value="instructor">
                <CourseInstructor course={course}/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
  )
}

export default CourseDetails