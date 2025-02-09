"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { uxDesignData } from "@/lib/web-constants";
import { websiteServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const UXDesignServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>User Experience (UX) Design Services</h1>
      <p>
        Our User Experience (UX) Design Services focus on creating intuitive,
        seamless, and engaging experiences for your users. We prioritize user
        needs, behaviors, and emotions to design interfaces that not only look
        great but also function flawlessly. By conducting thorough user
        research, creating wireframes, and prototyping, we ensure that every
        interaction is optimized for ease of use and satisfaction. Whether
        you’re building a website, mobile app, or software product, our UX
        design process is dedicated to delivering user-centric solutions that
        drive engagement and enhance your brand’s reputation.
      </p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why UX Design Matters
        </h2>
        <p className="my-4">
          UX design is more than just aesthetics—it’s about creating experiences
          that are intuitive, engaging, and accessible. Our UX services focus on
          understanding user behavior and ensuring seamless interactions for
          your audience.
        </p>
      </section>

      {/* Dynamic Rendering for Content Sections */}
      {uxDesignData.map((section, index) => (
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

      {/* Pricing Tiers */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing Tiers
        </h2>
        <p className="my-4">
          Our company rebranding services are{" "}
          <strong>tailored to your needs</strong>. Below are our pricing tiers:
        </p>
        <ul>
          {websiteServices.map(
            (service) =>
              service.name ===
                "User-Centered Interface Design for Seamless Experiences" &&
              service.pricingTiers.map((tiers, index) => (
                <li key={index}>
                  <span className="font-bold text-secondary">
                    {tiers.name}:
                  </span>{" "}
                  {tiers.info}
                </li>
              ))
          )}
        </ul>
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to elevate your user experience and increase engagement?{" "}
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

export default UXDesignServices;
