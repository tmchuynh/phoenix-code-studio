"use client";

import CallToAction from "@/components/CallToAction";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { SidebarSeparator } from "@/components/ui/sidebar";
import {
  companySpecificServices,
  contentCreationServices,
  websiteServices,
} from "@/lib/constants";
import { FC } from "react";

const PricingPage: FC = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Our Pricing and Service Tiers
      </h1>
      <p>
        Explore our flexible pricing options designed to suit a variety of needs
        and budgets. Whether you';re looking for a basic package or a
        comprehensive solution, we offer service tiers that provide exceptional
        value and scalability. Choose the plan that aligns with your goals, and
        let us help you achieve success with tailored, high-quality services.
      </p>

      {/* Service 1: Website Services */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Customized Website Services
        </h2>
        <p>
          Your website is the digital face of your business, and we are here to
          ensure it makes a lasting impression. Our website services are
          designed to cater to businesses of all sizes, whether you need a
          simple informational site, a custom-built eCommerce platform, or a
          dynamic, feature-rich web application.
        </p>
        <p>
          We specialize in creating fully responsive, visually appealing, and
          highly functional websites that align with your brand identity and
          business objectives. From initial strategy and design to development,
          optimization, and ongoing support, we offer end-to-end solutions
          tailored to your unique needs.
        </p>
        <p>
          Our services include custom website design, user experience (UX) and
          user interface (UI) enhancements, content management system (CMS)
          integrations, performance optimization, and SEO best practices to
          improve visibility and engagement. We prioritize usability, security,
          and scalability to ensure your website remains fast, reliable, and
          adaptable as your business grows.
        </p>
        <p>
          Whether you';re launching a new website, revamping an existing one, or
          integrating advanced functionalities, our expert team will guide you
          through every step of the process. Let us help you create a powerful
          online presence that connects with your audience and drives measurable
          results.
        </p>

        {websiteServices.map((services, index) => (
          <div className="my-4" key={index}>
            <p>{services.details}</p>
            <ul>
              {services.pricingTiers.map((item, index) => (
                <>
                  <li key={index}>
                    <strong>{item.name}:</strong> {item.info}
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="my-8">
        <SidebarSeparator className="bg-muted h-0.5" />
        <CallToAction />
        <SidebarSeparator className="bg-muted h-0.5" />
      </section>

      {/* Service 2: Company Specific Services */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Company-Specific Services
        </h2>
        <p>
          Every business has unique needs, and our company-specific services are
          tailored to provide customized solutions that align with your brand’s
          goals, vision, and target audience. Whether you’re looking to enhance
          your digital presence, optimize customer engagement, or streamline
          internal operations, we have the expertise to deliver results.
        </p>
        <p>
          Our UX/UI design services focus on creating seamless and engaging user
          experiences while ensuring visually stunning and intuitive interfaces.
          We conduct in-depth research, wireframing, prototyping, and usability
          testing to craft designs that enhance user interactions and maximize
          conversion rates.
        </p>
        <p>
          Beyond design, we offer comprehensive branding and rebranding
          solutions, helping businesses establish or refine their brand identity
          with compelling storytelling, logo design, and cohesive visual
          elements. Additionally, we provide tailored software development
          services, including custom applications, database management, and
          enterprise solutions designed to improve efficiency and scalability.
        </p>
        <p>
          We also specialize in eCommerce development, CRM integrations, and
          automation tools that enhance business operations, customer
          engagement, and long-term growth. Whatever your specific business
          requirements, our dedicated team is here to create strategic,
          innovative, and results-driven solutions that set you apart from the
          competition.
        </p>

        {companySpecificServices.map((services, index) => (
          <div className="my-4" key={index}>
            <p>{services.details}</p>
            <ul>
              {services.pricingTiers.map((item, index) => (
                <>
                  <li key={index}>
                    <strong>{item.name}:</strong> {item.info}
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Service 3: Content Creation Services */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Comprehensive Content Creation Services
        </h2>
        <p>
          Elevate your brand’s presence with our professional content creation
          services, designed to engage, inform, and inspire your audience.
          Whether you need compelling website copy, interactive visual
          storytelling, in-depth blog articles, or detailed product guides, we
          craft content that aligns with your brand’s voice and business goals.
        </p>
        <p>
          Our approach is rooted in strategy and creativity, ensuring that every
          piece of content is optimized for impact. We specialize in crafting
          user-centric narratives, SEO-friendly copy, and multimedia content
          that drives engagement, boosts visibility, and converts visitors into
          loyal customers.
        </p>
        <p>
          From initial concept and research to final execution, we work closely
          with you to produce high-quality content that speaks to your target
          audience. Whether you’re building an online presence, launching a new
          product, or strengthening your brand’s storytelling, our tailored
          content solutions will help you achieve lasting success.
        </p>

        {contentCreationServices.map((services, index) => (
          <div className="my-4" key={index}>
            <p>{services.details}</p>
            <ul>
              {services.pricingTiers.map((item, index) => (
                <>
                  <li key={index}>
                    <strong>{item.name}:</strong> {item.info}
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PricingPage;
