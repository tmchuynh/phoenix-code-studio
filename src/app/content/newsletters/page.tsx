"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  newsletterBenefits,
  newsletterServices,
  newsletterProcessSteps,
  newsletterTools,
} from "@/lib/content-constants";

const NewsletterServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Newsletter Writing and Design Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Newsletters" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Newsletters Matter</h2>
        <p className="my-4">
          Newsletters are an effective way to nurture relationships, keep your
          audience informed, and drive engagement with your business. Whether
          targeting customers, employees, or stakeholders, newsletters allow you
          to share updates, announce new products or services, and deliver
          valuable content directly to their inboxes. A well-crafted newsletter
          combines compelling design with relevant, concise messaging to
          maintain interest and foster a sense of connection. By regularly
          communicating with your audience, newsletters help build trust,
          strengthen loyalty, and support your broader marketing and
          communication goals.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {newsletterBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Newsletter Services</h2>
        <p className="my-4">
          We provide comprehensive, end-to-end newsletter solutions, managing
          every aspect from strategy development to final delivery. Our process
          begins with understanding your goals, audience, and messaging needs to
          create a tailored content and design strategy. We craft engaging,
          visually appealing newsletters that reflect your brand identity and
          capture your audience's attention. Whether for regular updates,
          promotional campaigns, or internal communications, we ensure your
          newsletters are optimized for readability and effective delivery
          across platforms. Let us handle the details so you can focus on
          building stronger connections with your audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {newsletterServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>{" "}
        <p>
          Our newsletter creation process is designed to deliver engaging and
          impactful communications that resonate with your audience. We start by
          understanding your objectives, target audience, and key messages to
          create a strategic content plan. Next, we craft compelling copy and
          pair it with visually appealing designs that align with your brand
          identity. Once the newsletter is created, we rigorously test it for
          readability, responsiveness, and compatibility across various devices
          and email platforms. After incorporating your feedback, we schedule
          and deliver the newsletter, ensuring timely distribution.
          Post-delivery, we provide analytics and insights to track performance
          and refine future campaigns.
        </p>
        <p className="my-4">
          Typical newsletter projects take 2-5 days, depending on the complexity
          and frequency of the campaign.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {newsletterProcessSteps.map((step) => (
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
          We leverage top tools to ensure engaging, high-performing newsletters:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {newsletterTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the frequency, length, and complexity of your
          newsletters.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Newsletters" && (
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
          Ready to elevate your communication with professional newsletters?{" "}
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

export default NewsletterServices;
