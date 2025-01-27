"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { companySpecificServices } from "@/lib/constants";
import {
  brandStorytellingBenefits,
  brandStorytellingServices,
  brandStorytellingProcessSteps,
} from "@/lib/content-constants";

const BrandStorytellingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Brand Storytelling Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Brand Storytelling" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Brand Storytelling Matters
        </h2>
        <p className="my-4">
          Company rebranding is the process of revitalizing your business’s
          image and messaging to better align with your goals and audience. This
          transformation may include updating your logo, refining your visual
          identity, redefining brand values, enhancing your website, and
          revamping marketing strategies. At its core, rebranding is about
          creating a fresh, cohesive identity that sets your company apart,
          communicates your mission effectively, and fosters deeper, more
          meaningful connections with your audience. Our rebranding services are
          designed to help your business thrive in an ever-evolving marketplace.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brandStorytellingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Brand Storytelling Services
        </h2>
        <p className="my-4">
          We specialize in crafting compelling narratives that go beyond mere
          words, capturing the very essence of your brand and communicating it
          in a way that deeply resonates with your audience. Through a
          thoughtful blend of creativity and strategy, we weave stories that
          reflect your unique values, vision, and mission. Our approach ensures
          that your brand narrative isn’t just memorable but also authentic,
          aligning perfectly with what your business stands for. By telling your
          story in a way that connects emotionally and intellectually, we help
          you forge meaningful relationships with your audience, inspiring
          trust, fostering loyalty, and driving lasting engagement. Whether it’s
          through website content, marketing campaigns, or brand storytelling,
          we ensure your narrative leaves a powerful and lasting impact.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {brandStorytellingServices.map((service) => (
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
          Our process for crafting compelling brand narratives begins with a
          deep dive into your business. We take the time to understand your
          values, vision, mission, and the unique elements that set you apart.
          Through research and collaboration, we uncover the core story that
          defines your brand and resonates with your audience. Next, we
          translate this understanding into a strategic narrative, carefully
          aligning your messaging with the emotional and intellectual needs of
          your target audience. From developing captivating copy to ensuring
          consistency across all channels, we refine your brand’s voice to
          create a powerful, cohesive story. Throughout the process, we work
          closely with you, incorporating your feedback to ensure the narrative
          truly represents your brand and forges meaningful connections with
          your audience.
        </p>
        <p className="my-4">
          The timeline for brand storytelling projects depends on the
          complexity, scope, and desired channels. Most projects are completed
          within 2–6 weeks.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {brandStorytellingProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our brand storytelling services are tailored to fit your specific
          goals. Pricing is based on the project’s complexity, length, and
          deliverables.
        </p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Brand Storytelling" && (
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
          Ready to tell your story and define your brand?{" "}
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

export default BrandStorytellingServices;
