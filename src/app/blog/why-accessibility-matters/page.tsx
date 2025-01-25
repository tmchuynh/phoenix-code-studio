import { Badge } from "@/components/ui/badge";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Why Accessibility Matters in Web Development
          </h1>
          <p className="text-sm text-gray-500">By Sarah Kim – May 22, 2025</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge className="text-sm">#WebAccessibility</Badge>
            <Badge className="text-sm">#UXUIDesign</Badge>
            <Badge className="text-sm">#InclusiveDesign</Badge>
            <Badge className="text-sm">#WebDevelopment</Badge>
          </div>
        </header>

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

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
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

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why Accessibility Matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Inclusivity and Equal Access:</strong> Accessibility
              promotes inclusivity by ensuring that all users have equal access
              to information and functionality. A website that accommodates
              diverse needs is one that respects and values every visitor.
            </li>
            <li>
              <strong>Legal and Ethical Responsibility:</strong> Many countries
              have laws and regulations, such as the Americans with Disabilities
              Act (ADA) or the Web Content Accessibility Guidelines (WCAG),
              requiring websites to meet accessibility standards. Failure to
              comply can lead to legal consequences.
            </li>
            <li>
              <strong>Improved User Experience for Everyone:</strong> Accessible
              websites often benefit all users, not just those with
              disabilities. Features like clear navigation, descriptive
              headings, and keyboard accessibility enhance the overall user
              experience.
            </li>
            <li>
              <strong>Expanded Audience Reach:</strong> Approximately 1 billion
              people worldwide have some form of disability. By prioritizing
              accessibility, you make your website usable for a larger audience,
              which can result in increased traffic and engagement.
            </li>
            <li>
              <strong>SEO Benefits:</strong> Search engines favor accessible
              websites. Practices like using descriptive alt text, clear
              headings, and semantic HTML improve both accessibility and search
              engine optimization (SEO).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Core Principles of Accessibility
          </h2>
          <ul className="list-inside space-y-2">
            <li>
              <strong>Perceivable:</strong> Ensure that users can perceive the
              content on your site. This includes providing text alternatives
              for non-text content, ensuring sufficient color contrast, and
              enabling captions for audio and video content.
            </li>
            <li>
              <strong>Operable:</strong> Design interfaces that are easy to
              navigate, even without a mouse. Features like keyboard navigation
              and predictable user interfaces are essential.
            </li>
            <li>
              <strong>Understandable:</strong> Content should be easy to read
              and comprehend. Avoid overly complex language and ensure forms
              provide clear instructions and error messages.
            </li>
            <li>
              <strong>Robust:</strong> Your website should work across various
              devices, browsers, and assistive technologies like screen readers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            How to Improve Accessibility on Your Website
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Use Semantic HTML:</strong> Use proper HTML tags for
              headings, lists, buttons, and other elements to improve
              accessibility and compatibility with assistive technologies.
            </li>
            <li>
              <strong>Provide Alternative Text for Images:</strong> Add
              descriptive alt text to all images, ensuring visually impaired
              users can understand the context.
            </li>
            <li>
              <strong>Ensure Keyboard Accessibility:</strong> Test your website
              to ensure all features and navigation can be accessed using only a
              keyboard.
            </li>
            <li>
              <strong>Design with Color Contrast in Mind:</strong> Use
              high-contrast color schemes to make text readable against the
              background, benefiting users with visual impairments.
            </li>
            <li>
              <strong>Add ARIA Labels Where Necessary:</strong> Use Accessible
              Rich Internet Applications (ARIA) labels to provide additional
              information about elements, particularly for custom components
              like sliders and modals.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why Accessibility is a Continuous Process
          </h2>
          <p className="text-lg">
            Web accessibility isn’t a one-and-done task—it’s an ongoing
            commitment. Technology, user needs, and accessibility standards
            evolve over time. Regularly test your website with tools like
            Lighthouse, WAVE, or Axe to identify and fix accessibility issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
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
