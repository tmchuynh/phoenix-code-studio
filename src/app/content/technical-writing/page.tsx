"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const TechnicalWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Technical Writing Services
      </h1>
      <p className="text-center text-lg my-4">
        Deliver clear, precise, and actionable technical documentation tailored
        to your audience.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Technical Writing Matters
        </h2>
        <p className="my-4">
          Effective technical writing bridges the gap between complex
          information and user understanding. Whether you need manuals, guides,
          or specifications, professional technical documentation ensures
          accuracy, clarity, and usability.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Improved User Experience:
            </span>{" "}
            Help users navigate, troubleshoot, and use your products
            effectively.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enhanced Brand Credibility:
            </span>{" "}
            Establish trust with professionally written, error-free
            documentation.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Time and Cost Savings:
            </span>{" "}
            Reduce support queries with comprehensive, self-service resources.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Compliance and Accuracy:
            </span>{" "}
            Meet industry standards and ensure consistency across documents.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Technical Writing Services
        </h2>
        <p className="my-4">
          We specialize in creating precise, easy-to-understand technical
          documents across various industries.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">User Manuals:</span>{" "}
            Step-by-step guides for software, hardware, and products.
          </li>
          <li>
            <span className="font-bold text-secondary">API Documentation:</span>{" "}
            Comprehensive, developer-focused guides for using your APIs
            effectively.
          </li>
          <li>
            <span className="font-bold text-secondary">Knowledge Bases:</span>{" "}
            Online repositories for troubleshooting, FAQs, and technical
            support.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Technical Specifications:
            </span>{" "}
            Detailed descriptions of systems, products, and processes.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Standard Operating Procedures (SOPs):
            </span>{" "}
            Clear instructions for operational workflows.
          </li>
          <li>
            <span className="font-bold text-secondary">White Papers:</span>{" "}
            Authoritative, in-depth reports on industry-specific topics.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your audience, goals, and technical requirements.
          </li>
          <li>
            <span className="font-bold text-secondary">Content Planning:</span>{" "}
            Outline the structure, format, and key elements of the document.
          </li>
          <li>
            <span className="font-bold text-secondary">Content Creation:</span>{" "}
            Write clear, concise, and accurate technical content tailored to
            your audience.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Review and Revision:
            </span>{" "}
            Collaborate with your team to ensure technical accuracy and clarity.
          </li>
          <li>
            <span className="font-bold text-secondary">Final Delivery:</span>{" "}
            Provide the documentation in the required formats (PDF, HTML, etc.).
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Project
          timelines depend on the document type, length, complexity, and
          audience. Typical projects range from 1 to 4 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We utilize industry-leading tools to deliver high-quality technical
          content:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>MadCap Flare</li>
          <li>Confluence</li>
          <li>Markdown Editors</li>
          <li>Adobe FrameMaker</li>
          <li>Google Docs for collaboration</li>
          <li>Grammarly for proofreading</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the complexity, length, audience, and level of
          technical expertise required for the documentation.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Short Guides or SOPs:
            </span>{" "}
            Starting at $750.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Comprehensive Manuals or Knowledge Bases:
            </span>{" "}
            Starting at $2,000.
          </li>
          <li>
            <span className="font-bold text-secondary">
              API Documentation or White Papers:
            </span>{" "}
            Starting at $3,000.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your technical documentation?{" "}
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

export default TechnicalWritingServices;
