import { NextResponse } from "next/server";
import fs from "fs";
import fsPromises from "fs/promises";
import { pipeline } from "stream";
import { promisify } from "util";
import path from "path";
import { updateCourse } from "@/app/actions/course";
import { getUserByEmail } from "@/queries/users";
import { User } from "@/models/user"; // make sure you have this model

const pump = promisify(pipeline);

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

      const user = await getUserByEmail(email);
      if (!user) {
        return new NextResponse("User not found", { status: 404 });
      }

      // ensure uploads dir exists
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      await fsPromises.mkdir(uploadsDir, { recursive: true });

      // delete old profile file if exists inside /uploads/
      if (user.profilePicture && typeof user.profilePicture === "string") {
        const oldPath = user.profilePicture.startsWith("/")
          ? user.profilePicture.slice(1)
          : user.profilePicture;

        if (oldPath.startsWith("uploads/")) {
          const absoluteOld = path.join(process.cwd(), oldPath);
          try {
            await fsPromises.unlink(absoluteOld);
          } catch {
            // ignore missing file
          }
        }
      }

      // use user id as filename (stable, avoids junk files)
      const ext = path.extname(file.name) || ".png";
      const idForName = user.id ?? user._id ?? Date.now().toString();
      const newFileName = `${idForName}${ext}`;
      const newFilePath = path.join(uploadsDir, newFileName);

      const buffer = Buffer.from(await file.arrayBuffer());
      await fsPromises.writeFile(newFilePath, buffer);

      const publicPath = `/uploads/${newFileName}`;
      await User.findOneAndUpdate({ email }, { profilePicture: publicPath });

      return NextResponse.json({ fileName: publicPath });
    }

    // fallback
    return new NextResponse("Invalid upload request", { status: 400 });
  } catch (err) {
    console.error("Upload error:", err);
    return new NextResponse(err.message, { status: 500 });
  }
}
