import { subServiceDetails } from "@/lib/sub-services";
import { NextResponse } from "next/server";

export async function GET( _req: Request, { params }: { params: { category: string; service: string; }; } ) {
  // Await the params object
  const { category, service } = await params;
  const subService = subServiceDetails.find(
    ( item ) => item.category === category && item.name === service
  );

  if ( !subService ) {
    return NextResponse.json( { error: "Service not found" }, { status: 404 } );
  }

  return NextResponse.json( subService );
}
