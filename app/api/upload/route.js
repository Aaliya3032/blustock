 import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { updateCourse } from "@/app/actions/course";
import { getUserByEmail, updateUserProfilePicture, updateUserAadhar } from "@/queries/users";
import { User } from "@/models/user";
import { v2 as cloudinary } from "cloudinary";

const pump = promisify(pipeline);

export const runtime = "nodejs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    // ---------- case 1: course thumbnail upload ----------
    if (formData.has("files") && formData.has("destination")) {
      const file = formData.get("files");
      const destination = formData.get("destination");

      if (!destination) {
        return new NextResponse("Destination not provided", { status: 400 });
      }

      const filePath = `${destination}/${file.name}`;
      await pump(file.stream(), fs.createWriteStream(filePath));

      const courseId = formData.get("courseId");
      await updateCourse(courseId, { thumbnail: file.name });

      return new NextResponse(`File ${file.name} uploaded successfully`, {
        status: 200,
      });
    }

    // ---------- case 2: Aadhar PDF upload ----------
    if (formData.has("aadhar") && formData.has("email")) {
      const aadharFile = formData.get("aadhar");
      const email = String(formData.get("email"));

      if (!aadharFile || !email) {
        return new NextResponse("Aadhar file or email missing", { status: 400 });
      }

      // Basic server-side validation for type and size
      if (aadharFile.type !== "application/pdf") {
        return NextResponse.json(
          { error: "Only PDF files are allowed for Aadhar." },
          { status: 400 }
        );
      }

      const maxSizeBytes = 2 * 1024 * 1024; // 2 MB
      if (aadharFile.size && aadharFile.size > maxSizeBytes) {
        return NextResponse.json(
          { error: "Aadhar PDF must be smaller than 2MB." },
          { status: 400 }
        );
      }

      const user = await getUserByEmail(email);
      if (!user) {
        return new NextResponse("User not found", { status: 404 });
      }

      const aadharBytes = await aadharFile.arrayBuffer();
      const aadharBuffer = Buffer.from(aadharBytes);

      const uploadRes = await cloudinary.uploader.upload(
        `data:${aadharFile.type};base64,${aadharBuffer.toString("base64")}`,
        {
          folder: "user_aadhar",
          // Add .pdf extension so URL ends with .pdf
          public_id: `aadhar_${user.id}.pdf`,
          overwrite: true,
          resource_type: "raw",
          format: "pdf",
        }
      );

      console.log("Aadhar upload success:", uploadRes.secure_url);

      await updateUserAadhar(email, uploadRes.secure_url);

      return NextResponse.json({ fileName: uploadRes.secure_url });
    }

    // ---------- case 3: profile picture upload ----------
    const file = formData.get("file");
    const email = String(formData.get("email"));

    if (!file || !email) {
      return new NextResponse("File or email missing", { status: 400 });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`,
      {
        folder: "user_profiles",
        public_id: `profile_${user.id}`,
        overwrite: true,
      }
    );
    console.log("Upload success:", uploadRes.secure_url);

    // ✅ Use your queries layer to update user (not direct mongoose)
    const updated = await updateUserProfilePicture(email, uploadRes.secure_url);
    console.log("DB updated user:", updated);

    return NextResponse.json({ fileName: uploadRes.secure_url });

} catch (err) {
    console.error("Upload error:", err);
    return new NextResponse(err.message, { status: 500 });
  }
}
