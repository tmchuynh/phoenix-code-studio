"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  spaDevelopmentFeatures,
  spaDevelopmentServices,
  technologiesUsed,
  processItems,
} from "@/lib/content-constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SPAServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Single Page Application (SPA) Development Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Single Page Application" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Single Page Applications?
        </h2>
        <p className="my-4">
          Single Page Applications (SPAs) offer a seamless, dynamic, and highly
          responsive user experience by loading all essential content at once
          and dynamically updating the page without requiring full reloads. This
          approach minimizes load times, reduces server requests, and ensures
          smooth navigation, making SPAs ideal for businesses prioritizing
          speed, performance, and user engagement. Designed for scalability,
          SPAs can easily adapt to growing demands, integrating advanced
          features and functionalities to meet evolving needs. Their interactive
          nature enhances usability, providing real-time updates and intuitive
          interfaces that keep users engaged. Whether for e-commerce platforms,
          dashboards, or content-rich applications, SPAs deliver a modern,
          efficient solution that combines high performance with exceptional
          user experience.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {spaDevelopmentFeatures.map((feature, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{feature.title}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our SPA Development Services
        </h2>
        <p className="my-4">
          We offer comprehensive end-to-end Single Page Application (SPA)
          development services designed to align with your business goals and
          deliver exceptional results. From planning and design to development
          and deployment, we craft SPAs that prioritize high performance,
          scalability, and seamless user experiences. Our expertise ensures that
          your application is optimized for speed, interactivity, and
          adaptability, making it a perfect fit for dynamic business needs.
          Whether you require an e-commerce platform, a user-friendly dashboard,
          or a custom application, we build solutions that combine functionality
          with intuitive design to meet your objectives and exceed user
          expectations.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {spaDevelopmentServices.map((service, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Technologies We Use
        </h2>
        <p className="my-4">
          We leverage the latest tools and frameworks to deliver cutting-edge
          SPAs:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {technologiesUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Process
        </h2>
        <p>
          Our SPA development process begins with a deep understanding of your
          business goals, target audience, and project requirements. We start by
          planning and designing an intuitive user interface that aligns with
          your brand and delivers a seamless experience. Next, we develop the
          application using modern frameworks and technologies to ensure high
          performance, interactivity, and scalability. Rigorous testing is
          conducted to identify and resolve any issues, guaranteeing a smooth,
          bug-free user experience. Finally, we deploy the application and
          provide ongoing support to ensure your SPA continues to perform
          optimally as your business evolves.
        </p>
        <p className="my-4">
          Typical SPA development projects take 6–12 weeks, depending on the
          complexity and scope of the application.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {processItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Our pricing is based on the complexity and features of your SPA
          project. We offer flexible packages to suit businesses of all sizes:
        </p>
        <p>Ongoing support and maintenance plans start at $200/month.</p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Single Page Application" && (
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
