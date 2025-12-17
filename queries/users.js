import { connectDb } from "@/helper/db";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";  
import { User } from "@/models/user";
import { Course } from "@/models/course";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email){
    await connectDb();
    const user = await User.findOne({email: email}).lean();
    const plainUser = replaceMongoIdInObject(user);

    // Ensure pendingCourseId is a simple serializable value
    if (plainUser?.pendingCourseId && typeof plainUser.pendingCourseId !== "string") {
      plainUser.pendingCourseId = String(plainUser.pendingCourseId);
    }

    return plainUser;
} 
export async function getUserDetails(userId){
     await connectDb();
    const user = await User.findById(userId).lean()
    const plainUser = replaceMongoIdInObject(user);

    if (plainUser?.pendingCourseId && typeof plainUser.pendingCourseId !== "string") {
      plainUser.pendingCourseId = String(plainUser.pendingCourseId);
    }

    return plainUser;
} 

export async function validatePassword(email, password){
    const user = await getUserByEmail(email);
    const isMatch = await bcrypt.compare(
        password,
        user.password
    );
    return isMatch
}

export async function getAllInstructors(){
     await connectDb();
    const instructors = await User.find({role: "instructor"}).lean()
    return replaceMongoIdInArray(instructors)
}

export async function updateUserProfilePicture(email, url) {
  await connectDb();
  return await User.findOneAndUpdate(
    { email },
    { profilePicture: url },
    { new: true }  // returns updated doc
  ).lean();
}

export async function updateUserAadhar(email, url) {
  await connectDb();
  return await User.findOneAndUpdate(
    { email },
    { aadhar: url },
    { new: true }
  ).lean();
}

export async function getAllUsers() {
  await connectDb();
  // Exclude sensitive fields like password and tokens
  const users = await User.find(
    {},
    "-password -resetToken -resetTokenExpiry -verificationToken -verificationTokenExpiry"
  )
    .populate({
      path: "pendingCourseId",
      model: Course,
      select: "title",
    })
    .lean();
  return replaceMongoIdInArray(users);
}