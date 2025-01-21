"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const UIDesignServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">UI Design Services</h1>
      <p className="text-center text-lg my-4">
        Craft visually stunning and user-friendly interfaces that captivate and
        engage your audience.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">What We Offer</h2>
        <p className="my-4">
          Our UI design services focus on creating visually appealing and
          intuitive interfaces tailored to your brand identity and user needs.
          We blend creativity with functionality to deliver exceptional user
          experiences.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Custom UI Design:</span>{" "}
            Tailored to your brand and optimized for usability.
          </li>
          <li>
            <span className="font-bold text-secondary">Responsive Design:</span>{" "}
            Interfaces that look great on all devices, from mobile to desktop.
          </li>
          <li>
            <span className="font-bold text-secondary">Design Systems:</span>{" "}
            Comprehensive systems for consistency across your application.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Interactive Prototypes:
            </span>{" "}
            Realistic mockups to visualize and test designs before development.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Accessibility-First Approach:
            </span>{" "}
            Ensuring your designs are inclusive and meet WCAG standards.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your brand, goals, and target audience.
          </li>
          <li>
            <span className="font-bold text-secondary">Wireframing:</span>{" "}
            Create low-fidelity wireframes to define structure and layout.
          </li>
          <li>
            <span className="font-bold text-secondary">
              High-Fidelity Design:
            </span>{" "}
            Develop polished and detailed designs that reflect your vision.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Interactive Prototyping:
            </span>{" "}
            Build prototypes to simulate user interactions and gather feedback.
          </li>
          <li>
            <span className="font-bold text-secondary">Collaboration:</span>{" "}
            Work closely with developers to ensure seamless implementation.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Testing & Iteration:
            </span>{" "}
            Refine designs based on user testing and feedback.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We leverage industry-leading tools and technologies to create
          efficient, scalable, and visually appealing designs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Figma for collaborative wireframing and prototyping</li>
          <li>Adobe XD for high-fidelity design and interactive prototypes</li>
          <li>Sketch for vector-based design and interface development</li>
          <li>
            InVision for creating interactive prototypes and real-time
            collaboration
          </li>
          <li>Zeplin for seamless handoff between designers and developers</li>
          <li>Framer for advanced animations and interactive UI components</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your project’s complexity, scope,
          and features. Below are our starting prices:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Custom UI Design:</span>{" "}
            Starting at $2,000 for tailored user interfaces optimized for
            usability.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Prototyping & Design Systems:
            </span>{" "}
            Starting at $1,000 for prototyping and creating design systems for
            consistency across your application.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to create a stunning user interface for your product?{" "}
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

export default UIDesignServices;
