"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";

const TutorialCreationServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Tutorial Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Tutorial Creation" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Tutorials Matter</h2>
        <p className="my-4">
          Tutorials are a powerful way to guide users, simplify complex tasks,
          and enhance learning experiences. Whether for software, hardware, or
          specific skills, professionally crafted tutorials build trust and
          ensure a seamless user experience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Boost Understanding:
            </span>{" "}
            Break down complex processes into easy-to-follow steps.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Increase Engagement:
            </span>{" "}
            Interactive and visual tutorials keep users interested and informed.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Reduce Support Costs:
            </span>{" "}
            Enable users to troubleshoot and learn independently.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Build Brand Authority:
            </span>{" "}
            Showcase your expertise and dedication to customer success.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Our Tutorial Creation Services
        </h2>
        <p className="my-4">
          We specialize in creating comprehensive and user-friendly tutorials
          tailored to your audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">Video Tutorials:</span>{" "}
            High-quality, step-by-step videos with voiceovers and animations.
          </li>
          <li>
            <span className="font-bold text-tertiary">Written Tutorials:</span>{" "}
            Detailed, easy-to-read guides with supporting visuals.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Interactive Tutorials:
            </span>{" "}
            Clickable, self-guided tutorials for software and web applications.
          </li>
          <li>
            <span className="font-bold text-tertiary">Quick Start Guides:</span>{" "}
            Concise instructions to help users get started immediately.
          </li>
          <li>
            <span className="font-bold text-tertiary">Custom Formats:</span>{" "}
            Tutorials tailored to your platform, such as PDFs, HTML, or LMS
            integration.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understand your objectives, target audience, and tutorial
            requirements.
          </li>
          <li>
            <span className="font-bold text-tertiary">Planning:</span> Develop a
            clear structure and outline for the tutorial.
          </li>
          <li>
            <span className="font-bold text-tertiary">Content Creation:</span>{" "}
            Create detailed, step-by-step instructions with visuals or videos.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Review and Feedback:
            </span>{" "}
            Refine content based on your input to ensure accuracy and clarity.
          </li>
          <li>
            <span className="font-bold text-tertiary">Final Delivery:</span>{" "}
            Provide the tutorial in your preferred format, optimized for your
            platform.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Most
          tutorials are completed within 1–3 weeks, depending on complexity and
          format.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-standard tools to create engaging and professional
          tutorials:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Adobe Premiere Pro for video editing</li>
          <li>Snagit for annotated screenshots</li>
          <li>Figma for visual content design</li>
          <li>Articulate Storyline for interactive tutorials</li>
          <li>Grammarly for proofreading written tutorials</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the type, length, and complexity of the tutorial.
          We offer flexible options to meet your needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Tutorial Creation" && (
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
          Ready to create tutorials that educate and engage your audience?{" "}
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

export default TutorialCreationServices;
