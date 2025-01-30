"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { seoOptimizationData } from "@/lib/web-constants";
import { websiteServices } from "@/lib/constants";

const SEOOptimization: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        SEO Optimization Services
      </h1>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why SEO Optimization Matters
        </h2>
        <p className="my-4">
          SEO (Search Engine Optimization) helps improve your website’s
          visibility on search engines like **Google & Bing**. Our
          **comprehensive SEO services** ensure your website ranks higher,
          drives more organic traffic, and **attracts the right audience**.
        </p>
      </section>

      {/* Dynamic Rendering for Content Sections */}
      {seoOptimizationData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-balance">
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
        <ul className="list-disc pl-6 space-y-1 text-balance">
          {websiteServices.map(
            (service) =>
              service.name === "SEO Optimization" &&
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
          Ready to boost your website’s SEO and **increase organic traffic**?{" "}
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

export default SEOOptimization;
