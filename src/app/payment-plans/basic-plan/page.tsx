"use client";
import CallToAction from "@/components/CallToAction";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";

const BasicPlan = () => {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();

  return (
    <main className="my-16 w-11/12 mx-auto">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Basic Plan
        </h1>
        {isSmallScreen && (
          <p>
            Ideal for small projects or businesses just getting started. Pay as
            you go with flexible terms.
          </p>
        )}
        {!isSmallScreen && (
          <p>
            This plan provides a solid foundation for your project, offering the
            essential tools and services required to establish a strong online
            presence. As your business grows and your needs evolve, the Basic
            Plan allows you to scale and adapt, ensuring long-term support for
            your success. Whether you're building a small website, starting an
            e-commerce venture, or enhancing your brand's digital footprint, the
            Basic Plan offers everything you need to get started while keeping
            future growth in mind.
          </p>
        )}
        {!isMediumScreen && (
          <p>
            The Basic Plan is an ideal starting point for small projects or
            businesses entering the digital space for the first time. Designed
            to be simple and cost-effective, this plan offers a convenient
            pay-as-you-go structure, giving you the flexibility to invest in
            only the services you need when you need them. With its affordable
            and adaptable terms, the Basic Plan ensures that you receive
            high-quality solutions without exceeding your budget, making it an
            excellent choice for businesses with limited resources or those
            testing the waters of digital transformation.
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
              Pay per service or milestone
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
              Monthly payments available
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
              Up to 3 months payment term
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
              Ideal for small projects or businesses starting out
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
              No upfront full payment required
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
              Easy upgrades to other plans as your business grows
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
              Simple and transparent payment tracking
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
              Quick and easy project start-up process
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
          The Basic Plan allows you to start small and scale your payments as
          you grow. You have the flexibility to choose how you want to pay based
          on your project needs. Below is a breakdown of how each payment option
          works:
        </p>

        {/* Pay Per Service or Milestone */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Pay Per Service or Milestone
          </h3>
          <p>
            Our "Pay Per Service or Milestone" option gives you the ultimate
            flexibility to control your budget by paying only for what you need.
            Whether it’s a specific task or a major project milestone, this
            approach ensures you receive value at every stage of the project. By
            aligning payments with tangible progress, you can confidently move
            forward, knowing you’re investing in measurable results. This option
            is perfect for businesses that prefer incremental progress and clear
            deliverables.
          </p>
        </div>

        {/* Monthly Payments */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Monthly Payments
          </h3>
          <p>
            For those who prioritize budget predictability and financial
            flexibility, our monthly payment option offers a convenient
            solution. This structure allows you to spread the cost of services
            over time, easing financial strain while maintaining steady progress
            on your project. Monthly payments are ideal for businesses that want
            consistent cash flow management without compromising on quality or
            timelines. With this option, you can plan ahead and focus on
            achieving your goals without unexpected expenses.
          </p>
        </div>

        {/* Up to 3 Months Payment Term */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Up to 3 Months Payment Term
          </h3>
          <p>
            For larger or more complex projects, we offer payment terms of up to
            three months to provide added flexibility. This option allows you to
            distribute the cost over a longer period, making it easier to
            balance your budget and allocate resources effectively. By choosing
            this extended term, you can focus on other areas of your business
            while still ensuring that your project progresses smoothly and is
            completed on time. It's a practical way to manage finances without
            compromising on results.
          </p>
        </div>
      </section>

      {/* Call to Action Button */}
      <CallToAction />
    </main>
  );
};

export default BasicPlan;
