"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const StudyGuideCreation: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Study Guide Creation Services
      </h1>
      <p className="text-center text-lg my-4">
        Simplify learning with expertly designed study guides tailored to meet
        educational goals and learning styles.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Study Guides Matter</h2>
        <p className="my-4">
          Study guides are essential tools for organizing information,
          reinforcing learning, and improving academic performance. Whether for
          students, professionals, or educators, professionally crafted study
          guides make complex concepts accessible and easy to retain.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Simplify Complex Topics:
            </span>{" "}
            Break down challenging concepts into manageable sections.
          </li>
          <li>
            <span className="font-bold text-secondary">Enhance Retention:</span>{" "}
            Use structured layouts and visual aids to reinforce learning.
          </li>
          <li>
            <span className="font-bold text-secondary">Boost Confidence:</span>{" "}
            Equip learners with tools to prepare effectively for exams or
            presentations.
          </li>
          <li>
            <span className="font-bold text-secondary">Save Time:</span> Provide
            ready-to-use materials for focused study sessions.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Study Guide Services</h2>
        <p className="my-4">
          We create customized study guides designed to meet specific learning
          objectives and audience needs.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Topic-Specific Study Guides:
            </span>{" "}
            Focused materials covering specific subjects or concepts.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Exam Preparation Guides:
            </span>{" "}
            Comprehensive resources tailored for standardized tests,
            certifications, or academic exams.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Flashcards and Summaries:
            </span>{" "}
            Condensed information for quick review and memorization.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Interactive Study Aids:
            </span>{" "}
            Digital guides with clickable elements and quizzes.
          </li>
          <li>
            <span className="font-bold text-secondary">Custom Formats:</span>{" "}
            Guides in PDF, print-ready, or digital formats for e-learning
            platforms.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your subject, audience, and objectives for the study
            guide.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Content Development:
            </span>{" "}
            Research and write clear, accurate, and engaging content.
          </li>
          <li>
            <span className="font-bold text-secondary">Design and Layout:</span>{" "}
            Format the guide with visuals, infographics, and user-friendly
            designs.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Review and Feedback:
            </span>{" "}
            Refine the guide based on your input to ensure accuracy and
            alignment with your goals.
          </li>
          <li>
            <span className="font-bold text-secondary">Final Delivery:</span>{" "}
            Provide the guide in your desired format, ready for distribution or
            use.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Most study
          guides are completed within 1–3 weeks, depending on complexity and
          length.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-leading tools to create professional and engaging
          study guides:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Adobe InDesign for structured layouts</li>
          <li>Canva for custom visuals and infographics</li>
          <li>Microsoft Word for drafting and formatting</li>
          <li>Grammarly for proofreading and editing</li>
          <li>Quizlet for interactive flashcards</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Pricing depends on the subject, length, and level of customization
          required. We offer flexible packages to suit various needs.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Basic Study Guides (5–10 pages):
            </span>{" "}
            Starting at $500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Comprehensive Guides (10–30 pages):
            </span>{" "}
            Starting at $1,500.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Interactive Digital Guides:
            </span>{" "}
            Starting at $2,500.
          </li>
          <li>
            <span className="font-bold text-secondary">Flashcard Sets:</span>{" "}
            Starting at $300.
          </li>
        </ul>
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
