"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { entrepreneurInsights } from "@/lib/blog-constants";
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
            Tech entrepreneurs are not just building businesses—they are
            reshaping entire industries and revolutionizing the way we live,
            work, and connect with the world. With bold ideas, unwavering
            passion, and the ability to navigate rapid technological shifts,
            these innovators have created some of the most influential companies
            in history. From Apple and Microsoft to Google and Tesla, many of
            today’s biggest tech giants began as nothing more than ambitious
            projects in garages, dorm rooms, or tiny offices. What set them
            apart wasn’t just their groundbreaking ideas, but their persistence,
            adaptability, and willingness to take risks in the face of
            uncertainty. Their stories serve as powerful testaments to the
            limitless potential of entrepreneurship—proving that innovation
            starts with vision, grows through resilience, and succeeds through
            relentless execution. What will your impact be?
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Journey of a Tech Entrepreneur
          </h2>
          <p>
            Launching a tech company is more than just having a great idea—it
            requires ambition, resilience, and a willingness to take risks. The
            road from a simple concept to becoming an industry-changing company
            is filled with challenges, breakthroughs, and countless learning
            experiences.
          </p>
          <p>
            Every successful tech entrepreneur follows a unique journey, but the
            path often includes key milestones such as:
          </p>
          <ul>
            <li>
              <strong>Identifying a Problem:</strong> Every great startup begins
              by recognizing a real-world problem and designing an innovative
              solution to address it.
            </li>
            <li>
              <strong>Building a Minimum Viable Product (MVP):</strong>{" "}
              Entrepreneurs start small—creating a prototype or early version of
              their product to test and validate their idea before scaling.
            </li>
            <li>
              <strong>Securing Funding:</strong> From bootstrapping to venture
              capital, funding is crucial for growth. Successful founders pitch
              their vision and attract investors who believe in their potential.
            </li>
            <li>
              <strong>Navigating Setbacks and Pivots:</strong> The road to
              success is rarely smooth. Adapting to market changes, learning
              from failures, and iterating are key aspects of entrepreneurial
              resilience.
            </li>
            <li>
              <strong>Scaling the Business:</strong> Once a startup gains
              traction, the focus shifts to expanding the product, growing the
              team, and reaching new markets.
            </li>
            <li>
              <strong>Becoming an Industry Leader:</strong> The most successful
              entrepreneurs don’t just build companies—they disrupt industries,
              set trends, and continuously innovate to stay ahead.
            </li>
          </ul>
          <p className="mt-4">
            While the journey is filled with uncertainties, every tech giant we
            know today started with a simple idea and the courage to pursue it.
            Whether you're at the beginning of your journey or already building
            something great, the next big breakthrough could be yours.
          </p>
        </section>

        <section>
          {entrepreneurInsights.map((categoryItem, categoryIndex) =>
            categoryItem.category === "stories" ? (
              <>
                <h2 className="text-3xl font-semibold mb-6 text-secondary">
                  Inspiring Stories of Tech Entrepreneurs
                </h2>
                <p>
                  Many of today’s most legendary tech companies started as
                  small, passion-driven projects—often built in garages, dorm
                  rooms, or tiny office spaces. They were fueled by bold ideas,
                  a relentless drive to solve problems, and a desire to
                  challenge the status quo. However, their journeys were far
                  from smooth. These companies faced setbacks, financial
                  struggles, and moments of uncertainty that could have easily
                  led to failure. Yet, their founders refused to quit. They
                  adapted, innovated, and turned obstacles into opportunities.
                </p>
                <p>
                  The stories of Apple, Microsoft, Amazon, and Tesla remind us
                  that great innovations don’t happen overnight. They are the
                  result of resilience, continuous learning, and the courage to
                  pursue ideas that others might doubt. Whether you're launching
                  your first startup or working on a passion project, remember:
                  Every big success starts as a small idea. The key is to keep
                  pushing forward.
                </p>
                {categoryItem.items_?.map((item, storyIndex) => (
                  <>
                    <ul key={storyIndex}>
                      <li key={categoryIndex}>
                        {item.details}
                        {item.description && (
                          <ul className="list-none">
                            <li>{item.description}</li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </>
                ))}
              </>
            ) : (
              <>
                <h2 className="text-3xl font-semibold mb-6 text-secondary">
                  Lessons from Successful Entrepreneurs
                </h2>
                <p>
                  The success stories of these tech entrepreneurs offer powerful
                  lessons in innovation, resilience, and adaptability. They
                  serve as a reminder that great achievements often start with a
                  single idea, a bold vision, and the willingness to take risks.
                  From overcoming failures to disrupting entire industries,
                  these pioneers demonstrate that persistence, creativity, and
                  continuous learning are key to success. Their journeys provide
                  inspiration and practical strategies for aspiring innovators
                  looking to make their mark in the world of technology. No
                  matter where you are in your entrepreneurial journey, their
                  experiences prove one thing: Success is built on perseverance,
                  adaptability, and the courage to challenge the norm.
                </p>
                <ul key={`${categoryItem.items}`}>
                  {categoryItem.items?.map((item, storyIndex) => (
                    <li key={storyIndex}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </>
            )
          )}
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Future of Tech Entrepreneurship
          </h2>
          <p>
            The future of technology is being shaped by bold thinkers, problem
            solvers, and relentless innovators. As advancements in AI,
            blockchain, IoT, biotechnology, and quantum computing accelerate,
            new opportunities for groundbreaking solutions emerge every day. The
            barriers to entry are lower than ever, and access to global markets,
            funding, and cutting-edge tools is empowering a new generation of
            entrepreneurs.
          </p>
          <p>
            From sustainable energy solutions to AI-driven automation,
            decentralized finance, and next-gen healthcare, the possibilities
            are limitless. The world is evolving rapidly, and those who embrace
            change, experiment fearlessly, and adapt to new technologies will be
            the ones shaping the industries of tomorrow. Whether you're an
            aspiring founder, an investor, or someone with a vision waiting to
            be realized, the success stories of tech pioneers serve as a
            reminder that every great innovation begins with a single step. The
            next game-changing company could be an idea you’re working on right
            now.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Tech entrepreneurship is more than just building products—it’s about
            shaping the future and redefining what’s possible. The greatest
            innovations come from those who dare to take risks, challenge
            conventional thinking, and push the boundaries of technology.
          </p>
          <p>
            Every breakthrough—whether it’s in AI, blockchain, clean energy, or
            biotechnology—starts with an idea and the determination to see it
            through. The next game-changing company could come from you—a vision
            waiting to be realized, a problem waiting to be solved, a technology
            waiting to be built.
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
            <Button
              onClick={() => router.push("/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            .
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
