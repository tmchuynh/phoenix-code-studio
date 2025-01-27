"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  technicalWritingBenefits,
  technicalWritingServices,
  technicalWritingProcessSteps,
  toolsForTechnicalWriting,
} from "@/lib/content-constants";

const TechnicalWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Technical Writing Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Technical Writing" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Technical Writing Matters
        </h2>
        <p className="my-4">
          Effective technical writing serves as a vital bridge between complex
          information and user comprehension. By translating intricate concepts
          into clear, accessible language, it empowers users to confidently
          navigate products and systems. Whether you require detailed manuals,
          instructional guides, or technical specifications, professionally
          crafted technical documentation ensures precision, clarity, and ease
          of use. This not only enhances user experience but also reduces
          errors, streamlines processes, and supports overall efficiency.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {technicalWritingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Technical Writing Services
        </h2>
        <p className="my-4">
          We specialize in crafting precise, easy-to-understand technical
          documents tailored to meet the unique needs of various industries.
          Whether it’s user manuals, product guides, technical specifications,
          or process documentation, our expert writers ensure clarity, accuracy,
          and usability. By breaking down complex information into digestible
          formats, we help users effectively understand and engage with your
          products or systems. Our approach focuses on delivering high-quality,
          professional documentation that enhances user experience and supports
          your business objectives.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {technicalWritingServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <p>
          Our technical writing team consists of experts in various areas,
          including technical writing, documentation, and content management. We
          work closely with clients to develop custom technical documentation
          solutions tailored to their specific needs. We begin by consulting
          with you to understand your project requirements, audience, and goals.
          Next, we conduct thorough research, including gathering technical
          details, product specifications, and insights from subject matter
          experts. We then outline and draft the documentation, ensuring logical
          structure and readability. Visual aids, such as diagrams or
          screenshots, are incorporated to enhance understanding. After rigorous
          review and editing for accuracy, clarity, and consistency, we finalize
          the document and deliver it in your preferred format. Throughout the
          process, we collaborate with you to ensure the documentation meets
          your expectations and serves its purpose effectively.
        </p>
        <p className="my-4">
          Typical technical writing projects take 3–8 weeks, depending on the
          complexity of the subject and the scope of the documentation.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {technicalWritingProcessSteps.map((step) => (
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
          We utilize industry-leading tools to deliver high-quality technical
          content:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsForTechnicalWriting.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the complexity, length, audience, and level of
          technical expertise required for the documentation.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Technical Writing" && (
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
          Ready to elevate your technical documentation?{" "}
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

export default TechnicalWritingServices;
