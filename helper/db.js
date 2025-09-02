import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_URL;
if (!MONGODB_URI) {
  throw new Error("Please define MONGO_DB_URL in your .env file");
}

let cached = (global).mongoose;
if (!cached) {
  cached = (global).mongoose = { conn: null, promise: null };
}

export async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "course_manager",
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // reset so future calls retry
    throw err;
  }

  return cached.conn;
}



// import mongoose from "mongoose"
// // import { User } from "../models/user"

// export const connectDb = async() => {
//     if (mongoose.connection.readyState >= 1) return;
//     try {
//          await mongoose.connect(process.env.MONGO_DB_URL,{
//             dbName:'course_manager'
//         })
//         // console.log("DB connected ...",connection);
//         // console.log("user is created");
        
//     } catch (error) {
//         console.log("failed to connect with database");
//         console.log(error);
        
//     }
// }