import { NextResponse } from "next/server";
import { getCategories } from "@/queries/categories";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}
