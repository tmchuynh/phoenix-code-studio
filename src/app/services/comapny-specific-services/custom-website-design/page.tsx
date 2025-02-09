"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import {
  websiteServicesData,
  toolsAndTechnologies,
} from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CustomWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1>Custom Website Design That Elevates Your Brand & Drives Results</h1>
      <p>
        Your website is more than just an online presence—it’s your most
        powerful digital asset. Our Custom Website Design Services bring your
        vision to life with a high-performing, visually stunning, and
        user-friendly website that captivates your audience, strengthens your
        brand, and maximizes conversions. Whether you need a{" "}
        <strong>
          responsive business website, a powerful e-commerce platform, or an
          engaging portfolio
        </strong>
        , we craft tailored solutions that seamlessly blend aesthetics and
        functionality. Our goal is to provide an exceptional user experience
        across all devices, ensuring your website stands out in today’s
        competitive digital landscape.
      </p>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Custom Website Design is Essential for Your Business
        </h2>
        <p>
          A custom website is the key to establishing a strong digital presence.
          Unlike generic templates, a custom-built website offers full
          flexibility, brand consistency, and superior performance optimization.
          With a{" "}
          <strong>fast, mobile-responsive, and SEO-optimized website</strong>,
          your business gains the competitive edge needed to attract, engage,
          and convert visitors into loyal customers.
        </p>
        <ul>
          <li>
            <strong>Unique & Brand-Aligned:</strong> A fully customized design
            that reflects your brand identity, values, and business objectives.
          </li>
          <li>
            <strong>SEO & Mobile Optimized:</strong> Built with search engine
            best practices and mobile-first design to maximize traffic and
            visibility.
          </li>
          <li>
            <strong>High Performance & Fast Load Times::</strong> A
            lightning-fast website keeps users engaged and improves conversions.
          </li>
          <li>
            <strong>Scalability & Custom Features:</strong> Tailored solutions
            to grow with your business, offering complete control over
            functionality and future updates.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2>What Makes a Custom Website Stand Out?</h2>

        <h3>1. Unique & Brand-Aligned</h3>
        <p>
          Your website should reflect your brand’s identity, values, and
          business objectives. We design fully customized solutions tailored to
          your specific goals, ensuring that every element is aligned with your
          brand strategy.
        </p>

        <h3>2. SEO & Mobile Optimization</h3>
        <p>
          A website built with <strong>SEO best practices</strong> ensures that
          your business ranks higher on search engines, increasing visibility
          and organic traffic. Additionally, our{" "}
          <strong>mobile-first design approach</strong> ensures seamless
          performance across all screen sizes.
        </p>

        <h3>3. High Performance & Fast Load Times</h3>
        <p>
          A slow website drives visitors away. We prioritize{" "}
          <strong>speed, efficiency, and seamless navigation</strong>, ensuring
          your website loads quickly and delivers an engaging experience that
          keeps users coming back.
        </p>

        <h3>4. Scalable & Custom Features</h3>
        <p>
          Your website should grow with your business. We develop{" "}
          <strong>scalable, custom-built solutions</strong> that allow for
          future updates, integrations, and advanced functionality tailored to
          your evolving needs.
        </p>

        <h3>5. Intuitive User Experience & Navigation</h3>
        <p>
          A website’s design should not only look great but also be easy to use.
          Our UX-focused approach ensures
          <strong>
            intuitive navigation, clear call-to-actions, and a seamless user
            journey
          </strong>
          , enhancing engagement and conversions.
        </p>
      </section>

      <section className="my-8">
        <h2>Why Choose Us?</h2>

        <ul>
          <li>
            <strong>Expert Custom Design:</strong> Tailored solutions that
            reflect your brand and engage your audience.
          </li>
          <li>
            <strong>SEO & Mobile-Optimized:</strong> Built for search engine
            success and flawless mobile performance.
          </li>
          <li>
            <strong>Conversion-Focused:</strong> Designed to turn visitors into
            customers with strategic UX/UI design.
          </li>
          <li>
            <strong>Scalable & Future-Proof:</strong> Flexible frameworks that
            grow with your business.
          </li>
          <li>
            <strong>Dedicated Support:</strong> Ongoing assistance to keep your
            website updated and optimized.
          </li>
        </ul>
      </section>

      {/* Dynamic Sections for Custom Website Features & Processes */}
      {websiteServicesData.map((section, index) => (
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

      {/* Tools & Technologies */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Tools and Technologies
        </h2>
        <p>
          We leverage industry-leading tools and technologies to create
          efficient, scalable, and secure websites:
        </p>
        <ul>
          {toolsAndTechnologies.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Your Vision, Our Expertise—Let’s Build Something Extraordinary
        </h2>
        <p>
          Don’t settle for ordinary. Let’s create a custom website that works
          for you—driving engagement, conversions, and long-term success. Ready
          to bring your vision to life? Let’s build something extraordinary!
        </p>
      </section>

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
              service.name === "Custom Website Design" &&
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
          Let’s Build Something Extraordinary
        </h2>
        <p>
          Ready to transform your online presence? Our team is here to create a
          custom website that sets your brand apart and drives measurable
          results.{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 inline-flex m-0"
          >
            Contact us today
          </Button>
          to start your custom website design journey!
        </p>
      </section>
    </main>
  );
};

export default CustomWebsite;
