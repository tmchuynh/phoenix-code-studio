"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { brochuresFlyersData } from "@/lib/content-constants";
import { contentCreationServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const BrochuresAndFlyersServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Eye-Catching Brochures & Flyers That Elevate Your Brand</h1>
      <p>
        Make a lasting impact with professionally designed brochures and flyers
        that showcase your brand, products, or services with clarity and
        creativity. Our design experts craft visually compelling marketing
        materials that capture attention, communicate key messages effectively,
        and leave a memorable impression.
      </p>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Marketing Materials That Drive Action
        </h2>
        <p className="my-4">
          Whether you’re launching a new product, promoting an event, or
          increasing brand awareness, our brochures and flyers are designed to
          engage your audience and inspire action. Let’s create marketing
          materials that truly make an impact!
        </p>
      </section>

      {/* Dynamic Section Rendering */}
      {brochuresFlyersData.map((section, index) => (
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
          Pricing depends on the design complexity, format, and number of
          revisions.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Eye-Catching Brochures and Flyers That Make an Impact" && (
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
          Ready to create stunning brochures and flyers that captivate your
          audience?{" "}
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

export default BrochuresAndFlyersServices;
