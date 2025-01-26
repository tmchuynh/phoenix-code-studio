"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  brandStorytellingBenefits,
  brandStorytellingProcessSteps,
  brandStorytellingServices,
  contentCreationServices,
} from "@/lib/constants";

const BrandStorytellingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Brand Storytelling Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Brand Storytelling" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Brand Storytelling Matters
        </h2>
        <p className="my-4">
          A powerful brand story sets you apart, connects with your audience on
          a deeper level, and creates a memorable impression. It’s not just
          about what you do; it’s about why you do it and the journey that
          defines your brand.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brandStorytellingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-tertiary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Brand Storytelling Services
        </h2>
        <p className="my-4">
          We specialize in creating meaningful narratives that reflect your
          brand’s essence and connect with your audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brandStorytellingServices.map((service) => (
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
          {brandStorytellingProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> The
          timeline for brand storytelling projects depends on the complexity,
          scope, and desired channels. Most projects are completed within 2–6
          weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our brand storytelling services are tailored to fit your specific
          goals. Pricing is based on the project’s complexity, length, and
          deliverables.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Brand Storytelling" && (
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
          Ready to tell your story and define your brand?{" "}
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

export default BrandStorytellingServices;
