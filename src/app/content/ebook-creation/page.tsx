"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  ebookBenefits,
  ebookServices,
  ebookProcessSteps,
  ebookTools,
} from "@/lib/content-constants";

const EbookCreationServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        E-Book Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "eBook Creation" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why E-Books Matter
        </h2>
        <p className="my-4">
          E-books are an impactful tool for showcasing your expertise,
          establishing brand authority, and delivering value to your audience.
          Whether used for lead generation, educational purposes, or
          monetization, a well-crafted e-book can help you stand out in a
          competitive market. By offering in-depth insights, actionable
          knowledge, and engaging content, e-books create a lasting impression
          and position your brand as a trusted resource. They are a versatile
          medium, perfect for building connections with your audience, driving
          engagement, and supporting your business goals.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {ebookBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our E-Book Creation Services
        </h2>
        <p className="my-4">
          We provide end-to-end e-book creation services, managing every stage
          of the process from initial concept development to the final polished
          design. Our team works closely with you to understand your goals,
          target audience, and key messaging, ensuring the content aligns with
          your brand and objectives. From crafting compelling, well-structured
          content to designing visually appealing layouts and covers, we deliver
          e-books that captivate readers and communicate your expertise
          effectively. Whether for education, lead generation, or monetization,
          our e-book solutions are tailored to help you make a lasting impact.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {ebookServices.map((service) => (
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
        </h2>
        <p>
          Our e-book creation process is designed to deliver professional,
          high-quality results that align with your goals and resonate with your
          audience. We begin with a consultation to understand your objectives,
          target audience, and the key message you want to convey. Next, we
          develop an outline and content strategy to ensure the e-book is
          well-organized and engaging. Once the content is written and refined,
          our design team creates visually appealing layouts and covers,
          incorporating your brand identity for a cohesive look. After your
          review and feedback, we finalize the e-book, ensuring it is optimized
          for digital distribution across multiple platforms. Throughout the
          process, we collaborate closely with you to ensure the e-book exceeds
          expectations.
        </p>
        <p className="my-4">
          Typical e-book creation projects take 4–8 weeks, depending on the
          length and complexity of the content and design.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {ebookProcessSteps.map((step) => (
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
          We leverage the best tools to create high-quality e-books:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {ebookTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Our pricing is tailored to your specific needs and the scope of your
          project. Factors that influence pricing include:
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "eBook Creation" && (
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
          Ready to create a captivating e-book that elevates your brand?{" "}
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

export default EbookCreationServices;
