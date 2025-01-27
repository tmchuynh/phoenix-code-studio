"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  wireframingPrototypingBenefits,
  wireframingPrototypingServices,
  wireframingPrototypingProcess,
  wireframingPrototypingTools,
  wireframingPrototypingPricingTiers,
} from "@/lib/content-constants";
import { websiteServices } from "@/lib/constants";

const WireframingPrototypingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Wireframing and Prototyping Services
      </h1>
      {websiteServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Wireframing & Prototyping" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Wireframing and Prototyping Matter
        </h2>
        <p className="my-4">
          Wireframes and prototypes are essential tools in the design process,
          helping to visualize structure, test functionality, and gather user
          feedback early. They ensure that your final product aligns with user
          expectations and business goals.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {wireframingPrototypingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Wireframing and Prototyping Services
        </h2>
        <p className="my-4">
          We specialize in creating detailed wireframes and interactive
          prototypes to ensure your project starts on the right foundation.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {wireframingPrototypingServices.map((service) => (
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
          {wireframingPrototypingProcess.map((step) => (
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
          We utilize industry-standard tools and technologies to create
          high-quality wireframes and prototypes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {wireframingPrototypingTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our wireframing and prototyping services are tailored to meet your
          needs. Pricing depends on the complexity and scope of the project:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {wireframingPrototypingPricingTiers.map((pricing) => (
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
          Ready to bring your ideas to life with professional wireframing and
          prototyping?{" "}
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

export default WireframingPrototypingServices;
