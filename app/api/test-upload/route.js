import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs"; // force node runtime

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log("Cloudinary ENV:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: !!process.env.CLOUDINARY_API_KEY,
      apiSecret: !!process.env.CLOUDINARY_API_SECRET,
    });

    // Upload to cloudinary
    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`,
      { folder: "test_uploads" }
    );

    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
