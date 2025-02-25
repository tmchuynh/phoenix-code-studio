import { paymentPlans } from "@/lib/payment-plans";
import { setSlug } from "@/lib/utils";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

/**
 * Handles GET requests to retrieve a specific payment plan based on the URL.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing the payment plan or an error message.
 *
 * The function extracts the payment plan identifier from the URL, searches for the corresponding payment plan,
 * and returns it as a JSON response. If the payment plan is not found, it returns a 404 status with an error message.
 *
 * Example URL: /api/services/pricing/payment-plans/[plan]
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const plan = segments[segments.length - 1];

  console.log("Extracted plan from URL:", plan);

  if (!plan) {
    return NextResponse.json(
      { message: "Payment plan not found" },
      { status: 404 }
    );
  }

  const paymentPlan = paymentPlans.find((planItem) => {
    const sluggedName = setSlug(planItem.name);
    console.log("Slugged name:", sluggedName);
    return sluggedName === plan;
  });

  if (!paymentPlan) {
    return NextResponse.json(
      { message: "Payment plan not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(paymentPlan);
}
