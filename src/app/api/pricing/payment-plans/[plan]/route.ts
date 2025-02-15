import { paymentPlans } from "@/lib/constants";
import { setSlug } from "@/lib/utils";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET( req: NextRequest ) {
  // Extract slug from the pathname
  const slug = req.nextUrl.pathname.split( "/" ).pop(); // Get the last part of the URL

  if ( !slug ) {
    return NextResponse.json( { message: "Payment plan not found" }, { status: 404 } );
  }

  const paymentPlan = paymentPlans.find( ( plan ) => setSlug( plan.route ) === slug );

  if ( !paymentPlan ) {
    return NextResponse.json( { message: "Payment plan not found" }, { status: 404 } );
  }

  return NextResponse.json( paymentPlan );
}
