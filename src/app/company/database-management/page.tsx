"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  databaseCreationItems,
  databaseManagementItems,
  ourProcessItems,
} from "@/lib/content-constants";

import { FC } from "react";

const DatabaseServices: FC = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Database Creation and Management Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Database Management" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">What We Offer</h2>
        <p className="my-4">
          Our database services ensure your business has the data infrastructure
          it needs to scale efficiently, handle complex queries, and maintain
          security. From designing new databases to managing existing ones, we
          provide comprehensive solutions.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {[
            {
              title: "Custom Database Design",
              description:
                "We design databases from scratch to suit your business workflows and data requirements.",
            },
            {
              title: "Optimization",
              description:
                "Enhance the performance of your existing databases by reducing query times and improving indexing strategies.",
            },
            {
              title: "Scalability",
              description:
                "Ensure your database grows seamlessly with your business, handling increasing data loads effectively.",
            },
            {
              title: "Migration Services",
              description:
                "Migrate from legacy systems or upgrade to modern database solutions without downtime.",
            },
            {
              title: "Data Security",
              description:
                "Protect sensitive data with robust encryption, access controls, and compliance with industry standards.",
            },
          ].map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Database Creation</h2>
        <p className="my-4">
          Our database creation services include designing and deploying data
          storage solutions that align with your unique requirements.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {databaseCreationItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Database Management</h2>
        <p className="my-4">
          Our management services ensure your database operates efficiently,
          securely, and reliably.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {databaseManagementItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal pl-6 space-y-2">
          {ourProcessItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on the complexity, size, and features
          of your database project:
        </p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Database Management" && (
                <ul className="list-disc pl-6 space-y-2">
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

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your data infrastructure?{" "}
          <Button variant={"link"} className="p-0 inline-flex m-0">
            Contact us for a free consultation.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default DatabaseServices;
