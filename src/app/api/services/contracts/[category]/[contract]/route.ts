import { contractExamples } from "@/lib/sub-contracts";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests for retrieving a specific contract service based on the URL path.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the contract service details or an error message.
 *
 * The URL path should follow the pattern: /api/services/contracts/[category]/[contract]
 * - `[category]` represents the category of the contract service.
 * - `[contract]` represents the specific contract service name.
 *
 * If the specified contract service is not found, a 404 response with an error message is returned.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const category = segments[segments.length - 2];
  const service = segments[segments.length - 1];

  const subService = contractExamples.find(
    (item) => item.category === category && item.name === service
  );

  if (!subService) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(subService);
}
