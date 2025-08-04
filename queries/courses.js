import { Module } from "@/models/module";
import { Testimonial } from "@/models/testimonial";
import { User } from "@/models/user";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/models/category";
import { Course } from "@/models/course";
import { connectDb } from "@/helper/db";
import { getEnrollmentsForCourse } from "./enrollments";
import { getTestimonialsForCourse } from "./testimonials";
import { Lesson } from "@/models/lesson";

// export async function getCourseList() {
//     await connectDb()
//     const courses = await Course.find({}).select(["title","thumbnail","price","duration","category","instructor","modules"]).populate({
//         path: "category",
//         model: Category
//     }).populate({
//         path: "instructor",
//         model: User
//     }).populate({
//         path: "testimonials",
//         model: Testimonial
//     }).populate({
//         path: "modules",
//         model: Module
//     }).lean();
//     return replaceMongoIdInArray(courses);
// }
export async function getCourseList() {
    await connectDb();
  
    const courses = await Course.find({active:true})
      .select(["title", "thumbnail", "price", "duration", "category", "instructor", "testimonials", "modules"])
      .populate("category")
      .populate("instructor")
      .populate("testimonials")
      .populate("modules")
      .lean(); // This makes all documents plain JS objects
  
    // Convert MongoDB _id to string and remove sensitive fields
    const plainCourses = courses.map(course => ({
      id: course._id.toString(),
      title: course.title,
      thumbnail: course.thumbnail,
      price: course.price,
      duration: course.duration,
      category: {
        id: course.category?._id?.toString(),
        title: course.category?.title,
        description: course.category?.description,
        thumbnail: course.category?.thumbnail,
      },
      instructor: {
        id: course.instructor?._id?.toString(),
        firstName: course.instructor?.firstName,
        lastName: course.instructor?.lastName,
        email: course.instructor?.email,
        phone: course.instructor?.phone,
        profilePicture: course.instructor?.profilePicture,
        designation: course.instructor?.designation,
      },
      testimonials: course.testimonials?.map(t => ({
        id: t._id.toString(),
        name: t.name,
        feedback: t.feedback,
      })) || [],
      modules: course.modules?.map(m => ({
        id: m._id.toString(),
        title: m.title,
        description: m.description,
      })) || [],
    }));
  
    return plainCourses;
  }
  

export async function getCourseDetails(id) {
    await connectDb()
    const course = await Course.findById(id).populate({
        path: "category",
        model: Category
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "testimonials",
        model: Testimonial,
        populate : {
           path: 'user',
           model: User
        }
    }).populate({
        path: "modules",
        model: Module,
        populate:{
          path: 'lessonIds',
          model: Lesson
        }
    }).lean();
    return replaceMongoIdInObject(course);
}

function groupBy(array,keyFn){
  return array.reduce((acc,item) => {
    const key = keyFn(item)
    if(!acc[key]){
      acc[key] = []
    }
    acc[key].push(item);
    return acc
  },{})
}

export async function getCourseDetailsByInstructor(instructorId,expand){
  // console.log("kjshdfgwieushf",instructorId);
    const publishCourses = await Course.find({instructor: instructorId , active:true})
    .populate({path: "category" ,model: Category})
    .populate({path: "testimonials" ,model: Testimonial})
    .populate({path: "instructor" ,model: User})
    .lean();
    // console.log("kjshdfgwieushf",courses);

    const enrollments = await Promise.all(
        publishCourses.map(async (course) => {
            const enrollment = await getEnrollmentsForCourse(course.
                _id.toString());
                return enrollment;
        })
    );
    // console.log("kjshdfgwieushf",courses);

    // we have to group enrollments by course
    const groupByCourses = groupBy(enrollments.flat(), (item) => item.course)
    
    //calculate total Revenue
    const totalRevenue = publishCourses.reduce((acc,course) => {
      const enrollmentsforCourse = groupByCourses[course._id] || []
      return acc + enrollmentsforCourse.length * course.price
    },0)
    // console.log("kjshdfgwieushf",totalRevenue);
    

    const totalEnrollments = enrollments.reduce(( acc,obj )=> {
        return acc + obj.length;
    },0);
    
    const tesimonials = await Promise.all(
        publishCourses.map(async (course) => {
            const tesimonial = await getTestimonialsForCourse(course.
                _id.toString());
                return tesimonial;
        })
    );

    const totalTestimonials = tesimonials.flat();
    const avgRating = (totalTestimonials.reduce(function (acc, obj) {
        return acc + obj.rating;
    },0)) / totalTestimonials.length; 

    const firstName = publishCourses.length > 0 ? publishCourses[0]?.instructor?.
    firstName : "Unknown";
    const lastName = publishCourses.length > 0 ? publishCourses[0]?.instructor?.
    lastName : "Unknown";
    const fullInsName = `${firstName} ${lastName}`;

    const Designation = publishCourses.length > 0 ? publishCourses[0]?.instructor?.
    designation : "Unknown"; 

    const insImage = publishCourses.length > 0 ? publishCourses[0]?.instructor?.
    profilePicture : "Unknown";
    
    if(expand) {
      const allCourses = await Course.find({instructor: instructorId}).lean()
      return{
        "courses" : allCourses?.flat(),
        "enrollments": enrollments?.flat(),
        "reviews" : totalTestimonials,
      }
    }

    return {
        "courses" : publishCourses.length,
        "enrollments": totalEnrollments,
        "reviews" : totalTestimonials.length,
        "ratings" : avgRating.toPrecision(2),
        "inscourses" : publishCourses,
        "revenue" : totalRevenue,
        fullInsName,
        Designation,
        insImage
    } 
}

export async function create(courseData){
  try {
    const course = await Course.create(courseData)
    return JSON.parse(JSON.stringify(course))
  } catch (error) {
    throw new Error(error)
  }
}