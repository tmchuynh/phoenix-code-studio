"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { guiArchitectures } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Understanding GUI Architectures: How Modern Interfaces Work
          </h1>
          <div>
            {blogs.map((blog, index) =>
              blog.title === "Understanding GUI Architectures" ? (
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
            Graphical User Interface (GUI) architectures define how software
            applications structure their interface, enabling users to interact
            with digital systems efficiently. Choosing the right architecture
            improves maintainability, performance, and user experience.
          </p>
          <p>
            This guide explores various GUI architectures, including MVC, MVVM,
            Flux, and Micro Frontends, and how they are shaping modern UI
            development.
          </p>
        </header>

        {guiArchitectures.map((section, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {section.category}
            </h2>
            <p>{section.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {section.items?.map((item, trendIndex) => (
                <li key={trendIndex}>
                  <strong>{item.title}: </strong>
                  {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion: The Evolution of GUI Architectures
          </h2>
          <p>
            As user interfaces become more complex, choosing the right GUI
            architecture is crucial for scalability, performance, and
            maintainability. While MVC and MVVM remain relevant, modern
            frameworks favor component-based architectures, Flux-based state
            management, and micro frontends.
          </p>
          <p>
            Keeping up with emerging trends like AI-powered UI, gesture-based
            interfaces, and AR/VR integration will shape the future of graphical
            user interfaces.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p>
            Explore more insights on{" "}
            {blogs.map((blog) =>
              blog.title === "Understanding GUI Architectures"
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
            and stay updated on UI development trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
