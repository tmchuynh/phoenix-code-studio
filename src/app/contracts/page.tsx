"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const ExampleContractsPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Example Contracts
      </h1>
      <p className="text-lg my-4">
        Below are examples of contracts for different hiring scenarios:
      </p>

      {/* Company Contract */}
      <section className="my-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            1. Company Hiring Phoenix Code Studio
          </h2>
          <p className="my-4">
            This contract is for a company hiring **Phoenix Code Studio** for a
            project. It covers key terms such as scope, payment structure, and
            intellectual property:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold text-secondary">Project Scope:</span>{" "}
              Detailed description of the project, including deliverables and
              timelines.
            </li>
            <li>
              <span className="font-bold text-secondary">Payment Terms:</span>{" "}
              Payment structure, including deposit, milestones, and final
              payment. Typically, payments are made based on project phases.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Confidentiality and NDA:
              </span>{" "}
              Protection of proprietary information and intellectual property.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Project Timeline:
              </span>{" "}
              An agreed-upon timeline with key milestones and client feedback.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Termination Clause:
              </span>{" "}
              Terms under which the agreement may be terminated by either party.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Revisions and Feedback:
              </span>{" "}
              Number of revisions included, and how feedback is integrated.
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            // Link to download or view a full contract example for a company
          }}
        >
          View Full Contract Example
        </Button>
      </section>

      <hr />

      {/* Individual Contract */}
      <section className="my-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            2. Individual Hiring Phoenix Code Studio
          </h2>
          <p className="my-4">
            This contract is for an individual hiring **Phoenix Code Studio**
            for a project. It is tailored for smaller, more flexible
            engagements:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold text-secondary">Project Scope:</span> A
              detailed description of the project, expectations, and final
              deliverables.
            </li>
            <li>
              <span className="font-bold text-secondary">Payment Terms:</span>{" "}
              Payment structure, including upfront payment, hourly rates, or
              installment payments.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Revisions and Feedback:
              </span>{" "}
              Number of revisions included and how feedback is integrated into
              the project.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Intellectual Property:
              </span>{" "}
              The agreement on ownership of the final deliverables.
            </li>
            <li>
              <span className="font-bold text-secondary">Timeline:</span>{" "}
              Expected completion dates with some flexibility based on client
              needs.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Termination Clause:
              </span>{" "}
              How the agreement can be terminated by either party and any refund
              policies.
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            // Link to download or view a full contract example for an individual
          }}
        >
          View Full Contract Example
        </Button>
      </section>

      <hr />

      {/* Additional Contract Information */}
      <section className="my-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Custom Contracts</h2>
          <p className="my-4">
            If your situation doesn’t quite match these examples, we can create
            a custom contract tailored to your specific needs. Contact us to
            discuss the details and we’ll draft an agreement that fits your
            project.
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
