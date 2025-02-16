import { paymentPlans } from "@/lib/payment-plans";
import { setSlug } from "@/lib/utils";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
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
