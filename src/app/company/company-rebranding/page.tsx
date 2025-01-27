"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  rebrandingServiceDetails,
  processSteps,
} from "@/lib/content-constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CompanyRebranding: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Company Rebranding Services
      </h1>

      {/* Display Service Details Dynamically */}
      {companySpecificServices.map((service) => {
        if (service.name === "Company Rebranding") {
          return (
            <div key={service.name}>
              <p className="text-lg my-4">{service.info}</p>
            </div>
          );
        }
        return null;
      })}

      {/* What is Company Rebranding? */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">What is Company Rebranding?</h2>
        <p className="my-4">
          Company rebranding is a transformative process that involves
          revitalizing or completely redefining your business's image and
          messaging. This comprehensive approach can include redesigning your
          logo, refining your visual identity, reshaping your brand values,
          updating your website, and enhancing your marketing strategies. The
          goal is to create a cohesive and compelling brand presence that not
          only sets your company apart but also communicates your message with
          clarity and impact. By aligning your brand with your audience’s needs
          and expectations, we help you build stronger, lasting connections and
          position your business for long-term success.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {rebrandingServiceDetails.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Our Process */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <p className="my-4">
          Our process for company rebranding is designed to be collaborative,
          strategic, and impactful. We begin by deeply understanding your
          business, its values, and your goals through research and
          consultation. Next, we analyze your current brand identity and market
          positioning to identify opportunities for growth and differentiation.
          From there, we develop a tailored strategy, which may include logo
          design, visual identity updates, messaging refinement, and website
          enhancements. Throughout the process, we ensure that every element
          aligns with your vision and resonates with your target audience. By
          involving you at every step, we create a cohesive brand transformation
          that empowers your business to stand out and thrive.
        </p>
        <p className="my-4">
          Typical company rebranding projects take 8–12 weeks, depending on the
          complexity and scope of the rebranding process.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {processSteps.map((step, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing Tiers */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our company rebranding services are customized to meet your specific
          needs. Below are our starting prices:
        </p>
        {companySpecificServices.map((service) => {
          if (service.name === "Company Rebranding") {
            return (
              <ul className="list-disc pl-6 space-y-2" key={service.name}>
                {service.pricingTiers.map((pricing, index) => (
                  <li key={index}>
                    <span className="font-bold text-secondary">
                      {pricing.name}:
                    </span>
                    <span className="pl-2">{pricing.info}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </section>

      {/* Get Started */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to transform your company's brand?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and a customized quote.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default CompanyRebranding;
