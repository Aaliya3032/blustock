"use server"

import { Lesson } from "@/models/lesson"
import { Module } from "@/models/module"
import { create } from "@/queries/lessons"
import mongoose from "mongoose"

export async function createLesson(data){
try {
    const title = data.get("title")
    const slug = data.get("slug")
    const order = data.get("order")
    const moduleId = data.get("moduleId")

    const createdLesson = await create({title,slug,order})

    const module = await Module.findById(moduleId)
    module.lessonIds.push(createdLesson._id)
    module.save()

    return createdLesson;
} catch (error) {
    throw new Error(error)
}
}

export async function reOrderLessons(data) {
    try {
        await Promise.all(data.map(async(element) => {
            await Lesson.findByIdAndUpdate(element.id, {order: element.position})
        }))
    } catch (error) {
        throw new Error(error)
    }
}
export async function updateLesson(lessonId,data){
try {
    await Lesson.findByIdAndUpdate(lessonId,data)
} catch (error) {
    throw new Error(error)
}
}

export async function changeLessonPublishState(lessonId) {
    const lesson = await Lesson.findById(lessonId);
    try {
        const res = await Lesson.findByIdAndUpdate(lessonId, {active: !lesson.active},{lean:true});
        return res.active

    } catch (error) {
        throw new Error(error);
    }

}

export async function deleteLesson(lessonId, moduleId){
    try {
        const module = await Module.findById(moduleId);
        module.lessonIds.pull(new mongoose.Types.ObjectId(lessonId));
        await Lesson.findByIdAndDelete(lessonId);
        module.save();
    } catch (err) {
        throw new Error(err);
    }
}
