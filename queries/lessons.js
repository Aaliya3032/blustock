import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "@/models/lesson";


export async function getLesson(lessonId){
    const lesson = await Lesson.findById(lessonId).lean();
    return replaceMongoIdInObject(lesson);
}