import { connectDb } from "@/helper/db";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();
  await connectDb();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { error: "No account with that email." },
      { status: 404 }
    );
  }

  // Generate a reset token and expiry (1 hour)
  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 60 * 60 * 1000;
  await user.save();

  // Configure Gmail SMTP
  const transporter =  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: user.email,
    subject: "Reset Your BluStock Password",
    html: `
      <p>Hello ${user.firstName},</p>
      <p>You requested a password reset. Click the link below to set a new password. This link expires in 1 hour.</p>
      <p><a href="${resetLink}">Reset Password</a></p>
      <p>If you didn’t request this, just ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
  return NextResponse.json({ ok: true });
}
