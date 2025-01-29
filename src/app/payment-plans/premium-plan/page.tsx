"use client";
import CallToAction from "@/components/CallToAction";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";

const PremiumPlan = () => {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  return (
    <main className="my-16 w-11/12 mx-auto">
      {/* Page Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
          Premium Plan
        </h1>
        {isSmallScreen && (
          <p>
            For large-scale, ongoing projects requiring continuous work and
            support. Flexible and extended payment options.
          </p>
        )}
        {!isSmallScreen && (
          <p>
            The Premium Plan is designed for large-scale, ongoing projects that
            demand continuous work, advanced support, and long-term
            collaboration. With flexible and extended payment options, this plan
            ensures you have the resources and expertise needed to achieve your
            ambitious goals. Perfect for businesses looking for comprehensive,
            scalable solutions, the Premium Plan delivers unmatched value and
            sustained results.
          </p>
        )}
        {!isMediumScreen && (
          <p>
            With the Premium Plan, you gain access to comprehensive, scalable
            solutions that evolve with your business. Whether you need advanced
            features, regular updates, or strategic guidance, this plan ensures
            your project is equipped with the expertise and tools required for
            success. Perfect for organizations aiming to tackle complex
            challenges and achieve sustained growth, the Premium Plan delivers
            exceptional value through its combination of flexibility,
            innovation, and long-term results.
          </p>
        )}
      </section>

      {/* Features Explanation */}
      <section className="space-y-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Features
          </h2>
          <ul className="text-lg grid gap-4 grid-cols-1 md:grid-cols-2">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
                className="h-6 w-6 text-tertiary mr-2"
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
                className="h-6 w-6 text-tertiary mr-2"
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
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
              Dedicated account manager for personalized service
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
              Priority support with expedited issue resolution
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
              Scalability options for growing project needs
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
              Comprehensive performance tracking and reporting
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
              Custom integrations and advanced features
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary mr-2"
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
              Quarterly strategy sessions for ongoing improvement
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing and Explanation */}
      <section>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          How it Works
        </h2>
        <p>
          The Premium Plan is crafted for large-scale, ongoing projects that
          demand continuous collaboration and expert support. This plan offers
          extended payment terms and dedicated ongoing service to ensure your
          project is executed efficiently and meets your long-term goals. With a
          focus on sustained quality and performance, the Premium Plan provides
          the flexibility and resources needed to bring ambitious projects to
          life.
        </p>

        {/* Monthly Retainer Payments */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Monthly Retainer Payments
          </h3>
          <p>
            The Premium Plan offers the convenience of a monthly retainer
            payment structure, making it easier to manage expenses for long-term
            projects. This approach ensures that you have access to consistent
            service and support throughout the duration of your project. By
            spreading payments evenly over time, you can focus on achieving your
            goals without worrying about upfront financial burdens. This
            flexible arrangement allows for seamless collaboration and
            uninterrupted progress.
          </p>
        </div>

        {/* Up to 12-Month Payment Terms */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Up to 12-Month Payment Terms
          </h3>
          <p>
            For larger and more complex projects, the Premium Plan provides the
            option to extend payment terms up to 12 months. This flexibility
            helps you better manage your budget and cash flow, ensuring that
            your project remains financially sustainable. With the ability to
            spread payments over an extended period, you can invest in the
            resources and expertise needed to bring your vision to life without
            compromising on quality or timelines.
          </p>
        </div>

        {/* Full Service Including Ongoing Support */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Full Service Including Ongoing Support
          </h3>
          <p>
            The Premium Plan provides a comprehensive service package that
            includes ongoing support and maintenance to ensure the long-term
            success of your project. Our team is committed to staying actively
            involved, addressing any issues, implementing updates, and
            introducing improvements as your needs evolve. Whether it’s regular
            maintenance, troubleshooting, or adapting your project to meet
            changing demands, we’re here to help every step of the way. With
            this level of continuous care, you can rest assured that your
            investment is safeguarded and optimized for future growth.
          </p>
        </div>
      </section>

      {/* Call to Action Button */}
      <CallToAction />
    </main>
  );
};

export default PremiumPlan;
