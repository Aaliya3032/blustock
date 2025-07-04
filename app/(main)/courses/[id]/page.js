import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { getCourseDetails, getCourseList } from "@/queries/courses";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";

const SingleCoursePage = async({params : {id}}) => {

  const course = await getCourseDetails(id)
  const courses = await getCourseList();
  
  
  return (
    <div className="w-[85%] pb-12 mx-auto">
     <CourseDetailsIntro course={course}/>

     <CourseDetails course={course}/>
    {course?.testimonials && 
    <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)}/>
    }

      <RelatedCourses courses={courses} id={id}/>
      
      </div>
  );
};
export default SingleCoursePage;
