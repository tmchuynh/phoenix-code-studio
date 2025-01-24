"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { companySpecificServices } from "@/lib/constants";

const CompanyRebranding: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Company Rebranding Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <>
            <p className="text-center text-lg my-4">
              {service.name === "Company Rebranding" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </p>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">What is Company Rebranding?</h2>
        <p className="my-4">
          Company rebranding involves refreshing or completely overhauling your
          business's image and messaging. This can include everything from your
          logo, visual identity, brand values, website, and marketing
          strategies. Our goal is to help your company stand out, communicate
          its message clearly, and build stronger connections with your
          audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Brand Identity Overhaul:
            </span>{" "}
            Revamping your visual elements, including logo, color scheme, and
            typography.
          </li>
          <li>
            <span className="font-bold text-tertiary">Messaging Strategy:</span>{" "}
            Refining or redefining your brand voice to resonate with your target
            audience.
          </li>
          <li>
            <span className="font-bold text-tertiary">Website Rebranding:</span>{" "}
            Updating or redesigning your website to reflect the new brand
            identity.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Marketing Collateral:
            </span>{" "}
            Designing updated brochures, flyers, and other marketing materials.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Internal Culture Alignment:
            </span>{" "}
            Ensuring your team and internal materials are aligned with the new
            brand identity.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span> We begin
            by understanding your current brand identity and the goals you want
            to achieve with your rebranding.
          </li>
          <li>
            <span className="font-bold text-tertiary">Research:</span> Conduct
            thorough market research, including competitor analysis and audience
            insights.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Concept Development:
            </span>{" "}
            Develop design concepts, visual identity, and messaging frameworks.
          </li>
          <li>
            <span className="font-bold text-tertiary">Implementation:</span>{" "}
            Refine the design, create new assets, and implement changes across
            your website, marketing materials, and internal communications.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Feedback & Refinement:
            </span>{" "}
            Gather feedback from stakeholders and make final refinements to
            ensure consistency.
          </li>
          <li>
            <span className="font-bold text-tertiary">Launch:</span> Roll out
            the new brand identity, including a comprehensive brand guidelines
            document.
          </li>
          <li>
            <span className="font-bold text-tertiary">Ongoing Support:</span>{" "}
            Provide continuous updates and refinement to your brand as your
            company grows.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our company rebranding services are customized to meet your specific
          needs. Below are our starting prices:
        </p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Company Rebranding" && (
                <ul className="list-disc list-inside space-y-2">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-tertiary">
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
