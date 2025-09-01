import { NextResponse } from "next/server";
import { getCategories } from "@/queries/categories";

export async function GET() {
  try {
    const categories = await getCategories();

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error in /api/categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
