import { NextResponse } from "next/server";
import Razorpay from "razorpay";


export async function POST(req) {
    try {
        const body = await req.json()

        // Initialize Razorpay instance
         const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create order
    const options = {
      amount: body.amount * 100, 
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });

    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return NextResponse.json(
      { error: "Unable to create order" },
      { status: 500 }
    );
    }
}