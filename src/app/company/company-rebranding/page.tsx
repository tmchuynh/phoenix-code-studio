"use client";

import { Button } from "@/components/ui/button";
import { companyRebrandingData } from "@/lib/company-constant";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CompanyRebranding: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Company Rebranding Services
      </h1>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          What is Company Rebranding?
        </h2>
        <p className="my-4">
          Company rebranding is a **transformative process** that involves
          **revitalizing your business identity** to better align with market
          trends, audience expectations, and growth strategies. Whether you're
          looking to **modernize your brand, refresh your messaging, or redesign
          your website**, our comprehensive services help you create a
          **powerful, cohesive, and future-ready brand identity**.
        </p>
      </section>

      {/* Dynamic Rendering for Rebranding Services */}
      {companyRebrandingData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="font-bold text-secondary">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing Tiers
        </h2>
        <p className="my-4">
          Our company rebranding services are **tailored to your needs**. Below
          are our pricing tiers:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-bold text-secondary">Basic Rebranding:</span>{" "}
            Logo refresh, color scheme update, and minor website adjustments.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Full Rebranding Package:
            </span>{" "}
            Comprehensive brand identity overhaul, including website redesign,
            brand messaging, and marketing collateral.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enterprise Rebranding:
            </span>{" "}
            Large-scale corporate rebranding, internal culture alignment, and
            full marketing integration.
          </li>
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
