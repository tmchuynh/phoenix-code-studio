"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  brochuresFlyersBenefits,
  brochuresFlyersServices,
  brochuresFlyersProcessSteps,
  brochuresFlyersTools,
} from "@/lib/content-constants";

const BrochuresAndFlyersServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Brochures and Flyers Design Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Brochures and/or Flyers" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Brochures and Flyers Matter
        </h2>
        <p className="my-4">
          Brochures and flyers are powerful marketing tools to showcase your
          brand, products, or services. They are perfect for events, promotions,
          and campaigns, leaving a lasting impression on your audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brochuresFlyersBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Brochures and Flyers Services
        </h2>
        <p className="my-4">
          We provide end-to-end solutions for designing professional,
          eye-catching brochures and flyers.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brochuresFlyersServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <p className="my-4">
          Most projects are completed within 3–7 business days, depending on
          complexity.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {brochuresFlyersProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We utilize industry-leading tools to ensure professional-grade
          designs:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brochuresFlyersTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the design complexity, format, and number of
          revisions.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Brochures and/or Flyers" && (
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
          Ready to create stunning brochures and flyers that captivate your
          audience?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and quote.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default BrochuresAndFlyersServices;
