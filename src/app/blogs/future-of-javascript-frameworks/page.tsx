"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { javascriptFrameworkTrends } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            The Future of JavaScript Frameworks
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "The Future of JavaScript Frameworks" && (
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
                            variant={"accent"}
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
            JavaScript frameworks have been at the heart of modern web
            development, enabling developers to build faster, more efficient,
            and highly interactive applications. As technology evolves, so do
            the frameworks that power the web, with emerging trends shaping the
            future of frontend and backend development. With frameworks like
            React, Vue, Angular, and Svelte continuously innovating, the focus
            is shifting towards performance optimization, server-side rendering
            (SSR), and developer-friendly tooling. Meta-frameworks like Next.js
            and Nuxt.js are also gaining popularity, offering better SEO,
            scalability, and improved user experiences. Looking ahead, we can
            expect lighter, faster, and more modular frameworks that emphasize
            static site generation (SSG), edge computing, and AI-powered
            development tools. As JavaScript frameworks continue to evolve,
            developers must stay adaptable and embrace new advancements to build
            the next generation of dynamic, scalable web applications.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Why JavaScript Frameworks Matter
          </h2>
          <p>
            With the rapid evolution of <strong>JavaScript frameworks</strong>{" "}
            like React, Vue, and Angular, staying ahead of the curve is crucial
            for developers. As the web development landscape continues to grow
            and adapt to new technologies, the future of JavaScript frameworks
            promises exciting opportunities and challenges. This article
            explores emerging trends and what they mean for developers and
            businesses.
          </p>
          <p>
            JavaScript frameworks have been at the forefront of modern web
            development for years. They streamline the process of building
            complex applications, enhance performance, and provide developers
            with the tools needed to create rich user experiences. Frameworks
            like React, Vue, Angular, and Svelte have empowered developers to
            build scalable, maintainable, and efficient web applications.
          </p>
        </section>

        {javascriptFrameworkTrends.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            <ul>
              {categoryItem.items?.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            The future of JavaScript frameworks is full of possibilities. As
            frameworks evolve to meet the demands of modern web development,
            they will continue to push the boundaries of what’s possible on the
            web. By staying informed and adaptable, developers can harness these
            tools to create innovative, high-performance applications that stand
            the test of time.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more on{" "}
            {blogs.map((blog) => {
              return (
                blog.title === "The Future of JavaScript Frameworks" && (
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
            , visit our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and follow us for the latest updates on emerging technologies.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
