"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  contentCreationServices,
  processStepsCopywriting,
  toolsUsedCopywriting,
  websiteCopywritingBenefits,
  websiteCopywritingServices,
} from "@/lib/constants";

const WebsiteCopywritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Website Copywriting Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Website Copywriting" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Website Copywriting Matters
        </h2>
        <p className="my-4">
          Your website is often the first impression potential customers have of
          your brand. High-quality, targeted copy ensures you capture their
          attention, communicate your value, and guide them to take action.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {websiteCopywritingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-tertiary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Website Copywriting Services
        </h2>
        <p className="my-4">
          We provide tailored website copywriting services to meet your business
          goals and resonate with your audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {websiteCopywritingServices.map((service) => (
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
          {processStepsCopywriting.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Project
          timelines depend on the number of pages, complexity of the content,
          and SEO requirements. Typical timelines range from 1 to 3 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use cutting-edge tools to deliver high-quality, optimized website
          copy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsUsedCopywriting.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the number of pages, word count, and complexity of
          the content.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Website Copywriting" && (
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
          Ready to elevate your website with powerful, engaging copy?{" "}
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

export default WebsiteCopywritingServices;
