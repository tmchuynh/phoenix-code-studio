"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { companyRebrandingData } from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CompanyRebranding: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Company Rebranding Services
      </h1>
      <p>
        Our Company Rebranding Services are designed to help your business
        evolve and stand out in a competitive market. Whether you’re looking to
        refresh your visual identity, update your messaging, or completely
        reposition your brand, we provide comprehensive strategies to align your
        brand with your current goals and market trends. From logo design and
        website redesigns to refining your brand’s voice and culture, we ensure
        your new identity resonates with your target audience and reflects the
        true essence of your business. Let us help you create a brand that is
        not only recognizable but memorable.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          What is Company Rebranding?
        </h2>
        <p className="my-4">
          Company rebranding is a transformative process that involves
          revitalizing your business identity to better align with market
          trends, audience expectations, and growth strategies. Whether you're
          looking to modernize your brand, refresh your messaging, or redesign
          your website, our comprehensive services help you create a powerful,
          cohesive, and future-ready brand identity.
        </p>
      </section>

      {/* Dynamic Rendering for Rebranding Services */}
      {companyRebrandingData.map((section, index) => (
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
              service.name ===
                "Transform Your Brand with Our Rebranding Services" &&
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
          Ready to transform your company's brand?{" "}
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

export default CompanyRebranding;
