import { NextResponse } from "next/server";
import { getCourseList } from "@/queries/courses";

export async function GET() {
  const courses = await getCourseList();
  return NextResponse.json(courses);
}
