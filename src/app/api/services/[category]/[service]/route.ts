import { subServiceDetails } from "@/lib/constants/services/sub-services";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to retrieve service details based on the URL path.
 *
 * The URL path is expected to contain the category and service name as the last two segments.
 * For example: `/api/services/[category]/[service]`.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the service details
 *                                    or an error message if the service details are not found.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const category = segments[segments.length - 2];
  const service = segments[segments.length - 1];

  const subService = subServiceDetails.find(
    (item) => item.category === category && item.name === service
  );

  if (!subService) {
    return NextResponse.json(
      { error: "Service details not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(subService);
}
