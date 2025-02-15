import { subServiceDetails } from "@/lib/sub-services";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest ) {
  const { searchParams } = new URL( request.url );
  const category = searchParams.get( 'category' );
  const service = searchParams.get( 'service' );

  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );

  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }

  return NextResponse.json( subService );
}
