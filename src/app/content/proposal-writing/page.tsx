"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const ProposalWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Proposal Writing Services
      </h1>
      <p className="text-center text-lg my-4">
        Create compelling, professional proposals that win clients, contracts,
        and funding.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Proposal Writing Matters</h2>
        <p className="my-4">
          A well-crafted proposal can be the difference between securing a deal
          and losing out. Whether for business, grants, or projects, your
          proposal needs to communicate value, professionalism, and clarity to
          stand out.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Win More Contracts:
            </span>{" "}
            Professionally written proposals increase your chances of success.
          </li>
          <li>
            <span className="font-bold text-secondary">Save Time:</span> Let
            experts handle the writing while you focus on other priorities.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Impress Stakeholders:
            </span>{" "}
            Demonstrate professionalism and attention to detail with polished
            proposals.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Tailored Messaging:
            </span>{" "}
            Address your audience’s specific needs and concerns effectively.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Proposal Writing Services
        </h2>
        <p className="my-4">
          We provide end-to-end proposal writing solutions tailored to your
          specific needs and goals.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Business Proposals:
            </span>{" "}
            Win clients with persuasive, professionally written proposals.
          </li>
          <li>
            <span className="font-bold text-secondary">Grant Proposals:</span>{" "}
            Secure funding with clear, compelling, and compliant grant
            applications.
          </li>
          <li>
            <span className="font-bold text-secondary">Project Proposals:</span>{" "}
            Outline your project scope, goals, and deliverables effectively.
          </li>
          <li>
            <span className="font-bold text-secondary">RFP Responses:</span>{" "}
            Respond to requests for proposals (RFPs) with tailored, high-impact
            submissions.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Partnership Proposals:
            </span>{" "}
            Forge partnerships with concise, value-driven messaging.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your goals, audience, and proposal requirements.
          </li>
          <li>
            <span className="font-bold text-secondary">Research:</span> Gather
            supporting data, audience insights, and competitive analysis.
          </li>
          <li>
            <span className="font-bold text-secondary">Drafting:</span> Write a
            clear, persuasive proposal tailored to your objectives.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Review and Feedback:
            </span>{" "}
            Collaborate with you to refine and finalize the proposal.
          </li>
          <li>
            <span className="font-bold text-secondary">Final Delivery:</span>{" "}
            Provide a polished, ready-to-submit proposal in the desired format
            (PDF, Word, etc.).
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> The
          timeline depends on the proposal’s complexity, length, and
          requirements. Typical projects range from 1 to 3 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-leading tools to create professional, polished
          proposals:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Microsoft Word for document creation</li>
          <li>Google Docs for collaboration</li>
          <li>Grammarly for proofreading</li>
          <li>Adobe Acrobat for formatting and final presentation</li>
          <li>
            Data visualization tools (e.g., Canva, Excel) for charts and visuals
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the complexity, length, and specific requirements
          of your proposal.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Basic Proposals (e.g., 1-3 pages):
            </span>{" "}
            Starting at $500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Comprehensive Proposals (e.g., 5-10 pages):
            </span>{" "}
            Starting at $1,500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Grant Proposals or RFP Responses:
            </span>{" "}
            Starting at $2,000.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to create a winning proposal?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default ProposalWritingServices;
