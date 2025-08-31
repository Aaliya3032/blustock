 import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { updateCourse } from "@/app/actions/course";
import { getUserByEmail } from "@/queries/users";
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

    // ---------- case 2: profile picture upload ----------
   if (formData.has("file") && formData.has("email")) {
      const file = formData.get("file");
      const email = String(formData.get("email"));

       if (!file || !email) {
      return new NextResponse("File or email missing", { status: 400 });
    }

      const user = await getUserByEmail(email);
      console.log(user,"jhsvdjmafbjh");
      
      if (!user) {
        return new NextResponse("User not found", { status: 404 });
      }

      // Convert file to buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

       // ✅ Upload using base64
    const uploadRes = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`,
      {
        folder: "user_profiles",
        public_id: `profile_${user.id}`,
        overwrite: true,
      }
    );

      // Update DB with Cloudinary URL
      await User.findOneAndUpdate(
        { email },
        { profilePicture: uploadRes.secure_url }
      );

      return NextResponse.json({ fileName: uploadRes.secure_url });
    }

    // fallback
    return new NextResponse("Invalid upload request", { status: 400 });
  } catch (err) {
    console.error("Upload error:", err);
    return new NextResponse(err.message, { status: 500 });
  }
}
