"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { technicalWritingData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const TechnicalWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Technical Writing Services
      </h1>
      <p>
        Our Technical Writing Services provide clear, concise, and accurate
        documentation to help users understand and effectively use your products
        or services. We specialize in creating user manuals, API documentation,
        technical specifications, knowledge bases, and more. With a focus on
        precision and ease of use, our team ensures that even the most complex
        information is communicated in a straightforward manner. Whether you
        need to simplify technical processes, enhance user experiences, or meet
        compliance standards, our technical writing solutions are tailored to
        meet your needs.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Technical Writing Matters
        </h2>
        <p className="my-4">
          Effective technical documentation bridges the gap between complex
          concepts and user comprehension. Whether manuals, API docs, or SOPs,
          our expert technical writing services ensure clarity, efficiency, and
          enhanced user experience.
        </p>
      </section>

      {/* Dynamic Content Rendering for Sections */}
      {technicalWritingData.map((section, index) => (
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
          Pricing depends on document complexity, length, audience, and
          technical expertise required.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name === "Technical Writing" && (
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
          Ready to enhance your technical documentation?{" "}
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

export default TechnicalWritingServices;
