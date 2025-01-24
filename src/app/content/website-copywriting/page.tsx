"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";

const WebsiteCopywritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Website Copywriting Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Website Copywriting" ? (
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
          Why Website Copywriting Matters
        </h2>
        <p className="my-4">
          Your website is often the first impression potential customers have of
          your brand. High-quality, targeted copy ensures you capture their
          attention, communicate your value, and guide them to take action.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">Boost Conversions:</span>{" "}
            Persuasive copy motivates visitors to take action, whether it’s
            signing up, purchasing, or contacting you.
          </li>
          <li>
            <span className="font-bold text-tertiary">Enhance SEO:</span>{" "}
            Optimized copy improves your search engine rankings and drives
            organic traffic.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Strengthen Brand Identity:
            </span>{" "}
            Communicate your unique voice and values effectively.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Improve User Experience:
            </span>{" "}
            Clear, concise copy helps visitors navigate your website with ease.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Website Copywriting Services
        </h2>
        <p className="my-4">
          We provide tailored website copywriting services to meet your business
          goals and resonate with your audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">Homepage Copy:</span>{" "}
            Captivate visitors and clearly communicate your value proposition.
          </li>
          <li>
            <span className="font-bold text-tertiary">About Page Copy:</span>{" "}
            Share your brand’s story, mission, and vision in a compelling way.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Service/Offer Page Copy:
            </span>{" "}
            Highlight your offerings with benefit-driven language that converts.
          </li>
          <li>
            <span className="font-bold text-tertiary">Landing Pages:</span>{" "}
            Create focused, high-converting pages for specific campaigns.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Product Descriptions:
            </span>{" "}
            Write engaging, SEO-friendly descriptions that showcase your
            products.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Call-to-Actions (CTAs):
            </span>{" "}
            Craft impactful CTAs that guide users toward desired actions.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understand your business, audience, and goals.
          </li>
          <li>
            <span className="font-bold text-tertiary">Research:</span> Conduct
            competitor analysis and keyword research to inform the copy.
          </li>
          <li>
            <span className="font-bold text-tertiary">Drafting:</span> Create
            clear, engaging, and optimized copy for your website.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Review and Feedback:
            </span>{" "}
            Collaborate with your team to refine the content.
          </li>
          <li>
            <span className="font-bold text-tertiary">Final Delivery:</span>{" "}
            Provide ready-to-publish copy tailored for your CMS or platform.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Project
          timelines depend on the number of pages, complexity of the content,
          and SEO requirements. Typical timelines range from 1 to 3 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use cutting-edge tools to deliver high-quality, optimized website
          copy:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>SEMRush for keyword research</li>
          <li>Grammarly for proofreading and editing</li>
          <li>Hemingway App for readability</li>
          <li>Google Analytics for performance insights</li>
          <li>Google Docs for collaboration</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the number of pages, word count, and complexity of
          the content.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Website Copywriting" && (
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
          Ready to elevate your website with powerful, engaging copy?{" "}
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

export default WebsiteCopywritingServices;
