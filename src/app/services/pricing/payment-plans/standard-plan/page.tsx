"use client";
import CallToAction from "@/components/CallToAction";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";

const StandardPlan = () => {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  return (
    <main className="my-16 w-11/12 mx-auto">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Standard Plan
        </h1>
        {isSmallScreen && (
          <p>
            Perfect for medium-sized projects, providing more flexible payment
            terms and installments.
          </p>
        )}
        {!isSmallScreen && (
          <p>
            The Standard Plan is ideal for medium-sized projects, offering a
            balanced combination of flexibility and affordability. With extended
            payment terms and the option for installments, this plan is perfect
            for businesses seeking high-quality solutions that align with their
            budget. It’s a smart choice for projects that require a more robust
            approach without compromising on efficiency or results.
          </p>
        )}
        {!isMediumScreen && (
          <p>
            With the Standard Plan, you gain access to solutions tailored to
            your specific needs, ensuring your project receives the attention
            and resources it deserves. It’s an excellent choice for initiatives
            requiring a robust approach, offering the tools and support
            necessary to drive success without compromising on efficiency or
            timelines. Whether you’re enhancing an existing platform or
            launching a new project, the Standard Plan provides the adaptability
            and value you need to achieve outstanding outcomes.
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
              Split payments into 3-6 installments
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
              Priority support during the project
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
              Up to 6 months payment term
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
              Dedicated project manager for seamless communication
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
              Regular progress updates and milestone reviews
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
              Access to a comprehensive resource library for additional support
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
              Customizable plans to accommodate project adjustments
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
              Post-project review session for feedback and improvements
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
          The Standard Plan is tailored for medium-sized projects, providing
          flexible payment options that make managing your budget simple and
          stress-free. With priority support included, we ensure your project is
          completed on time and to the highest standards. This plan is designed
          to give you the perfect balance of quality, efficiency, and
          affordability.
        </p>

        {/* Split Payments into 3-6 Installments */}
        <div className="mb-6">
          <h3 className="font-semibold text-tertiary mb-2">
            Split Payments into 3-6 Installments
          </h3>
          <p>
            The Standard Plan provides the option to split your payments into 3
            to 6 installments, offering a flexible payment structure that fits
            your budget. This allows you to spread out the cost of your project
            over manageable intervals, making it easier to invest in
            high-quality solutions without financial strain. By breaking
            payments into smaller increments, you can prioritize cash flow
            management while ensuring the project stays on track and progresses
            without interruptions.
          </p>
        </div>

        {/* Priority Support During the Project */}
        <div className="mb-6">
          <h3 className="font-semibold text-tertiary mb-2">
            Priority Support During the Project
          </h3>
          <p>
            With the Standard Plan, you’ll benefit from priority support
            throughout your project’s lifecycle. Our team is dedicated to
            providing prompt assistance, whether it’s answering questions,
            addressing concerns, or offering expert guidance. This level of
            support ensures smooth project execution and gives you peace of mind
            knowing that any challenges will be handled swiftly. With our
            focused attention, you can stay confident and keep your project
            moving forward efficiently.
          </p>
        </div>

        {/* Up to 6 Months Payment Term */}
        <div className="mb-6">
          <h3 className="font-semibold text-tertiary mb-2">
            Up to 6 Months Payment Term
          </h3>
          <p>
            The Standard Plan offers a payment term of up to 6 months, providing
            you with the flexibility to manage larger projects at your own pace.
            This extended term is ideal for businesses looking to balance their
            financial commitments while investing in impactful solutions. With
            the added time to spread out payments, you can focus on achieving
            your project’s goals without compromising on quality or efficiency.
            This payment option ensures that you can move forward with
            confidence, knowing your finances are aligned with your project’s
            needs.
          </p>
        </div>
      </section>

      {/* Call to Action Button */}
      <CallToAction />
    </main>
  );
};

export default StandardPlan;
