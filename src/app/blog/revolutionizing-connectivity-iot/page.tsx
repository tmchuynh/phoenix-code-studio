"use client";

import { Badge } from "@/components/ui/badge";
import {
  applications,
  challenges,
  futureTrends,
  innovations,
} from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Revolutionizing Connectivity: Innovations in IoT Development
          </h1>
          <p className="text-sm text-gray-500">
            By Samuel Green – February 25, 2025
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge className="text-sm">#IoT</Badge>
            <Badge className="text-sm">#Technology</Badge>
            <Badge className="text-sm">#Connectivity</Badge>
            <Badge className="text-sm">#Innovation</Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg">
            The <strong>Internet of Things (IoT)</strong> is reshaping how we
            live, work, and interact with technology. By connecting devices,
            sensors, and systems, IoT is driving a new era of innovation,
            improving efficiency, and transforming industries. In this blog,
            we’ll dive into the latest advancements in IoT development and
            explore how they’re revolutionizing connectivity in our daily lives.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            What is IoT?
          </h2>
          <p className="text-lg">
            The Internet of Things refers to a network of interconnected devices
            that collect, share, and act on data. These devices range from smart
            home appliances and wearable tech to industrial machinery and
            autonomous vehicles. IoT bridges the gap between the physical and
            digital worlds, enabling real-time monitoring, control, and
            decision-making.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Innovations in IoT Development
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {innovations.map((innovation, index) => (
              <li key={index}>{innovation}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Applications of IoT
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {applications.map((application, index) => (
              <li key={index}>{application}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Challenges Facing IoT Development
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            The Future of IoT
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {futureTrends.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Conclusion
          </h2>
          <p className="text-lg">
            The Internet of Things is transforming how we connect and interact
            with the world around us. By enabling smarter solutions, improving
            efficiency, and fostering innovation, IoT is shaping a future where
            connectivity knows no bounds. Whether in homes, industries, or
            cities, IoT’s potential is limitless.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            To stay updated on the latest in <strong>IoT</strong> and{" "}
            <strong>Technology</strong>, explore our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            for more insights and trends in this groundbreaking field.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
