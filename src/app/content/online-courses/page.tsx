"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";

const OnlineCoursesServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Online Courses Development Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Online Courses" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Online Courses Matter</h2>
        <p className="my-4">
          Online courses are a powerful way to share knowledge, build authority,
          and create scalable learning experiences. Whether you're teaching
          skills, professional development, or industry-specific knowledge,
          high-quality courses set you apart.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">Scalable Learning:</span>{" "}
            Teach thousands of learners without geographic limitations.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Establish Authority:
            </span>{" "}
            Position yourself as an expert in your field with professional
            courses.
          </li>
          <li>
            <span className="font-bold text-tertiary">Generate Revenue:</span>{" "}
            Monetize your expertise with paid courses.
          </li>
          <li>
            <span className="font-bold text-tertiary">Engage Audiences:</span>{" "}
            Create interactive and personalized learning experiences.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Online Courses Services</h2>
        <p className="my-4">
          We provide end-to-end solutions for designing and developing impactful
          online courses.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Course Planning and Structure:
            </span>{" "}
            Develop a detailed course outline with clear learning objectives.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Content Development:
            </span>{" "}
            Write engaging, well-researched course materials tailored to your
            audience.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Multimedia Creation:
            </span>{" "}
            Create video lectures, presentations, animations, and interactive
            quizzes.
          </li>
          <li>
            <span className="font-bold text-tertiary">LMS Integration:</span>{" "}
            Set up and manage your course on Learning Management Systems (LMS)
            like Teachable, Thinkific, or Moodle.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Assessments and Certifications:
            </span>{" "}
            Design quizzes, tests, and certificates for learner validation.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Course Optimization:
            </span>{" "}
            Analyze and refine courses based on user feedback and analytics.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understand your audience, goals, and subject matter.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Course Outline Creation:
            </span>{" "}
            Develop a structured plan, including modules, lessons, and
            activities.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Content Development:
            </span>{" "}
            Create engaging written, visual, and multimedia materials.
          </li>
          <li>
            <span className="font-bold text-tertiary">LMS Setup:</span> Upload
            and organize your course materials on the desired platform.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Testing and Feedback:
            </span>{" "}
            Run test sessions to ensure usability, engagement, and learning
            outcomes.
          </li>
          <li>
            <span className="font-bold text-tertiary">Launch and Support:</span>{" "}
            Launch your course and provide ongoing support for updates and
            enhancements.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> The
          timeline depends on the course length, complexity, and multimedia
          needs. Typical projects take 4–12 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-leading tools to create engaging and professional
          online courses:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Articulate Storyline for interactive course content</li>
          <li>Adobe Premiere Pro for video editing</li>
          <li>Canva for visual content</li>
          <li>Teachable, Thinkific, or Moodle for LMS setup</li>
          <li>Google Docs for collaboration and content drafts</li>
          <li>H5P for interactive quizzes and assessments</li>
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
