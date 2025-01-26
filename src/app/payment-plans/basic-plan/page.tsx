"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const BasicPlan = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Basic Plan
        </h2>
        <p className="text-xl text-gray-600">
          Ideal for small projects or businesses just getting started. Pay as
          you go with flexible terms.
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
              Pay per service or milestone
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
              Monthly payments available
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
              Up to 3 months payment term
            </li>
          </ul>
        </div>

        {/* Pricing and Explanation */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            How it Works
          </h3>
          <p className="text-lg mb-4">
            The Basic Plan allows you to start small and scale your payments as
            you grow. You have the flexibility to choose how you want to pay
            based on your project needs. Below is a breakdown of how each
            payment option works:
          </p>

          {/* Pay per service or milestone */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Pay Per Service or Milestone
            </h4>
            <p className="text-lg">
              You can choose to pay based on the service you use or the
              milestones you achieve in your project. This means you only pay
              for what you need, whether that’s completing a specific task or
              reaching a particular project milestone.
            </p>
          </div>

          {/* Monthly Payments */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Monthly Payments
            </h4>
            <p className="text-lg">
              If you prefer more predictability and flexibility, you can opt for
              monthly payments. This option allows you to spread the cost of
              services over time, making it easier to manage your budget and
              cash flow.
            </p>
          </div>

          {/* Up to 3 Months Payment Term */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Up to 3 Months Payment Term
            </h4>
            <p className="text-lg">
              For larger projects or services, you can spread the payments over
              a term of up to three months. This option allows you to enjoy
              greater flexibility while maintaining cash flow for other areas of
              your business.
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

export default BasicPlan;
