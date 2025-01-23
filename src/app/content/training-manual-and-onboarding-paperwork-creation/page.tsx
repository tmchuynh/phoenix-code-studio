"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const TrainingManualOnboardingPapers: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Training Manual and Onboarding Papers Creation Services
      </h1>
      <p className="text-center text-lg my-4">
        Equip your team with comprehensive training manuals and onboarding
        documents designed to ensure smooth transitions and operational
        excellence.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Training Manuals and Onboarding Papers Matter
        </h2>
        <p className="my-4">
          Training manuals and onboarding papers play a critical role in setting
          new employees up for success. They ensure consistency, clarify
          expectations, and provide a structured approach to integrating team
          members into your organization.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Streamline Onboarding:
            </span>{" "}
            Provide new hires with all the information they need to get started
            confidently.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enhance Productivity:
            </span>{" "}
            Reduce the learning curve and ensure employees are equipped to
            contribute quickly.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Ensure Consistency:
            </span>{" "}
            Standardize training and onboarding processes across teams and
            departments.
          </li>
          <li>
            <span className="font-bold text-secondary">Foster Engagement:</span>{" "}
            Build a positive first impression and boost employee retention.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Training Manual and Onboarding Services
        </h2>
        <p className="my-4">
          We specialize in creating customized documents tailored to your
          organization’s needs and culture.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Training Manual Creation:
            </span>{" "}
            Develop detailed manuals for processes, policies, and workflows.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Onboarding Documents:
            </span>{" "}
            Create checklists, welcome kits, and key policy guides for new
            employees.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Role-Specific Guides:
            </span>{" "}
            Craft position-specific training guides to address unique
            responsibilities.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Employee Handbooks:
            </span>{" "}
            Comprehensive guides covering company culture, policies, and
            benefits.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Multimedia Integration:
            </span>{" "}
            Enhance documents with visuals, infographics, and video links.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your business goals, team structure, and training needs.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Content Development:
            </span>{" "}
            Create clear, concise content tailored to your objectives.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Design and Formatting:
            </span>{" "}
            Develop visually engaging layouts with your branding.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Review and Refinement:
            </span>{" "}
            Collaborate with you to ensure accuracy and alignment with company
            values.
          </li>
          <li>
            <span className="font-bold text-secondary">Final Delivery:</span>{" "}
            Provide print-ready or digital documents in your preferred formats.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Projects
          are typically completed within 2–6 weeks, depending on scope and
          complexity.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We utilize industry-leading tools to create professional and engaging
          training materials:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Adobe InDesign for professional layouts</li>
          <li>Canva for custom visuals and infographics</li>
          <li>Snagit for annotated screenshots</li>
          <li>Grammarly for proofreading and editing</li>
          <li>Microsoft Word for content drafting and formatting</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the document type, length, and complexity. We
          offer flexible packages to suit your needs.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Basic Onboarding Documents:
            </span>{" "}
            Starting at $500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Training Manuals (10–20 pages):
            </span>{" "}
            Starting at $1,500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Comprehensive Manuals (20–50 pages):
            </span>{" "}
            Starting at $3,000.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Advanced Manuals with Multimedia:
            </span>{" "}
            Starting at $5,000.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to empower your team with clear and effective training and
          onboarding materials?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and customized quote.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default TrainingManualOnboardingPapers;
