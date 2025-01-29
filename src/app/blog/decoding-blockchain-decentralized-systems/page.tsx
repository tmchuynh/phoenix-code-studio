"use client";

import { Badge } from "@/components/ui/badge";
import { blockchainResources } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Decoding Blockchain: Exploring the World of Decentralized Systems
          </h1>
          <p>By Alex Johnson – April 10, 2025</p>
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
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #Blockchain
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Decentralization
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #TechnologyTrends
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #FutureTech
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            <strong>Blockchain technology</strong> is revolutionizing industries
            by offering secure, decentralized systems that go beyond traditional
            data storage and transaction methods. From cryptocurrency to supply
            chain management, the applications of blockchain are vast and
            ever-expanding. In this blog, we’ll break down what blockchain is,
            how it works, and its potential to reshape our digital landscape.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Blockchain?
          </h2>
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
                {categoryItem.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="list-disc pl-6 space-y-1">
                {categoryItem.items.map((item, itemIndex) => (
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
          <p>
            Blockchain technology is more than a buzzword—it’s a transformative
            force with the power to disrupt industries and redefine the way we
            interact with digital systems. By offering decentralization,
            transparency, and security, blockchain is paving the way for a more
            equitable and efficient future.
          </p>
          <p>
            Whether you’re a developer, entrepreneur, or tech enthusiast,
            understanding blockchain is essential in today’s rapidly evolving
            digital world.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on <strong>Blockchain</strong> and{" "}
            <strong>Decentralized Technology</strong>, visit our{" "}
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
