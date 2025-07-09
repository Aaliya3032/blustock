import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token, newPassword } = await request.json();
  await connectDb();

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() },
  });
  if (!user) {
    return NextResponse.json(
      { error: "Invalid or expired token." },
      { status: 410 }
    );
  }

  user.password = await bcrypt.hash(
    newPassword,
    Number(process.env.BCRYPT_SALT)
  );
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  return NextResponse.json({ ok: true });
}
