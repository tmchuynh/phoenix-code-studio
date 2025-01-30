"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Highlight from "@/components/Highlighted";

const ExampleContractsPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Example Contracts
      </h1>
      <p>
        Explore a range of contract examples tailored to various hiring
        scenarios. These examples showcase how we structure agreements to
        address different project needs, timelines, and budgets. Whether you're
        hiring for a short-term engagement, a long-term partnership, or a highly
        specialized project, these examples illustrate the flexibility and
        customization we offer to meet diverse requirements.
      </p>
      <p>
        Each example provides insights into how we handle unique situations,
        from milestone-based payments to comprehensive, end-to-end service
        contracts. Our approach ensures clarity, fairness, and alignment with
        your specific goals. If your situation falls outside these examples,
        don’t worry - we’re ready to create a custom contract that suits your
        exact needs.
      </p>
      <p>
        Take a look at the scenarios below to see how we can help structure a
        contract that works for you. If you have questions or need something
        more specific, reach out to us for a personalized consultation.
      </p>

      {/* Company Contract */}
      <section className="my-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            1. Companies Hiring Phoenix Code Studio
          </h2>
          <p>
            This contract serves as a comprehensive agreement for companies
            hiring Phoenix Code Studio for a project. It is designed to
            establish mutual understanding and ensure transparency in all
            aspects of the collaboration. The contract covers critical
            components such as project scope, detailed deliverables, payment
            terms, and intellectual property rights, ensuring all parties are
            aligned from the outset. By clearly defining roles,
            responsibilities, and expectations, this agreement fosters a smooth
            and efficient workflow while protecting the interests of both the
            client and Phoenix Code Studio. With this contract in place,
            companies can confidently embark on their project, knowing that
            every detail has been carefully considered to ensure a successful
            partnership.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <span className="font-bold text-secondary">Project Scope:</span> A
              comprehensive description of the project, including detailed
              deliverables, timelines, and any specific requirements or
              constraints.
            </li>
            <li>
              <span className="font-bold text-secondary">Payment Terms:</span> A
              structured payment plan, typically including an initial deposit,
              milestone payments tied to project phases, and a final payment
              upon project completion. Options for flexible payment terms may be
              included.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Confidentiality and NDA:
              </span>{" "}
              An agreement ensuring all proprietary information, trade secrets,
              and intellectual property remain confidential and are protected.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Project Timeline:
              </span>{" "}
              Clearly defined project phases, deadlines, and milestones, with
              built-in checkpoints for client review and feedback to ensure
              alignment.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Termination Clause:
              </span>{" "}
              Specific conditions under which the contract can be terminated by
              either party, including notice periods and any associated costs.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Revisions and Feedback:
              </span>{" "}
              Details on how client feedback is collected, the number of
              revisions included within the project scope, and processes for
              additional changes if needed.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Ownership of Deliverables:
              </span>{" "}
              Clarification of ownership rights, ensuring the client receives
              full rights to the final deliverables upon project completion and
              final payment.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Support and Maintenance:
              </span>{" "}
              Optional terms for post-project support or maintenance, outlining
              services, duration, and associated costs if applicable.
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            router.push("/contracts/example-company-contract");
          }}
        >
          View Full Contract Example
        </Button>
      </section>

      <hr />

      {/* Individual Contract */}
      <section className="my-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            2. Individuals Hiring Phoenix Code Studio
          </h2>
          <p>
            This contract is specifically designed for individuals seeking to
            hire Phoenix Code Studio for a personalized project. Whether it’s a
            one-time collaboration or a smaller-scale initiative, this agreement
            provides a tailored and flexible framework that meets the unique
            needs of individual clients. It ensures transparency and sets clear
            expectations on both sides, covering essential aspects such as
            project scope, payment structure, timelines, and intellectual
            property rights. By providing a clear and concise contract, we aim
            to create a seamless working relationship that prioritizes the
            client’s satisfaction while delivering high-quality results. This
            approach allows individuals to confidently move forward, knowing
            their specific goals and requirements are being met with
            professionalism and care.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <span className="font-bold text-secondary">Project Scope:</span> A
              detailed outline of the project goals, expectations, and specific
              final deliverables. Flexibility is provided to accommodate
              personal preferences and adjustments.
            </li>
            <li>
              <span className="font-bold text-secondary">Payment Terms:</span>{" "}
              Various payment options, including upfront payments, hourly rates,
              or installments. The structure is designed to provide flexibility
              based on the individual’s budget and project size.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Revisions and Feedback:
              </span>{" "}
              Inclusion of a specified number of revisions to ensure the final
              product meets the individual’s expectations. A process for
              providing feedback and incorporating changes is clearly outlined.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Intellectual Property:
              </span>{" "}
              An agreement clarifying ownership rights of the final
              deliverables, ensuring the individual has full rights to the
              completed work upon final payment.
            </li>
            <li>
              <span className="font-bold text-secondary">Timeline:</span> A
              clear timeline for project milestones and expected completion
              dates, with built-in flexibility to adapt to the client’s needs
              and schedule.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Termination Clause:
              </span>{" "}
              Terms detailing how the agreement can be terminated by either
              party, including notice periods and any applicable refund
              policies.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Additional Services:
              </span>{" "}
              Options for add-ons such as post-project support or training to
              help the individual maximize the value of the final deliverables.
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            router.push("/contracts/example-individual-contract");
          }}
        >
          View Full Contract Example
        </Button>
      </section>

      <hr />

      {/* Additional Contract Information */}
      <section className="my-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Custom Contracts
          </h2>
          <p>
            Our team will take the time to understand your objectives,
            challenges, and expectations, ensuring that every detail is
            accounted for in the contract. From complex multi-phase projects to
            one-off services with special considerations, we provide the
            expertise and adaptability needed to create a framework that
            supports your vision.
          </p>
          <p>
            Reach out to us to discuss your project in detail, and we’ll craft a
            personalized contract that aligns with your requirements. With a{" "}
            <Highlight>custom-tailored agreement</Highlight>, you can move
            forward with confidence, knowing that your specific needs are fully
            addressed.
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          Contact Us to Create a Custom Contract
        </Button>
      </section>
    </main>
  );
};

export default ExampleContractsPage;
