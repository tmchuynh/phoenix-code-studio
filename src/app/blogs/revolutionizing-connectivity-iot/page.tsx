"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { iotResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
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
            The <strong>Internet of Things (IoT)</strong> is revolutionizing how
            we interact with technology by seamlessly connecting devices,
            sensors, and systems for real-time data collection, automation, and
            intelligent decision-making. From smart homes and wearables to
            industrial automation and healthcare, IoT enhances efficiency,
            convenience, and innovation across industries. Advancements like
            edge computing for faster processing, AI-driven predictive
            analytics, and enhanced security protocols keep IoT at the forefront
            of digital transformation. Businesses use IoT to automate
            operations, optimize supply chains, and improve decision-making,
            while individuals benefit from greater convenience and
            personalization.
          </p>
          <p>
            IoT extends from consumer products like smart thermostats and
            connected cars to industrial applications like automated
            agriculture, remote monitoring, and smart grid systems. Edge
            computing further enhances IoT by reducing latency and enabling
            real-time processing, essential for autonomous vehicles, healthcare
            monitoring, and industrial automation. Beyond technology, IoT is
            transforming smart cities, logistics, and healthcare—from tracking
            shipments and managing inventory to optimizing traffic flow and
            improving patient care. As IoT adoption accelerates, its potential
            is limitless, shaping a more connected, efficient, and intelligent
            world.
          </p>
        </section>

        {iotResources.map((resource, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {resource.category}
            </h2>
            <ul>
              {resource.items?.map((item, itemIndex) => (
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
            The Internet of Things (IoT) is revolutionizing the way we connect,
            interact, and optimize the world around us. By seamlessly
            integrating devices, data, and automation, IoT is bridging the gap
            between the digital and physical realms, unlocking new levels of
            efficiency, intelligence, and innovation across industries. From
            smart homes and connected healthcare to industrial automation and
            smart cities, IoT is transforming everyday life. Businesses are
            leveraging its power to streamline operations, enhance
            decision-making, and improve customer experiences, while consumers
            enjoy greater convenience, personalization, and security in their
            daily lives.
          </p>
          <p>
            As IoT technology continues to evolve, advancements in AI-driven
            analytics, edge computing, and enhanced security protocols will
            further expand its capabilities, making our environments smarter,
            more efficient, and more sustainable. The integration of IoT into
            industries like logistics, agriculture, and urban development is
            paving the way for a future where connectivity knows no bounds. The
            future of IoT is limitless—whether optimizing businesses,
            revolutionizing healthcare, or creating intelligent cities, it is
            shaping a world that is more connected, automated, and data-driven
            than ever before. The question is: How will you be part of this
            transformation?
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
