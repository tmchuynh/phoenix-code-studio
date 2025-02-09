"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { ebookData } from "@/lib/content-constants";
import { contentCreationServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const EbookCreationServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Transform Your Ideas into Engaging E-Books</h1>
      <p>
        Our E-Book Creation Services offer a complete solution to bring your
        content to life in a visually stunning and professionally formatted
        e-book. Whether you're crafting an educational resource, industry guide,
        or lead-generating e-book, we ensure your content is clear, compelling,
        and designed for maximum impact across all devices.
      </p>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Choose Our E-Book Creation Services?
        </h2>
        <p className="my-4">
          ✅ Expert Writing & Editing – Engaging, high-quality content tailored
          to your audience ✅ Professional Design & Formatting – Visually
          appealing layouts optimized for readability ✅ Multi-Device
          Compatibility – Seamless experience across desktops, tablets, and
          e-readers
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Boost Engagement & Establish Authority
        </h2>
        <p className="my-4">
          An e-book is more than just content—it’s a powerful marketing tool
          that builds credibility, attracts leads, and positions you as an
          expert in your field. Let’s create an e-book that captivates readers
          and strengthens your brand.
        </p>
      </section>

      {/* Dynamic Section Rendering */}
      {ebookData.map((section, index) => (
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

      {/* Pricing Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p>Pricing is tailored to your specific needs and project scope.</p>
        {contentCreationServices.map((service) => (
          <>
            {service.name === "Engaging & Professional eBook Creation" && (
              <ul>
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
        ))}
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p>
          Ready to create a captivating e-book that elevates your brand?{" "}
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

export default EbookCreationServices;
