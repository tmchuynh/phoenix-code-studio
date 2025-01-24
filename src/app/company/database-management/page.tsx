"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import { FC } from "react";

const DatabaseServices: FC = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Database Creation and Management Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Database Management" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
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
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Custom Database Design:
            </span>{" "}
            We design databases from scratch to suit your business workflows and
            data requirements.
          </li>
          <li>
            <span className="font-bold text-tertiary">Optimization:</span>{" "}
            Enhance the performance of your existing databases by reducing query
            times and improving indexing strategies.
          </li>
          <li>
            <span className="font-bold text-tertiary">Scalability:</span> Ensure
            your database grows seamlessly with your business, handling
            increasing data loads effectively.
          </li>
          <li>
            <span className="font-bold text-tertiary">Migration Services:</span>{" "}
            Migrate from legacy systems or upgrade to modern database solutions
            without downtime.
          </li>
          <li>
            <span className="font-bold text-tertiary">Data Security:</span>{" "}
            Protect sensitive data with robust encryption, access controls, and
            compliance with industry standards.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Database Creation</h2>
        <p className="my-4">
          Our database creation services include designing and deploying data
          storage solutions that align with your unique requirements.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Relational Databases:
            </span>{" "}
            Solutions like MySQL, PostgreSQL, and SQL Server for structured data
            needs.
          </li>
          <li>
            <span className="font-bold text-tertiary">NoSQL Databases:</span>{" "}
            For unstructured or semi-structured data, including MongoDB,
            DynamoDB, and more.
          </li>
          <li>
            <span className="font-bold text-tertiary">Cloud Databases:</span>{" "}
            Scalable databases hosted on AWS, Azure, or Google Cloud.
          </li>
          <li>
            <span className="font-bold text-tertiary">Data Modeling:</span>{" "}
            Efficient schema design for optimal performance and data integrity.
          </li>
          <li>
            <span className="font-bold text-tertiary">ETL Pipelines:</span>{" "}
            Design and implementation of Extract, Transform, and Load workflows
            for data processing.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Database Management</h2>
        <p className="my-4">
          Our management services ensure your database operates efficiently,
          securely, and reliably.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Backup and Recovery:
            </span>{" "}
            Regular backups and disaster recovery plans to prevent data loss.
          </li>
          <li>
            <span className="font-bold text-tertiary">Performance Tuning:</span>{" "}
            Optimize queries, indexes, and server settings for maximum
            efficiency.
          </li>
          <li>
            <span className="font-bold text-tertiary">Monitoring:</span>{" "}
            Proactive monitoring of database performance and health.
          </li>
          <li>
            <span className="font-bold text-tertiary">Access Management:</span>{" "}
            Implement role-based access controls and secure authentication
            methods.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Regular Maintenance:
            </span>{" "}
            Ensure uptime and data consistency with scheduled updates and
            checks.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Consultation:</span>{" "}
            Understand your data requirements, workflows, and goals.
          </li>
          <li>
            <span className="font-bold text-tertiary">Design:</span> Plan and
            model a database architecture that aligns with your business needs.
          </li>
          <li>
            <span className="font-bold text-tertiary">Development:</span> Build
            and implement the database using industry-leading technologies.
          </li>
          <li>
            <span className="font-bold text-tertiary">Testing:</span> Conduct
            extensive testing to ensure performance, security, and reliability.
          </li>
          <li>
            <span className="font-bold text-tertiary">Deployment:</span>{" "}
            Seamlessly integrate the database into your existing systems.
          </li>
          <li>
            <span className="font-bold text-tertiary">Support:</span> Provide
            ongoing management, updates, and optimization to meet evolving
            requirements.
          </li>
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
                <ul className="list-disc list-inside space-y-2">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-tertiary">
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
