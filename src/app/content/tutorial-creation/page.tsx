"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  tutorialBenefits,
  tutorialServices,
  processStepsTutorial,
  toolsUsedTutorial,
} from "@/lib/content-constants";

const TutorialCreationServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Tutorial Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Tutorial Creation" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Tutorials Matter</h2>
        <p className="my-4">
          Tutorials are a powerful way to guide users, simplify complex tasks,
          and enhance learning experiences. Whether for software, hardware, or
          specific skills, professionally crafted tutorials build trust and
          ensure a seamless user experience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {tutorialBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Tutorial Creation Services
        </h2>
        <p className="my-4">
          We specialize in creating comprehensive and user-friendly tutorials
          tailored to your audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {tutorialServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          {processStepsTutorial.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Most
          tutorials are completed within 1–3 weeks, depending on complexity and
          format.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-standard tools to create engaging and professional
          tutorials:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsUsedTutorial.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the type, length, and complexity of the tutorial.
          We offer flexible options to meet your needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Tutorial Creation" && (
                <ul className="list-disc pl-6 space-y-2">
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
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to create tutorials that educate and engage your audience?{" "}
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

export default TutorialCreationServices;
