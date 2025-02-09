"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { emergingTechTrends, stayingAheadTips } from "@/lib/blog-constants";
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
            Navigating the Digital Revolution: Emerging Tech Trends
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Navigating the Digital Revolution: Emerging Tech Trends" && (
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
            The digital revolution is transforming the way we live, work, and
            connect with technology. Rapid advancements in AI, blockchain, IoT,
            and cloud computing are driving innovation across industries,
            shaping a future that is smarter, faster, and more interconnected
            than ever. One of the most significant trends is Artificial
            Intelligence (AI) and automation, which are enhancing productivity,
            decision-making, and personalized user experiences. From chatbots
            and virtual assistants to predictive analytics, AI is
            revolutionizing how businesses operate. Blockchain technology is
            another game-changer, offering secure, decentralized solutions for
            finance, supply chains, and digital identity management. Similarly,
            the Internet of Things (IoT) is expanding connectivity, integrating
            smart devices into everyday life, improving efficiency in
            healthcare, logistics, and urban infrastructure. As businesses
            embrace cloud computing, edge computing, and cybersecurity
            advancements, the need for digital transformation is more critical
            than ever. Keeping pace with these emerging tech trends is essential
            for organizations looking to remain competitive and future-proof in
            an evolving digital landscape.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is the Digital Revolution?
          </h2>
          <p className="mb-4">
            The <strong>digital revolution</strong> is more than just
            technological progress—it’s a paradigm shift reshaping how we
            communicate, work, and innovate. From artificial intelligence and
            blockchain to 5G, quantum computing, and the metaverse, emerging
            technologies are transforming industries, automating processes, and
            redefining human interaction.
          </p>
          <p className="mb-4">
            Businesses that embrace digital transformation gain a competitive
            edge, leveraging data-driven decision-making, automation, and
            enhanced connectivity to streamline operations and drive innovation.
            Meanwhile, individuals who adapt and stay informed can future-proof
            their careers and capitalize on new opportunities.
          </p>
        </section>

        {emergingTechTrends.map((trendCategory, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {index + 1}. {trendCategory.category}
            </h2>
            <p>{trendCategory.description}</p>
            <p>
              <strong>Key Trends:</strong>
            </p>
            <ul>
              {trendCategory.trends?.map((trend, trendIndex) => (
                <li key={trendIndex}>{trend}</li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            How to Stay Ahead in the Digital Revolution
          </h2>
          <ul>
            {stayingAheadTips.map((tip, index) => (
              <li key={index}>
                <strong>{tip.title}: </strong>
                {tip.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            The digital revolution is more than just a technological shift—it’s
            a fundamental transformation in how we live, work, and connect with
            the world. Innovations in AI, blockchain, IoT, quantum computing,
            and beyond are reshaping industries, economies, and human
            interactions at an unprecedented pace.
          </p>
          <p>
            To thrive in this rapidly evolving landscape, staying informed,
            adaptable, and proactive is key. By embracing emerging trends,
            continuous learning, and collaboration, you can not only navigate
            change effectively but also become a driving force in shaping the
            future. The opportunities are limitless—the question is, how will
            you leverage technology to innovate, create, and make an impact?
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            Explore more insights into{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Navigating the Digital Revolution: Emerging Tech Trends" && (
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
              onClick={() => router.push("/about-us/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            for the latest updates, expert tips, and industry analysis!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
