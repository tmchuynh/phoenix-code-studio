"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const PremiumPlan = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">Premium Plan</h2>
        <p className="text-xl text-gray-600">
          For large-scale, ongoing projects requiring continuous work and
          support. Flexible and extended payment options.
        </p>
      </div>

      {/* Features Explanation */}
      <div className="space-y-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">Features</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              Monthly retainer payments
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              Up to 12-month payment terms
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              Full service including ongoing support
            </li>
          </ul>
        </div>

        {/* Pricing and Explanation */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            How it Works
          </h3>
          <p className="text-lg mb-4">
            The Premium Plan is designed for large-scale, ongoing projects that
            require continuous work and support. It provides extended payment
            terms and ongoing service to ensure your project is completed
            efficiently.
          </p>

          {/* Monthly Retainer Payments */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Monthly Retainer Payments
            </h4>
            <p className="text-lg">
              The Premium Plan offers a monthly retainer payment structure,
              making it easier to budget for long-term projects. This allows for
              continuous service and support throughout the duration of the
              project.
            </p>
          </div>

          {/* Up to 12-month Payment Terms */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Up to 12-Month Payment Terms
            </h4>
            <p className="text-lg">
              For larger projects, we offer up to 12 months to pay, providing
              even more flexibility to manage your cash flow. You can spread out
              the payments over the term that best fits your budget.
            </p>
          </div>

          {/* Full Service Including Ongoing Support */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Full Service Including Ongoing Support
            </h4>
            <p className="text-lg">
              With the Premium Plan, you receive full-service support that
              includes ongoing maintenance and improvements to ensure the
              success of your project. Our team is always available to address
              any issues or requests as your project evolves.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-12 text-center">
        <Button
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PremiumPlan;
