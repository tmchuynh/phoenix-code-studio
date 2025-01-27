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
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Tutorial Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Tutorial Creation" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Tutorials Matter
        </h2>
        <p className="my-4">
          Tutorials are an effective tool for guiding users through complex
          tasks, simplifying processes, and enhancing learning experiences.
          Whether for software, hardware, or skill development, well-designed
          tutorials provide step-by-step instructions that are easy to follow
          and understand. By offering clear guidance and actionable insights,
          professionally crafted tutorials not only build user confidence and
          trust but also contribute to a seamless and engaging user experience,
          fostering better understanding and long-term retention.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {tutorialBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Tutorial Creation Services
        </h2>
        <p className="my-4">
          We specialize in designing comprehensive, user-friendly tutorials that
          are perfectly tailored to meet the needs of your audience. Whether you
          need step-by-step guides for software, hardware, or skill-building,
          our tutorials simplify complex concepts and ensure clarity at every
          stage. By combining concise instructions with visuals, interactive
          elements, and accessible language, we create engaging learning
          experiences that empower users, build confidence, and foster trust in
          your brand.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {tutorialServices.map((service) => (
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
        </h2>{" "}
        <p>
          Our tutorial creation process is designed to deliver clear, engaging,
          and effective learning materials that align with your goals and
          audience needs. We begin with a consultation to understand your
          objectives, target users, and the complexity of the subject matter.
          Next, we research and outline the tutorial content, ensuring it is
          logically structured and easy to follow. Our team then creates
          step-by-step instructions, incorporating visuals, examples, and
          interactive elements to enhance understanding. After thorough review
          and testing for accuracy, clarity, and usability, we finalize the
          tutorial and deliver it in the desired format, whether video, digital
          guide, or interactive resource. Throughout the process, we collaborate
          with you to ensure the tutorial meets your expectations and delivers
          value to your audience.
        </p>
        <p className="my-4">
          Typical tutorial creation projects take 1–4 weeks, depending on the
          complexity and scope of the material.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {processStepsTutorial.map((step) => (
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
          We use industry-standard tools to create engaging and professional
          tutorials:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {toolsUsedTutorial.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Pricing is based on the type, length, and complexity of the tutorial.
          We offer flexible options to meet your needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Tutorial Creation" && (
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
          Ready to create tutorials that educate and engage your audience?{" "}
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

export default TutorialCreationServices;
