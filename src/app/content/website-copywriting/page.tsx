"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  websiteCopywritingBenefits,
  websiteCopywritingServices,
  processStepsCopywriting,
  toolsUsedCopywriting,
} from "@/lib/content-constants";

const WebsiteCopywritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Website Copywriting Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Website Copywriting" && (
              <div>
                <span className="mt-4">{service.info}</span>
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
          Your website serves as the first impression many potential customers
          will have of your brand, making it a critical touchpoint in their
          journey. High-quality, targeted copy is essential to capture their
          attention, effectively communicate your unique value proposition, and
          build trust. By engaging visitors with clear, compelling messaging,
          your website not only informs but also guides them toward meaningful
          actions, such as making a purchase, signing up, or reaching out for
          more information.Your website serves as the first impression many
          potential customers will have of your brand, making it a critical
          touchpoint in their journey. High-quality, targeted copy is essential
          to capture their attention, effectively communicate your unique value
          proposition, and build trust. By engaging visitors with clear,
          compelling messaging, your website not only informs but also guides
          them toward meaningful actions, such as making a purchase, signing up,
          or reaching out for more information.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {websiteCopywritingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
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
          We offer tailored website copywriting services designed to align with
          your business goals and connect with your audience. By crafting clear,
          engaging, and SEO-optimized content, we ensure your messaging
          effectively communicates your brand’s value and inspires action.
          Whether you’re looking to attract new customers, boost conversions, or
          enhance your online presence, our copywriting solutions are customized
          to resonate with your target audience and deliver measurable results.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {websiteCopywritingServices.map((service) => (
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
          Our website copywriting process is designed to deliver high-quality,
          tailored content that aligns with your business goals and engages your
          audience. We begin with a consultation to understand your brand,
          target audience, and objectives. Next, we analyze your existing
          website (if applicable) and perform research to identify key topics,
          keywords, and SEO opportunities. Once we’ve developed a content
          strategy, we craft clear, compelling, and optimized copy for each
          page, ensuring it reflects your brand’s voice and resonates with your
          audience. After completing the drafts, we collaborate with you for
          feedback and make revisions to ensure the content meets your
          expectations. Finally, we provide the finalized copy, ready for
          implementation on your website.
        </p>
        <p className="my-4">
          Typical website copywriting projects take 2–6 weeks, depending on the
          number of pages, content complexity, and SEO requirements.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {processStepsCopywriting.map((step) => (
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
