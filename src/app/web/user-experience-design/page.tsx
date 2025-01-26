"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { websiteServices } from "@/lib/constants";

const UXDesignServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        User Experience (UX) Design Services
      </h1>
      {websiteServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "User Experience Design" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why UX Design Matters</h2>
        <p className="my-4">
          Exceptional UX design ensures that your users can easily navigate,
          interact with, and find value in your product. It focuses on
          understanding user behavior, needs, and pain points to create seamless
          and engaging experiences.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-tertiary">Improved Usability:</span>{" "}
            Simplify navigation and interactions for users.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Enhanced Satisfaction:
            </span>{" "}
            Boost user engagement by solving real problems effectively.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Higher Conversion Rates:
            </span>{" "}
            Optimize your product to guide users toward desired actions.
          </li>
          <li>
            <span className="font-bold text-tertiary">Reduced Churn:</span>{" "}
            Create experiences that keep users coming back.
          </li>
          <li>
            <span className="font-bold text-tertiary">
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
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-tertiary">User Research:</span>{" "}
            Conducting interviews, surveys, and usability testing to understand
            user needs and behaviors.
          </li>
          <li>
            <span className="font-bold text-tertiary">Journey Mapping:</span>{" "}
            Visualizing user workflows and identifying pain points.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Wireframing & Prototyping:
            </span>{" "}
            Crafting low and high-fidelity designs to test and iterate on
            concepts.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Information Architecture:
            </span>{" "}
            Structuring content and navigation for clarity and ease of use.
          </li>
          <li>
            <span className="font-bold text-tertiary">Usability Testing:</span>{" "}
            Gathering feedback to refine designs and improve user satisfaction.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understanding your goals, audience, and challenges through research
            and analysis.
          </li>
          <li>
            <span className="font-bold text-tertiary">User Research:</span>{" "}
            Gathering insights from users to guide design decisions.
          </li>
          <li>
            <span className="font-bold text-tertiary">Ideation:</span>{" "}
            Brainstorming solutions and creating user flows, wireframes, and
            prototypes.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Testing & Validation:
            </span>{" "}
            Conducting usability testing to validate assumptions and refine
            designs.
          </li>
          <li>
            <span className="font-bold text-tertiary">Delivery:</span> Providing
            finalized designs with detailed documentation for development teams.
          </li>
          <li>
            <span className="font-bold text-tertiary">
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
        <ul className="list-disc pl-6 space-y-2">
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
        {websiteServices.map((service) => {
          return (
            <>
              {service.name === "User Experience Design" && (
                <ul className="list-disc pl-6 space-y-2">
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
