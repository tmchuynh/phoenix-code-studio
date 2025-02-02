"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { tutorialCreationData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const TutorialCreationServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Tutorial Creation Services
      </h1>
      <p>
        Our Tutorial Creation Services are designed to help you deliver
        high-quality, interactive tutorials that guide users through complex
        processes with ease. Whether it’s video tutorials, written guides, or
        interactive learning modules, we create educational content tailored to
        your audience’s needs. We specialize in breaking down intricate concepts
        into clear, actionable steps, ensuring a seamless learning experience.
        With engaging visuals, step-by-step instructions, and personalized
        content, our tutorials help users master new skills efficiently and
        effectively.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Tutorials Matter
        </h2>
        <p className="my-4">
          Tutorials simplify complex processes, enhance learning experiences,
          and empower users to navigate new systems with confidence. Whether for
          software applications, hardware guides, or skill development,
          well-crafted tutorials provide clear, actionable steps to ensure an
          effortless learning experience.
        </p>
      </section>

      {/* Dynamic Rendering for Content Sections */}
      {tutorialCreationData.map((section, index) => (
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
          Pricing is based on the type, length, and complexity of the tutorial.
          We offer flexible options to meet your needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Tutorial Creation" && (
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
          );
        })}
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p>
          Ready to create tutorials that educate and engage your audience?{" "}
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

export default TutorialCreationServices;
