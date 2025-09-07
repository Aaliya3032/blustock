"use server"

import { Course } from "@/models/course"
import { Testimonial } from "@/models/testimonial"

export async function createReview(data,loginid,courseId){
   const {review,rating} = data
   try {
     const newTestimonial = await Testimonial.create({
        content: review,
        courseId ,
        user: loginid,
        rating,
     })
     if(!newTestimonial){
        throw new Error("Failed to create a new testimonial")
     }

     //Update the course to include the testimonial id
     const updateCourse = await Course.findByIdAndUpdate(
        courseId,
        {$push: {testimonials: newTestimonial._id}},
        {new: true} //Return the updated course document
     )
     
     if(!updateCourse){
        throw new Error("Failed to update the course testimonial")
     }
     return {
      success: true,
      testimonialId: newTestimonial._id.toString(),
      rating: newTestimonial.rating,
      content: newTestimonial.content,
    };

   } catch (error) {
     console.error("createReview error:", error);
    throw new Error(error?.message || "Something went wrong while creating review");
   }
}