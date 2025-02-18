"use client";

import { Button } from "@/components/ui/button";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, formatName, setSlug } from "@/lib/utils";
import useMediumScreen from "@/lib/useMediumScreen";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { paymentPlans } from "@/lib/payment-plans";
import { MdCheck } from "react-icons/md";
import LoadingIndicator from "@/components/Loading";

const IconDisplay: FC<{
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({ Icon }) => {
  return (
    <div>
      {/* Render the icon */}
      {Icon ? (
        <Icon className="text-4xl text-accent-5 mx-auto my-1" />
      ) : (
        <MdCheck className="my-1 size-5 md:size-6" />
      )}
    </div>
  );
};

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
          custom quote?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 m-0 h-fit"
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
                <ul className="grid grid-cols-1 gap-x-4 list-none p-0">
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
                className="text-sm md:text-lg w-full md:w-1/2 lg:w-2/5 relative mx-auto lg:mx-2"
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
