import { allContracts } from "@/lib/contract-categories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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
