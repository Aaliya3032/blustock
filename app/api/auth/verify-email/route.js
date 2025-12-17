import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  console.log("Verification request received. Token:", token ? "Token present" : "No token");

  if (!token) {
    return NextResponse.json(
      { error: "Verification token is required." },
      { status: 400 }
    );
  }

  await connectDb();

  try {
    console.log("Searching for user with token...");
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() }, // Token not expired
    });

    console.log("User found:", user ? `User ID: ${user._id}, Email: ${user.email}` : "No user found");

    if (!user) {
      // Check if token exists but expired
      const expiredUser = await User.findOne({ verificationToken: token });
      if (expiredUser) {
        console.log("Token found but expired. Expiry:", expiredUser.verificationTokenExpiry);
        return NextResponse.json(
          { error: "Verification token has expired. Please request a new verification email." },
          { status: 400 }
        );
      }
      
      // Check if user is already verified
      const verifiedUser = await User.findOne({ 
        $or: [
          { verificationToken: token },
          { email: token } // fallback check
        ]
      });
      
      if (verifiedUser && verifiedUser.isVerified) {
        console.log("User already verified");
        return NextResponse.json(
          { message: "Email is already verified. You can log in now." },
          { status: 200 }
        );
      }

      console.log("No user found with this token");
      return NextResponse.json(
        { error: "Invalid verification token." },
        { status: 400 }
      );
    }

    console.log("Verifying user...");
    // Verify the user
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpiry = null;
    await user.save();
    
    // Verify the save worked
    const updatedUser = await User.findById(user._id);
    console.log("After save - isVerified:", updatedUser.isVerified, "token:", updatedUser.verificationToken);

    console.log("User verified successfully:", user.email);
    return NextResponse.json(
      { message: "Email verified successfully! You can now log in." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { error: `Failed to verify email: ${error.message}` },
      { status: 500 }
    );
  }
}

// POST endpoint to resend verification email
export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  await connectDb();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "No account found with this email." },
        { status: 404 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { error: "Email is already verified." },
        { status: 400 }
      );
    }

    // Generate new verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    user.verificationToken = verificationToken;
    user.verificationTokenExpiry = verificationTokenExpiry;
    await user.save();

    // Send verification email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const verificationLink = `${process.env.NEXTAUTH_URL}/verify-email?token=${verificationToken}`;
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Verify Your BluStock Account",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Verify Your Email Address</h2>
          <p>Hello ${user.firstName},</p>
          <p>Please verify your email address to complete your registration.</p>
          <p>Click the link below to verify your email:</p>
          <p style="margin: 20px 0;">
            <a href="${verificationLink}" 
               style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Verify Email Address
            </a>
          </p>
          <p>Or copy and paste this link into your browser:</p>
          <p style="color: #666; word-break: break-all;">${verificationLink}</p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This link will expire in 24 hours. If you didn't create an account, please ignore this email.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Verification email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error resending verification email:", error);
    return NextResponse.json(
      { error: "Failed to resend verification email. Please try again." },
      { status: 500 }
    );
  }
}
