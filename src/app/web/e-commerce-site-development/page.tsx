"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

const EcommerceWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Custom E-Commerce Website Development
      </h1>
      <p className="text-center text-lg my-4">
        Elevate your online store with a tailored eCommerce solution designed to
        fit your brand, engage your audience, and drive sales.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Choose Custom eCommerce Development?
        </h2>
        <p className="my-4">
          A custom eCommerce website goes beyond standard templates to provide a
          unique, scalable, and optimized platform that reflects your brand’s
          identity while enhancing the shopping experience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Unique Design:</span>{" "}
            Stand out in a crowded market with a store designed to resonate with
            your brand.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enhanced Shopping Experience:
            </span>{" "}
            Intuitive navigation, personalized recommendations, and fast
            checkout processes to boost conversion rates.
          </li>
          <li>
            <span className="font-bold text-secondary">Advanced Features:</span>{" "}
            Implement custom product filters, inventory management, loyalty
            programs, and more.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Mobile Optimization:
            </span>{" "}
            Fully responsive designs to ensure a seamless shopping experience on
            all devices.
          </li>
          <li>
            <span className="font-bold text-secondary">
              SEO-Friendly Structure:
            </span>{" "}
            Built-in features to help your store rank higher and attract more
            traffic.
          </li>
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
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold text-secondary">
                Dynamic Categories:
              </span>{" "}
              Create and manage product categories effortlessly.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Custom Attributes:
              </span>{" "}
              Add unique attributes such as size, color, or material to your
              products.
            </li>
            <li>
              <span className="font-bold text-secondary">
                Bulk Import/Export:
              </span>{" "}
              Easily manage large product inventories with bulk operations.
            </li>
          </ul>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-bold">Secure Payment Gateways</h3>
          <p>
            Provide your customers with multiple payment options, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Credit/Debit Cards</li>
            <li>PayPal</li>
            <li>Apple Pay, Google Pay, and other mobile wallets</li>
            <li>Buy Now, Pay Later integrations</li>
          </ul>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-bold">Shipping and Fulfillment</h3>
          <p>Streamline your logistics with features such as:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time shipping rate calculations</li>
            <li>Automated tracking updates</li>
            <li>Integration with major carriers (UPS, FedEx, DHL, etc.)</li>
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Development Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Consultation:</span>{" "}
            Understanding your business, audience, and goals.
          </li>
          <li>
            <span className="font-bold text-secondary">Planning:</span> Creating
            a roadmap, wireframes, and feature list.
          </li>
          <li>
            <span className="font-bold text-secondary">Design:</span> Crafting
            unique and user-friendly interfaces.
          </li>
          <li>
            <span className="font-bold text-secondary">Development:</span>{" "}
            Building your store using modern technologies.
          </li>
          <li>
            <span className="font-bold text-secondary">Integration:</span>{" "}
            Adding payment gateways, analytics, and third-party tools.
          </li>
          <li>
            <span className="font-bold text-secondary">Testing:</span> Ensuring
            performance, security, and accessibility on all devices.
          </li>
          <li>
            <span className="font-bold text-secondary">Launch & Support:</span>{" "}
            Deploying your site and offering ongoing assistance.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Most
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
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js for fast, SEO-friendly development</li>
          <li>Tailwind CSS for responsive, accessible design</li>
          <li>Shopify or WooCommerce APIs for backend functionality</li>
          <li>Stripe and PayPal for secure payment processing</li>
          <li>Google Analytics for performance tracking</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Starter Package:</span>{" "}
            Starting at $5,000 for a basic store setup with essential features.
          </li>
          <li>
            <span className="font-bold text-secondary">Growth Package:</span>{" "}
            Starting at $10,000 for advanced features like loyalty programs and
            custom integrations.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enterprise Package:
            </span>{" "}
            Starting at $15,000+ for complex stores with multi-vendor support,
            analytics, and more.
          </li>
        </ul>
        <p>Monthly hosting and maintenance plans start at $50/month.</p>
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
