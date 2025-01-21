"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { paymentPlans } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const PaymentPlansPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Our Payment Plans</h1>
      <p className="text-center text-lg my-4">
        Flexible payment options tailored to fit your budget and project needs.
        Choose the plan that works best for you.
      </p>

      {/* Displaying each plan dynamically */}
      <section className="my-8">
        <div className="grid md:grid-cols-2 gap-8">
          {paymentPlans.map((plan, index) => (
            <Card
              key={index}
              className="border p-2 h-full justify-between rounded-lg shadow-lg flex flex-col"
            >
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <p className="mb-4">{plan.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {plan.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
              <Button
                variant="link"
                onClick={() => {
                  router.push(plan.route);
                }}
              >
                {plan.buttonLabel}
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PaymentPlansPage;
