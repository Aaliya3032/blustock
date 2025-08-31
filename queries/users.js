import { connectDb } from "@/helper/db";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";  
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email){
    await connectDb();
    const user = await User.findOne({email: email}).lean();
    return replaceMongoIdInObject(user);
} 
export async function getUserDetails(userId){
     await connectDb();
    const user = await User.findById(userId).lean()
    return replaceMongoIdInObject(user);
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