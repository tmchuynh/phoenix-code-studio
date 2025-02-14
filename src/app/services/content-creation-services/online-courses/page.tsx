"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { onlineCourseData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const OnlineCoursesServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Transform Learning with Engaging Online Courses</h1>
      <p>
        Our Online Course Development Services provide everything you need to
        create impactful, interactive, and engaging learning experiences.
        Whether you’re developing educational courses, corporate training
        programs, or membership-based e-learning content, we ensure that your
        courses are structured for maximum knowledge retention and engagement.
        From course planning and content development to multimedia integration
        and interactive assessments, we craft tailored solutions that align with
        your learning objectives. We specialize in designing user-friendly
        interfaces, incorporating video lessons, quizzes, and gamified elements
        that enhance the learning journey.
      </p>
      <p>
        By leveraging cutting-edge learning management systems (LMS) and
        intuitive course structures, we ensure seamless accessibility across all
        devices. Whether you're launching a brand-new course or enhancing an
        existing one, our expertise in instructional design and digital
        education helps you create high-quality courses that captivate learners
        and drive measurable results. Let us help you bring your educational
        vision to life with professionally designed online courses.
      </p>

      {/* Dynamic Section Rendering */}
      {onlineCourseData.map((section, index) => (
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
          Pricing is based on the course length, complexity, and multimedia
          requirements.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name ===
              "Engaging & Interactive Online Course Development" && (
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
          Ready to launch your online course and share your expertise?
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

export default OnlineCoursesServices;
