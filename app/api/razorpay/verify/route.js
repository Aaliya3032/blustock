import { NextResponse } from "next/server";
import crypto from "crypto";
import { Enrollment } from "@/models/enrollment";

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId,userId ,paymentMethod = "razorpay" } =
      await req.json();
      
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
