"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import {
  websiteServicesData,
  toolsAndTechnologies,
} from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CustomWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Custom Website Design Services
      </h1>
      <p>
        Our Custom Website Design Services are tailored to help your business
        make a powerful first impression. We understand that every business is
        unique, and we focus on creating visually stunning, user-friendly
        websites that reflect your brand's identity and values. Whether you need
        a responsive design, a streamlined e-commerce platform, or an engaging
        portfolio, our team is equipped to design websites that meet your
        specific needs. With a focus on functionality, performance, and
        aesthetics, we ensure your website is not only attractive but also
        provides an exceptional user experience across all devices.
      </p>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          What is Custom Website Design?
        </h2>
        <p>
          Custom website design is about building a website entirely from
          scratch, tailored to reflect your brand’s unique identity and meet
          your specific business goals. Unlike pre-designed templates, which can
          feel generic and limit your flexibility, custom designs offer a
          personalized approach that sets your business apart.
        </p>
      </section>

      {/* Dynamic Sections for Custom Website Features & Processes */}
      {websiteServicesData.map((section, index) => (
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

      {/* Tools & Technologies */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Tools and Technologies
        </h2>
        <p>
          We leverage industry-leading tools and technologies to create
          efficient, scalable, and secure websites:
        </p>
        <ul>
          {toolsAndTechnologies.map((tool, index) => (
            <li key={index}>{tool}</li>
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
              service.name === "Custom Website Design" &&
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
        <p>
          Ready to elevate your online presence with a custom website?{" "}
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

export default CustomWebsite;
