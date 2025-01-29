"use client";

import { Badge } from "@/components/ui/badge";
import { techStartupResources } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Behind the Code: Insights into the World of Tech Startups
          </h1>
          <p>By David Lee – December 5, 2024</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #TechStartups
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Innovation
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Entrepreneurship
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Technology
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            <strong>Tech startups</strong> are at the forefront of innovation,
            reshaping industries and introducing groundbreaking solutions to
            everyday challenges. These agile companies operate in fast-paced
            environments, driven by the ambition to disrupt the status quo. In
            this blog, we’ll explore the inner workings of tech startups, the
            challenges they face, and the strategies behind their success.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What Defines a Tech Startup?
          </h2>
          <p>
            A tech startup is a young company that leverages technology to solve
            problems or create new opportunities. Unlike traditional businesses,
            startups aim for rapid growth and scalability, often operating in
            sectors like software development, AI, FinTech, and IoT. Their
            ability to innovate quickly and adapt to market demands sets them
            apart.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Journey of a Tech Startup
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Idea Generation:</strong> Startups begin with identifying
              a problem or gap in the market. Founders brainstorm innovative
              solutions and validate their ideas through research and feedback.
            </li>
            <li>
              <strong>Building a Minimum Viable Product (MVP):</strong> An MVP
              is a simplified version of the product, built to test the core
              concept with early adopters and gather valuable insights for
              improvement.
            </li>
            <li>
              <strong>Securing Funding:</strong> Funding is crucial for scaling
              operations. Startups often rely on sources like venture capital,
              angel investors, crowdfunding, or bootstrapping to finance their
              growth.
            </li>
            <li>
              <strong>Scaling Operations:</strong> Once the product-market fit
              is achieved, startups focus on scaling by expanding their team,
              refining processes, and reaching a broader audience.
            </li>
            <li>
              <strong>Navigating Challenges:</strong> Startups face obstacles
              like competition, limited resources, and market volatility.
              Resilience and adaptability are key to overcoming these hurdles.
            </li>
          </ol>
        </section>

        {techStartupResources.map((categoryItem, categoryIndex) => (
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
            The Future of Tech Startups
          </h2>
          <p>
            The tech startup ecosystem shows no signs of slowing down. Emerging
            trends like AI, blockchain, and renewable energy are creating
            opportunities for the next wave of innovation. With a focus on
            sustainability and social impact, startups are poised to address
            global challenges while driving technological advancement.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Tech startups are more than just businesses—they’re catalysts for
            change and innovation. By embracing challenges and staying committed
            to their vision, these companies have the power to redefine
            industries and shape the future.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            If you’re inspired by the world of tech startups or looking to start
            your own, stay tuned to our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            for more insights, tips, and success stories.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
