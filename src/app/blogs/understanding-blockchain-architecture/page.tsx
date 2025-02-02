"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { blockchainContent } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Understanding Blockchain Architecture: A Deep Dive into
            Decentralized Systems
          </h1>
          <div>
            {blogs.map((blog, index) =>
              blog.title === "Understanding Blockchain Architecture" ? (
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
            Blockchain is revolutionizing industries by providing a secure,
            decentralized, and immutable way to store and transfer data. From
            cryptocurrency to supply chain management, blockchain technology is
            reshaping the digital landscape.
          </p>
        </header>

        {blockchainContent.map((section, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {section.category}
            </h2>
            <p>{section.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {section.items?.map((topic, trendIndex) => (
                <li key={trendIndex}>
                  <strong>{topic.title}: </strong>
                  {topic.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion: The Future of Blockchain Technology
          </h2>
          <p>
            Blockchain technology is continuously evolving, offering
            decentralization, transparency, and security across various
            industries. Despite challenges like scalability and energy
            efficiency, ongoing advancements are addressing these issues.
          </p>
          <p>
            Whether in finance, healthcare, or logistics, blockchain is shaping
            the future of trustless, peer-to-peer transactions. Staying informed
            and integrating blockchain solutions can provide businesses with a
            competitive edge in this digital era.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p>
            Explore more insights on{" "}
            {blogs.map((blog) =>
              blog.title === "Understanding Blockchain Architecture"
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
            and stay updated on blockchain trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
