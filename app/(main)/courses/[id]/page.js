import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { getCourseDetails, getCourseList } from "@/queries/courses";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";


export default async function SingleCoursePage({params}) {
  const {id} = await params
  const course = await getCourseDetails(id)
  const courses = await getCourseList();
  
  
  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
      <div className="w-[85%] mx-auto py-12">
        <CourseDetailsIntro course={course}/>

        <CourseDetails course={course}/>
        
        {course?.testimonials && 
          <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)}/>
        }

        <RelatedCourses courses={courses} id={id}/>
      </div>
    </div>
  );
}
