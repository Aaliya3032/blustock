import React from 'react'
import { CheckCheck } from "lucide-react";

export const CourseOverview = ({course}) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl md:text-3xl text-primary font-bold mb-4">Course Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {course?.description}
        </p>
      </div>
      
      {course?.learning && course?.learning.length > 0 && (
        <div className="bg-primary/5 border border-primary/10 space-y-6 p-8 rounded-lg">
          <h4 className="text-2xl md:text-3xl text-primary font-bold">What You Will Learn?</h4>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 text-gray-700">
            {course?.learning.map((learn,index) => (
              <li className="flex space-x-3" key={index}>
                <div className="flex-none relative top-1 text-secondary">
                  <CheckCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  {learn}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
