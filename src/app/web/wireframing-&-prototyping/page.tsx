"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { websiteServices } from "@/lib/constants";

const WireframingPrototypingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Wireframing and Prototyping Services
      </h1>
      {websiteServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Wireframing & Prototyping" ? (
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
          Why Wireframing and Prototyping Matter
        </h2>
        <p className="my-4">
          Wireframes and prototypes are essential tools in the design process,
          helping to visualize structure, test functionality, and gather user
          feedback early. They ensure that your final product aligns with user
          expectations and business goals.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-tertiary">Clarity:</span> Define
            layouts, content hierarchy, and navigation structure clearly.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Cost-Effective Iterations:
            </span>{" "}
            Identify and fix issues early, saving time and resources.
          </li>
          <li>
            <span className="font-bold text-tertiary">Collaboration:</span>{" "}
            Enable better communication between stakeholders, designers, and
            developers.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              User-Centered Design:
            </span>{" "}
            Test designs with users to validate assumptions and improve
            functionality.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Accelerated Development:
            </span>{" "}
            Provide a clear blueprint for developers to build upon.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Wireframing and Prototyping Services
        </h2>
        <p className="my-4">
          We specialize in creating detailed wireframes and interactive
          prototypes to ensure your project starts on the right foundation.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Low-Fidelity Wireframes:
            </span>{" "}
            Quick sketches to outline content layout and navigation.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              High-Fidelity Wireframes:
            </span>{" "}
            Detailed wireframes with precise design elements for a closer
            representation of the final product.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Interactive Prototypes:
            </span>{" "}
            Clickable prototypes that simulate real user interactions.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Usability Testing Prototypes:
            </span>{" "}
            Prototypes optimized for testing with users to gather actionable
            feedback.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Hand-Off Ready Designs:
            </span>{" "}
            Wireframes and prototypes complete with annotations for developers.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span> Gather
            requirements, understand user needs, and define project goals.
          </li>
          <li>
            <span className="font-bold text-tertiary">Sketching:</span> Create
            rough wireframes to visualize ideas and structure.
          </li>
          <li>
            <span className="font-bold text-tertiary">Wireframing:</span> Build
            detailed wireframes to establish layouts and content placement.
          </li>
          <li>
            <span className="font-bold text-tertiary">Prototyping:</span>{" "}
            Develop interactive prototypes to simulate user interactions and
            workflows.
          </li>
          <li>
            <span className="font-bold text-tertiary">Testing:</span> Conduct
            usability testing to validate the design and gather feedback.
          </li>
          <li>
            <span className="font-bold text-tertiary">Iteration:</span> Refine
            designs based on insights from testing and feedback.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We utilize industry-standard tools and technologies to create
          high-quality wireframes and prototypes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Figma for collaborative wireframing and prototyping</li>
          <li>Adobe XD for high-fidelity design and interactive prototypes</li>
          <li>Sketch for vector-based design and interface development</li>
          <li>
            InVision for creating interactive prototypes and real-time
            collaboration
          </li>
          <li>Axure RP for detailed, functional wireframes and prototypes</li>
          <li>Framer for advanced animations and interactive UI components</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our wireframing and prototyping services are tailored to meet your
          needs. Pricing depends on the complexity and scope of the project:
        </p>
        {websiteServices.map((service) => {
          return (
            <>
              {service.name === "Wireframing & Prototyping" && (
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
          Ready to bring your ideas to life with professional wireframing and
          prototyping?{" "}
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

export default WireframingPrototypingServices;
