export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import { NextResponse } from "next/server";
import { getCourseList } from "@/queries/courses";

export async function GET() {
  try {
    const courses = await getCourseList();

    return NextResponse.json(
      { success: true, data: courses || [] },
      { status: 200 , headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Error in /api/courses:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch courses" },
      { status: 500 ,  headers: { "Cache-Control": "no-store" }  }
    );
  }
}
