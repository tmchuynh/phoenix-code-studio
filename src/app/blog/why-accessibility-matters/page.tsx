"use client";

import { Badge } from "@/components/ui/badge";
import {
  whatIsWebAccessibility,
  corePrinciplesOfAccessibility,
  howToImproveAccessibility,
} from "@/lib/content-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Accessibility Matters in Web Development
          </h1>
          <p className="text-sm text-gray-500">By Sarah Kim – May 22, 2025</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #WebAccessibility
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #UXUIDesign
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #InclusiveDesign
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #WebDevelopment
            </Badge>
          </div>
        </header>

        {/* What is Web Accessibility */}
        <section className="space-y-4">
          <p className="text-lg">
            <strong>Accessibility</strong> should be a priority in every web
            development project. Ensuring that your website is usable by people
            with disabilities not only opens your content to a wider audience
            but also improves user satisfaction, fosters inclusivity, and
            complies with legal requirements. In this blog, we’ll discuss why
            accessibility is crucial, the benefits it provides, and how to start
            making your website more accessible today.
          </p>
        </section>

        {/* What is Web Accessibility */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Web Accessibility?
          </h2>
          <p className="text-lg">
            Web accessibility refers to the practice of designing and developing
            websites that can be used by everyone, including individuals with
            disabilities. Disabilities may include visual, auditory, physical,
            cognitive, or neurological impairments that affect how users
            interact with digital content. An accessible website ensures that
            all users, regardless of their abilities, can navigate, understand,
            and interact with its content.
          </p>
        </section>

        {/* Why Accessibility Matters */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Why Accessibility Matters
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {whatIsWebAccessibility.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Core Principles of Accessibility */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Core Principles of Accessibility
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {corePrinciplesOfAccessibility.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* How to Improve Accessibility */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            How to Improve Accessibility on Your Website
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {howToImproveAccessibility.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Why Accessibility is a Continuous Process */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Why Accessibility is a Continuous Process
          </h2>
          <p className="text-lg">
            Web accessibility isn’t a one-and-done task—it’s an ongoing
            commitment. Technology, user needs, and accessibility standards
            evolve over time. Regularly test your website with tools like
            Lighthouse, WAVE, or Axe to identify and fix accessibility issues.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p className="text-lg">
            Making web accessibility a priority ensures that your website is
            inclusive, compliant, and optimized for all users. Beyond meeting
            legal requirements, accessibility reflects your commitment to
            creating a welcoming, user-friendly online environment.
          </p>
          <p className="text-lg">
            Start integrating accessibility into your web development process
            today—it’s a step toward a better web for everyone.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm">
            For more insights on <strong>Web Accessibility</strong> and{" "}
            <strong>UX/UI Design</strong>, check out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and stay informed about best practices and emerging trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
