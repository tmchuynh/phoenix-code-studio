"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { studyGuideData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const StudyGuideCreation: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Comprehensive Study Guide Creation Services</h1>
      <p>
        Our Study Guide Creation Services are designed to support students,
        educators, and professionals in mastering complex subjects with ease. We
        develop well-structured, easy-to-follow study materials that simplify
        key concepts, enhance comprehension, and improve retention. Whether
        you’re preparing for an important exam, reinforcing subject knowledge,
        or seeking structured learning resources, our expertly crafted study
        guides provide clear explanations, summaries, and practice exercises
        tailored to your needs.
      </p>
      <p>
        We specialize in breaking down challenging topics into digestible
        sections, making learning more efficient and engaging. Our study guides
        include visual aids, step-by-step breakdowns, and interactive quizzes to
        reinforce understanding and boost confidence. Ideal for academic
        institutions, training programs, and self-paced learners, our study
        materials help users stay organized, retain critical information, and
        achieve their learning goals. Empower your learning journey with
        expertly written study guides that transform complex topics into clear,
        structured, and actionable knowledge. Whether for academic success or
        professional development, our study guides ensure you have the resources
        you need to excel.
      </p>

      {/* Dynamic Section Rendering */}
      {studyGuideData.map((section, index) => (
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
          Pricing depends on the subject, length, and level of customization
          required. We offer flexible packages to suit various needs.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Master Any Subject with Comprehensive Study Guides" && (
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
        <p>
          Ready to create study guides that simplify learning and improve
          outcomes?
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

export default StudyGuideCreation;
