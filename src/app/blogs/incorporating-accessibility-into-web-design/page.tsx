"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { accessibilityContent } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Making the Web Inclusive: How to Incorporate Accessibility into Web
            Design
          </h1>
          <div>
            {blogs.map((blog, index) =>
              blog.title ===
              "Making the Web Inclusive: How to Incorporate Accessibility into Web Design" ? (
                <div key={index}>
                  <p>
                    <span className="font-bold">Written By: </span>
                    {blog.author}
                  </p>
                  <p>{blog.date}</p>
                  <div className="flex space-x-2 mb-8">
                    {blog.topics.map((topic, index) => (
                      <Badge
                        variant={"accent"}
                        className="text-sm lowercase"
                        key={index}
                      >
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
          <p>
            Websites serve as the gateway to information, services, and
            opportunities. However, many websites still fail to accommodate
            users with disabilities, preventing millions from fully engaging
            with online content.
          </p>
        </header>

        {accessibilityContent.map((section, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {section.category}
            </h2>
            <p>{section.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {section.items?.map((topic, trendIndex) => (
                <li key={trendIndex}>
                  <strong>{topic.title}: </strong>
                  {topic.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion: Make the Web a More Inclusive Place
          </h2>
          <p>
            Web accessibility isn’t just about compliance—it’s about creating an
            inclusive and seamless experience for all users. Implementing
            accessibility best practices benefits all visitors while improving
            SEO and user experience.
          </p>
          <p>
            Start small by optimizing contrast, using semantic HTML, and
            ensuring keyboard navigation. As accessibility becomes a core aspect
            of web design, we move closer to an inclusive, user-friendly digital
            world.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p>
            Explore more insights on{" "}
            {blogs.map((blog) =>
              blog.title ===
              "Making the Web Inclusive: How to Incorporate Accessibility into Web Design"
                ? blog.topics.map((topic, index) => (
                    <strong key={index} className="hover:text-tertiary">
                      #{topic}{" "}
                    </strong>
                  ))
                : null
            )}
            on our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and stay updated on best practices and trends in web accessibility.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
