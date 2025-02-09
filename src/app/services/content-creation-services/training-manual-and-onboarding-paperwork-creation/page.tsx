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
      <h1>
        Professional Training Manual & Onboarding Document Creation Services
      </h1>
      <p>
        Our Training Manual and Onboarding Papers Creation Services are designed
        to help businesses streamline employee onboarding, enhance productivity,
        and improve knowledge retention. We create clear, engaging, and
        well-structured training materials that equip new hires with the
        essential information they need to integrate seamlessly into your
        organization. Whether you need detailed employee handbooks, standard
        operating procedures (SOPs), company policy guides, or role-specific
        training manuals, our expertly crafted documents ensure consistency,
        clarity, and efficiency in your onboarding process. We specialize in HR
        onboarding materials, corporate training guides, compliance
        documentation, and step-by-step instructional resources, tailored to
        meet your industry-specific needs.
      </p>
      <p>
        Our SEO-optimized training materials enhance employee engagement, reduce
        onboarding time, and improve knowledge retention by incorporating
        interactive elements, visual aids, and structured learning modules. With
        a focus on usability and accessibility, we ensure that training
        resources are easy to navigate, understand, and implement, helping new
        employees feel confident and prepared from day one.
      </p>
      <p>
        Invest in high-quality, customized training documentation that enhances
        employee satisfaction, ensures compliance, and fosters a productive work
        environment. Let us help you build a structured, effective, and scalable
        onboarding process today!
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
          requirements. Whether you're looking for a simple one-page flyer or a
          more detailed brochure, we can customize a solution that works for
          you.
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
