import { Module } from "@/models/module";
import { Testimonial } from "@/models/testimonial";
import { User } from "@/models/user";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/models/category";
import { Course } from "@/models/course";
import { connectDb } from "@/helper/db";
import { getEnrollmentsForCourse } from "./enrollments";
import { getTestimonialsForCourse } from "./testimonials";

export async function getCourseList() {
    await connectDb()
    const courses = await Course.find({}).select(["title","thumbnail","price","duration","category","instructor"]).populate({
        path: "category",
        model: Category
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "testimonials",
        model: Testimonial
    }).populate({
        path: "modules",
        model: Module
    }).lean();
    return replaceMongoIdInArray(courses);
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
        model: Module
    }).lean();
    return replaceMongoIdInObject(course);
}

export async function getCourseDetailsByInstructor(instructorId){
    const courses = await Course.find({instructor: instructorId }).lean();

    const enrollments = await Promise.all(
        courses.map(async (course) => {
            const enrollment = await getEnrollmentsForCourse(course.
                _id.toString());
                return enrollment;
        })
    );

    const totalEnrollments = enrollments.reduce(( acc,obj )=> {
        return acc + obj.length;
    },0);
    
    const tesimonials = await Promise.all(
        courses.map(async (course) => {
            const tesimonial = await getTestimonialsForCourse(course.
                _id.toString());
                return tesimonial;
        })
    );

    const totalTestimonials = tesimonials.flat();
    const avgRating = (totalTestimonials.reduce(function (acc, obj) {
        return acc + obj.rating;
    },0)) / totalTestimonials.length; 

    return {
        "courses" : courses.length,
        "enrollments": totalEnrollments,
        "reviews" : totalTestimonials.length,
        "ratings" : avgRating.toPrecision(2)
    } 
}