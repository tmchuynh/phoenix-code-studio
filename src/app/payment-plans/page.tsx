"use client";

import { Button } from "@/components/ui/button";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paymentPlans } from "@/lib/constants";
import { useTheme } from "next-themes";

const PaymentPlansPage: FC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Our Payment Plans
        </h1>
        <p className="mt-4">
          We offer flexible payment options designed to accommodate your budget
          and project requirements. Whether you prefer a pay-as-you-go model or
          an extended payment plan, our options are tailored to provide
          convenience and financial flexibility. Choose the plan that works best
          for you, and let us bring your vision to life seamlessly and
          affordably.
        </p>
      </header>

      {/* Displaying each plan in a vertical layout similar to blogs */}
      <section className="space-y-8">
        {paymentPlans.map((plan, index) => (
          <div key={index}>
            <div className="flex flex-col w-full">
              {/* Plan Title */}
              <h3>{plan.title}</h3>

              {/* Plan Description */}
              <p className="mb-6">{plan.description}</p>

              {/* Plan Details */}
              <ul className="list-disc pl-6 space-y-2 text-lg">
                {plan.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button
                variant={theme === "dark" ? "outline" : "secondary"}
                className="my-7 w-1/3 self-end"
                onClick={() => {
                  router.push(plan.route);
                }}
              >
                Learn More
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
