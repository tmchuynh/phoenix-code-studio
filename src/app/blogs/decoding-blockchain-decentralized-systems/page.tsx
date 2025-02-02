"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { blockchainResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Decoding Blockchain: Exploring the World of Decentralized Systems
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Decoding Blockchain: Exploring the World of Decentralized Systems" && (
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
            Blockchain technology is revolutionizing industries by introducing
            secure, transparent, and decentralized systems that eliminate the
            need for intermediaries. Originally developed as the foundation for
            cryptocurrencies like Bitcoin, blockchain has evolved into a
            game-changing innovation with applications in finance, supply chain,
            healthcare, and beyond. At its core, blockchain operates as a
            distributed ledger, recording transactions across a network of
            computers in a way that is immutable and tamper-proof. This
            decentralized structure ensures greater security, trust, and
            efficiency, making it an ideal solution for smart contracts, digital
            identity verification, and transparent financial transactions. As
            businesses and governments explore real-world blockchain
            applications, understanding its potential and challenges becomes
            crucial. From enhancing cybersecurity to revolutionizing digital
            ownership, blockchain is reshaping the way we store, verify, and
            exchange information—ushering in a new era of trustless,
            decentralized ecosystems.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Blockchain?
          </h2>
          <p>
            <strong>Blockchain technology</strong> is revolutionizing industries
            by offering secure, decentralized systems that go beyond traditional
            data storage and transaction methods. From cryptocurrency to supply
            chain management, the applications of blockchain are vast and
            ever-expanding. In this blog, we’ll break down what blockchain is,
            how it works, and its potential to reshape our digital landscape.
          </p>
          <p>
            At its core, blockchain is a distributed ledger technology (DLT)
            that records transactions across multiple computers in a secure and
            transparent way. Unlike traditional databases, blockchain operates
            on a decentralized network, meaning no single entity controls the
            system. Each transaction is recorded in a "block," and these blocks
            are linked together in a chronological "chain."
          </p>
        </section>

        {blockchainResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            {categoryItem.category === "How Blockchain Works" ? (
              <ol className="list-decimal pl-6 space-y-2">
                {categoryItem.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ol>
            ) : (
              <ul>
                {categoryItem.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p className="mb-4">
            Blockchain technology is more than just a buzzword—it’s a
            revolutionary force reshaping industries, enhancing security, and
            redefining digital interactions. By enabling decentralization,
            transparency, and immutability, blockchain is creating trustless
            ecosystems that empower individuals and businesses alike.
          </p>
          <p className="mb-4">
            From finance and healthcare to supply chain and intellectual
            property, blockchain’s real-world applications continue to expand,
            proving its potential to solve complex challenges and drive
            innovation.
          </p>
          <p className="mb-4">
            Whether you’re a developer, entrepreneur, investor, or tech
            enthusiast, understanding blockchain is no longer optional—it’s a
            necessity. As this technology evolves, those who embrace and adapt
            to it will be at the forefront of the digital revolution.
          </p>
          <p>
            The future of blockchain is just beginning, and its transformative
            impact is undeniable. The question is: How will you be a part of it?
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Decoding Blockchain: Exploring the World of Decentralized Systems" && (
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
            and stay informed about the latest advancements in this
            groundbreaking field.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
