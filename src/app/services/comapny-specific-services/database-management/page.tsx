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
      <h1>
        Powerful Database Creation & Management for Scalable Business Growth
      </h1>
      <p>
        Your data is one of your most valuable assets—organize, optimize, and
        protect it with expert database solutions. Our Database Creation and
        Management Services ensure your business operates with
        efficient, secure, and scalable databases tailored to
        your needs. Whether you require relational databases like
        MySQL, PostgreSQL, or NoSQL solutions such as
        MongoDB, we design structured, high-performance systems
        that enhance accessibility, reliability, and data-driven
        decision-making.
      </p>

      {/* Introduction Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Our Database Services?
        </h2>
        <p>
          Our comprehensive database solutions provide a secure, scalable, and
          optimized foundation for your business. Whether you're building a new
          database or need expert management for an existing one, we deliver
          high-performance, customized database solutions to
          enhance your business operations.
        </p>
      </section>

      <section className="my-8">
        <h2>Why Expert Database Management is Essential for Your Business</h2>

        <p>
          A well-structured database streamlines operations, enhances security,
          and enables seamless data access, giving your business a competitive
          edge in today’s data-driven world. Our database management services
          focus on:
        </p>

        <h3>1. Custom Database Architecture</h3>
        <p>
          We design scalable and structured databases to support your business
          growth, ensuring
          
            fast query execution, seamless data integration, and optimized
            performance
          
          . Whether you need a small-scale database for internal use or an
          enterprise-level solution, our systems are built for efficiency.
        </p>

        <h3>2. Advanced Security & Compliance</h3>
        <p>
          Protect sensitive data with advanced security measures, including
          
            data encryption, access controls, backup solutions, and compliance
            with industry regulations
          
          . We ensure your business meets
          GDPR, HIPAA, or other regulatory standards,
          safeguarding your information against cyber threats.
        </p>

        <h3>3. Performance Optimization & Speed</h3>
        <p>
          We eliminate database bottlenecks through
          
            query optimization, indexing strategies, and performance tuning
          
          . Our experts fine-tune database structures to enhance speed and
          responsiveness, ensuring maximum efficiency for real-time data access
          and business applications.
        </p>

        <h3>4. Reliable Data Backup & Recovery</h3>
        <p>
          Minimize downtime and prevent data loss with our robust
          automated backup and disaster recovery solutions. Our
          fail-safe recovery mechanisms ensure that your critical business data
          is always accessible and protected from unexpected failures.
        </p>

        <h3>5. Scalable & Future-Ready Solutions</h3>
        <p>
          As your business grows, so do your data needs. We design databases
          that can scale with your operations, providing flexibility for
          
            big data processing, cloud database integration, and high-volume
            transactions
          
          .
        </p>
      </section>

      <section className="my-8">
        <h2>Our Database Development & Management Process</h2>

        <h3>1. Discovery & Planning</h3>
        <p>
          We analyze your business needs, data structure, and performance
          requirements to create a customized database strategy aligned with
          your objectives.
        </p>

        <h3>2. Database Design & Architecture</h3>
        <p>
          Our team designs a structured and scalable database architecture with
          optimized schema, efficient indexing, and relational or non-relational
          models tailored to your workflow.
        </p>

        <h3>3. Development & Integration</h3>
        <p>
          We develop and implement high-performance databases, ensuring seamless
          integration with your existing business applications, cloud platforms,
          and data pipelines.
        </p>

        <h3>4. Optimization & Performance Tuning</h3>
        <p>
          We fine-tune queries, indexes, and storage solutions to maximize
          speed, reduce latency, and optimize database efficiency.
        </p>

        <h3>5. Security, Monitoring & Maintenance</h3>
        <p>
          Our proactive database management services include continuous
          monitoring, security audits, regular updates, and preventive
          maintenance to ensure long-term stability and security.
        </p>
      </section>

      <section className="my-8">
        <h2>Why Work With Us?</h2>

        <ul>
          <li>
            Custom-Tailored Database Solutions: Designed to fit
            your unique business needs.
          </li>
          <li>
            Security & Compliance: Protecting your data with
            industry-leading security protocols.
          </li>
          <li>
            Performance-Driven Optimization: Ensuring fast,
            efficient, and reliable database operations.
          </li>
          <li>
            Scalability & Growth-Focused: Future-ready database
            solutions to support business expansion.
          </li>
          <li>
            Expert Support & Maintenance: Ongoing database
            monitoring, updates, and troubleshooting.
          </li>
        </ul>
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
                <span className="font-bold text-secondary">{item.title}:</span>
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
          Our company rebranding services are
          tailored to your needs. Below are our pricing tiers:
        </p>
        <ul>
          {companySpecificServices.map(
            (service) =>
              service.name ===
                "Optimized & Secure Database Management Solutions" &&
              service.pricingTiers.map((tiers, index) => (
                <li key={index}>
                  <span className="font-bold text-secondary">
                    {tiers.name}:
                  </span>
                  {tiers.info}
                </li>
              ))
          )}
        </ul>
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Let’s Build a Smarter, Faster, More Secure Database That Powers Your
          Business
        </h2>
        <p className="my-4">
          Don’t let disorganized, slow, or outdated data systems hold your
          business back. Streamline, optimize, and future-proof your data with
          our customized database solutions. With ongoing support, proactive
          monitoring, and automated updates, we ensure your database remains
          stable and high-performing for the long term. Let’s take your business
          to the next level!
        </p>
        <p>
          Ready to enhance your business with an efficient, secure, and scalable
          database?
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 inline-flex m-0"
          >
            Contact us today
          </Button>
          to discuss your database development and management needs!
        </p>
      </section>
    </main>
  );
};

export default DatabaseServices;
