"use client";

import { Badge } from "@/components/ui/badge";
import {
  dataScienceWorkflowList,
  dataScienceToolsList,
  dataScienceApplicationsList,
  dataScienceBenefitsList,
  gettingStartedInDataScienceList,
} from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Demystifying Data Science: Transforming Data into Actionable
            Insights
          </h1>
          <p className="text-sm text-gray-500">
            By Emily Carter – March 18, 2025
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge className="text-sm">#DataScience</Badge>
            <Badge className="text-sm">#Analytics</Badge>
            <Badge className="text-sm">#MachineLearning</Badge>
            <Badge className="text-sm">#Insights</Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg">
            <strong>Data science</strong> is revolutionizing the way businesses
            and industries solve problems and make decisions. With the explosion
            of data in today’s digital age, organizations are leveraging data
            science to uncover patterns, predict trends, and drive innovation.
            In this blog, we’ll explore what data science is, how it works, and
            the key components that transform raw data into actionable insights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            What is Data Science?
          </h2>
          <p className="text-lg">
            Data science is an interdisciplinary field that combines statistics,
            computer science, and domain expertise to analyze and interpret
            complex datasets. It goes beyond simply collecting data—it involves
            cleaning, processing, and analyzing data to extract meaningful
            patterns and insights that inform decision-making.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            The Data Science Workflow
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            {dataScienceWorkflowList.map((step, index) => (
              <li key={index}>
                <strong>{step.title}:</strong> {step.description}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Key Tools and Techniques in Data Science
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {dataScienceToolsList.map((tool, index) => (
              <li key={index}>
                <strong>{tool.title}:</strong> {tool.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Applications of Data Science
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {dataScienceApplicationsList.map((application, index) => (
              <li key={index}>
                <strong>{application.title}:</strong> {application.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Why Data Science Matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {dataScienceBenefitsList.map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.title}:</strong> {benefit.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Getting Started in Data Science
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {gettingStartedInDataScienceList.map((tip, index) => (
              <li key={index}>
                <strong>{tip.title}:</strong> {tip.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Conclusion
          </h2>
          <p className="text-lg">
            Data science is a powerful tool for unlocking the potential of data
            and transforming it into actionable insights. Whether you’re a
            business leader looking to harness data for growth or an aspiring
            data scientist exploring this dynamic field, understanding the
            principles and tools of data science is key to navigating today’s
            data-driven world.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
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
