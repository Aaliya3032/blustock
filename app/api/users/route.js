import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { User } from "@/models/user";

connectDb();

// CREATE USER
export async function POST(request) {
  const {firstName,lastName, email, password, userRole} = await request.json();
  console.log(firstName,lastName, email, password, userRole);

  await connectDb();
  const hashedPassword = await bcrypt.hash(password,5);

  const newUser = {
      firstName,
      lastName,
      email,
      password:hashedPassword,
      role: userRole
  }
  console.log(newUser);

  try {
      await User.create(newUser);
      return new NextResponse("User has been created", {
          status: 201,
      });
  } catch (error) {
      console.log(error);
      return new NextResponse(error.message, {
          status: 201,
      });
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
