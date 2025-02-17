import { NextRequest, NextResponse } from "next/server";
import { allServices } from "@/lib/service-categories";

export async function GET(request: NextRequest) {
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
