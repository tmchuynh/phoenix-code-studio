"use client";
import CallToAction from "@/components/CallToAction";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";

const CustomPlan = () => {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();

  return (
    <main className="my-16 w-11/12 mx-auto">
      {/* Page Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Custom Plan
        </h1>
        {isSmallScreen && (
          <p>
            Tailored payment options based on the complexity and size of your
            project. We can create a custom plan to fit your budget.
          </p>
        )}
        {!isSmallScreen && (
          <p>
            Our Custom Plan is designed to provide fully tailored payment
            solutions that align with the unique needs, complexity, and scope of
            your project. Whether you’re embarking on a small initiative or
            managing a large-scale, multi-phase endeavor, we collaborate closely
            with you to craft a payment structure that fits seamlessly into your
            budget and financial planning. By offering flexible terms and
            personalized options, we ensure that you can focus on achieving your
            project goals without unnecessary financial stress.
          </p>
        )}
        {!isMediumScreen && (
          <p>
            This plan is ideal for businesses seeking scalability and
            adaptability in their projects. Whether your requirements include
            specialized services, ongoing support, or evolving project phases,
            the Custom Plan is built to accommodate your needs at every step.
            Our approach prioritizes delivering the highest quality results
            while maintaining transparency and flexibility throughout the
            process. No matter the size or complexity of your project, the
            Custom Plan empowers you to turn your vision into reality with a
            payment structure that works for you.
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
              Flexible payment terms based on project scope
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
              Options for ongoing support and scaling
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
              Up to 24 months term based on agreement
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
              Milestone-based payment options for phased projects
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
              No upfront full payment required for flexibility
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
              Customized installment plans to match your cash flow
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
              Adjustable terms to accommodate project changes
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
              Transparent payment tracking and invoicing
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
              Options for add-ons or feature upgrades mid-project
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
          The Custom Plan is designed to meet the specific needs of large and
          complex projects. We work with you to understand your project scope
          and provide flexible terms to ensure your budget fits within the
          project’s requirements.
        </p>

        {/* Flexible Payment Terms */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Flexible Payment Terms Based on Project Scope
          </h3>
          <p>
            We understand that every project is unique, which is why our payment
            terms are tailored to match the size, complexity, and scope of your
            initiative. Whether you're working on a straightforward project or a
            large-scale, multi-phase endeavor, we can customize the payment
            structure to suit your financial planning. This flexibility ensures
            that you can move forward with confidence, knowing your budget and
            project requirements are perfectly aligned.
          </p>
        </div>

        {/* Ongoing Support and Scaling Options */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Options for Ongoing Support and Scaling
          </h3>
          <p>
            The Custom Plan is designed with your project's growth in mind,
            offering options for ongoing support and scalability. As your needs
            evolve, we provide post-launch maintenance, feature updates, and
            scaling solutions to keep your project relevant and effective.
            Whether you need continuous monitoring, new integrations, or
            expansions, we ensure your project adapts to meet changing demands,
            allowing for seamless growth without interruptions.
          </p>
        </div>

        {/* Up to 24-Month Payment Term */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-tertiary mb-2">
            Up to 24-Month Payment Term
          </h3>
          <p>
            For large-scale and long-term projects, we offer extended payment
            terms of up to 24 months, providing maximum financial flexibility.
            This allows you to spread out costs over an extended period, making
            it easier to manage your budget while still achieving timely project
            completion. With this extended term, you can focus on delivering
            impactful results without financial strain, ensuring that your
            project receives the attention and resources it deserves from start
            to finish.
          </p>
        </div>

        {/* Examples of Custom Payment Plans */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Examples of Custom Payment Plans
          </h3>
          <p>
            To give you a better understanding of how we can customize payment
            options to meet the unique needs of your project, we’ve compiled a
            few examples of tailored payment plans we’ve successfully
            implemented for other clients. These examples showcase the
            flexibility and adaptability we offer, ensuring that every client
            receives a plan designed to fit their budget and project
            requirements. Whether it’s extended payment terms, milestone-based
            billing, or scalable payment structures for ongoing projects, our
            solutions are always crafted with your goals in mind.
          </p>

          {/* Example 1 */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-tertiary mb-2">
              Example 1: Mid-Scale Web Development Project
            </h3>
            <ul>
              <li>
                <strong className="text-accent-3">Project Scope:</strong> Design
                and development of a custom website for a growing business,
                including responsive design, e-commerce functionality, and SEO
                optimization.
              </li>
              <li>
                <strong className="text-accent-3">Payment Term:</strong> $10,000
                total project cost, split into 4 installments over 12 months to
                accommodate budget flexibility.
              </li>
              <li>
                <strong className="text-accent-3">Support:</strong> 6 months of
                ongoing support after launch, covering regular updates, bug
                fixes, and minor feature enhancements.
              </li>
              <li>
                <strong className="text-accent-3">Additional Details:</strong>{" "}
                Initial deposit of $2,500 to begin the project, followed by 3
                equal installments of $2,500 paid monthly after the website
                launch.
              </li>
            </ul>
          </div>

          {/* Example 2 */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-tertiary mb-2">
              Example 2: Large-Scale Mobile App Development
            </h3>
            <ul>
              <li>
                <strong className="text-accent-3">Project Scope:</strong>{" "}
                Complete development of a feature-rich mobile app, including
                user authentication, custom dashboards, and integration with
                third-party APIs.
              </li>
              <li>
                <strong className="text-accent-3">Payment Term:</strong> $50,000
                total project cost, divided into 5 installments over 18 months
                to support financial flexibility for a long-term project.
              </li>
              <li>
                <strong className="text-accent-3">Support:</strong>{" "}
                Comprehensive support package after delivery, including regular
                updates, scalability options, and new feature integration as
                needed.
              </li>
              <li>
                <strong className="text-accent-3">Additional Details:</strong>{" "}
                Monthly payments of $7,500, with a 3-month grace period after
                the initial deposit to ensure the client can focus on the
                project’s progress without immediate financial pressure.
              </li>
            </ul>
          </div>

          {/* Example 3 */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-tertiary mb-2">
              Example 3: Enterprise Software Integration
            </h3>
            <ul>
              <li>
                <strong className="text-accent-3">Project Scope:</strong>{" "}
                Integration of advanced enterprise software into the existing IT
                infrastructure, including data migration, workflow automation,
                and security enhancements.
              </li>
              <li>
                <strong className="text-accent-3">Payment Term:</strong>{" "}
                $100,000 total project cost, divided into 6 installments over 24
                months to provide extended payment flexibility for a high-value
                project.
              </li>
              <li>
                <strong className="text-accent-3">Support:</strong> Continuous
                support and maintenance for the first year, covering system
                updates, troubleshooting, and optimization. Clients also have
                the option to extend support services for future needs.
              </li>
              <li>
                <strong className="text-accent-3">Additional Details:</strong>{" "}
                An initial deposit of $20,000 starts the project, with
                subsequent payments of $16,000 every 4 months, beginning 2
                months after the initial setup.
              </li>
            </ul>
          </div>

          {/* Example 4 */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-tertiary mb-2">
              Example 4: E-Commerce Website Development
            </h3>
            <ul>
              <li>
                <strong className="text-accent-3">Project Scope:</strong> Design
                and development of a scalable e-commerce platform with features
                such as a product catalog, secure payment integration, and
                personalized user experiences.
              </li>
              <li>
                <strong className="text-accent-3">Payment Term:</strong> $25,000
                total project cost, split into 5 installments over 10 months for
                greater financial flexibility.
              </li>
              <li>
                <strong className="text-accent-3">Support:</strong> 8 months of
                post-launch support, including performance monitoring, bug
                fixes, and SEO optimization.
              </li>
              <li>
                <strong className="text-accent-3">Additional Details:</strong>{" "}
                An initial deposit of $5,000, followed by equal monthly
                installments of $4,000 for 5 months.
              </li>
            </ul>
          </div>

          {/* Example 5 */}
          <div>
            <h3 className="text-2xl font-semibold text-tertiary mb-2">
              Example 5: SaaS Platform Development
            </h3>
            <ul>
              <li>
                <strong className="text-accent-3">Project Scope:</strong>{" "}
                Development of a SaaS platform with user authentication,
                subscription management, and API integrations for third-party
                services.
              </li>
              <li>
                <strong className="text-accent-3">Payment Term:</strong> $75,000
                total project cost, distributed over 8 installments across 20
                months to accommodate the phased delivery of the platform.
              </li>
              <li>
                <strong className="text-accent-3">Support:</strong> 12 months of
                continuous support, including system updates, scalability
                enhancements, and troubleshooting.
              </li>
              <li>
                <strong className="text-accent-3">Additional Details:</strong>{" "}
                An initial payment of $15,000, followed by 7 equal installments
                of $8,500 every 3 months.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <CallToAction />
    </main>
  );
};

export default CustomPlan;
