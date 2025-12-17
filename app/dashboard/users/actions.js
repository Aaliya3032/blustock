"use server";

import { User } from "@/models/user";
import { Enrollment } from "@/models/enrollment";
import { revalidatePath } from "next/cache";

export async function verifyUserById(formData) {
  const userId = formData.get("userId");
  if (!userId) return;

  await User.findByIdAndUpdate(userId, { isInstructorVerified: true });
  revalidatePath("/dashboard/users");
}

export async function verifyPaymentAndEnroll(formData) {
  const userId = formData.get("userId");
  const courseId = formData.get("courseId");

  if (!userId || !courseId) return;

  // Create enrollment with status complete for offline payment
  await Enrollment.create({
    course: courseId,
    student: userId,
    method: "offline",
    enrollment_date: new Date(),
    status: "complete",
    completion_date: new Date(),
  });

  // Mark payment verified and clear pending course
  await User.findByIdAndUpdate(userId, {
    isPaymentVerified: true,
    pendingCourseId: null,
  });

  revalidatePath("/dashboard/users");
}

