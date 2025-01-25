"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const StandardPlan = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">Standard Plan</h2>
        <p className="text-xl text-gray-600">
          Perfect for medium-sized projects, providing more flexible payment
          terms and installments.
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
              Split payments into 3-6 installments
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
              Priority support during the project
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
              Up to 6 months payment term
            </li>
          </ul>
        </div>

        {/* Pricing and Explanation */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            How it Works
          </h3>
          <p className="text-lg mb-4">
            The Standard Plan is designed to accommodate medium-sized projects,
            offering greater flexibility with payment options and priority
            support to ensure that your project is completed efficiently.
          </p>

          {/* Split Payments into 3-6 Installments */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Split Payments into 3-6 Installments
            </h4>
            <p className="text-lg">
              You can choose to split your payment over 3 to 6 installments,
              providing more flexibility in managing your project’s financial
              needs. This plan allows you to spread out payments without
              compromising on the project’s progress.
            </p>
          </div>

          {/* Priority Support During the Project */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Priority Support During the Project
            </h4>
            <p className="text-lg">
              As part of the Standard Plan, you’ll receive priority support
              throughout the duration of your project. Our dedicated team will
              ensure that any questions or issues are addressed quickly, helping
              you stay on track.
            </p>
          </div>

          {/* Up to 6 Months Payment Term */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary mb-2">
              Up to 6 Months Payment Term
            </h4>
            <p className="text-lg">
              With the Standard Plan, you can opt for a payment term of up to 6
              months. This provides ample time to manage larger projects while
              keeping your finances flexible.
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

export default StandardPlan;
