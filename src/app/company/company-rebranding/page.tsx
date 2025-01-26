"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  rebrandingServiceDetails,
  processSteps,
} from "@/lib/content-constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CompanyRebranding: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Company Rebranding Services
      </h1>

      {/* Display Service Details Dynamically */}
      {companySpecificServices.map((service) => {
        if (service.name === "Company Rebranding") {
          return (
            <div key={service.name}>
              <p className="text-lg my-4">{service.details}</p>
            </div>
          );
        }
        return null;
      })}

      {/* What is Company Rebranding? */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">What is Company Rebranding?</h2>
        <p className="my-4">
          Company rebranding involves refreshing or completely overhauling your
          business's image and messaging. This can include everything from your
          logo, visual identity, brand values, website, and marketing
          strategies. Our goal is to help your company stand out, communicate
          its message clearly, and build stronger connections with your
          audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {rebrandingServiceDetails.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Our Process */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal pl-6 space-y-2">
          {processSteps.map((step, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing Tiers */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our company rebranding services are customized to meet your specific
          needs. Below are our starting prices:
        </p>
        {companySpecificServices.map((service) => {
          if (service.name === "Company Rebranding") {
            return (
              <ul className="list-disc pl-6 space-y-2" key={service.name}>
                {service.pricingTiers.map((pricing, index) => (
                  <li key={index}>
                    <span className="font-bold text-secondary">
                      {pricing.name}:
                    </span>
                    <span className="pl-2">{pricing.info}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </section>

      {/* Get Started */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to transform your company's brand?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and a customized quote.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default CompanyRebranding;
