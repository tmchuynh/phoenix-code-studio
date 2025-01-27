"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  studyGuideCreationBenefits,
  studyGuideCreationServices,
  studyGuideCreationProcessSteps,
  toolsForStudyGuideCreation,
} from "@/lib/content-constants";

const StudyGuideCreation: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Study Guide Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Study Guide Creation" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Study Guides Matter</h2>
        <p className="my-4">
          Study guides are invaluable resources for organizing information,
          reinforcing learning, and boosting academic performance. Whether
          tailored for students, professionals, or educators, professionally
          crafted study guides break down complex concepts into digestible and
          easy-to-understand formats. By providing structured content, clear
          explanations, and effective learning strategies, study guides help
          users focus on key topics and improve retention. These tools are
          essential for building confidence, enhancing comprehension, and
          achieving success in any learning environment.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {studyGuideCreationBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Study Guide Services</h2>
        <p className="my-4">
          We design customized study guides tailored to meet specific learning
          objectives and the unique needs of your audience. By focusing on
          clarity, organization, and accessibility, our study guides break down
          complex topics into manageable sections, making them easy to
          understand and retain. Whether for academic purposes, professional
          certification, or educational training, we create resources that align
          with your goals and enhance the learning experience. Each guide is
          carefully crafted to support effective study habits, reinforce key
          concepts, and empower learners to achieve their full potential.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {studyGuideCreationServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>{" "}
        <p>
          Our study guide creation process is designed to deliver clear,
          focused, and effective learning materials. We begin with a
          consultation to understand your learning objectives, audience, and
          subject matter. Next, we outline the content, ensuring it is
          well-structured and aligned with your goals. Our team develops
          concise, easy-to-follow materials, incorporating visuals, summaries,
          and learning aids to enhance comprehension and retention. After
          rigorous review and editing, we finalize the study guide, ensuring it
          meets quality standards and is optimized for your chosen format,
          whether digital or print. Throughout the process, we collaborate with
          you to ensure the guide fully supports your audience’s needs.
        </p>
        <p className="my-4">
          Typical study guide creation projects take 2–4 weeks, depending on the
          complexity of the subject and the scope of the content.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {studyGuideCreationProcessSteps.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-leading tools to create professional and engaging
          study guides:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsForStudyGuideCreation.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the subject, length, and level of customization
          required. We offer flexible packages to suit various needs.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Study Guide Creation" && (
                <ul className="list-disc pl-6 space-y-2">
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
          );
        })}
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to create study guides that simplify learning and improve
          outcomes?{" "}
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

export default StudyGuideCreation;
