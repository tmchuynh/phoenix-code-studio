"use client";

import CallToAction from "@/components/CallToAction";
import { PaymentDetails } from "@/lib/interfaces";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const IconDisplay: FC<{
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({ Icon }) => {
  return (
    <div>
      {/* Render the icon */}
      {Icon ? (
        <Icon className="text-4xl text-accent-5 mx-auto" />
      ) : (
        <IoMdCheckmarkCircleOutline className="my-1 size-5 md:size-6" />
      )}
    </div>
  );
};

export default function PaymentPlanPage() {
  const { plan } = useParams() as { plan: string };
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentPlan, setPaymentPlan] = useState<PaymentDetails | null>(null);

  useEffect(() => {
    if (!plan) return;

    async function fetchPaymentPlan() {
      try {
        const response = await fetch(
          `/api/services/pricing/payment-plans/${plan}`
        );
        if (!response.ok) {
          throw new Error("Payment plan not found");
        }
        const data = await response.json();
        setPaymentPlan(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchPaymentPlan();
  }, [plan]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1>
        {paymentPlan?.short && paymentPlan?.title && isMediumScreen
          ? paymentPlan?.short
          : paymentPlan?.title}
      </h1>
      <div>
        {isSmallScreen
          ? paymentPlan?.info.short
          : isMediumScreen
          ? paymentPlan?.info.description
          : paymentPlan?.info.intro.map((sentence, index) => {
              return <p key={index}>{sentence}</p>;
            })}
      </div>

      <div>
        <h2>Key Attributes</h2>
        {isMediumScreen ? (
          <ul className="grid grid-cols-1 gap-x-4 list-none">
            {paymentPlan?.info.shortFeatures.map((features, index) => (
              <li className="flex text-wrap" key={index}>
                <IconDisplay Icon={paymentPlan?.Icon} />

                <span className="pl-3">
                  <strong>{features.title}: </strong>
                  {features.description}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-none">
            {paymentPlan?.info.features.map((features, index) => (
              <li className="flex gap-x-3" key={index}>
                <IconDisplay Icon={paymentPlan?.Icon} />

                {features}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>The Process Overview</h2>
        <p>{paymentPlan?.explanation}</p>

        {paymentPlan?.details.map((detail, index) => (
          <div className="pb-3" key={index}>
            <h3>{detail.title}</h3>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>

      <CallToAction />
    </main>
  );
}
