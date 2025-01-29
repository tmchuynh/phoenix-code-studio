"use client";

import { Badge } from "@/components/ui/badge";
import { tailwindCSSResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How Tailwind CSS Can Speed Up Your Development Process
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "How Tailwind CSS Can Speed Up Your Development Process" && (
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
            In the fast-paced world of web development, efficiency is key—and
            Tailwind CSS has become a game-changer for developers looking to
            build sleek, responsive designs without writing custom CSS from
            scratch. Unlike traditional CSS frameworks like Bootstrap, which
            come with predefined styles and components, Tailwind CSS takes a
            utility-first approach, allowing developers to style elements
            directly in their HTML with small, reusable utility classes. One of
            Tailwind's biggest advantages is its flexibility and speed. By
            eliminating the need for writing extensive custom CSS, developers
            can rapidly prototype, adjust layouts on the fly, and maintain
            consistency across projects. Its responsive design utilities,
            built-in dark mode support, and intelligent optimization features
            make it a highly efficient tool for both beginners and experienced
            developers. Additionally, Tailwind’s JIT (Just-In-Time) compiler
            ensures lightweight, performance-optimized CSS, generating only the
            styles your project needs. This results in faster load times,
            smaller file sizes, and improved user experience. For developers
            seeking a modern, scalable, and time-saving approach to styling,
            Tailwind CSS streamlines the development process, allowing you to
            focus on building great user experiences—without the CSS overhead.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Tailwind CSS?
          </h2>
          <p>
            <strong>Tailwind CSS</strong> is a utility-first CSS framework that
            provides a highly customizable approach to building modern user
            interfaces. In this post, we’ll explore why Tailwind CSS has become
            a favorite among developers, how it can drastically improve your
            workflow, and tips to get started with this powerful tool.
          </p>
          <p>
            Tailwind CSS is a modern CSS framework that focuses on providing
            utility classes—small, reusable CSS snippets for styling your
            elements directly in the HTML. Unlike traditional CSS frameworks
            that rely on predefined components, Tailwind offers unparalleled
            flexibility, allowing developers to design unique, responsive, and
            efficient user interfaces.
          </p>
        </section>

        {tailwindCSSResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {categoryItem.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Getting Started with Tailwind CSS
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Install Tailwind CSS:</strong> Start by adding Tailwind to
              your project using npm or your preferred package manager:
              <pre className="bg-gray-100 p-4 text-sm rounded-md mt-2">
                npm install -D tailwindcss postcss autoprefixer
                <br />
                npx tailwindcss init
              </pre>
            </li>
            <li>
              <strong>Set Up Your Configuration:</strong> Customize your
              `tailwind.config.js` to define your project's color palette,
              fonts, spacing, and more.
            </li>
            <li>
              <strong>Add Tailwind to Your CSS:</strong> Include Tailwind's
              base, components, and utilities in your CSS file:
              <pre className="bg-gray-100 p-4 text-sm rounded-md mt-2">
                @tailwind base;
                <br />
                @tailwind components;
                <br />
                @tailwind utilities;
              </pre>
            </li>
            <li>
              <strong>Start Building:</strong> Use Tailwind's extensive
              documentation and examples to quickly style your components and
              layouts.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Final Thoughts
          </h2>
          <p>
            Tailwind CSS is more than just a CSS framework—it’s a game-changer
            for frontend development. By combining speed, flexibility, and
            customization, it empowers developers to build modern, responsive
            designs with ease.
          </p>
          <p>
            If you’re looking for a tool to enhance your development workflow,
            give Tailwind CSS a try. Its versatility and efficiency make it an
            invaluable asset for developers of all skill levels.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "How Tailwind CSS Can Speed Up Your Development Process" && (
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
            </a>
            . Stay tuned for more tutorials, tips, and resources!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
