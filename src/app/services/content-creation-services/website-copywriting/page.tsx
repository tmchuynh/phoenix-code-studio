"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { websiteCopywritingData } from "@/lib/content-constants";
import { contentCreationServices } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const WebsiteCopywritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Website Copywriting Services</h1>

      <p>
        Your website is your digital storefront, and the words you choose can
        make all the difference in attracting, engaging, and converting
        visitors. Our Website Copywriting Services are designed to deliver
        high-impact, audience-focused, and search-engine-optimized content that
        tells your brand’s story while compelling users to take action. Whether
        you need persuasive homepage copy, engaging service descriptions,
        compelling CTAs (calls-to-action), product pages, blog content, or
        landing pages, we craft content that resonates with your audience and
        aligns with your business objectives.
      </p>

      <h2>Why Professional Website Copywriting Matters</h2>

      <p>
        In today's digital world, having a visually appealing website isn’t
        enough—you need strong, strategic copy that speaks directly to your
        target audience. Well-crafted website content should:
      </p>

      <ul>
        <li>
          Enhance SEO & Visibility: Optimized content improves search engine
          rankings, making your site easier to find.
        </li>
        <li>
          Drive Engagement & Conversions: Persuasive, value-driven messaging
          encourages visitors to take action.
        </li>
        <li>
          Establish Authority & Credibility: Clear, informative copy positions
          your brand as an industry expert.
        </li>
        <li>
          Improve User Experience: Structured, scannable content makes
          navigation effortless and enjoyable.
        </li>
        <li>
          Build Trust & Customer Relationships: Authentic storytelling fosters
          stronger connections with your audience.
        </li>
      </ul>

      <h2>Our Website Copywriting Approach</h2>

      <h3>Research & Strategy Development</h3>
      <p>
        We dive deep into your business, target audience, and industry trends to
        understand what motivates your ideal customers. Our copywriters conduct
        thorough keyword research and competitor analysis to create a copy
        strategy that maximizes SEO and engagement.
      </p>

      <h3>Brand Voice & Messaging Alignment</h3>
      <p>
        Your brand is unique, and so is your voice. Whether you want your
        messaging to be authoritative, friendly, professional, or playful, we
        ensure that your website copy aligns with your brand’s personality,
        tone, and mission for a seamless and cohesive user experience.
      </p>

      <h3>Persuasive & Conversion-Focused Copywriting</h3>
      <p>
        We craft compelling, benefit-driven content that grabs attention,
        highlights your unique value propositions, and persuades visitors to
        take action—whether that’s making a purchase, booking a consultation,
        subscribing to a newsletter, or reaching out for more information.
      </p>

      <h3>SEO Optimization & Keyword Integration</h3>
      <p>
        SEO is the backbone of high-performing web content. We seamlessly
        integrate targeted keywords, meta descriptions, and structured
        formatting to boost your search engine rankings, increase organic
        traffic, and improve discoverability without compromising readability or
        engagement.
      </p>

      <h3>User Experience & Readability Enhancements</h3>
      <p>
        Web users skim content, so we structure copy for maximum readability
        with:
      </p>
      <ul>
        <li>Short, digestible paragraphs</li>
        <li>Bullet points and subheadings for easy scanning</li>
        <li>Strategic CTA placement to guide users toward action</li>
        <li>Conversational yet professional tone to maintain engagement</li>
      </ul>

      <h3>Revisions & Refinement for Perfection</h3>
      <p>
        We believe in collaboration and refinement. Your feedback is invaluable,
        and we fine-tune the content to ensure it meets your expectations and
        business objectives.
      </p>

      <h2>Who Can Benefit from Our Website Copywriting Services?</h2>

      <ul>
        <li>
          Small businesses & startups looking to establish a strong online
          presence.
        </li>
        <li>
          E-commerce brands needing persuasive product descriptions and landing
          pages.
        </li>
        <li>
          Service-based businesses requiring clear, engaging service pages.
        </li>
        <li>
          B2B & SaaS companies seeking technical yet compelling messaging.
        </li>
        <li>
          Personal brands, influencers, and thought leaders aiming to connect
          with their audience.
        </li>
      </ul>

      <h2>Our Website Copywriting Services Include:</h2>

      <ul>
        <li>
          Homepage Copy – First impressions matter! We craft powerful
          introductions that engage and convert.
        </li>
        <li>
          Service & Product Descriptions – Highlight your offerings in a way
          that resonates with potential customers.
        </li>
        <li>
          Landing Pages & Sales Pages – Designed for lead generation and
          conversions.
        </li>
        <li>
          About Us Pages – Tell your brand story in a way that builds trust and
          credibility.
        </li>
        <li>
          Blog Posts & Articles – Drive traffic and establish thought leadership
          with informative content.
        </li>
        <li>
          Call-to-Action (CTA) Optimization – Ensure every page has a strong,
          compelling CTA to boost conversions.
        </li>
      </ul>

      <h2>Why Choose Us?</h2>

      <ul>
        <li>
          SEO-Optimized for Higher Rankings – Get found by the right audience
          through keyword-rich, structured content.
        </li>
        <li>
          Tailored to Your Brand & Audience – Every word is crafted to fit your
          unique tone and business goals.
        </li>
        <li>
          Engaging, Action-Driven Copy – We don’t just write—we inspire action
          and increase conversions.
        </li>
        <li>
          Data-Backed Strategies – Research-based content that aligns with
          industry trends and consumer behavior.
        </li>
        <li>
          Unlimited Revisions – We refine your copy until it’s perfect and
          aligned with your vision.
        </li>
      </ul>

      {/* Dynamic Rendering for Content Sections */}
      {websiteCopywritingData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="font-bold text-secondary">{item.title}:</span>
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
          Pricing is based on the word count, complexity, and SEO requirements
          of your blog content.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Engaging, SEO-Optimized Website Content That Converts" && (
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
        <p className="my-4">
          Ready to transform your website with engaging and high-converting
          copy?
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

export default WebsiteCopywritingServices;
