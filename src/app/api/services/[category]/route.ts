import { allServices } from "@/lib/service-categories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string; }; }
) {
  const { category } = params;

  // Find the matching category in the allServices array
  const serviceItem = allServices.find( ( item ) => item.name === category );

  // If no matching item is found, return a 404
  if ( !serviceItem ) {
    return NextResponse.json( { error: "Category not found" }, { status: 404 } );
  }

  // Return the category name along with its info
  return NextResponse.json( {
    category: serviceItem.name,
    ...serviceItem.info,
  } );
}
