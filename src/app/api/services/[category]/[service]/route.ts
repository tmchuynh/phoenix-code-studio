import { NextRequest, NextResponse } from "next/server";
import { subServiceDetails } from "@/lib/sub-services";

export async function GET(
  req: NextRequest,
  context: { params: { category: string; service: string; }; }
) {
  // Destructure directly from context.params
  const { category, service } = context.params;

  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );

  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }

  return NextResponse.json( subService );
}
