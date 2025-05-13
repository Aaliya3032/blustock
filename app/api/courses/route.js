import { getCourseList } from "@/queries/courses";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const courses = await getCourseList();
        return NextResponse.json(courses);
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}