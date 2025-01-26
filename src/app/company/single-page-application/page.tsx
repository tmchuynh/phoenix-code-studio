"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  spaDevelopmentFeatures,
  spaDevelopmentServices,
  technologiesUsed,
  processItems,
} from "@/lib/content-constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SPAServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Single Page Application (SPA) Development Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Single Page Application" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Choose Single Page Applications?
        </h2>
        <p className="my-4">
          Single Page Applications (SPAs) provide a seamless and dynamic user
          experience by loading all essential content at once and dynamically
          updating the page without reloading. They are ideal for businesses
          seeking performance, scalability, and interactivity.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {spaDevelopmentFeatures.map((feature, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{feature.title}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our SPA Development Services</h2>
        <p className="my-4">
          We provide end-to-end SPA development services tailored to your
          business goals, ensuring high performance and scalability.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {spaDevelopmentServices.map((service, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Technologies We Use</h2>
        <p className="my-4">
          We leverage the latest tools and frameworks to deliver cutting-edge
          SPAs:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {technologiesUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          {processItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Most SPA
          projects are completed within 4–8 weeks, depending on complexity and
          features.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our pricing is based on the complexity and features of your SPA
          project. We offer flexible packages to suit businesses of all sizes:
        </p>
        <p>Ongoing support and maintenance plans start at $200/month.</p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Single Page Application" && (
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
          Ready to build a high-performance Single Page Application?{" "}
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

export default SPAServices;
