"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { brandStorytellingData } from "@/lib/company-constant";

const BrandStorytellingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Brand Storytelling Services
      </h1>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Brand Storytelling Matters
        </h2>
        <p className="my-4">
          Brand storytelling is **more than marketing**—it’s about crafting a
          **compelling narrative** that resonates with your audience, builds
          trust, and creates an emotional connection. A well-crafted brand story
          **differentiates** your business in a crowded market, **clarifies your
          mission**, and leaves a **lasting impression**.
        </p>
      </section>

      {/* Dynamic Rendering for Storytelling Sections */}
      {brandStorytellingData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-balance">
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
        <p className="my-4">
          Our brand storytelling services are tailored to fit your **unique
          business goals**. Pricing varies based on project **complexity, scope,
          and content deliverables**.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-balance">
          <li>
            <span className="font-bold text-secondary">Basic Package:</span>{" "}
            Core narrative development and brand messaging.
          </li>
          <li>
            <span className="font-bold text-secondary">Advanced Package:</span>{" "}
            Multi-channel storytelling strategy, including website and marketing
            campaigns.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enterprise Package:
            </span>{" "}
            Full-scale brand storytelling, including origin stories, video
            scripts, and thought leadership content.
          </li>
        </ul>
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to craft a **powerful brand story**?{" "}
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

export default BrandStorytellingServices;
