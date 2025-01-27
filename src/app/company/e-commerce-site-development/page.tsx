"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  customEcommerceFeatures,
  productCatalogManagement,
  securePaymentGateways,
  shippingAndFulfillment,
  developmentProcessItems,
} from "@/lib/content-constants";

import { useRouter } from "next/navigation";
import { FC } from "react";

const EcommerceWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        E-Commerce Website Development
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "E-Commerce Site Development" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Custom eCommerce Development?
        </h2>
        <p className="my-4">
          A custom eCommerce website offers a tailored solution that goes beyond
          generic templates, providing a platform uniquely designed to meet the
          specific needs of your business and customers. By reflecting your
          brand’s identity through personalized designs, intuitive navigation,
          and seamless functionality, a custom eCommerce site enhances the
          overall shopping experience. These platforms are built to be scalable,
          ensuring they can grow alongside your business and handle increased
          traffic and transactions without compromising performance. With
          advanced features such as optimized checkout processes, personalized
          product recommendations, and integration with third-party tools, a
          custom eCommerce website delivers both functionality and a memorable
          user experience, setting your brand apart in a competitive online
          marketplace.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {customEcommerceFeatures.map((feature, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{feature.title}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Comprehensive Services
        </h2>
        <div>
          <h3 className="text-xl font-bold">
            Effortless Product Catalog Management
          </h3>
          <p>
            We provide scalable, user-friendly solutions to make managing your
            product catalog seamless and efficient, offering:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {productCatalogManagement.map((item, index) => (
              <li key={index}>
                <span className="font-bold text-tertiary">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Reliable and Secure Payment Gateways
          </h3>
          <p>
            Offer your customers a variety of secure and convenient payment
            options, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {securePaymentGateways.map((gateway, index) => (
              <li key={index}>{gateway}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Optimized Shipping and Fulfillment
          </h3>
          <p>
            Simplify your logistics and enhance customer satisfaction with
            features such as:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {shippingAndFulfillment.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Development Process
        </h2>
        <p>
          Our custom eCommerce website development process is designed to
          deliver a platform that reflects your brand identity and meets your
          business needs. We begin with an in-depth consultation to understand
          your goals, target audience, and unique requirements. Next, we create
          a detailed plan, including wireframes and mockups, to visualize the
          design and structure. Once approved, our team develops the site using
          scalable, secure, and high-performance technologies. We integrate
          essential features such as payment gateways, product catalogs, and
          customer management tools while optimizing for speed, SEO, and user
          experience. After rigorous testing to ensure functionality and
          reliability, we launch your site and provide ongoing support to ensure
          its success as your business evolves.
        </p>
        <p className="my-4">
          Typical custom eCommerce website projects take 8–16 weeks, depending
          on the complexity and scope of the platform.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {developmentProcessItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Tools and Technologies
        </h2>
        <p className="my-4">
          We use industry-leading tools and frameworks to create scalable,
          secure, and high-performing eCommerce platforms:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Next.js for fast, SEO-friendly development</li>
          <li>Tailwind CSS for responsive, accessible design</li>
          <li>Shopify or WooCommerce APIs for backend functionality</li>
          <li>Stripe and PayPal for secure payment processing</li>
          <li>Google Analytics for performance tracking</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing Tiers
        </h2>
        <p className="my-4">
          Our pricing is customized based on your website’s features,
          complexity, and scope:
        </p>
        <p>Monthly hosting and maintenance plans start at $50/month.</p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "E-Commerce Site Development" && (
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
          Ready to launch your online store?{" "}
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
