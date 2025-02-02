"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { brandStorytellingData } from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const BrandStorytellingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Brand Storytelling Services
      </h1>
      <p>
        Our Brand Storytelling Services help you craft a narrative that
        resonates with your audience, builds emotional connections, and
        strengthens your brand identity. We focus on developing a compelling
        story that reflects your values, mission, and vision, allowing your
        brand to stand out in a crowded market. From origin stories to value
        propositions and customer-centric narratives, we help tell your story in
        a way that engages, inspires, and drives loyalty. Let us help you
        connect with your audience on a deeper level and leave a lasting
        impression.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Brand Storytelling Matters
        </h2>
        <p className="my-4">
          Brand storytelling is more than marketing—it’s about crafting a
          compelling narrative that resonates with your audience, builds trust,
          and creates an emotional connection. A well-crafted brand story
          differentiates your business in a crowded market, clarifies your
          mission, and leaves a lasting impression.
        </p>
      </section>

      {/* Dynamic Rendering for Storytelling Sections */}
      {brandStorytellingData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="font-bold text-secondary">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Pricing Tiers */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing Tiers
        </h2>
        <p className="my-4">
          Our company rebranding services are{" "}
          <strong>tailored to your needs</strong>. Below are our pricing tiers:
        </p>
        <ul>
          {companySpecificServices.map(
            (service) =>
              service.name === "Brand Storytelling" &&
              service.pricingTiers.map((tiers, index) => (
                <li key={index}>
                  <span className="font-bold text-secondary">
                    {tiers.name}:
                  </span>{" "}
                  {tiers.info}
                </li>
              ))
          )}
        </ul>
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to craft a powerful brand story?{" "}
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

export default BrandStorytellingServices;
