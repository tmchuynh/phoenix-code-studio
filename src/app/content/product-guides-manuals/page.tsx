"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  productGuideBenefits,
  productGuideServices,
  productGuideProcessSteps,
  productGuideTools,
} from "@/lib/content-constants";

const ProductGuidesManualsServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Product Guides and Manuals Writing Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Product Guides/Manuals" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Product Guides and Manuals Matter
        </h2>
        <p className="my-4">
          Clear, concise, and user-friendly product guides and manuals are vital
          for enhancing customer satisfaction and minimizing support costs.
          These resources provide step-by-step instructions, troubleshooting
          tips, and practical insights, enabling users to fully understand and
          utilize your product’s features. Whether for hardware, software, or
          consumer goods, professionally crafted manuals simplify complex
          information, ensuring a seamless user experience. By empowering
          customers with the knowledge to operate and troubleshoot your product,
          these guides not only improve usability but also strengthen brand
          trust and loyalty.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {productGuideBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Product Guides and Manuals Services
        </h2>
        <p className="my-4">
          We specialize in creating detailed, easy-to-follow documentation
          designed to meet the specific needs of your product and audience. Our
          expertly crafted guides simplify complex concepts, providing users
          with clear instructions and actionable insights. Whether it’s for
          hardware, software, or consumer products, we ensure the documentation
          is comprehensive, user-friendly, and aligned with your brand’s voice.
          By tailoring each guide to your audience’s level of expertise, we help
          enhance product usability, reduce support inquiries, and foster a
          positive user experience.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {productGuideServices.map((service) => (
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
        </h2>{" "}
        <p>
          Our product documentation process is designed to deliver clear,
          user-focused guides that enhance product usability and customer
          satisfaction. We begin with a thorough understanding of your product,
          target audience, and documentation goals. Next, we structure and
          outline the content to ensure logical flow and comprehensive coverage.
          Our team then creates detailed, easy-to-follow instructions,
          integrating visuals such as diagrams, screenshots, and infographics
          for added clarity. After rigorous editing and quality assurance to
          ensure accuracy and consistency, we finalize the documentation in
          formats optimized for your audience, whether print, digital, or
          interactive. Throughout the process, we collaborate with you to ensure
          the guides meet your expectations and align with your brand.
        </p>
        <p className="my-4">
          Typical product documentation projects take 3–6 weeks, depending on
          the complexity of the product and the scope of the materials.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {productGuideProcessSteps.map((step) => (
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
          We leverage industry-leading tools to create high-quality product
          guides and manuals:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {productGuideTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Pricing is determined by the scope, length, and technical complexity
          of the manual.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Product Guides/Manuals" && (
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
          Ready to create clear, professional product guides and manuals?{" "}
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

export default ProductGuidesManualsServices;
