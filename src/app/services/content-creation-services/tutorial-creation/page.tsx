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
      <h1>
        Expert Tutorial Creation Services – Engaging, Interactive &
        SEO-Optimized
      </h1>
      <p>
        Our Tutorial Creation Services empower businesses, educators, and
        content creators to deliver high-quality, interactive learning
        experiences that simplify complex concepts and processes. We specialize
        in crafting step-by-step instructional content, including video
        tutorials, written guides, interactive e-learning modules, and software
        walkthroughs that provide users with seamless, engaging, and structured
        learning experiences. We transform technical, educational, or
        industry-specific content into clear, digestible, and easy-to-follow
        tutorials that enhance knowledge retention and user engagement. Whether
        you're looking for product how-tos, software tutorials, onboarding
        guides, or skill-building lessons, we ensure that every tutorial is
        visually appealing, well-structured, and optimized for search engines to
        maximize reach and effectiveness.
      </p>
      <p>
        Our team of experts leverages SEO-driven strategies, engaging visuals,
        and interactive elements to create tutorials that attract, educate, and
        retain your audience. With customized, brand-aligned learning materials,
        we help businesses establish authority in their niche while improving
        customer satisfaction and product adoption.
      </p>
      <p>
        Enhance user experience, simplify learning, and drive engagement with
        professionally designed tutorials tailored to your goals. Let’s create
        compelling, easy-to-understand tutorials that educate and inspire!
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
                <span className="font-bold text-secondary">{item.title}:</span>
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
              {service.name ===
                "Step-by-Step Tutorials for Seamless Learning" && (
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
          Ready to create tutorials that educate and engage your audience?
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
