"use server"

import { Course } from "@/models/course"
import { Module } from "@/models/module"
import { create } from "@/queries/modules"

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