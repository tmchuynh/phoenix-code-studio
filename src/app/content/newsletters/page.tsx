"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const NewsletterServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Newsletter Writing and Design Services
      </h1>
      <p className="text-center text-lg my-4">
        Engage your audience and build lasting connections with professional,
        captivating newsletters.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Newsletters Matter</h2>
        <p className="my-4">
          Newsletters are a powerful tool for nurturing relationships, sharing
          updates, and driving traffic to your business. Whether for customers,
          employees, or stakeholders, a well-crafted newsletter keeps your
          audience informed and engaged.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Strengthen Engagement:
            </span>{" "}
            Stay top-of-mind with regular, valuable content.
          </li>
          <li>
            <span className="font-bold text-secondary">Drive Conversions:</span>{" "}
            Use newsletters to promote products, events, or special offers.
          </li>
          <li>
            <span className="font-bold text-secondary">Build Trust:</span> Share
            industry insights and updates to establish credibility.
          </li>
          <li>
            <span className="font-bold text-secondary">Retain Customers:</span>{" "}
            Nurture your audience with consistent, personalized communication.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Newsletter Services</h2>
        <p className="my-4">
          We offer end-to-end newsletter solutions, from strategy to delivery.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Content Strategy:</span>{" "}
            Develop a content calendar tailored to your goals and audience.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Writing and Editing:
            </span>{" "}
            Craft compelling, engaging, and clear copy for your newsletters.
          </li>
          <li>
            <span className="font-bold text-secondary">Design and Layout:</span>{" "}
            Create visually appealing newsletters that reflect your brand
            identity.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Email Marketing Integration:
            </span>{" "}
            Set up and optimize newsletters for platforms like Mailchimp,
            Constant Contact, or HubSpot.
          </li>
          <li>
            <span className="font-bold text-secondary">Personalization:</span>{" "}
            Add personalized touches, such as user-specific greetings and
            tailored content.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Analytics and Optimization:
            </span>{" "}
            Track performance and refine strategies for better results.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your audience, goals, and brand voice.
          </li>
          <li>
            <span className="font-bold text-secondary">Content Planning:</span>{" "}
            Create a detailed content and publishing schedule.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Writing and Design:
            </span>{" "}
            Develop high-quality content and eye-catching layouts.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Review and Feedback:
            </span>{" "}
            Collaborate with your team to finalize the newsletter.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Delivery and Optimization:
            </span>{" "}
            Send the newsletter through your email marketing platform and
            analyze performance.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span>{" "}
          Newsletters are typically ready within 5–10 business days, depending
          on complexity and frequency.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We leverage top tools to ensure engaging, high-performing newsletters:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Mailchimp for email marketing</li>
          <li>Canva for design and visuals</li>
          <li>Adobe Creative Suite for advanced layouts</li>
          <li>Grammarly for proofreading and editing</li>
          <li>Google Analytics for performance tracking</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the frequency, length, and complexity of your
          newsletters.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Single Newsletter:</span>{" "}
            Starting at $300.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Monthly Newsletter Packages:
            </span>{" "}
            Starting at $800 per month for up to 4 newsletters.
          </li>
          <li>
            <span className="font-bold text-secondary">Custom Plans:</span>{" "}
            Tailored pricing for weekly or highly detailed newsletters.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your communication with professional newsletters?{" "}
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

export default NewsletterServices;
