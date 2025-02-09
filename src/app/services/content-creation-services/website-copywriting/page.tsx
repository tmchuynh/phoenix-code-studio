"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { websiteCopywritingData } from "@/lib/content-constants";
import { contentCreationServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const WebsiteCopywritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Website Copywriting Services</h1>
      <p>
        Our Website Copywriting Services focus on crafting compelling, clear,
        and engaging content that resonates with your audience while driving
        conversions. From homepage copy to product descriptions, blog posts, and
        CTAs, we create content that captures your brand voice and encourages
        action. Our team ensures that each piece is optimized for SEO, improving
        your visibility on search engines and helping you attract more visitors.
        Whether you’re launching a new website or revamping an existing one, our
        copywriting services deliver content that informs, engages, and
        converts.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Website Copywriting Matters
        </h2>
        <p className="my-4">
          Your website serves as the first impression many potential customers
          have of your brand. High-quality, persuasive copy is essential for
          engaging visitors, communicating your value, and boosting conversions.
        </p>
      </section>

      {/* Dynamic Rendering for Content Sections */}
      {websiteCopywritingData.map((section, index) => (
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
        <p>
          Pricing is based on the word count, complexity, and SEO requirements
          of your blog content.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Engaging, SEO-Optimized Website Content That Converts" && (
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
        <p className="my-4">
          Ready to transform your website with engaging and high-converting
          copy?{" "}
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

export default WebsiteCopywritingServices;
