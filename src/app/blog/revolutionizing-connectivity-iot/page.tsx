"use client";

import { Badge } from "@/components/ui/badge";
import { iotResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Revolutionizing Connectivity: Innovations in IoT Development
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Revolutionizing Connectivity: Innovations in IoT Development" && (
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
            The Internet of Things (IoT) is reshaping the way devices, systems,
            and people interact, creating a seamlessly connected world where
            automation and real-time data exchange drive efficiency. From smart
            homes and wearable tech to industrial automation and healthcare
            solutions, IoT is revolutionizing connectivity across industries.
            One of the most groundbreaking innovations in IoT is the rise of
            edge computing, which processes data closer to the source, reducing
            latency and improving real-time decision-making. This is especially
            crucial in applications like autonomous vehicles, smart cities, and
            industrial IoT, where split-second responses are vital.
            Additionally, advancements in 5G technology are enabling faster,
            more reliable IoT networks, allowing millions of connected devices
            to communicate with minimal delay. Enhanced security measures, such
            as blockchain-based authentication and AI-driven threat detection,
            are also making IoT ecosystems more secure and resilient against
            cyber threats. As IoT continues to evolve, its integration with AI,
            machine learning, and cloud computing will further enhance
            automation, predictive analytics, and operational efficiency. These
            innovations are transforming industries, paving the way for a more
            intelligent, connected, and data-driven future.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is IoT?
          </h2>
          <p>
            The <strong>Internet of Things (IoT)</strong> is transforming the
            way we interact with technology, seamlessly connecting devices,
            sensors, and systems to enable real-time data collection,
            automation, and intelligent decision-making. From smart homes and
            wearable tech to industrial automation and healthcare innovations,
            IoT is enhancing efficiency, improving convenience, and reshaping
            industries worldwide.
          </p>
          <p>
            As businesses and consumers increasingly integrate IoT into their
            daily lives, the technology continues to evolve and expand, pushing
            the boundaries of what’s possible. Innovations like edge computing
            for faster processing, AI-driven predictive analytics, and enhanced
            security protocols are ensuring that IoT remains at the forefront of
            digital transformation. Whether it’s optimizing supply chains,
            creating smarter cities, or delivering personalized user
            experiences, IoT is unlocking new levels of efficiency and
            connectivity.
          </p>
          <p>
            At its core, IoT is a vast network of interconnected devices that
            collect, share, and analyze data, bridging the gap between the
            physical and digital worlds. These devices include everything from
            consumer products like smart thermostats, connected cars, and
            fitness trackers to industrial-grade solutions such as automated
            agriculture, remote equipment monitoring, and smart grid systems. By
            integrating IoT, businesses can automate processes, improve
            decision-making, and drive cost efficiency, while individuals
            benefit from greater convenience and personalization.
          </p>
          <p>
            A key enabler of IoT’s rapid growth is edge computing, which
            processes data closer to where it is generated, rather than relying
            solely on centralized cloud systems. This reduces latency and
            bandwidth usage, making it ideal for time-sensitive applications
            like autonomous vehicles, real-time healthcare monitoring, and
            industrial automation. By enabling instantaneous processing and
            decision-making, edge computing enhances both the speed and security
            of IoT applications.
          </p>
          <p>
            Beyond technology, IoT is shaping the future of supply chain
            management, smart cities, healthcare, and more. In logistics, IoT
            helps track shipments, monitor inventory in real-time, and reduce
            inefficiencies. In healthcare, remote patient monitoring and
            AI-powered diagnostics are improving patient outcomes and
            streamlining medical processes. Meanwhile, smart cities leverage IoT
            to optimize traffic flow, reduce energy consumption, and enhance
            public safety, making urban environments more sustainable and
            livable.
          </p>
          <p>
            As IoT adoption accelerates, its potential is limitless, driving
            innovation, efficiency, and automation across virtually every
            industry. Whether in business, healthcare, transportation, or
            personal use, the Internet of Things is revolutionizing the way we
            connect, communicate, and interact with the world.
          </p>
        </section>

        {iotResources.map((resource, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {resource.category}
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {resource.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            The Internet of Things is transforming how we connect and interact
            with the world around us. By enabling smarter solutions, improving
            efficiency, and fostering innovation, IoT is shaping a future where
            connectivity knows no bounds. Whether in homes, industries, or
            cities, IoT’s potential is limitless.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            To stay updated on the latest on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Revolutionizing Connectivity: Innovations in IoT Development" && (
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
            , explore our{" "}
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
