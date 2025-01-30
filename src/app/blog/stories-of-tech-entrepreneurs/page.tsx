"use client";

import { Badge } from "@/components/ui/badge";
import { entrepreneurInsights } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            From Startup Garage to Tech Giant: Stories of Tech Entrepreneurs
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "From Startup Garage to Tech Giant: Stories of Tech Entrepreneurs" && (
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
            Tech entrepreneurs are redefining industries, revolutionizing how we
            live, work, and interact with the world. With groundbreaking ideas,
            relentless passion, and the ability to adapt to rapid technological
            advancements, these innovators have created some of the most
            influential companies of our time. Many of today’s biggest tech
            giants—from Apple and Microsoft to Google and Tesla—began as small,
            ambitious projects in garages, dorm rooms, or tiny offices. Their
            stories serve as powerful testaments to creativity, perseverance,
            and the willingness to take risks.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Journey of a Tech Entrepreneur
          </h2>
          <p>
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
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Lessons from Successful Entrepreneurs
          </h2>
          <p>
            The success stories of these tech entrepreneurs provide valuable
            insights that can inspire and guide aspiring innovators.
          </p>
          {entrepreneurInsights.map(
            (categoryItem, categoryIndex) =>
              categoryItem.category === "lessons" && (
                <ul className="list-disc pl-6 space-y-1 text-balance">
                  {categoryItem.items.map((item, storyIndex) => (
                    <li key={categoryIndex}>
                      <strong>{item.title}:</strong> {item.details}
                    </li>
                  ))}
                </ul>
              )
          )}
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Inspiring Stories of Tech Entrepreneurs
          </h2>
          <p>
            Many legendary tech companies began as small projects, often fueled
            by a simple idea, a passion for solving problems, and a desire to
            disrupt the status quo. These companies faced numerous obstacles,
            failures, and moments of uncertainty, but their founders pushed
            through, learned from setbacks, and continuously adapted to bring
            their ideas to life.
          </p>
          {entrepreneurInsights.map(
            (categoryItem, categoryIndex) =>
              categoryItem.category === "stories" && (
                <ul className="list-disc pl-6 space-y-1 text-balance">
                  {categoryItem.items.map((item, storyIndex) => (
                    <li key={categoryIndex}>
                      <strong>{item.title}:</strong> {item.details}
                    </li>
                  ))}
                </ul>
              )
          )}
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Future of Tech Entrepreneurship
          </h2>
          <p>
            As technology continues to advance, new opportunities for innovation
            emerge every day. With the rise of AI, blockchain, IoT, and other
            cutting-edge fields, the next generation of tech entrepreneurs has
            endless possibilities to create groundbreaking solutions.
          </p>
          <p>
            Whether you're an aspiring founder, an investor, or someone looking
            to bring an idea to life, the stories of successful tech
            entrepreneurs serve as motivation to take that first step. The next
            game-changing company could be an idea you’re working on right
            now—so keep innovating, keep learning, and never stop building.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Tech entrepreneurship is not just about building products—it’s about
            shaping the future. By taking risks, challenging the status quo, and
            pushing the boundaries of what’s possible, today’s innovators are
            paving the way for the next wave of technological breakthroughs.
          </p>
          <p>
            Who knows? The next revolutionary company could be your idea,
            waiting to be brought to life. Are you ready to take that leap?
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            Explore more stories, insights, and resources on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "From Startup Garage to Tech Giant: Stories of Tech Entrepreneurs" && (
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
            })}{" "}
            on our{" "}
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
