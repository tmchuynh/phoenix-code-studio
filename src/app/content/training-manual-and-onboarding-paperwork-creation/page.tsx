"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  contentCreationServices,
  onboardingPaperBenefits,
  onboardingProcessSteps,
  onboardingServices,
  toolsForOnboarding,
} from "@/lib/constants";

const TrainingManualOnboardingPapers: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Training Manual and Onboarding Papers Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name ===
              "Training Manual and Onboarding Paperwork Creation" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

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
        <ul className="list-disc pl-6 space-y-2">
          {onboardingPaperBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-tertiary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
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
        <ul className="list-disc pl-6 space-y-2">
          {onboardingServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-tertiary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          {onboardingProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Projects
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
        <ul className="list-disc pl-6 space-y-2">
          {toolsForOnboarding.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the document type, length, and complexity. We
          offer flexible packages to suit your needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name ===
                "Training Manual and Onboarding Paperwork Creation" && (
                <ul className="list-disc pl-6 space-y-2">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-tertiary">
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
