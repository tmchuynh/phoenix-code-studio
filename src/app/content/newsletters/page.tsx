"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  contentCreationServices,
  newsletterBenefits,
  newsletterProcessSteps,
  newsletterServices,
  newsletterTools,
} from "@/lib/constants";

const NewsletterServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Newsletter Writing and Design Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Newsletters" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Newsletters Matter</h2>
        <p className="my-4">
          Newsletters are a powerful tool for nurturing relationships, sharing
          updates, and driving traffic to your business. Whether for customers,
          employees, or stakeholders, a well-crafted newsletter keeps your
          audience informed and engaged.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {newsletterBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-tertiary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Newsletter Services</h2>
        <p className="my-4">
          We offer end-to-end newsletter solutions, from strategy to delivery.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {newsletterServices.map((service) => (
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
          {newsletterProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Newsletters
          are typically ready within 5–10 business days, depending on complexity
          and frequency.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We leverage top tools to ensure engaging, high-performing newsletters:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {newsletterTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the frequency, length, and complexity of your
          newsletters.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Newsletters" && (
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
          Ready to elevate your communication with professional newsletters?{" "}
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

export default NewsletterServices;
