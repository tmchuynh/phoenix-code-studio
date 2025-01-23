"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const UXDesignServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        User Experience (UX) Design Services
      </h1>
      <p className="text-center text-lg my-4">
        Delivering intuitive, user-friendly, and engaging experiences to delight
        your users and drive results.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why UX Design Matters</h2>
        <p className="my-4">
          Exceptional UX design ensures that your users can easily navigate,
          interact with, and find value in your product. It focuses on
          understanding user behavior, needs, and pain points to create seamless
          and engaging experiences.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Improved Usability:
            </span>{" "}
            Simplify navigation and interactions for users.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enhanced Satisfaction:
            </span>{" "}
            Boost user engagement by solving real problems effectively.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Higher Conversion Rates:
            </span>{" "}
            Optimize your product to guide users toward desired actions.
          </li>
          <li>
            <span className="font-bold text-secondary">Reduced Churn:</span>{" "}
            Create experiences that keep users coming back.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Accessibility-First Approach:
            </span>{" "}
            Ensure inclusivity for users of all abilities.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our UX Design Services</h2>
        <p className="my-4">
          Our comprehensive UX design services are tailored to your product and
          audience, ensuring delightful user experiences.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">User Research:</span>{" "}
            Conducting interviews, surveys, and usability testing to understand
            user needs and behaviors.
          </li>
          <li>
            <span className="font-bold text-secondary">Journey Mapping:</span>{" "}
            Visualizing user workflows and identifying pain points.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Wireframing & Prototyping:
            </span>{" "}
            Crafting low and high-fidelity designs to test and iterate on
            concepts.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Information Architecture:
            </span>{" "}
            Structuring content and navigation for clarity and ease of use.
          </li>
          <li>
            <span className="font-bold text-secondary">Usability Testing:</span>{" "}
            Gathering feedback to refine designs and improve user satisfaction.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understanding your goals, audience, and challenges through research
            and analysis.
          </li>
          <li>
            <span className="font-bold text-secondary">User Research:</span>{" "}
            Gathering insights from users to guide design decisions.
          </li>
          <li>
            <span className="font-bold text-secondary">Ideation:</span>{" "}
            Brainstorming solutions and creating user flows, wireframes, and
            prototypes.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Testing & Validation:
            </span>{" "}
            Conducting usability testing to validate assumptions and refine
            designs.
          </li>
          <li>
            <span className="font-bold text-secondary">Delivery:</span>{" "}
            Providing finalized designs with detailed documentation for
            development teams.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Iteration & Support:
            </span>{" "}
            Continuously improving the user experience based on feedback and
            evolving needs.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We leverage industry-leading tools and technologies to ensure
          top-notch UX design:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Figma for wireframes and prototyping</li>
          <li>Adobe XD for high-fidelity designs</li>
          <li>InVision for interactive prototypes and collaboration</li>
          <li>Maze for usability testing and user feedback</li>
          <li>
            Optimal Workshop for information architecture and card sorting
          </li>
          <li>Hotjar for tracking user behavior and engagement</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your product’s complexity,
          features, and scope:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              User Research & Prototyping:
            </span>{" "}
            Starting at $3,500 for research, interviews, and prototyping.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Comprehensive UX Design:
            </span>{" "}
            Starting at $5,000 for end-to-end UX design, including user
            research, prototyping, testing, and delivery.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your product with outstanding user experience design?{" "}
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

export default UXDesignServices;
