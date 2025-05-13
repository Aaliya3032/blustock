import mongoose from "mongoose"
// import { User } from "../models/user"

export const connectDb = async() => {
    try {
       const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:'course_manager'
        })
        console.log("DB connected ...",connection);
        console.log("user is created");
        
    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
        
    }
}