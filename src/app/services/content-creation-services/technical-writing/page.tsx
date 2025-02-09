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
      <h1>
        Professional Technical Writing Services – Clear, Concise & User-Friendly
        Documentation
      </h1>
      <p>
        Our Technical Writing Services provide expertly crafted, SEO-optimized
        technical documentation that enhances user experience, improves
        accessibility, and strengthens your brand’s credibility. Whether you
        need user manuals, API documentation, software guides, technical
        specifications, knowledge bases, or white papers, we create
        well-structured, easy-to-understand content tailored to your industry
        and audience. We specialize in IT and software documentation,
        engineering manuals, SaaS product guides, compliance documentation, and
        troubleshooting resources, ensuring that complex technical concepts are
        communicated with clarity, precision, and simplicity. Our approach
        focuses on SEO best practices, ensuring that your content ranks well in
        search engines, drives organic traffic, and reaches the right audience.
      </p>
      <p>
        With a strong emphasis on usability, readability, and accuracy, our
        technical writing solutions help businesses reduce support queries,
        streamline employee training, and improve customer satisfaction. Whether
        you’re a tech startup, software company, manufacturing business, or
        enterprise organization, we ensure your documentation is well-organized,
        visually appealing, and highly effective.
      </p>
      <p>
        Let us help you create engaging, conversion-focused technical content
        that boosts credibility, enhances user adoption, and ensures seamless
        product integration. Invest in high-quality technical documentation
        today and elevate your brand’s authority in the digital landscape.
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
            {service.name ===
              "Expert Technical Writing for Clarity & Precision" && (
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
