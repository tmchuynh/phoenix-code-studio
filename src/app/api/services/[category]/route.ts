import { allServices } from "@/lib/constants/services/service-categories";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to fetch a service item based on the category specified in the URL.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the service item or an error message.
 *
 * The function extracts the category from the URL path segments, searches for the corresponding service item in the `allServices` array,
 * and returns the service item if found. If the service item is not found, it returns a 404 error response.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const category = segments[segments.length - 1];

  const serviceItem = allServices.find((item) => item.name === category);

  if (!serviceItem) {
    return NextResponse.json(
      { error: "Service category not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(serviceItem);
}
