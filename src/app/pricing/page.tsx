"use client";

import { Button } from "@/components/ui/button";
import router from "next/router";
import { FC } from "react";

const PricingPage: FC = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Our Pricing and Service Tiers
      </h1>
      <p className="text-lg my-4">
        Explore our flexible pricing options designed to suit a variety of needs
        and budgets. Whether you're looking for a basic package or a
        comprehensive solution, we offer service tiers that provide exceptional
        value and scalability. Choose the plan that aligns with your goals, and
        let us help you achieve success with tailored, high-quality services.
      </p>

      {/* Service 1: Website Design */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Website Design Services</h2>
        <p className="my-4">
          Our website design services are designed to meet your business goals,
          from simple informational websites to fully customized solutions.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-secondary">Basic Website:</span>{" "}
            Starting at $2,500 – A simple, informational website (5-10 pages).
          </li>
          <li>
            <span className="font-bold text-secondary">Advanced Website:</span>{" "}
            Starting at $4,000 – Includes custom functionality, integrations,
            and dynamic content.
          </li>
          <li>
            <span className="font-bold text-secondary">
              E-Commerce Website:
            </span>{" "}
            Starting at $6,500 – Fully functional online store with payment
            integration.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Hosting and Domain:
            </span>{" "}
            Starting at $15/month – Secure, reliable hosting with domain
            registration.
          </li>
        </ul>
      </section>

      {/* Service 2: UX/UI Design */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">UX/UI Design Services</h2>
        <p className="my-4">
          Our UX/UI design services focus on creating seamless and engaging user
          experiences while ensuring visually stunning interfaces.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-secondary">
              UX Design Research:
            </span>{" "}
            Starting at $3,000 – Includes user research, wireframing, and
            prototyping.
          </li>
          <li>
            <span className="font-bold text-secondary">UI Design:</span>{" "}
            Starting at $2,500 – Custom UI design for web and mobile
            applications.
          </li>
          <li>
            <span className="font-bold text-secondary">
              UX Testing and Validation:
            </span>{" "}
            Starting at $2,000 – Usability testing and iteration based on user
            feedback.
          </li>
        </ul>
      </section>

      {/* Service 3: Wireframing & Prototyping */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Wireframing and Prototyping Services
        </h2>
        <p className="my-4">
          Wireframing and prototyping services to bring your ideas to life with
          interactive mockups and user-centered design.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Low-Fidelity Wireframes:
            </span>{" "}
            Starting at $1,500 – Quick sketches outlining layout and structure.
          </li>
          <li>
            <span className="font-bold text-secondary">
              High-Fidelity Wireframes:
            </span>{" "}
            Starting at $2,000 – Detailed designs that closely resemble the
            final product.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Interactive Prototypes:
            </span>{" "}
            Starting at $2,500 – Clickable prototypes for testing user
            interactions.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Usability Testing Prototypes:
            </span>{" "}
            Starting at $3,000 – Prototypes optimized for testing with real
            users.
          </li>
        </ul>
      </section>

      {/* Service 4: Development Services */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Development Services</h2>
        <p className="my-4">
          Our development services ensure that your vision is brought to life
          using the latest technologies and best practices.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Frontend Development:
            </span>{" "}
            Starting at $4,500 – Custom frontend development using React,
            Next.js, or Angular.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Backend Development:
            </span>{" "}
            Starting at $5,500 – Robust backend solutions with Node.js, Express,
            or other technologies.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Full-Stack Development:
            </span>{" "}
            Starting at $8,000 – Complete end-to-end web applications, from
            frontend to backend.
          </li>
        </ul>
      </section>

      {/* Service 5: Ongoing Support and Maintenance */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Ongoing Support and Maintenance
        </h2>
        <p className="my-4">
          Ensure the longevity of your website or application with our ongoing
          maintenance and support services.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Monthly Support Plan:
            </span>{" "}
            Starting at $200/month – Includes bug fixes, updates, and basic
            support.
          </li>
          <li>
            <span className="font-bold text-secondary">Extended Support:</span>{" "}
            Starting at $500/month – Full-service support, including
            enhancements, updates, and troubleshooting.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to discuss your project and choose the best tier for your needs?{" "}
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

export default PricingPage;
