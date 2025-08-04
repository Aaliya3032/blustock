"use server"

import { Course } from "@/models/course"
import { Module } from "@/models/module"
import { create } from "@/queries/modules"
import mongoose from "mongoose"

export async function createModule(data){
try {
    const title = data.get("title")
    const slug = data.get("slug")
    const order = data.get("order")
    const courseId = data.get("courseId")

    const createdModule = await create({title,slug,order,course: courseId})

    const course = await Course.findById(courseId)
    course.modules.push(createdModule._id)
    course.save()

    return createdModule;
} catch (error) {
    throw new Error(error)
}
}

export async function reOrderModules(data) {
    try {
        await Promise.all(data.map(async(element) => {
            await Module.findByIdAndUpdate(element.id, {order: element.position})
        }))
    } catch (error) {
        throw new Error(error)
    }
}

export async function updateModule(moduleId,data){
try {
    await Module.findByIdAndUpdate(moduleId,data)
} catch (error) {
    throw new Error(error)
}
}

export async function changeModulePublishState(moduleId) {
    const module = await Module.findById(moduleId);
    try {
        const res = await Module.findByIdAndUpdate(moduleId, {active: !module.active},{lean:true});
        return res.active

    } catch (error) {
        throw new Error(error);
    }

}

export async function deleteModule(moduleId, courseId){
    try {
        const course = await Course.findById(courseId);
        course.modules.pull(new mongoose.Types.ObjectId(moduleId));
        await Module.findByIdAndDelete(moduleId);
        course.save();
    } catch (err) {
        throw new Error(err);
    }
}