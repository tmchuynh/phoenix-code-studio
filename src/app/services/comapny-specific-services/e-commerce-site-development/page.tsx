"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import {
  ecommerceData,
  paymentOptions,
  shippingFulfillment,
  ecommerceTechnologies,
} from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const EcommerceWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1>Custom E-Commerce Website Development That Drives Sales</h1>
      <p>
        Your online store should do more than just sell—it should captivate,
        convert, and retain customers. Our E-Commerce Website Development
        services deliver{" "}
        <strong>custom, high-performing, and secure online stores</strong>{" "}
        tailored to your business needs. With a focus on{" "}
        <strong>
          scalability, mobile responsiveness, and seamless payment integration
        </strong>
        , we build dynamic e-commerce solutions that offer a frictionless
        shopping experience. From intuitive product catalogs and personalized
        recommendations to streamlined checkout processes, we ensure that every
        element of your store is optimized for{" "}
        <strong>maximum engagement and sales</strong>.
      </p>

      {/* Why Choose Custom eCommerce Development? */}
      <section className="my-8">
        <h2>Why Invest in a Custom E-Commerce Website?</h2>

        <p>
          A custom-built e-commerce platform offers far more flexibility and
          brand identity than generic templates. We create{" "}
          <strong>tailored solutions</strong> that align with your business
          goals, incorporating:
        </p>

        <ul>
          <li>
            <strong>Optimized Checkout Flows:</strong> Reduce cart abandonment
            and enhance user convenience.
          </li>
          <li>
            <strong>Advanced Product Filtering:</strong> Make it easier for
            customers to find exactly what they need.
          </li>
          <li>
            <strong>Seamless Third-Party Integrations:</strong> Integrate with
            payment gateways, CRM systems, and marketing tools.
          </li>
          <li>
            <strong>SEO-Optimized Performance:</strong> Ensure your store ranks
            higher on search engines and attracts more organic traffic.
          </li>
          <li>
            <strong>Mobile-First Design:</strong> Create a smooth shopping
            experience across all devices.
          </li>
        </ul>

        <p>
          Our platforms are built for{" "}
          <strong>speed, SEO, and user-friendly navigation</strong>, ensuring
          that your customers enjoy a{" "}
          <strong>fast, intuitive, and memorable shopping experience</strong>.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Future-Proof Your Business with Scalable E-Commerce Solutions
        </h2>
        <p>
          Whether you’re launching a new store or expanding your existing
          e-commerce business, our solutions are built for growth. We
          incorporate{" "}
          <strong>
            AI-powered recommendations, automated inventory management, and
            multi-channel sales integrations
          </strong>
          , ensuring your store stays competitive in an evolving market. Our
          e-commerce platforms are designed to handle increasing traffic and
          product expansion, making them the perfect solution for businesses
          looking to scale.
        </p>
      </section>

      <section className="my-8">
        <h2>What Sets Our E-Commerce Development Services Apart?</h2>

        <ul>
          <li>
            <strong>Customizable & Scalable:</strong> Adapt your store to your
            brand and business growth.
          </li>
          <li>
            <strong>Fast & Secure Transactions:</strong> Integrated with
            top-tier payment gateways for a secure checkout process.
          </li>
          <li>
            <strong>Conversion-Focused UX/UI:</strong> Intuitive navigation,
            high-quality product displays, and engaging layouts.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Built-in analytics and
            reporting tools for smarter business decisions.
          </li>
        </ul>
      </section>

      {/* Dynamic Rendering for Features & Services */}
      {ecommerceData.map((section, index) => (
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

      {/* Payment Options */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Secure Payment Gateways
        </h2>
        <p>
          We offer seamless payment integration with secure and trusted
          providers:
        </p>
        <ul>
          {paymentOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </section>

      {/* Shipping & Fulfillment */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Shipping & Fulfillment
        </h2>
        <p>Optimize your logistics and enhance the customer experience with:</p>
        <ul>
          {shippingFulfillment.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Technologies We Use
        </h2>
        <p className="my-4">
          We leverage cutting-edge technologies to create fast, secure, and
          scalable eCommerce solutions:
        </p>
        <ul>
          {ecommerceTechnologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
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
              service.name ===
                "E-Commerce Solutions Built for Growth and Success" &&
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
          Take Your Online Business to the Next Level
        </h2>
        <p>
          Ready to build an e-commerce website that{" "}
          <strong>sells, scales, and succeeds</strong>?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 inline-flex m-0"
          >
            Contact us today
          </Button>{" "}
          to discuss your vision and let’s create a custom online store that
          boosts sales and delivers an exceptional shopping experience.
        </p>
      </section>
    </main>
  );
};

export default EcommerceWebsite;
