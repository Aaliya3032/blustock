import { User } from "@/models/user";
import { NextResponse } from "next/server";

// GET USER
export async function GET(request,{params}){
 const {userId} = params
 let user;
 try {
    user = await User.findById(userId)
 } catch (error) {
    return NextResponse.json({
        message:"User not found",
        Success:false,
    }) 
 }
 
 return NextResponse.json(user) 
}

// DELETE USER
export async function DELETE(request,{params}){
    const {userId} = params;
    try {
       await User.deleteOne({
            _id:userId
        })
       return NextResponse.json({
            message: "User Deleted !!",
            success:true,
        })
    } catch (error) {
     return  NextResponse.json({
            message: "Error in deleting user",
            success:false,
        })
    }
    
}

//UPDATE USER
export async function PUT(request,{params}){
    const {userId} = await params;
    const {name,password} = await request.json()
    try {
        let user = await User.findById(userId)
        user.name = name
        user.password = password

        const updatedUser = await user.save()
        const response = NextResponse.json(updatedUser,{
            status:201,
        })
        return response
    } catch (error) {
        return NextResponse.json({
            message:"failed to update user!!",
            success:"false",
        })
    }
}