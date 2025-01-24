"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";

const BrochuresAndFlyersServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Brochures and Flyers Design Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Brochures and/or Flyers" ? (
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
          Why Brochures and Flyers Matter
        </h2>
        <p className="my-4">
          Brochures and flyers are powerful marketing tools to showcase your
          brand, products, or services. They are perfect for events, promotions,
          and campaigns, leaving a lasting impression on your audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Highlight Your Offerings:
            </span>{" "}
            Showcase your products or services clearly and concisely.
          </li>
          <li>
            <span className="font-bold text-tertiary">Drive Engagement:</span>{" "}
            Capture attention with visually appealing designs.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Cost-Effective Marketing:
            </span>{" "}
            Distribute at events, in-store, or through mail to maximize reach.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Build Brand Identity:
            </span>{" "}
            Reinforce your brand’s values, colors, and messaging.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Brochures and Flyers Services
        </h2>
        <p className="my-4">
          We provide end-to-end solutions for designing professional,
          eye-catching brochures and flyers.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Custom Brochure Design:
            </span>{" "}
            Tailored designs in bi-fold, tri-fold, or multi-page formats.
          </li>
          <li>
            <span className="font-bold text-tertiary">Flyer Design:</span>{" "}
            One-page flyers optimized for promotions, events, or campaigns.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Content Development:
            </span>{" "}
            Engaging copywriting and content structuring for maximum impact.
          </li>
          <li>
            <span className="font-bold text-tertiary">Brand Integration:</span>{" "}
            Incorporate your brand’s colors, logo, and tone for a cohesive look.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Print-Ready Formats:
            </span>{" "}
            Deliver print-ready files (PDF, AI, or EPS) with high-quality
            resolution.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understand your goals, target audience, and branding requirements.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Concept Development:
            </span>{" "}
            Create initial design concepts based on your preferences.
          </li>
          <li>
            <span className="font-bold text-tertiary">Design Execution:</span>{" "}
            Develop visually appealing layouts with content and images.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Review and Revisions:
            </span>{" "}
            Collaborate with you to refine the design and ensure satisfaction.
          </li>
          <li>
            <span className="font-bold text-tertiary">Final Delivery:</span>{" "}
            Provide high-resolution, print-ready files in your preferred format.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Most
          projects are completed within 3–7 business days, depending on
          complexity.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We utilize industry-leading tools to ensure professional-grade
          designs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Adobe Illustrator for vector-based designs</li>
          <li>Adobe InDesign for multi-page layouts</li>
          <li>Canva for quick, high-quality designs</li>
          <li>Grammarly for proofreading and content quality</li>
          <li>Figma for collaborative design work</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the design complexity, format, and number of
          revisions.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Brochures and/or Flyers" && (
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
          Ready to create stunning brochures and flyers that captivate your
          audience?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and quote.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default BrochuresAndFlyersServices;
