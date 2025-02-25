import { allContracts } from "@/lib/contract-categories";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to fetch contract category details.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the contract category details or an error message.
 *
 * The function extracts the category from the request URL, searches for the corresponding contract category in the `allContracts` array,
 * and returns the category details if found. If the category is not found, it returns a 404 error response.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const category = segments[segments.length - 1];

  const contractCategory = allContracts.find((item) => item.name === category);

  if (!contractCategory) {
    return NextResponse.json(
      { error: "Contract category not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(contractCategory);
}
