import { subServiceDetails } from "@/lib/sub-services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string; service: string; }; }
) {
  const { category, service } = params;
  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );

  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }

  return NextResponse.json( subService );
}
