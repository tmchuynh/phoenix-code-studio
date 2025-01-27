"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  uxDesignBenefits,
  uxDesignServices,
  uxDesignProcess,
  uxDesignTools,
  uxDesignPricingTiers,
} from "@/lib/content-constants";
import { websiteServices } from "@/lib/constants";

const UXDesignServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        User Experience (UX) Design Services
      </h1>
      {websiteServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "User Experience Design" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why UX Design Matters</h2>
        <p className="my-4">
          Exceptional UX design ensures that your users can easily navigate,
          interact with, and find value in your product. It focuses on
          understanding user behavior, needs, and pain points to create seamless
          and engaging experiences.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {uxDesignBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our UX Design Services</h2>
        <p className="my-4">
          Our comprehensive UX design services are tailored to your product and
          audience, ensuring delightful user experiences.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {uxDesignServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal pl-6 space-y-2">
          {uxDesignProcess.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We leverage industry-leading tools and technologies to ensure
          top-notch UX design:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {uxDesignTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your product’s complexity,
          features, and scope:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {uxDesignPricingTiers.map((pricing) => (
            <li key={pricing.name}>
              <span className="font-bold text-secondary">{pricing.name}:</span>{" "}
              <span className="pl-2">{pricing.info}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your product with outstanding user experience design?{" "}
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

export default UXDesignServices;
