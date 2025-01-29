"use client";

import { Badge } from "@/components/ui/badge";
import { emergingTechTrends, stayingAheadTips } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Navigating the Digital Revolution: Emerging Tech Trends
          </h1>
          <p>By Sophia White – November 20, 2024</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #EmergingTrends
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #DigitalRevolution
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Technology
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Innovation
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            The <strong>digital revolution</strong> is transforming industries,
            redefining how we live and work, and driving technological
            innovation at an unprecedented pace. Staying ahead of the curve in
            this rapidly evolving landscape is essential for individuals and
            businesses alike. In this blog, we’ll explore the top emerging tech
            trends shaping the digital future and their potential to disrupt
            industries worldwide.
          </p>
        </section>

        {emergingTechTrends.map((trendCategory, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {index + 1}. {trendCategory.category}
            </h2>
            <p>{trendCategory.description}</p>
            <p>
              <strong>Key Trends:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {trendCategory.trends.map((trend, trendIndex) => (
                <li key={trendIndex}>{trend}</li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            How to Stay Ahead in the Digital Revolution
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {stayingAheadTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            The digital revolution is more than a technological shift—it’s a
            reimagining of how we live, work, and connect. By staying informed
            about emerging trends, you can navigate this revolution with
            confidence and leverage its potential to shape a better future.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            Explore more insights into <strong>Technology</strong> and{" "}
            <strong>Innovation</strong> on our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            for the latest updates, expert tips, and industry analysis!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
