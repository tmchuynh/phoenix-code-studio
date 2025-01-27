"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  brochuresFlyersBenefits,
  brochuresFlyersServices,
  brochuresFlyersProcessSteps,
  brochuresFlyersTools,
} from "@/lib/content-constants";

const BrochuresAndFlyersServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Brochures and Flyers Design Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Brochures and/or Flyers" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Brochures and Flyers Matter
        </h2>
        <p className="my-4">
          Brochures and flyers are versatile and impactful marketing tools
          designed to effectively showcase your brand, products, or services.
          These materials combine eye-catching designs with concise, persuasive
          messaging to capture attention and communicate your value proposition.
          Ideal for events, promotions, and campaigns, brochures and flyers
          serve as tangible touchpoints that engage your audience and reinforce
          your brand identity. Whether distributed in-person, included in mail
          campaigns, or displayed digitally, they leave a lasting impression and
          encourage potential customers to take action. With the right blend of
          aesthetics and content, brochures and flyers provide an affordable and
          efficient way to amplify your marketing efforts and connect with your
          audience.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {brochuresFlyersBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Brochures and Flyers Services
        </h2>
        <p className="my-4">
          We offer comprehensive, end-to-end solutions for designing
          professional and visually stunning brochures and flyers. From concept
          development and content creation to layout design and final
          production, we handle every step to ensure your marketing materials
          are impactful and aligned with your brand identity. Our designs are
          tailored to captivate your audience, communicate your message
          effectively, and leave a lasting impression. Whether for events,
          promotions, or campaigns, we deliver brochures and flyers that stand
          out and drive results.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {brochuresFlyersServices.map((service) => (
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
          Our brochure and flyer design process is structured to deliver
          professional, impactful marketing materials that align with your brand
          and goals. We begin with a consultation to understand your target
          audience, objectives, and desired style. Next, we develop content and
          concepts, including layouts, imagery, and messaging, to ensure a
          cohesive and compelling design. Once approved, we create visually
          stunning designs using modern tools and techniques, focusing on
          readability, branding consistency, and eye-catching appeal. After
          incorporating your feedback, we finalize the design, ensuring it’s
          print-ready or optimized for digital distribution. Throughout the
          process, we collaborate closely with you to achieve a polished and
          effective result.
        </p>
        <p className="my-4">
          Typical brochure and flyer design projects take 1–3 weeks, depending
          on the complexity and scope of the materials.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {brochuresFlyersProcessSteps.map((step) => (
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
          We utilize industry-leading tools to ensure professional-grade
          designs:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {brochuresFlyersTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Pricing depends on the design complexity, format, and number of
          revisions.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Brochures and/or Flyers" && (
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
          Ready to create stunning brochures and flyers that captivate your
          audience?{" "}
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

export default BrochuresAndFlyersServices;
