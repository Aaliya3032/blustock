import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";

export async function POST(req) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { courseId } = await req.json();
    if (!courseId) {
      return NextResponse.json({ error: "courseId is required" }, { status: 400 });
    }

    await connectDb();

    const updated = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        pendingCourseId: courseId,
        isPaymentVerified: false,
      },
      { new: true }
    ).lean();

    if (!updated) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Offline enrollment error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

