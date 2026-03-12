import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const certId = searchParams.get("id")?.trim();

  const conn = await connectDB();

  // force correct database
  const db = conn.connection.useDb("course_manager");

  const certificate = await db
    .collection("interns_certificates")
    .findOne({ certificateId: certId });

  console.log("Searching:", certId);
  console.log("Found:", certificate);

  if (!certificate) {
    return NextResponse.json({ verified:false });
  }

  return NextResponse.json({
    verified:true,
    certificate
  });
}