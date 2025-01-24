"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";

const ProductGuidesManualsServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Product Guides and Manuals Writing Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Product Guides/Manuals" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Product Guides and Manuals Matter
        </h2>
        <p className="my-4">
          Clear, concise, and user-friendly product guides and manuals are
          essential for improving customer satisfaction and reducing support
          costs. Whether for hardware, software, or consumer products,
          professionally written manuals ensure users understand and maximize
          your product's potential.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Enhance User Experience:
            </span>{" "}
            Help customers navigate and utilize your product effectively.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Reduce Support Costs:
            </span>{" "}
            Minimize user errors and inquiries with clear documentation.
          </li>
          <li>
            <span className="font-bold text-tertiary">Build Trust:</span> Show
            professionalism and attention to detail through high-quality guides.
          </li>
          <li>
            <span className="font-bold text-tertiary">Ensure Compliance:</span>{" "}
            Meet industry and regulatory documentation standards.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Product Guides and Manuals Services
        </h2>
        <p className="my-4">
          We specialize in creating detailed, easy-to-follow documentation
          tailored to your product and audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">User Manuals:</span>{" "}
            Step-by-step instructions for setup, usage, and troubleshooting.
          </li>
          <li>
            <span className="font-bold text-tertiary">Quick Start Guides:</span>{" "}
            Concise, easy-to-digest instructions for rapid onboarding.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Technical Documentation:
            </span>{" "}
            In-depth, system-level documentation for technical users and
            developers.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              FAQs and Troubleshooting Guides:
            </span>{" "}
            Address common issues with clear, practical solutions.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Assembly and Installation Manuals:
            </span>{" "}
            Visual and written instructions for product assembly or
            installation.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Regulatory and Safety Manuals:
            </span>{" "}
            Ensure compliance with safety and industry standards.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understand your product, audience, and documentation requirements.
          </li>
          <li>
            <span className="font-bold text-tertiary">Content Planning:</span>{" "}
            Outline the structure and key elements of the guide or manual.
          </li>
          <li>
            <span className="font-bold text-tertiary">Content Creation:</span>{" "}
            Write clear, concise, and accurate content with supporting visuals.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Design and Formatting:
            </span>{" "}
            Ensure the document is visually appealing and aligned with your
            branding.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Review and Feedback:
            </span>{" "}
            Collaborate with your team to refine and finalize the content.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Delivery and Updates:
            </span>{" "}
            Provide the manual in multiple formats (PDF, print-ready, HTML) and
            offer ongoing update support.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Project
          timelines depend on the manual's length, complexity, and audience.
          Typical projects take 2–6 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We leverage industry-leading tools to create high-quality product
          guides and manuals:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>MadCap Flare for structured documentation</li>
          <li>Adobe InDesign for professional layouts</li>
          <li>Microsoft Word for content creation</li>
          <li>Grammarly for proofreading and editing</li>
          <li>Canva for custom graphics and visuals</li>
          <li>Snagit for annotated screenshots</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is determined by the scope, length, and technical complexity
          of the manual.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Product Guides/Manuals" && (
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
          Ready to create clear, professional product guides and manuals?{" "}
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

export default ProductGuidesManualsServices;
