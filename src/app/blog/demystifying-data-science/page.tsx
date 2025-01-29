"use client";

import { Badge } from "@/components/ui/badge";
import { dataScienceResources } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Demystifying Data Science: Transforming Data into Actionable
            Insights
          </h1>
          <p>By Emily Carter – March 18, 2025</p>
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
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #DataScience
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Analytics
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #MachineLearning
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Insights
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            <strong>Data science</strong> is revolutionizing the way businesses
            and industries solve problems and make decisions. With the explosion
            of data in today’s digital age, organizations are leveraging data
            science to uncover patterns, predict trends, and drive innovation.
            In this blog, we’ll explore what data science is, how it works, and
            the key components that transform raw data into actionable insights.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Data Science?
          </h2>
          <p>
            Data science is an interdisciplinary field that combines statistics,
            computer science, and domain expertise to analyze and interpret
            complex datasets. It goes beyond simply collecting data—it involves
            cleaning, processing, and analyzing data to extract meaningful
            patterns and insights that inform decision-making.
          </p>
        </section>

        {dataScienceResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            {categoryItem.category === "Data Science Workflow" ? (
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
            For more insights on <strong>Data Science</strong> and{" "}
            <strong>Analytics</strong>, visit our{" "}
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
