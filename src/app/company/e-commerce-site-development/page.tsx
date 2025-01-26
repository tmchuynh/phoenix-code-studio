"use client";

import { Button } from "@/components/ui/button";
import {
  companySpecificServices,
  customEcommerceFeatures,
  developmentProcessItems,
  productCatalogManagement,
  securePaymentGateways,
  shippingAndFulfillment,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const EcommerceWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Custom E-Commerce Website Development
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "E-Commerce Site Development" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Choose Custom eCommerce Development?
        </h2>
        <p className="my-4">
          A custom eCommerce website goes beyond standard templates to provide a
          unique, scalable, and optimized platform that reflects your brand’s
          identity while enhancing the shopping experience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {customEcommerceFeatures.map((feature, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{feature.title}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Comprehensive Services</h2>
        <div className="my-6">
          <h3 className="text-xl font-bold">Product Catalog Management</h3>
          <p>
            We ensure your product catalog is easy to manage, scalable, and
            user-friendly, featuring:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {productCatalogManagement.map((item, index) => (
              <li key={index}>
                <span className="font-bold text-tertiary">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-bold">Secure Payment Gateways</h3>
          <p>
            Provide your customers with multiple payment options, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {securePaymentGateways.map((gateway, index) => (
              <li key={index}>{gateway}</li>
            ))}
          </ul>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-bold">Shipping and Fulfillment</h3>
          <p>Streamline your logistics with features such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            {shippingAndFulfillment.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Development Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          {developmentProcessItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Most
          projects are completed within 6–12 weeks, depending on complexity and
          features.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We use industry-leading tools and frameworks to create scalable,
          secure, and high-performing eCommerce platforms:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Next.js for fast, SEO-friendly development</li>
          <li>Tailwind CSS for responsive, accessible design</li>
          <li>Shopify or WooCommerce APIs for backend functionality</li>
          <li>Stripe and PayPal for secure payment processing</li>
          <li>Google Analytics for performance tracking</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your website’s features,
          complexity, and scope:
        </p>
        <p>Monthly hosting and maintenance plans start at $50/month.</p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "E-Commerce Site Development" && (
                <ul className="list-disc pl-6 space-y-2">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-tertiary">
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
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to launch your online store?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default EcommerceWebsite;
