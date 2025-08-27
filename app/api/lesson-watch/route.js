import { getLoggedInUser } from "@/lib/loggedin-user";
import { Watch } from "@/models/watch";
import { getLesson } from "@/queries/lessons";
import { getModuleBySlug } from "@/queries/modules";
import { createWatchReport } from "@/queries/reports";
import { NextResponse } from "next/server";

const STARTED = "started";
const COMPLETED = "completed";

async function updateReport(userId, courseId, moduleId, lessonId) {
  try {
    await createWatchReport({ userId, courseId, moduleId, lessonId });
  } catch (error) {
    console.error("Error creating report:", error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const { courseId, lessonId, moduleSlug, state, lastTime } =
      await request.json(); // ✅ lowercase json()

    const loggedInUser = await getLoggedInUser();
    if (!loggedInUser) {
      return new NextResponse("You are not authenticated.", { status: 401 });
    }

    if (state !== STARTED && state !== COMPLETED) {
      return new NextResponse("Invalid state. Cannot process request.", {
        status: 400,
      });
    }

    const lesson = await getLesson(lessonId);
    if (!lesson) {
      return new NextResponse("Invalid lesson. Cannot process request.", {
        status: 400,
      });
    }

    const moduleData = await getModuleBySlug(moduleSlug);
    if (!moduleData) {
      return new NextResponse("Invalid module. Cannot process request.", {
        status: 400,
      });
    }

    const watchEntry = {
      lastTime,
      lesson: lesson.id,
      module: moduleData.id,
      user: loggedInUser.id,
      state,
    };

    const found = await Watch.findOne({
      lesson: lessonId,
      module: moduleData.id,
      user: loggedInUser.id,
    }).lean();

    if (state === STARTED) {
      if (!found) {
        watchEntry.created_at = Date.now();
        await Watch.create(watchEntry);
      }
    } else if (state === COMPLETED) {
      if (!found) {
        watchEntry.created_at = Date.now();
        await Watch.create(watchEntry);
        await updateReport(loggedInUser.id, courseId, moduleData.id, lessonId);
      } else if (found.state === STARTED) {
        await Watch.findByIdAndUpdate(found._id, {
          state: COMPLETED,
          modified_at: Date.now(),
        });
        await updateReport(loggedInUser.id, courseId, moduleData.id, lessonId);
      }
    }

    return new NextResponse("Watch Record added Successfully", { status: 200 });
  } catch (error) {
    console.error("Lesson watch API error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
