import { NextRequest, NextResponse } from "next/server";
import { subServiceDetails } from "@/lib/sub-services";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const category = segments[segments.length - 2];
  const service = segments[segments.length - 1];

  const subService = subServiceDetails.find(
    (item) => item.category === category && item.name === service
  );

  if (!subService) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(subService);
}
