import React from 'react'
import { Tv } from "lucide-react";
import { cn } from '@/lib/utils'
import { getLesson } from '@/queries/lessons';

const CourseLessonList = async({lessonId}) => {
  const lesson = await getLesson(lessonId)  
  
  return (
    <>
      <button
          type="button"
          className={cn(
            "flex items-center gap-x-2 text-tertiary text-sm font-[500]  transition-all hover:text-primary  w-full"
          )}
        >
          <div className="flex items-center gap-x-2">
            <Tv size={16} className={cn("text-tertiary hover:text-primary")} />
            {lesson?.title}
          </div>
        </button>
    </>
  )
}

export default CourseLessonList