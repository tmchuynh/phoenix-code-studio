"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { spaDevelopmentData, technologiesUsed } from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SPAServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Single Page Application (SPA) Development Services
      </h1>
      <p>
        Our Single Page Application (SPA) Development services focus on
        delivering fast, dynamic, and highly interactive web experiences. By
        leveraging modern frameworks such as React, Angular, and Vue, we create
        seamless, one-page applications that provide users with instant feedback
        and smooth navigation. SPAs load content dynamically, offering faster
        performance and enhanced user experience compared to traditional
        multi-page websites. Whether you're building a complex web app or a
        simple user interface, we specialize in creating scalable, responsive
        SPAs that are tailored to your business needs and designed to optimize
        user engagement.
      </p>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Single Page Applications?
        </h2>
        <p className="my-4">
          Single Page Applications (SPAs) offer a seamless, dynamic, and highly
          responsive user experience by loading all essential content at once
          and dynamically updating the page without requiring full reloads. This
          ensures fast performance, smooth navigation, and an interactive user
          interface, making SPAs ideal for modern applications.
        </p>
      </section>

      {/* Dynamic Rendering for Features & Services */}
      {spaDevelopmentData.map((section, index) => (
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

      {/* Technologies Used */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Technologies We Use
        </h2>
        <p className="my-4">
          We leverage industry-leading technologies to ensure high-performance
          SPA development:
        </p>
        <ul>
          {technologiesUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

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
                "High-Performance Single-Page Applications (SPAs) for a Seamless User Experience" &&
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
          Ready to build a high-performance Single Page Application?{" "}
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

export default SPAServices;
