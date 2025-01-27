"use client";

import { Badge } from "@/components/ui/badge";
import {
  innovations,
  applications,
  challenges,
  futureTrends,
} from "@/lib/content-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Revolutionizing Connectivity: Innovations in IoT Development
          </h1>
          <p className="text-sm text-gray-500">
            By Samuel Green – February 25, 2025
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #IoT
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Technology
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Connectivity
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Innovation
            </Badge>
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
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
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
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Innovations in IoT Development
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {innovations.map((innovation, index) => (
              <li key={index}>{innovation}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Applications of IoT
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {applications.map((application, index) => (
              <li key={index}>
                <span className="font-bold">{application.title}:</span>{" "}
                {application.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Challenges Facing IoT Development
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {challenges.map((challenge, index) => (
              <li key={index}>
                <span className="font-bold">{challenge.title}:</span>{" "}
                {challenge.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Future of IoT
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {futureTrends.map((trend, index) => (
              <li key={index}>
                <span className="font-bold">{trend.title}:</span>{" "}
                {trend.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
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
