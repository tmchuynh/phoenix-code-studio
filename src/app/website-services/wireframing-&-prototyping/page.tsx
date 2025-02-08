"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { wireframingPrototypingData } from "@/lib/web-constants";
import { websiteServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const WireframingPrototypingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Wireframing & Prototyping Services
      </h1>
      <p>
        Our Wireframing & Prototyping Services help bring your ideas to life
        with clear, interactive blueprints that guide the development process.
        We create low-fidelity wireframes to establish structure and layout,
        followed by high-fidelity prototypes that simulate real user
        interactions. This iterative process allows you to test and validate
        your design concepts early on, ensuring the final product meets user
        needs and expectations. Whether for web or mobile apps, our wireframing
        and prototyping services provide a visual roadmap that streamlines
        development and improves communication across teams.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Wireframing & Prototyping Matter
        </h2>
        <p className="my-4">
          Wireframing and prototyping are essential steps in the product
          development process, ensuring clarity, efficiency, and a user-centered
          approach. These tools help in identifying potential issues early,
          enabling cost-effective iterations and smoother development workflows.
        </p>
      </section>

      {/* Dynamic Rendering for Content Sections */}
      {wireframingPrototypingData.map((section, index) => (
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
          {websiteServices.map(
            (service) =>
              service.name ===
                "From Concept to Clickable: Wireframing & Prototyping Services" &&
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
          Ready to transform your ideas into intuitive wireframes & interactive
          prototypes?{" "}
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

export default WireframingPrototypingServices;
