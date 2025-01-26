"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const CustomPlan = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Custom Plan
        </h2>
        <p className="text-xl">
          Tailored payment options based on the complexity and size of your
          project. We can create a custom plan to fit your budget.
        </p>
      </div>

      {/* Features Explanation */}
      <div className="space-y-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Flexible payment terms based on project scope</li>
            <li>Options for ongoing support and scaling</li>
            <li>Up to 24 months term based on agreement</li>
          </ul>
        </div>

        {/* Pricing and Explanation */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            How it Works
          </h3>
          <p className="text-lg mb-4">
            The Custom Plan is designed to meet the specific needs of large and
            complex projects. We work with you to understand your project scope
            and provide flexible terms to ensure your budget fits within the
            project’s requirements.
          </p>

          {/* Flexible Payment Terms */}
          <div className="mb-6">
            <h4 className="font-semibold text-secondary">
              Flexible Payment Terms Based on Project Scope
            </h4>
            <p className="text-lg">
              We tailor the payment terms according to the size and complexity
              of your project. Whether it’s a simple project or a large-scale
              initiative, we can adjust the payment structure to fit your
              financial needs.
            </p>
          </div>

          {/* Ongoing Support and Scaling Options */}
          <div className="mb-6">
            <h4 className="font-semibold text-secondary">
              Options for Ongoing Support and Scaling
            </h4>
            <p className="text-lg">
              The Custom Plan provides the flexibility to include ongoing
              support and scaling options as your project grows. Whether you
              need post-launch maintenance or additional features, we can
              accommodate your needs.
            </p>
          </div>

          {/* Up to 24 Months Payment Term */}
          <div className="mb-6">
            <h4 className="font-semibold text-secondary">
              Up to 24-Month Payment Term
            </h4>
            <p className="text-lg">
              For larger projects, we offer extended payment terms of up to 24
              months. This allows you to distribute payments over a longer
              period while still ensuring timely project completion and support.
            </p>
          </div>

          {/* Examples of Custom Payment Plans */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Examples of Custom Payment Plans
            </h3>
            <p className="text-lg mb-4">
              To help you visualize how we can tailor payment options to your
              specific project, here are a few examples of custom payment plans
              we have provided to other clients:
            </p>

            {/* Example 1 */}
            <div className="mb-6">
              <h4 className="font-semibold text-secondary">
                Example 1: Mid-Scale Web Development Project
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Project Scope:</strong> Design and development of a
                  custom website for a growing business.
                </li>
                <li>
                  <strong>Payment Term:</strong> $10,000 total project cost,
                  split into 4 installments over 12 months.
                </li>
                <li>
                  <strong>Support:</strong> 6 months of ongoing support after
                  launch, including updates and bug fixes.
                </li>
                <li>
                  <strong>Additional Details:</strong> Initial deposit of
                  $2,500, followed by 3 equal monthly installments of $2,500.
                </li>
              </ul>
            </div>

            {/* Example 2 */}
            <div className="mb-6">
              <h4 className="font-semibold text-secondary">
                Example 2: Large-Scale Mobile App Development
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Project Scope:</strong> Full development of a mobile
                  app with integration of third-party APIs.
                </li>
                <li>
                  <strong>Payment Term:</strong> $50,000 total project cost,
                  split into 5 installments over 18 months.
                </li>
                <li>
                  <strong>Support:</strong> Ongoing support after project
                  delivery with an option for scaling as new features are added.
                </li>
                <li>
                  <strong>Additional Details:</strong> Monthly payments of
                  $7,500, with a 3-month grace period before payments start.
                </li>
              </ul>
            </div>

            {/* Example 3 */}
            <div>
              <h4 className="font-semibold text-secondary">
                Example 3: Enterprise Software Integration
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Project Scope:</strong> Integration of new software
                  into an enterprise’s existing infrastructure.
                </li>
                <li>
                  <strong>Payment Term:</strong> $100,000 total project cost,
                  split into 6 installments over 24 months.
                </li>
                <li>
                  <strong>Support:</strong> Continuous support and maintenance
                  for the first year, plus an option to extend.
                </li>
                <li>
                  <strong>Additional Details:</strong> Payments are divided
                  equally every 4 months, starting 2 months after the initial
                  deposit of $20,000.
                </li>
              </ul>
            </div>
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

export default CustomPlan;
