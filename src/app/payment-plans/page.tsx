"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { paymentPlans } from "@/lib/constants";
import { useTheme } from "next-themes";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn } from "@/lib/utils";
import useMediumScreen from "@/lib/useMediumScreen";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const PaymentPlansPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Flexible Pricing Plans to Fit Your Needs
        </h1>
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
                "flex flex-col lg:flex-row justify-between md:items-end relative lg:pb-16",
                index !== paymentPlans.length - 1 ? "pb-5 lg:pb-20" : ""
              )}
            >
              {/* Plan Title */}
              <h3>{plan.title}</h3>

              {/* Plan Description */}
              <p className="mb-6">{plan.description}</p>

              {/* Plan Details */}
              <ul className="text-lg">
                {plan.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button
                variant={theme === "dark" ? "outline" : "secondary"}
                className={
                  isMediumScreen
                    ? "text-xs md:text-md relative md:w-64"
                    : "absolute bottom-5 right-4 w-64 2xl:w-80 2xl:px-44"
                }
                size={isSmallScreen ? "sm" : "default"}
                onClick={() => {
                  router.push(plan.route);
                }}
              >
                More Information on Our {plan.title}
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
