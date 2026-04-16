import { navigation } from "@/lib/constants/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the current path from query parameters
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get("path");

    // Return the navigation data
    // In the future, this could be filtered or modified based on the current path
    return NextResponse.json(navigation);
  } catch (error) {
    console.error("Error fetching navigation:", error);
    return NextResponse.json(
      { error: "Failed to fetch navigation" },
      { status: 500 }
    );
  }
}
