import { NextResponse } from "next/server";
import crypto from "crypto";
import { Enrollment } from "@/models/enrollment";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId,userId ,paymentMethod = "razorpay" } =
      await req.json();

    await connectDb();

    // Double-check user eligibility on the server for security
    const user = await User.findById(userId).lean();
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 400 });
    }

    const DEFAULT_AVATAR =
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

    if (
      !user.profilePicture ||
      user.profilePicture === DEFAULT_AVATAR ||
      !user.aadhar ||
      !user.isInstructorVerified
    ) {
      return NextResponse.json(
        { success: false, error: "User profile not verified for enrollment" },
        { status: 400 }
      );
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

      if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      await Enrollment.create({
      course: courseId,
      student: userId,
      method: paymentMethod,
      enrollment_date: new Date(),
      status: "complete",
      completion_date: new Date(),
    });
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
