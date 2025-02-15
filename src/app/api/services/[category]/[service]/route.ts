import { subServiceDetails } from "@/lib/sub-services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string; service: string; }; }
) {
  const { category, service } = params;
  // Find the matching sub-service
  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );
  // If no match, return 404
  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }
  return NextResponse.json( {
    category: subService.category,
    service: subService.name,
    ...subService.info,
  } );
}