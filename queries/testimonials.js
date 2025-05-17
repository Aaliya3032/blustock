import { replaceMongoIdInArray } from "@/lib/convertData"; 
import { Testimonial } from "@/models/testimonial";

export async function getTestimonialsForCourse(courseId){
    const testimonials = await Testimonial.find({courseId: courseId}).lean();
    return replaceMongoIdInArray(testimonials);
}

export async function getAllTestimonials() {
    try {
      const testimonials = await Testimonial.find({}).populate("user","firstName lastName profilePicture designation").lean();
      return replaceMongoIdInArray(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }
  }