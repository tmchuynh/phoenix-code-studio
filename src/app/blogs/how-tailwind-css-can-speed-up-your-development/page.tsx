"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { tailwindCSSResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";

const BlogPage = () => {
  const router = useRouter();
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
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
                            variant={"accent"}
                            className="text-sm lowercase cursor-default"
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
            Tailwind';s biggest advantages is its flexibility and speed. By
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
            interfaces. Unlike traditional CSS frameworks that come with
            predefined components and rigid styling rules, Tailwind offers a
            low-level, utility-driven method that enables developers to
            construct designs directly within their HTML. This approach
            eliminates the need for writing extensive custom CSS while
            maintaining full control over the styling of each element.
          </p>
          <p>
            Tailwind CSS introduces a vast collection of utility classes, which
            are small, reusable CSS snippets that can be applied directly to
            elements. These classes cover a wide range of styling properties,
            including spacing, typography, colors, flexbox, grid, animations,
            and responsiveness. Instead of writing custom CSS stylesheets,
            developers can compose unique designs by combining utility classes
            within the HTML markup itself. This utility-first philosophy
            streamlines development, enhances maintainability, and improves
            performance by reducing unused CSS in production builds.
          </p>
          <p>
            One of Tailwind’s standout features is its customizability. The
            framework includes a powerful configuration file
            (tailwind.config.js) that allows developers to extend default
            styles, define custom themes, and modify breakpoints to fit the
            specific needs of a project. By leveraging this configuration, teams
            can maintain a consistent design system while avoiding CSS bloat and
            unnecessary overrides. Tailwind CSS is particularly favored by
            modern front-end developers due to its developer-friendly approach,
            performance optimizations, and seamless integration with
            component-based libraries like React, Vue, and Angular. Its JIT
            (Just-In-Time) compiler generates only the CSS classes that are used
            in the project, drastically reducing the final CSS file size and
            improving load times.
          </p>
        </section>

        {tailwindCSSResources.map((categoryItem, categoryIndex) => (
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
            Getting Started with Tailwind CSS
          </h2>
          <p>
            Setting up Tailwind CSS is a straightforward process that allows you
            to quickly build modern, responsive, and highly customizable
            designs. Follow these steps to install, configure, and start using
            Tailwind CSS in your project.
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Install Tailwind CSS:</strong> Start by adding Tailwind
              CSS to your project using npm, yarn, or your preferred package
              manager.
              <pre className="p-4 text-sm rounded-md mt-2 bg-muted text-muted-foreground">
                # Install Tailwind CSS, PostCSS, and Autoprefixer
                <br />
                npm install -D tailwindcss postcss autoprefixer
                <br />
                <br />
                # Generate the Tailwind config file
                <br />
                npx tailwindcss init -p
              </pre>
              <p>
                The `-p` flag automatically creates a `postcss.config.js` file,
                which ensures compatibility with PostCSS for advanced
                optimizations.
              </p>
            </li>

            <li>
              <strong>Set Up Your Configuration:</strong> Tailwind provides a
              configuration file (`tailwind.config.js`) where you can customize
              themes, colors, fonts, spacing, breakpoints, and other design
              elements.
              <pre className="p-4 text-sm rounded-md mt-2 bg-muted text-muted-foreground">
                module.exports = {"{"}
                theme: {"{"}
                extend: {"{"}
                colors: {"{"}
                primary: ';#1E40AF';, secondary: ';#9333EA';,
                {"}"},{"}"},{"}"}, plugins: [],
                {"}"};
              </pre>
              <p>
                Customizing this file helps you maintain a consistent design
                system tailored to your project’s needs.
              </p>
            </li>

            <li>
              <strong>Add Tailwind to Your CSS:</strong> Include Tailwind’s base
              styles, component utilities, and global configurations in your
              main CSS file.
              <pre className="p-4 text-sm rounded-md mt-2 bg-muted text-muted-foreground">
                @tailwind base;
                <br />
                @tailwind components;
                <br />
                @tailwind utilities;
              </pre>
              <p>
                These directives import Tailwind';s utility classes and core
                styling into your project, ensuring your HTML elements are ready
                to be styled.
              </p>
            </li>

            <li>
              <strong>Start Building:</strong> You’re now ready to use
              Tailwind’s utility classes to style your elements directly in
              HTML. For example:
              <pre className="p-4 text-sm rounded-md mt-2 bg-muted text-muted-foreground">
                {"<"}button className="bg-blue-500 hover:bg-blue-700 text-white
                font-bold py-2 px-4 rounded"{">"}Click Me{"</"}button{">"}
              </pre>
              <p>
                Explore the{" "}
                <Button
                  className="p-0 m-0"
                  variant={"link"}
                  onClick={() => router.push("https://tailwindcss.com/docs")}
                >
                  Tailwind documentation
                </Button>{" "}
                for more examples and best practices.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Final Thoughts
          </h2>
          <p>
            Tailwind CSS is more than just a utility-first framework—it’s a
            game-changer in modern frontend development. By offering a highly
            flexible and scalable approach to styling, it allows developers to
            design quickly, maintain consistency, and reduce unnecessary CSS
            complexity. Unlike traditional frameworks that enforce pre-styled
            components, Tailwind’s customizable, utility-driven philosophy
            provides complete control over UI elements, making it ideal for
            projects of any scale.
          </p>
          <p>
            With mobile-first design, Just-In-Time (JIT) compilation, and
            seamless integration with frameworks like React, Vue, and Angular,
            Tailwind CSS enables developers to streamline their workflow and
            improve performance. The ability to customize themes, create
            reusable components, and optimize production builds ensures that
            your project remains lean, maintainable, and efficient. Whether
            you’re a beginner experimenting with frontend development or an
            experienced developer building complex web applications, Tailwind
            CSS offers a versatile, intuitive, and performance-focused approach
            to modern UI development. If you haven’t tried it yet, now is the
            perfect time to explore its powerful features and extensive
            documentation to enhance your workflow.
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
            <Button
              onClick={() => router.push("/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            . Stay tuned for more tutorials, tips, and resources!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
