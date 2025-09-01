"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import EnrolledCourseCard from "../../component/enrolled-coursecard";

export default function EnrolledCourses() {
  const [enrollments, setEnrollments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEnrollments() {
      try {
        const res = await fetch("/api/enrollments");
        const data = await res.json();
        setEnrollments(data);
      } catch (err) {
        console.error("Error fetching enrollments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEnrollments();
  }, []);

  if (loading) {
    return <p className="text-white font-bold">Loading your courses...</p>;
  }

  if (!enrollments || enrollments.length === 0) {
    return <p className="font-bold text-red-700">No Enrollments found!</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {enrollments.map((enrollment) => (
        <Link
          key={enrollment.id}
          href={`/courses/${enrollment.course._id.toString()}/lesson`}
        >
          <EnrolledCourseCard enrollment={enrollment} />
        </Link>
      ))}
    </div>
  );
}
