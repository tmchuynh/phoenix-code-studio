import { NextResponse } from "next/server";
import { subServiceDetails } from "@/lib/sub-services";

export async function GET(
  request: Request,
  context: any // or just omit the type
) {
  // Destructure from context.params
  const { category, service } = context.params as {
    category: string;
    service: string;
  };

  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );

  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }

  return NextResponse.json( subService );
}
