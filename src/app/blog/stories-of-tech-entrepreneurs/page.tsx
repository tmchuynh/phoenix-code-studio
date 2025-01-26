"use client";

import { Badge } from "@/components/ui/badge";
import { entrepreneurStories, lessons } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            From Startup Garage to Tech Giant: Stories of Tech Entrepreneurs
          </h1>
          <p className="text-sm text-gray-500">
            By Ethan Garcia – August 5, 2024
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge className="text-sm">#TechEntrepreneurs</Badge>
            <Badge className="text-sm">#StartupSuccess</Badge>
            <Badge className="text-sm">#Innovation</Badge>
            <Badge className="text-sm">#Entrepreneurship</Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg">
            Tech entrepreneurs are transforming the world, bringing innovative
            ideas to life and reshaping industries in the process. Many of the
            most successful companies today started in humble settings, such as
            garages or dorm rooms, and have grown into global giants. In this
            blog, we’ll dive into some of the most inspiring stories of tech
            entrepreneurs who turned their dreams into reality, along with
            lessons we can learn from their journeys.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            The Journey of a Tech Entrepreneur
          </h2>
          <p className="text-lg">
            Starting a tech company often involves a blend of ambition,
            resilience, and a willingness to take risks. The path from a startup
            idea to becoming a tech giant typically includes:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Identifying a Problem:</strong> Successful entrepreneurs
              start by spotting a problem or gap in the market and coming up
              with a unique solution.
            </li>
            <li>
              <strong>Building a Prototype:</strong> Most tech startups begin
              with an MVP (Minimum Viable Product) to test their ideas and
              gather feedback.
            </li>
            <li>
              <strong>Overcoming Challenges:</strong> Entrepreneurs face
              obstacles like funding shortages, competition, and technological
              hurdles. Perseverance is key.
            </li>
            <li>
              <strong>Scaling and Innovating:</strong> Once the business gains
              traction, scaling operations and staying ahead of the competition
              through innovation become critical.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Inspiring Stories of Tech Entrepreneurs
          </h2>
          {entrepreneurStories.map((entrepreneur, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-tertiary">
                {entrepreneur.title}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {entrepreneur.details.map((detail, i) => (
                  <li key={i}>
                    <strong>{detail.split(":")[0]}:</strong>{" "}
                    {detail.split(":")[1]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Lessons from Successful Entrepreneurs
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {lessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            The Future of Tech Entrepreneurship
          </h2>
          <p className="text-lg">
            The rise of AI, blockchain, and sustainability-focused technologies
            presents new opportunities for entrepreneurs. Emerging markets,
            increased accessibility to funding, and advances in remote work are
            also making it easier than ever to start and grow a tech company.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Conclusion
          </h2>
          <p className="text-lg">
            The stories of tech entrepreneurs are a testament to the power of
            innovation, resilience, and determination. Whether you’re an
            aspiring entrepreneur or simply inspired by these journeys, remember
            that every successful company starts with a single step.
          </p>
          <p className="text-lg">
            Explore more stories, insights, and tips for tech entrepreneurship
            on our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>
            , and start turning your ideas into reality today!
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            Explore more stories, insights, and resources on{" "}
            <strong>Tech Entrepreneurship</strong> and{" "}
            <strong>Innovation</strong> on our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>
            .
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
