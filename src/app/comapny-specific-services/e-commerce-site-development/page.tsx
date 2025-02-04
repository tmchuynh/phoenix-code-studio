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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        E-Commerce Website Development
      </h1>
      <p>
        Our E-Commerce Website Development services focus on creating dynamic,
        secure, and user-friendly online stores that drive sales and enhance
        customer experience. We specialize in building custom e-commerce
        websites using the latest technologies to ensure scalability, mobile
        responsiveness, and seamless integration with payment gateways. From
        intuitive product catalogs to streamlined checkout processes, we craft a
        personalized shopping experience that keeps your customers engaged and
        coming back. Whether you're a small business or a large enterprise, our
        solutions are designed to grow with your business and maximize online
        sales.
      </p>

      {/* Why Choose Custom eCommerce Development? */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Custom E-Commerce Development?
        </h2>
        <p className="my-4">
          A custom eCommerce website offers tailored solutions beyond generic
          templates, ensuring an online store that aligns with your brand,
          engages customers, and scales with your business. Our custom-built
          platforms feature optimized checkout flows, advanced filtering, and
          seamless integrations to deliver an intuitive and memorable shopping
          experience.
        </p>
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
              service.name === "E-Commerce Site Development" &&
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
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to launch your custom eCommerce store?{" "}
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

export default EcommerceWebsite;
