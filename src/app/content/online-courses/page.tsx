"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  onlineCourseBenefits,
  onlineCourseServices,
  onlineCourseProcessSteps,
  onlineCourseTools,
} from "@/lib/content-constants";

const OnlineCoursesServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Online Courses Development Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Online Courses" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Online Courses Matter</h2>
        <p className="my-4">
          Online courses are an impactful tool for sharing knowledge,
          establishing authority, and creating scalable, engaging learning
          experiences. Whether you're teaching valuable skills, offering
          professional development, or sharing industry-specific expertise, a
          well-designed course helps you connect with your audience and deliver
          real value. High-quality courses not only set you apart but also
          create opportunities for revenue generation, audience growth, and
          long-term impact, making them an essential part of modern education
          and training.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {onlineCourseBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Online Courses Services</h2>
        <p className="my-4">
          We offer comprehensive, end-to-end solutions for designing and
          developing impactful online courses. From initial concept creation and
          curriculum design to content development and platform integration, we
          handle every step to ensure your course delivers value and engages
          your audience. Our team combines instructional design expertise with
          interactive multimedia elements to create courses that are visually
          appealing, easy to follow, and aligned with your objectives. Whether
          for skill-building, professional development, or educational programs,
          our solutions are tailored to help you create memorable and effective
          learning experiences.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {onlineCourseServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <p>
          Our online course creation process is designed to deliver impactful
          and engaging learning experiences. We begin with a detailed
          consultation to understand your goals, target audience, and key
          learning objectives. Next, we outline the course structure and develop
          a curriculum that ensures a logical flow of content. Our team then
          creates high-quality, interactive course materials, including videos,
          quizzes, presentations, and other multimedia elements. After rigorous
          testing to ensure functionality and user engagement, we integrate the
          course into your chosen platform, whether it's a Learning Management
          System (LMS) or a custom solution. Finally, we assist with launch and
          provide ongoing support to optimize your course's performance.
        </p>
        <p className="my-4">
          Typical online course creation projects take 6–12 weeks, depending on
          the complexity and scope of the curriculum and materials.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {onlineCourseProcessSteps.map((step) => (
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
          We use industry-leading tools to create engaging and professional
          online courses:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {onlineCourseTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing is based on the course length, complexity, and multimedia
          requirements.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Online Courses" && (
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
          Ready to launch your online course and share your expertise?{" "}
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

export default OnlineCoursesServices;
