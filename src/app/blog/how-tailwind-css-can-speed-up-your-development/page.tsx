"use client";

import { Badge } from "@/components/ui/badge";
import { tailwindCSSResources } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How Tailwind CSS Can Speed Up Your Development Process
          </h1>
          <p>By Jane Smith – July 10, 2025</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #CSS
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #FrontendDevelopment
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #TailwindCSS
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #WebDesign
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            <strong>Tailwind CSS</strong> is a utility-first CSS framework that
            provides a highly customizable approach to building modern user
            interfaces. In this post, we’ll explore why Tailwind CSS has become
            a favorite among developers, how it can drastically improve your
            workflow, and tips to get started with this powerful tool.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Tailwind CSS?
          </h2>
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
            For more insights on <strong>CSS</strong> and{" "}
            <strong>Frontend Development</strong>, check out our{" "}
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
