"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";

const DatabaseServices: FC = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Database Creation and Management Services
      </h1>
      <p className="text-center text-lg my-4">
        Robust, secure, and scalable database solutions tailored to your
        business needs.
      </p>

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
            <span className="font-bold text-secondary">
              Custom Database Design:
            </span>{" "}
            We design databases from scratch to suit your business workflows and
            data requirements.
          </li>
          <li>
            <span className="font-bold text-secondary">Optimization:</span>{" "}
            Enhance the performance of your existing databases by reducing query
            times and improving indexing strategies.
          </li>
          <li>
            <span className="font-bold text-secondary">Scalability:</span>{" "}
            Ensure your database grows seamlessly with your business, handling
            increasing data loads effectively.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Migration Services:
            </span>{" "}
            Migrate from legacy systems or upgrade to modern database solutions
            without downtime.
          </li>
          <li>
            <span className="font-bold text-secondary">Data Security:</span>{" "}
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
            <span className="font-bold text-secondary">
              Relational Databases:
            </span>{" "}
            Solutions like MySQL, PostgreSQL, and SQL Server for structured data
            needs.
          </li>
          <li>
            <span className="font-bold text-secondary">NoSQL Databases:</span>{" "}
            For unstructured or semi-structured data, including MongoDB,
            DynamoDB, and more.
          </li>
          <li>
            <span className="font-bold text-secondary">Cloud Databases:</span>{" "}
            Scalable databases hosted on AWS, Azure, or Google Cloud.
          </li>
          <li>
            <span className="font-bold text-secondary">Data Modeling:</span>{" "}
            Efficient schema design for optimal performance and data integrity.
          </li>
          <li>
            <span className="font-bold text-secondary">ETL Pipelines:</span>{" "}
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
            <span className="font-bold text-secondary">
              Backup and Recovery:
            </span>{" "}
            Regular backups and disaster recovery plans to prevent data loss.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Performance Tuning:
            </span>{" "}
            Optimize queries, indexes, and server settings for maximum
            efficiency.
          </li>
          <li>
            <span className="font-bold text-secondary">Monitoring:</span>{" "}
            Proactive monitoring of database performance and health.
          </li>
          <li>
            <span className="font-bold text-secondary">Access Management:</span>{" "}
            Implement role-based access controls and secure authentication
            methods.
          </li>
          <li>
            <span className="font-bold text-secondary">
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
            <span className="font-bold text-secondary">Consultation:</span>{" "}
            Understand your data requirements, workflows, and goals.
          </li>
          <li>
            <span className="font-bold text-secondary">Design:</span> Plan and
            model a database architecture that aligns with your business needs.
          </li>
          <li>
            <span className="font-bold text-secondary">Development:</span> Build
            and implement the database using industry-leading technologies.
          </li>
          <li>
            <span className="font-bold text-secondary">Testing:</span> Conduct
            extensive testing to ensure performance, security, and reliability.
          </li>
          <li>
            <span className="font-bold text-secondary">Deployment:</span>{" "}
            Seamlessly integrate the database into your existing systems.
          </li>
          <li>
            <span className="font-bold text-secondary">Support:</span> Provide
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
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Starter Package:</span>{" "}
            Starting at $3,000 for small-scale database solutions, including
            basic relational data models and essential queries.
          </li>
          <li>
            <span className="font-bold text-secondary">Growth Package:</span>{" "}
            Starting at $6,500 for advanced features such as optimization,
            scalability solutions, and integration with external APIs.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enterprise Package:
            </span>{" "}
            Starting at $10,000+ for complex, large-scale database solutions
            with multi-database management, custom migrations, and real-time
            data processing.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Database Management Plans:
            </span>{" "}
            Starting at $100/month for ongoing management, updates, and
            optimization.
          </li>
        </ul>
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
