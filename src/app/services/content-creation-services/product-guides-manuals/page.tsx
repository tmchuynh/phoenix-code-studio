"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { productGuideData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const ProductGuidesManualsServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Expertly Crafted Product Guides & Manuals</h1>
      <p>
        Our Product Guides and Manuals Writing Services provide clear, concise,
        and user-friendly instructions that enhance customer experience and
        reduce support inquiries. Whether you need user manuals, installation
        guides, troubleshooting documentation, or technical specifications, we
        ensure that your content is well-structured, easy to understand, and
        visually engaging.
      </p>
      <p>
        We specialize in creating step-by-step guides tailored to your product’s
        complexity and user base. From consumer electronics and software
        applications to industrial equipment and SaaS platforms, we simplify
        technical information, making it accessible to all users. Our structured
        approach enhances usability, ensuring customers can quickly grasp
        product features, setup processes, and troubleshooting solutions with
        ease. Every guide we produce is optimized for clarity, professionalism,
        and brand consistency. Whether you're launching a new product or
        improving an existing one, our expertly written product documentation
        empowers your customers, enhances brand credibility, and ensures a
        seamless user experience. Let us help you create guides that inform,
        educate, and support your audience.
      </p>

      {/* Dynamic Section Rendering */}
      {productGuideData.map((section, index) => (
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
          Pricing is determined by the scope, length, and technical complexity
          of the manual.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Comprehensive, User-Friendly Product Guides & Manuals" && (
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
          Ready to create clear, professional product guides and manuals?{" "}
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

export default ProductGuidesManualsServices;
