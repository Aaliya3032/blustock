import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { User } from "@/models/user";
import crypto from "crypto";
import nodemailer from "nodemailer";

connectDb();

// CREATE USER
export async function POST(request) {
  const {firstName,lastName, email, password, userRole} = await request.json();
  console.log(firstName,lastName, email, password, userRole);

  await connectDb();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { error: "User with this email already exists." },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password,5);

  // Generate verification token
  const verificationToken = crypto.randomBytes(32).toString("hex");
  const verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  console.log("Generated verification token:", verificationToken.substring(0, 10) + "...");
  console.log("Token expiry:", new Date(verificationTokenExpiry).toISOString());

  const newUser = {
      firstName,
      lastName,
      email,
      password:hashedPassword,
      role: userRole,
      isVerified: false,
      verificationToken,
      verificationTokenExpiry
  }
  console.log("Creating user with email:", email, "isVerified:", false);

  try {
      const user = await User.create(newUser);
      console.log("User created successfully. ID:", user._id);
      console.log("User verification token saved:", user.verificationToken ? "Yes" : "No");
      console.log("User isVerified:", user.isVerified);

      // Configure nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send verification email to user
      const verificationLink = `${process.env.NEXTAUTH_URL}/verify-email?token=${verificationToken}`;
      const userMailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Verify Your BluStock Account",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Welcome to BluStock, ${firstName}!</h2>
            <p>Thank you for registering. Please verify your email address to complete your registration.</p>
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

      // Send notification email to admin
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        const adminMailOptions = {
          from: process.env.SMTP_USER,
          to: adminEmail,
          subject: "New User Registration - BluStock",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New User Registration</h2>
              <p>A new user has registered on BluStock:</p>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Role:</strong> ${userRole}</li>
                <li><strong>Registration Date:</strong> ${new Date().toLocaleString()}</li>
              </ul>
              <p style="color: #999; font-size: 12px; margin-top: 30px;">
                This is an automated notification from BluStock.
              </p>
            </div>
          `,
        };

        try {
          await transporter.sendMail(adminMailOptions);
        } catch (adminError) {
          console.error("Error sending admin notification:", adminError);
          // Don't fail registration if admin email fails
        }
      }

      // Send verification email to user
      await transporter.sendMail(userMailOptions);

      return NextResponse.json(
        { 
          message: "Registration successful! Please check your email to verify your account.",
          success: true 
        },
        { status: 201 }
      );
  } catch (error) {
      console.log("error in create user",error);
      return NextResponse.json(
        { error: error.message || "Failed to create user" },
        { status: 500 }
      );
  }
}

// GET USERS
export async function GET(request){
    let users=[]
try {
    users = await User.find()  
} catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"Failed to get users",
        Success:false,
    })
}
return NextResponse.json(users);
}
