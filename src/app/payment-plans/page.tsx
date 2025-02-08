"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { paymentPlans } from "@/lib/constants";
import { useTheme } from "next-themes";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import RootLayout from "../layout";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn } from "@/lib/utils";
import useMediumScreen from "@/lib/useMediumScreen";

const PaymentPlansPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  return (
    <>
      <RootLayout
        title="Flexible Payment Plans - Phoenix Code Studio"
        description="Explore our flexible payment plans to make your digital transformation easy and affordable. We offer tailored options for businesses of all sizes."
      >
        <main className="w-10/12 md:w-11/12 mx-auto py-6">
          <DynamicBreadcrumb />
          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Our Payment Plans
            </h1>
            <p className="mt-4">
              We provide flexible payment options tailored to fit your budget
              and business needs, making it easier to invest in your digital
              growth. Whether you choose a pay-as-you-go model or an extended
              payment method, our straightforward pricing ensures economical web
              design, SEO services, and content creation without undisclosed
              fees or unexpected expenses. Designed for startups and enterprises
              alike, our installment plans offer fiscal adaptability so you can
              scale your project with conviction.
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
                  <div>
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
                  </div>
                  <Button
                    variant={theme === "dark" ? "outline" : "secondary"}
                    size={isSmallScreen ? "sm" : "default"}
                    onClick={() => {
                      router.push(plan.route);
                    }}
                    className={
                      isMediumScreen
                        ? "text-xs md:text-md relative md:w-64"
                        : "absolute bottom-5 right-4 w-64 2xl:w-80 2xl:px-44"
                    }
                  >
                    More Information on Our {plan.title}
                  </Button>
                </div>
                {index !== paymentPlans.length - 1 && <hr />}
              </div>
            ))}
          </section>
        </main>
      </RootLayout>
    </>
  );
};

export default PaymentPlansPage;
