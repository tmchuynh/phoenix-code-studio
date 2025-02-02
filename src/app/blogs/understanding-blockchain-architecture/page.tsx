"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { blockchainContent } from "@/lib/blog-constants";
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
                        className="text-sm lowercase cursor-default"
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
            Blockchain technology is transforming industries by offering a
            secure, decentralized, and transparent method for storing and
            transferring data. Unlike traditional centralized databases,
            blockchain relies on distributed ledger technology (DLT) to ensure
            immutability, security, and trust in transactions.
          </p>
          <p>
            Originally developed to support cryptocurrencies like Bitcoin and
            Ethereum, blockchain has evolved into a versatile solution impacting
            a wide range of industries. From supply chain management and finance
            to healthcare, identity verification, and digital contracts,
            businesses are leveraging blockchain to enhance efficiency,
            security, and automation. As blockchain adoption accelerates,
            innovations such as smart contracts, decentralized finance (DeFi),
            non-fungible tokens (NFTs), and enterprise blockchain solutions are
            shaping the future of digital transactions. Governments,
            corporations, and startups are exploring its potential to increase
            transparency, reduce fraud, and streamline operations.
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
            Blockchain technology is continuously evolving, providing
            decentralization, transparency, and security across various
            industries. While early adoption was centered around
            cryptocurrencies, blockchain is now driving innovations in finance,
            healthcare, supply chains, real estate, and digital identity
            management. As businesses and governments explore new use cases, the
            potential for blockchain to revolutionize digital infrastructure is
            becoming increasingly clear.
          </p>
          <p>
            Despite existing challenges like scalability, interoperability,
            regulatory uncertainty, and energy consumption, continuous
            advancements—such as Layer 2 scaling solutions, cross-chain
            communication protocols, and energy-efficient consensus
            mechanisms—are actively addressing these issues. With the rise of
            decentralized finance (DeFi), non-fungible tokens (NFTs), and
            enterprise blockchain solutions, the adoption of blockchain is
            accelerating across both public and private sectors. The future of
            blockchain is closely tied to emerging technologies like artificial
            intelligence (AI), the Internet of Things (IoT), and quantum
            computing. These integrations will enhance blockchain’s
            capabilities, enabling secure automation, smarter contracts, and
            data integrity at an unprecedented scale. Additionally,
            government-backed digital currencies (CBDCs) are gaining traction,
            signaling mainstream acceptance of blockchain-powered financial
            systems.
          </p>
          <p>
            Whether in finance, healthcare, logistics, or governance, blockchain
            is reshaping the future of trustless, peer-to-peer transactions.
            Businesses and individuals that embrace blockchain solutions early
            on will gain a competitive advantage in the rapidly evolving digital
            economy. Staying informed and adapting to blockchain-driven
            innovations is key to thriving in this new era of decentralized
            technology. As blockchain technology continues to mature, its role
            in shaping the next generation of digital transformation is
            undeniable. The question is no longer if blockchain will
            revolutionize industries—but how soon you will be a part of that
            revolution.
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
            <Button
              onClick={() => router.push("/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            and stay updated on blockchain trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
