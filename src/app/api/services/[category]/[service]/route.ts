import { NextRequest, NextResponse } from "next/server";
import { subServiceDetails } from "@/lib/sub-services";

interface RouteContext {
  params: {
    category: string;
    service: string;
  };
}

export async function GET(
  req: NextRequest,
  { params }: RouteContext
) {
  // Now TypeScript knows params.category & params.service are strings
  const { category, service } = params;

  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );

  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }

  return NextResponse.json( subService );
}
