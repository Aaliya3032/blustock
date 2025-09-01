import { NextResponse } from "next/server";
import { getCourseList } from "@/queries/courses";

export async function GET() {
  try {
    const courses = await getCourseList();

    return NextResponse.json(
      { success: true, data: courses || [] }, // always valid JSON
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/courses:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
