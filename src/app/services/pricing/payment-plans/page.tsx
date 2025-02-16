"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, formatName, setSlug } from "@/lib/utils";
import useMediumScreen from "@/lib/useMediumScreen";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { paymentPlans } from "@/lib/payment-plans";

const PaymentPlansPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const navigateToPlan = (plan: string) => {
    const formattedPlanName = setSlug(plan);

    router.push(`/services/pricing/payment-plans/${formattedPlanName}`);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <header className="mb-8">
        <h1>Flexible Pricing Plans to Fit Your Needs</h1>
        <p className="mt-4">
          We offer customizable pricing options designed to accommodate
          businesses of all sizes and budgets. Whether you need a basic package
          for a smaller project or a comprehensive solution for a large-scale
          initiative, our pricing tiers ensure exceptional value, flexibility,
          and scalability.
        </p>
        <p>
          Each plan is structured to align with your specific goals, offering
          transparent pricing, high-quality service, and no hidden fees. Explore
          our options and choose the plan that best suits your needs. Need a
          custom quote? Contact us to discuss a tailored solution!
        </p>
      </header>

      {/* Displaying each plan in a vertical layout similar to blogs */}
      <section className="space-y-5">
        {paymentPlans.map((plan, index) => (
          <div key={index}>
            <div
              className={cn(
                "flex flex-col justify-between relative",
                index !== paymentPlans.length - 1 ? "pb-10" : ""
              )}
            >
              <div>
                {/* Plan Title */}
                <h3>{formatName(plan.name)}</h3>

                {/* Plan Description */}
                <p>{plan.info.description}</p>

                {/* Plan Details */}
                <ul>
                  {plan.info.features.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Learn More Button */}
              <Button
                variant={theme === "dark" ? "outline" : "secondary"}
                className="text-xs md:text-md relative w-2/5"
                size={isSmallScreen ? "sm" : "default"}
                onClick={() => {
                  navigateToPlan(plan.name);
                }}
              >
                More Information on Our {formatName(plan.name)}
              </Button>
            </div>
            {index !== paymentPlans.length - 1 && <hr />}
          </div>
        ))}
      </section>
    </main>
  );
};

export default PaymentPlansPage;
