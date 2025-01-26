"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  contentCreationServices,
  studyGuideCreationBenefits,
  studyGuideCreationProcessSteps,
  studyGuideCreationServices,
  toolsForStudyGuideCreation,
} from "@/lib/constants";

const StudyGuideCreation: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Study Guide Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Study Guide Creation" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Study Guides Matter</h2>
        <p className="my-4">
          Study guides are essential tools for organizing information,
          reinforcing learning, and improving academic performance. Whether for
          students, professionals, or educators, professionally crafted study
          guides make complex concepts accessible and easy to retain.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {studyGuideCreationBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-tertiary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Study Guide Services</h2>
        <p className="my-4">
          We create customized study guides designed to meet specific learning
          objectives and audience needs.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {studyGuideCreationServices.map((service) => (
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
          {studyGuideCreationProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Most study
          guides are completed within 1–3 weeks, depending on complexity and
          length.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-leading tools to create professional and engaging
          study guides:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsForStudyGuideCreation.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the subject, length, and level of customization
          required. We offer flexible packages to suit various needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Study Guide Creation" && (
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
          Ready to create study guides that simplify learning and improve
          outcomes?{" "}
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

export default StudyGuideCreation;
