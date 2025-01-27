"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  databaseCreationItems,
  databaseCreationItemsDetails,
  databaseManagementItems,
  ourProcessItems,
} from "@/lib/content-constants";
import { useRouter } from "next/navigation";

import { FC } from "react";

const DatabaseServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          What We Offer
        </h2>
        <p className="my-4">
          Our database services are designed to provide your business with a
          robust, scalable, and secure data infrastructure that meets your
          unique needs. Whether you're building a new system from the ground up
          or optimizing and managing an existing database, we offer
          comprehensive solutions tailored to your goals. Our services include
          database design and architecture, performance tuning, data migration,
          and backup and recovery planning to ensure seamless operations. We
          also implement advanced security measures to protect sensitive
          information and ensure compliance with industry standards. By handling
          complex queries, optimizing performance, and ensuring reliability, we
          empower your business to make data-driven decisions with confidence
          and scale efficiently as you grow.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {databaseCreationItemsDetails.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Database Creation
        </h2>
        <p className="my-4">
          Our database creation services encompass designing and deploying
          customized data storage solutions tailored to meet your unique
          business requirements. We focus on creating efficient, scalable, and
          secure database architectures that support your operational needs and
          future growth. From selecting the right database technology to
          optimizing performance and ensuring seamless integration with your
          existing systems, we deliver solutions that enhance data
          accessibility, reliability, and management. Whether you're starting
          from scratch or upgrading your current infrastructure, our services
          ensure your data storage is robust and aligned with your goals.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {databaseCreationItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Database Management
        </h2>
        <p className="my-4">
          Our database management services are designed to ensure your database
          operates with optimal efficiency, robust security, and unwavering
          reliability. We handle everything from routine maintenance and
          performance optimization to monitoring and troubleshooting, ensuring
          your database is always running smoothly. With advanced security
          measures in place, we safeguard your data against potential threats
          while maintaining compliance with industry standards. By proactively
          managing your database, we help your business stay focused on growth
          without worrying about backend complexities.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {databaseManagementItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Process
        </h2>
        <p>
          Our database management process begins with a thorough assessment of
          your existing database infrastructure to identify areas for
          improvement and optimization. We then develop a tailored strategy to
          ensure your database operates efficiently, securely, and reliably.
          This includes implementing performance tuning, setting up robust
          security protocols, and establishing automated monitoring and backups.
          Throughout the process, we work closely with you to address your
          specific needs and ensure the database aligns with your business
          goals. Regular maintenance and proactive troubleshooting are part of
          our approach to keep your system running smoothly and securely.
        </p>
        <p className="my-4">
          Typical database management projects take 2–6 weeks, depending on the
          complexity and scope of the requirements.
        </p>

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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing Tiers
        </h2>
        <p className="my-4">
          Our pricing is customized based on the complexity, size, and features
          of your database project:
        </p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Database Management" && (
                <ul className="list-disc pl-6 space-y-1 text-lg">
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to elevate your data infrastructure?{" "}
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
