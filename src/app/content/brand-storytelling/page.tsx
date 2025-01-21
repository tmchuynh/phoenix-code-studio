"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const BrandStorytellingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Brand Storytelling Services
      </h1>
      <p className="text-center text-lg my-4">
        Craft compelling stories that resonate with your audience and define
        your brand’s identity.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Brand Storytelling Matters
        </h2>
        <p className="my-4">
          A powerful brand story sets you apart, connects with your audience on
          a deeper level, and creates a memorable impression. It’s not just
          about what you do; it’s about why you do it and the journey that
          defines your brand.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Emotional Connection:
            </span>{" "}
            Stories evoke emotions, building trust and loyalty with your
            audience.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Clarity and Purpose:
            </span>{" "}
            Clearly communicate your mission, vision, and values.
          </li>
          <li>
            <span className="font-bold text-secondary">Differentiation:</span>{" "}
            Stand out in a crowded market with a unique and authentic narrative.
          </li>
          <li>
            <span className="font-bold text-secondary">Memorability:</span>{" "}
            Create a lasting impression that resonates with your audience.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Brand Storytelling Services
        </h2>
        <p className="my-4">
          We specialize in creating meaningful narratives that reflect your
          brand’s essence and connect with your audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Core Narrative Development:
            </span>{" "}
            Define your brand’s purpose, vision, and mission in a compelling
            story.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Customer-Centric Storytelling:
            </span>{" "}
            Highlight how your brand solves problems and creates value for
            customers.
          </li>
          <li>
            <span className="font-bold text-secondary">Origin Stories:</span>{" "}
            Share the history, inspiration, and journey behind your brand.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Value Proposition Stories:
            </span>{" "}
            Communicate the unique benefits of your offerings.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Social Media Narratives:
            </span>{" "}
            Adapt your brand story for platforms like Instagram, Twitter, and
            LinkedIn.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your brand, values, and target audience.
          </li>
          <li>
            <span className="font-bold text-secondary">Story Development:</span>{" "}
            Craft a narrative that aligns with your mission and resonates with
            your audience.
          </li>
          <li>
            <span className="font-bold text-secondary">Content Creation:</span>{" "}
            Develop engaging content formats to communicate your story.
          </li>
          <li>
            <span className="font-bold text-secondary">Delivery:</span> Ensure
            your brand story is effectively shared across platforms and
            channels.
          </li>
          <li>
            <span className="font-bold text-secondary">Refinement:</span>{" "}
            Iterate based on feedback and evolving audience needs.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> The
          timeline for brand storytelling projects depends on the complexity,
          scope, and desired channels. Most projects are completed within 2–6
          weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our brand storytelling services are tailored to fit your specific
          goals. Pricing is based on the project’s complexity, length, and
          deliverables.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Core Narrative Development:
            </span>{" "}
            Starting at $2,500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Social Media Storytelling Packages:
            </span>{" "}
            Starting at $1,500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Comprehensive Storytelling Strategy:
            </span>{" "}
            Starting at $5,000.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to tell your story and define your brand?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
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
