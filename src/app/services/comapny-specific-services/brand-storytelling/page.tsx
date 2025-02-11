"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { brandStorytellingData } from "@/lib/company-constant";
import { companySpecificServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const BrandStorytellingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Unforgettable Brand Storytelling That Captivates & Converts</h1>
      <p>
        Your brand is more than just a business—it’s a compelling story waiting
        to be told. In today’s digital landscape, where customers crave
        authenticity and connection, strategic brand storytelling is the key to
        building loyalty, trust, and long-term success. Our Brand Storytelling
        Services are designed to craft a powerful narrative that resonates with
        your audience, strengthens your brand identity, and drives engagement .
        Through emotion-driven messaging, we help you transform your vision,
        values, and mission into an unforgettable brand story that
        differentiates you in the marketplace.
      </p>

      <p>
        From origin stories that showcase your journey to value-driven messaging
        that highlights your impact, we create compelling content that leaves a
        lasting impression. Whether you're launching a new brand, refining your
        existing message, or seeking to connect with your customers on a deeper
        level, we craft unique storytelling strategies that inspire, influence,
        and convert.
      </p>

      <section className="my-8">
        <h2>Why Brand Storytelling is the Key to Your Success</h2>

        <p>
          Brand storytelling is more than just a marketing tool—it’s the
          emotional foundation that differentiates your business from the
          competition. A well-crafted story helps you:
        </p>

        <ul>
          <li>
            Build brand trust & authenticity: Customers are drawn to brands with
            relatable and meaningful stories.
          </li>
          <li>
            Strengthen customer loyalty: A compelling story creates an emotional
            connection that keeps audiences engaged.
          </li>
          <li>
            Increase brand awareness & recall: Stories are more memorable than
            facts, helping your brand stand out.
          </li>
          <li>
            Enhance engagement & conversions: Emotionally resonant content
            encourages action and brand advocacy.
          </li>
          <li>
            Communicate your mission & values effectively: A strong brand story
            reinforces your core beliefs and company purpose.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2>Our Approach to Brand Storytelling</h2>

        <h3>1. Discover & Define Your Unique Brand Story</h3>
        <p>
          We begin by understanding your business, mission, and target audience
          . Through research and brand discovery sessions, we identify the key
          elements of your story that align with your brand’s voice and customer
          expectations.
        </p>

        <h3>2. Craft Emotionally Engaging Narratives</h3>
        <p>
          Using powerful storytelling techniques, we develop compelling content
          that connects with your audience on ahuman level. Whether it’s your{" "}
          brand’s origin story, customer success stories, or value-driven
          messaging , we ensure every piece is engaging and impactful.
        </p>

        <h3>3. Integrate Your Story Across Multiple Channels</h3>
        <p>
          A strong brand story should be present across all platforms, from your{" "}
          website and social media to marketing campaigns and product
          descriptions. We optimize your messaging for maximum impact across all
          touchpoints.
        </p>

        <h3>4. Drive Meaningful Engagement & Conversions</h3>
        <p>
          Our storytelling strategies are designed to increase audience
          engagement, build brand credibility, and drive conversions . By
          creating relatable, authentic, and inspiring content, we help turn
          visitors into loyal customers.
        </p>
      </section>

      {/* Dynamic Rendering for Storytelling Sections */}
      {brandStorytellingData.map((section, index) => (
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
          Our company rebranding services are tailored to your needs. Below are
          our pricing tiers:
        </p>
        <ul>
          {companySpecificServices.map(
            (service) =>
              service.name ===
                "Authentic Brand Storytelling That Captivates & Connects" &&
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
          Let’s Bring Your Brand Story to Life
        </h2>
        <p>
          Your brand’s story is its most powerful asset. It’s what makes your
          business unique, memorable, and emotionally impactful. Let us help you{" "}
          craft a brand story that captivates, inspires, and converts . Whether
          you’re launching a startup or revitalizing an established brand, our
          storytelling expertise ensures your message leaves a lasting impact.
        </p>
        <p>
          Your story is your competitive edge. Make it unforgettable. Ready to
          craft a powerful brand story?{" "}
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
