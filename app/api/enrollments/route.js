import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import { getEnrollmentsForUser } from "@/queries/enrollments";
import { getCategoryDetails } from "@/queries/categories";
import { getCourseDetails } from "@/queries/courses";
import { getReport } from "@/queries/reports";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const loggedInUser = await getUserByEmail(session.user.email);
    let enrollments = await getEnrollmentsForUser(loggedInUser.id);

    // ✅ yaha har enrollment ko enrich karenge extra details se
    const enriched = await Promise.all(
      enrollments.map(async (enrollment) => {
        const courseCategory = await getCategoryDetails(enrollment.course.category?._id);
        const courseDetails = await getCourseDetails(enrollment.course._id);

        const filter = { course: enrollment.course._id, student: enrollment.student._id };
        const report = await getReport(filter);

        const totalModuleCount = courseDetails?.modules?.length || 0;
        const totalCompletedModules = report?.totalCompletedModeules?.length || 0;
        const totalProgress = totalModuleCount
          ? (totalCompletedModules / totalModuleCount) * 100
          : 0;

        return {
          ...enrollment,
          courseCategory,
          totalModuleCount,
          totalCompletedModules,
          totalProgress,
        };
      })
    );

    return NextResponse.json(enriched);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Failed to fetch enrollments" }, { status: 500 });
  }
}
