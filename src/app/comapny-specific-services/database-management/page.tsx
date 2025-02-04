"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { databaseServicesData } from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const DatabaseServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Database Creation and Management Services
      </h1>
      <p>
        Our Database Creation and Management Services are designed to help
        businesses efficiently manage and optimize their data. We specialize in
        creating custom databases that are scalable, secure, and tailored to
        meet your specific business needs. From relational databases like MySQL
        and PostgreSQL to NoSQL solutions such as MongoDB, we offer
        comprehensive services to ensure your data is well-organized and
        accessible. Additionally, our team provides ongoing management,
        optimization, and support to maintain high performance, improve query
        times, and ensure data integrity, enabling your business to make
        data-driven decisions with confidence.
      </p>

      {/* Introduction Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Our Database Services?
        </h2>
        <p className="my-4">
          Our comprehensive database solutions ensure that your data is secure,
          scalable, and optimized for performance. Whether you';re building a
          database from the ground up or need professional management for an
          existing one, we provide reliable, high-performance solutions tailored
          to your business needs.
        </p>
      </section>

      {/* Dynamic Rendering for Database Services */}
      {databaseServicesData.map((section, index) => (
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
              service.name === "Database Management" &&
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
          Ready to optimize your data infrastructure?{" "}
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

export default DatabaseServices;
