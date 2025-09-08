import { NextResponse } from "next/server";
import { getAllTestimonials } from "@/queries/testimonials";

export async function GET() {
  try {
    const rawTestimonials = await getAllTestimonials();

    const testimonials = rawTestimonials.map((t) => ({
      id: t.id,
      content: t.content,
      rating: t.rating,
      user: {
        firstName: t.user.firstName,
        lastName: t.user.lastName,
        designation: t.user.designation,
        profilePicture: t.user.profilePicture,
      },
    }));
    return NextResponse.json({success: true, testimonials: testimonials || [] });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { success: false,error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
