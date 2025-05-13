import { getCategories } from "@/queries/categories";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}