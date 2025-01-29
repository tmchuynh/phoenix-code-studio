"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { blogWritingData } from "@/lib/content-constants";
import { contentCreationServices } from "@/lib/constants";

const BlogWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Blog Writing Services
      </h1>

      {/* Dynamic Section Rendering */}
      {blogWritingData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
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
            {service.name === "Blog Writing" && (
              <ul className="list-disc pl-6 space-y-1">
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
          Ready to elevate your brand with high-quality blog content?{" "}
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
