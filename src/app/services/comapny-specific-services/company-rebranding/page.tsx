"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { companyRebrandingData } from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CompanyRebranding: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Transform Your Brand with Our Expert Rebranding Services</h1>
      <p>
        Your brand is more than just a logo—it’s the essence of your business,
        shaping how customers perceive and connect with you. Our Company
        Rebranding Services are designed to help businesses evolve, reposition,
        and thrive in an ever-changing market. Whether you need a{" "}
        <strong>
          brand refresh, strategic repositioning, or a complete transformation
        </strong>
        , we provide data-driven, customer-centric solutions tailored to your
        goals. From stunning <strong>logo design and website revamps</strong>
        to <strong>refining your brand voice and messaging</strong>, we craft
        identities that captivate, connect, and leave a lasting impact.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2>What is Company Rebranding?</h2>

        <p>
          Company rebranding is more than just a visual makeover—it’s a
          strategic reinvention that ensures your business stays relevant,
          competitive, and aligned with your evolving vision. A successful
          rebrand helps you{" "}
          <strong>
            strengthen brand identity, clarify messaging, and engage with new
            and existing audiences
          </strong>
          . Whether your goal is to modernize your look, enhance your
          reputation, or reposition yourself in the market, we help you create a
          powerful, future-proof brand that resonates, inspires trust, and
          drives long-term growth.
        </p>
      </section>

      <section className="my-8">
        <h2>Why Rebranding Matters</h2>

        <p>
          Rebranding is essential for businesses looking to stay ahead in a
          fast-evolving marketplace. If your brand no longer reflects your
          business goals, struggles to attract the right audience, or lacks a
          cohesive identity, it may be time for a transformation. Our expert-led
          rebranding services help you:
        </p>

        <ul>
          <li>
            <strong>Stand out from competitors</strong> with a distinctive and
            memorable brand identity.
          </li>
          <li>
            <strong>Strengthen brand loyalty</strong> by creating a deeper
            emotional connection with your audience.
          </li>
          <li>
            <strong>Align with market trends</strong> to stay relevant and ahead
            of industry shifts.
          </li>
          <li>
            <strong>Enhance brand consistency</strong> across all digital and
            physical touchpoints.
          </li>
          <li>
            <strong>Increase customer engagement</strong> with compelling
            storytelling and a refined brand message.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Us?
        </h2>
        <p>
          Our expertise in{" "}
          <strong>branding, design, and digital strategy</strong> allows us to
          deliver comprehensive rebranding solutions tailored to your unique
          needs. Here’s why businesses trust us:
        </p>

        <ul>
          <li>
            <strong>Strategic Branding Alignment:</strong> We ensure your new
            brand reflects your vision, values, and market position.
          </li>
          <li>
            <strong>Comprehensive Visual Overhaul:</strong> From{" "}
            <strong>logo design and typography</strong> to{" "}
            <strong>website revamps</strong>, we create a polished, professional
            brand identity.
          </li>
          <li>
            <strong>Authentic Messaging & Storytelling:</strong> We refine your
            brand voice, tone, and messaging to craft a compelling narrative.
          </li>
          <li>
            <strong>Seamless Transition & Implementation:</strong> Our process
            ensures a smooth transition without losing audience trust.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2>Our Rebranding Process</h2>

        <h3>1. Brand Discovery & Market Research</h3>
        <p>
          We begin with an in-depth brand analysis, competitor research, and
          audience insights to define your brand’s positioning, values, and
          unique selling points.
        </p>

        <h3>2. Visual Identity & Logo Design</h3>
        <p>
          A compelling visual identity is key to rebranding success. We craft a
          polished, professional brand identity, including
          <strong>
            logo design, typography, color palettes, and graphic elements
          </strong>
          , ensuring a cohesive look that resonates with your audience.
        </p>

        <h3>3. Brand Messaging & Storytelling</h3>
        <p>
          Your brand voice matters. We refine your messaging, tone, and
          positioning to craft an{" "}
          <strong>authentic and impactful brand story</strong> that builds trust
          and emotional connections with customers.
        </p>

        <h3>4. Website Revamp & Digital Presence</h3>
        <p>
          A rebrand is incomplete without a{" "}
          <strong>modernized website and digital experience</strong>. We
          redesign your website, optimize for SEO, and ensure seamless user
          experiences across all platforms.
        </p>

        <h3>5. Seamless Implementation & Rollout</h3>
        <p>
          We provide a strategic rollout plan, ensuring a smooth transition
          without losing existing brand recognition or audience trust. Our
          process includes internal branding guidelines, marketing collateral
          updates, and a digital launch strategy.
        </p>
      </section>

      {/* Dynamic Rendering for Rebranding Services */}
      {companyRebrandingData.map((section, index) => (
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
              service.name ===
                "Transform Your Brand with Our Rebranding Services" &&
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
          Ready to Reimagine Your Brand?
        </h2>
        <p>
          Whether you're launching a new vision or modernizing your existing
          identity, our expert team is here to help. Let’s create a brand that
          reflects your values, inspires loyalty, and drives success.
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 inline-flex m-0"
          >
            Contact us today
          </Button>{" "}
          to start your rebranding journey!
        </p>
      </section>
    </main>
  );
};

export default CompanyRebranding;
