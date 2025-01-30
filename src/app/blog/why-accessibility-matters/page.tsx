"use client";

import { Badge } from "@/components/ui/badge";
import { accessibilityResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Accessibility Matters in Web Development
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Why Accessibility Matters in Web Development" && (
                  <>
                    <p key={index}>
                      <span className="font-bold">Written By: </span>
                      {blog.author}
                    </p>
                    <p key={index}>{blog.date}</p>
                    <div className="flex space-x-2 mb-8">
                      {blog.topics.map((topic, index) => {
                        return (
                          <Badge
                            variant={"outline"}
                            className="text-sm lowercase"
                            key={index}
                          >
                            #{topic}
                          </Badge>
                        );
                      })}
                    </div>
                  </>
                )
              );
            })}
          </div>
          <p>
            Web accessibility ensures that everyone, regardless of ability, can
            navigate, understand, and interact with online content. By designing
            websites that accommodate users with visual, auditory, motor, or
            cognitive impairments, businesses create a more inclusive digital
            experience that benefits all visitors. Accessible web design is not
            just about compliance with standards like WCAG (Web Content
            Accessibility Guidelines)—it’s about equal opportunity. Features
            like alt text for images, keyboard-friendly navigation, color
            contrast adjustments, and screen reader compatibility make websites
            more usable for a wider audience, including those with disabilities.
            Beyond inclusivity, accessibility also enhances SEO, improves user
            experience, and expands your reach. A well-designed, accessible
            website ensures faster load times, better readability, and easier
            navigation, benefiting all users, not just those with disabilities.
            Prioritizing web accessibility is a commitment to digital equity,
            ensuring that your site is welcoming, functional, and usable for
            everyone. In today’s web-driven world, accessible design is not just
            an option—it’s a necessity for ethical, legal, and business success.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Web Accessibility?
          </h2>
          <p>
            <strong>Accessibility</strong> should be a priority in every web
            development project. Ensuring that your website is usable by people
            with disabilities not only opens your content to a wider audience
            but also improves user satisfaction, fosters inclusivity, and
            complies with legal requirements. In this blog, we’ll discuss why
            accessibility is crucial, the benefits it provides, and how to start
            making your website more accessible today.
          </p>
          <p>
            Web accessibility refers to the practice of designing and developing
            websites that can be used by everyone, including individuals with
            disabilities. Disabilities may include visual, auditory, physical,
            cognitive, or neurological impairments that affect how users
            interact with digital content. An accessible website ensures that
            all users, regardless of their abilities, can navigate, understand,
            and interact with its content.
          </p>
        </section>

        {accessibilityResources.map((resource, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {resource.category}
            </h2>
            <ul>
              {resource.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Why Accessibility is a Continuous Process
          </h2>
          <p>
            Web accessibility isn’t a one-and-done task—it’s an ongoing
            commitment. Technology, user needs, and accessibility standards
            evolve over time. Regularly test your website with tools like
            Lighthouse, WAVE, or Axe to identify and fix accessibility issues.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Making web accessibility a priority ensures that your website is
            inclusive, compliant, and optimized for all users. Beyond meeting
            legal requirements, accessibility reflects your commitment to
            creating a welcoming, user-friendly online environment.
          </p>
          <p>
            Start integrating accessibility into your web development process
            today—it’s a step toward a better web for everyone.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Why Accessibility Matters in Web Development" && (
                  <>
                    {blog.topics.map((topic, index) => {
                      return (
                        <strong key={index} className="hover:text-tertiary">
                          #{topic}{" "}
                        </strong>
                      );
                    })}
                  </>
                )
              );
            })}
            , check out our{" "}
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
