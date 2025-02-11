// app/api/services/[category]/route.ts
import { allServices } from "@/lib/service-categories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string; }; }
) {
  const { category } = params;

  // Find the matching item in allServices
  const serviceItem = allServices.find( ( item ) => item.name === category );

  if ( !serviceItem ) {
    return NextResponse.json( { error: "Category not found" }, { status: 404 } );
  }

  // Return the whole object { name, info: { description, subServices } }
  return NextResponse.json( serviceItem );
}
