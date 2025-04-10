"use client";
import LoadingIndicator from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { IconDisplay } from "@/lib/IconDisplay";
import { paymentPlans } from "@/lib/payment-plans";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const PaymentPlansPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  /**
   * Navigates to the specified payment plan page.
   *
   * @param {string} plan - The name of the payment plan to navigate to.
   */
  const navigateToPlan = (plan: string) => {
    const formattedPlanName = setSlug(plan);

    router.push(`/services/pricing/payment-plans/${formattedPlanName}`);
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
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
          custom quote?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="m-0 p-0 h-fit"
          >
            Contact us to discuss a tailored solution!
          </Button>
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
                <h2>{isMediumScreen ? plan.short : plan.title}</h2>

                {/* Plan Description */}
                <div>
                  {isSmallScreen
                    ? plan.info.short
                    : isMediumScreen
                    ? plan.info.description
                    : plan.info.intro.map((sentence, index) => {
                        return <p key={index}>{sentence}</p>;
                      })}
                </div>
              </div>

              {/* Plan Details */}
              <div>
                <h3>Key Attributes</h3>
                <ul className="gap-x-4 grid grid-cols-1 p-0 list-none">
                  {plan.info.shortFeatures.map((features, index) => (
                    <li className="flex items-center space-y-0" key={index}>
                      <IconDisplay Icon={plan.Icon} />

                      <span className="pl-3">
                        <strong>{features.title}: </strong>
                        {features.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Button */}
              <Button
                variant={theme === "dark" ? "outline" : "secondary"}
                className="relative mx-auto lg:mx-2 w-full md:w-1/2 lg:w-2/5 text-sm md:text-lg"
                size={isSmallScreen ? "sm" : "default"}
                onClick={() => {
                  navigateToPlan(plan.name);
                }}
              >
                More Information
              </Button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PaymentPlansPage;
