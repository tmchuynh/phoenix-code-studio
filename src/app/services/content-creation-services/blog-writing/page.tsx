"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { blogWritingData } from "@/lib/content-constants";
import { contentCreationServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const BlogWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>
        Engaging Blog Writing Services That Drive Traffic & Build Authority
      </h1>
      <p>
        Capture your audience’s attention with high-quality, SEO-optimized blog
        content that informs, inspires, and converts. Our blog writing services
        help brands establish thought leadership, boost search engine rankings,
        and engage readers with well-researched, compelling articles tailored to
        their industry. Whether you need long-form educational content, trending
        topics, or conversion-driven posts, we craft content that aligns with
        your brand’s voice and marketing goals.
      </p>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Content That Keeps Your Audience Coming Back
        </h2>
        <p className="my-4">
          From in-depth industry insights to engaging listicles, our blog
          content is structured to enhance readability, improve engagement, and
          drive results. Let’s tell your story, boost your brand, and turn
          readers into loyal customers!
        </p>
      </section>

      {/* Dynamic Section Rendering */}
      {blogWritingData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="font-bold text-secondary">{item.title}:</span>
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
            {service.name === "SEO-Optimized, Engaging Blog Content" && (
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
          Ready to elevate your brand with high-quality blog content?
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

export default BlogWritingServices;
