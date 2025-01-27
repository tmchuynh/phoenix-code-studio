"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  onboardingPaperBenefits,
  onboardingServices,
  onboardingProcessSteps,
  toolsForOnboarding,
} from "@/lib/content-constants";

const TrainingManualOnboardingPapers: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Training Manual and Onboarding Papers Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name ===
              "Training Manual and Onboarding Paperwork Creation" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Training Manuals and Onboarding Papers Matter
        </h2>
        <p className="my-4">
          Training manuals and onboarding documents are essential tools for
          helping new employees succeed and seamlessly integrate into your
          organization. These materials provide clear, consistent guidance on
          company policies, roles, and processes, ensuring that expectations are
          well understood from day one. By offering a structured approach to
          onboarding, they reduce the learning curve, enhance productivity, and
          promote a sense of confidence and alignment among team members.
          Professionally crafted training manuals not only streamline the
          onboarding experience but also contribute to long-term employee
          engagement and success.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {onboardingPaperBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Training Manual and Onboarding Services
        </h2>
        <p className="my-4">
          We specialize in designing customized training manuals and onboarding
          documents that align with your organization’s unique needs, values,
          and culture. Our materials are tailored to provide clear, structured
          guidance, ensuring new employees understand their roles,
          responsibilities, and company expectations. By incorporating your
          specific processes, policies, and branding, we create documents that
          reflect your organization’s identity while fostering a seamless and
          engaging onboarding experience. Whether for small teams or large
          enterprises, our customized solutions help set the foundation for
          employee success and long-term productivity.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {onboardingServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Process
        </h2>
        <p>
          Our process for creating training manuals and onboarding documents
          ensures clarity, consistency, and alignment with your organization’s
          goals and culture. We start by consulting with you to understand your
          objectives, company values, and the specific roles and processes the
          materials need to address. Next, we gather relevant information and
          develop a content outline to structure the documents effectively. Our
          team then creates clear, concise, and engaging materials,
          incorporating visuals, step-by-step instructions, and company-specific
          branding for a professional finish. After thorough review and editing,
          we finalize the documents and deliver them in your preferred format,
          whether digital, print, or both. Throughout the process, we
          collaborate closely with you to ensure the materials meet your needs
          and exceed your expectations.
        </p>
        <p className="my-4">
          Typical training manual and onboarding document projects take 3–6
          weeks, depending on the complexity and scope of the materials.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {onboardingProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Tools We Use
        </h2>
        <p className="my-4">
          We utilize industry-leading tools to create professional and engaging
          training materials:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {toolsForOnboarding.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Pricing is based on the document type, length, and complexity. We
          offer flexible packages to suit your needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name ===
                "Training Manual and Onboarding Paperwork Creation" && (
                <ul className="list-disc pl-6 space-y-1 text-lg">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-secondary">
                        {pricing.name}:
                      </span>
                      <span className="pl-2">{pricing.info}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          );
        })}
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to empower your team with clear and effective training and
          onboarding materials?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
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
