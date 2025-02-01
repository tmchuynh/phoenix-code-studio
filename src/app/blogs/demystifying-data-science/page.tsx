"use client";

import { Badge } from "@/components/ui/badge";
import { dataScienceResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Demystifying Data Science: Transforming Data into Actionable
            Insights
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Demystifying Data Science: Transforming Data into Actionable Insights" && (
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
            In today's digital age, data is more than just numbers—it’s a
            powerful asset that drives decision-making and fuels innovation.
            Data science is the art of extracting meaningful insights from raw
            data, using statistics, machine learning, and analytical techniques
            to solve complex problems across industries. From predicting
            customer behavior to detecting fraud and optimizing business
            operations, data science plays a crucial role in helping
            organizations make informed, data-driven decisions. By leveraging
            AI, big data, and predictive analytics, businesses can identify
            patterns, automate processes, and unlock new opportunities for
            growth. Understanding data science means bridging the gap between
            raw information and strategic action. As technology advances, the
            ability to harness data effectively becomes a key competitive
            advantage—making data science one of the most sought-after skills in
            today’s workforce.
          </p>
          <p>
            Data science is revolutionizing the way businesses, industries, and
            organizations solve problems and make strategic decisions. In
            today’s data-driven world, companies generate vast amounts of
            information every second—from customer interactions and financial
            transactions to social media engagement and IoT sensor data. The
            ability to harness this data effectively is what separates industry
            leaders from the rest.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Data Science?
          </h2>
          <p>
            <strong>Data science</strong> is revolutionizing the way businesses
            and industries solve problems and make decisions. With the explosion
            of data in today’s digital age, organizations are leveraging data
            science to uncover patterns, predict trends, and drive innovation.
            In this blog, we’ll explore what data science is, how it works, and
            the key components that transform raw data into actionable insights.
            Data science is an interdisciplinary field that combines statistics,
            computer science, and domain expertise to analyze and interpret
            complex datasets. It goes beyond simply collecting data—it involves
            cleaning, processing, and analyzing data to extract meaningful
            patterns and insights that inform decision-making.
          </p>
          <p>
            At its core, data science is an interdisciplinary field that blends
            elements of statistics, computer science, machine learning, and
            domain expertise to analyze, interpret, and extract knowledge from
            structured and unstructured data. It is not just about collecting
            information—it involves cleaning, processing, and analyzing data to
            uncover patterns, make predictions, and support data-driven
            decision-making.
          </p>
        </section>

        {dataScienceResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            {categoryItem.category === "Data Science Workflow" ? (
              <>
                <p>
                  Data science is a multi-step process that involves collecting,
                  processing, and analyzing data to derive meaningful
                  conclusions.
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  {categoryItem.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <ul>
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
            The Role of Artificial Intelligence in Data Science
          </h2>
          <p>
            Artificial Intelligence (AI) is closely linked to data science,
            enhancing the ability to process vast amounts of data quickly and
            make intelligent decisions. AI-powered techniques such as deep
            learning, natural language processing, and automation help
            businesses uncover insights that would be impossible to find
            manually.
          </p>
          <p>Some examples of AI-driven data science applications include:</p>
          <ul>
            <li>Chatbots that provide instant customer support</li>
            <li>
              Recommendation systems (Netflix, Amazon, Spotify) that personalize
              user experiences
            </li>
            <li>
              Fraud detection algorithms that monitor transactions in real-time
            </li>
            <li>
              Healthcare AI that predicts disease risks based on patient history
            </li>
          </ul>
          <p>
            The synergy between AI and data science is shaping the future of
            technology, making processes more efficient and unlocking new
            opportunities for innovation.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Data science is a powerful tool for unlocking the potential of data
            and transforming it into actionable insights. Whether you’re a
            business leader looking to harness data for growth or an aspiring
            data scientist exploring this dynamic field, understanding the
            principles and tools of data science is key to navigating today’s
            data-driven world.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Demystifying Data Science: Transforming Data into Actionable Insights" && (
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
            and stay ahead in the ever-evolving landscape of data.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
