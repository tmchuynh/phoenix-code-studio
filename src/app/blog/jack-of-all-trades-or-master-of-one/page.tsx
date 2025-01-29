"use client";

import { Badge } from "@/components/ui/badge";
import { jackOfAllTradesContent } from "@/lib/blog-constants";
import React from "react";

const JackOfAllTradesBlog = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            {jackOfAllTradesContent.intro.title}
          </h1>
          <p>{jackOfAllTradesContent.intro.description}</p>
          <div className="flex justify-center space-x-2">
            <Badge variant={"outline"} className="text-sm">
              #career
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #business
            </Badge>
          </div>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {jackOfAllTradesContent.origin.title}
          </h2>
          <p>{jackOfAllTradesContent.origin.description}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {jackOfAllTradesContent.benefits.title}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {jackOfAllTradesContent.benefits.points.map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.title}:</strong> {benefit.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {jackOfAllTradesContent.howToBecome.title}
          </h2>
          <p>{jackOfAllTradesContent.howToBecome.description}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {jackOfAllTradesContent.tips.title}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {jackOfAllTradesContent.tips.points.map((tip, index) => (
              <li key={index}>
                <strong>{tip.title}:</strong> {tip.description}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on <strong>Personal Development</strong>, check
            out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and explore strategies to enhance your skills and mindset.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default JackOfAllTradesBlog;
