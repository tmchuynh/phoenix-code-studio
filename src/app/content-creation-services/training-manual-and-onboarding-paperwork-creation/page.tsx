"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { onboardingCreationData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const TrainingManualOnboardingPapers: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Training Manual and Onboarding Papers Creation Services
      </h1>
      <p>
        Our Training Manual and Onboarding Papers Creation Services help
        businesses streamline the onboarding process for new employees. We craft
        comprehensive, clear, and engaging training manuals and onboarding
        documents that ensure a smooth transition for your team. Our materials
        are designed to provide new hires with the information they need to get
        up to speed quickly, ensuring they feel confident and prepared from day
        one. Whether it’s a detailed manual for company procedures or
        easy-to-follow onboarding papers, we deliver materials that enhance
        employee engagement and productivity.
      </p>

      {/* Dynamic Content Rendering for Sections */}
      {onboardingCreationData.map((section, index) => (
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

      {/* Pricing Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p>
          Our pricing is tailored to meet your specific needs based on the
          document type, length, and complexity. We offer flexible packages
          designed to accommodate a wide range of budgets and project
          requirements. Whether you&apos;re looking for a simple one-page flyer
          or a more detailed brochure, we can customize a solution that works
          for you.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Training Manual and Onboarding Paperwork Creation" && (
              <ul>
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
        ))}
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p>
          Ready to empower your team with effective training materials?{" "}
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

export default TrainingManualOnboardingPapers;
