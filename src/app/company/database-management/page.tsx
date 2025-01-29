"use client";

import { Button } from "@/components/ui/button";
import { databaseServicesData } from "@/lib/company-constant";
import { useRouter } from "next/navigation";
import { FC } from "react";

const DatabaseServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Database Creation and Management Services
      </h1>

      {/* Introduction Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Our Database Services?
        </h2>
        <p className="my-4">
          Our comprehensive database solutions ensure that your data is
          **secure, scalable, and optimized for performance**. Whether you're
          building a database from the ground up or need professional management
          for an existing one, we provide **reliable, high-performance
          solutions** tailored to your business needs.
        </p>
      </section>

      {/* Dynamic Rendering for Database Services */}
      {databaseServicesData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="font-bold text-secondary">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing Tiers
        </h2>
        <p className="my-4">
          Our pricing is customized based on the **complexity, size, and
          features** of your database project.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-bold text-secondary">Basic Plan:</span>{" "}
            Small-scale databases with essential security measures.
          </li>
          <li>
            <span className="font-bold text-secondary">Standard Plan:</span>{" "}
            Mid-size databases with **performance optimizations & monitoring**.
          </li>
          <li>
            <span className="font-bold text-secondary">Enterprise Plan:</span>{" "}
            Large-scale, mission-critical databases with **24/7 support and
            cloud scalability**.
          </li>
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
