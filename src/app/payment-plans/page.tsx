"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { paymentPlans } from "@/lib/constants";

const PaymentPlansPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Our Payment Plans
        </h1>
        <p className="text-lg mt-4">
          Flexible payment options tailored to fit your budget and project
          needs. Choose the plan that works best for you.
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
              <p className="text-lg mb-6">{plan.description}</p>

              {/* Plan Details */}
              <ul className="list-disc pl-6 space-y-2 text-lg">
                {plan.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button
                className="m-7 w-2/3 mx-auto"
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
