"use client";

import { Button } from "@/components/ui/button";
import {
  companySpecificServices,
  customWebsiteDesignList,
  domainRegistrationList,
  processStepsList,
  toolsAndTechnologiesList,
  webHostingList,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CustomWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Custom Website Design Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <p className="text-center text-lg my-4">
            {service.name === "Custom Website Design" ? (
              <span className="mt-4">{service.details}</span>
            ) : null}
          </p>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          What is Custom Website Design?
        </h2>
        <p className="my-4">
          Custom website design focuses on creating a website from scratch,
          fully aligned with your brand’s goals and delivering a personalized
          user experience. Unlike pre-designed templates, our designs are unique
          and built to cater specifically to your business requirements.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {customWebsiteDesignList.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          {processStepsList.map((step, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Typical
          projects take 4–8 weeks, depending on the complexity and scope of the
          website.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Domain Registration and Web Hosting
        </h2>
        <p className="my-4">
          We provide complete solutions for domain registration and web hosting,
          ensuring fast, secure, and reliable performance.
        </p>
        <h3 className="text-xl font-bold">Domain Registration</h3>
        <ul className="list-disc pl-6 space-y-2">
          {domainRegistrationList.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold">Web Hosting</h3>
        <ul className="list-disc pl-6 space-y-2">
          {webHostingList.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We leverage industry-leading tools and technologies to create
          efficient, scalable, and secure websites:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsAndTechnologiesList.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your website’s features,
          complexity, and scope:
        </p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Custom Website Design" && (
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
          Ready to elevate your online presence with a custom website?{" "}
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

export default CustomWebsite;
