"use client";

import { Badge } from "@/components/ui/badge";
import { whyWritingMattersContent } from "@/lib/company-constant";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const WhyWritingMattersBlog = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {whyWritingMattersContent.intro.title}
          </h1>
          <p>{whyWritingMattersContent.intro.description}</p>
          <div className="flex justify-center space-x-2">
            <Badge variant={"outline"} className="text-sm">
              #self-development
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #career
            </Badge>
          </div>
        </header>

        <div className="relative flex flex-col w-full text-pretty">
          <FaQuoteLeft className="absolute size-7 -top-3" />
          <p className="indent-10">
            {" "}
            In fact, the importance of writing has perhaps increased in the last
            decade or so, thanks to trends in technology...In matters of
            business, when every second counts, strong writing makes the
            difference between smooth operations and clumsy footing.
          </p>
          <FaQuoteRight className="absolute right-8 bottom-4 size-7" />
          <p className="self-end mx-24">HuffPost</p>
        </div>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.benefits.title}
          </h2>
          <p>{whyWritingMattersContent.benefits.description}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.devToBenefits.title}
          </h2>
          <p>{whyWritingMattersContent.devToBenefits.description}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.howToStart.title}
          </h2>
          <p>{whyWritingMattersContent.howToStart.description}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.tips.title}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {whyWritingMattersContent.tips.points.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.conclusion.title}
          </h2>
          <p>{whyWritingMattersContent.conclusion.description}</p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on <strong>Writing and Development</strong>, check
            out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and start enhancing your communication skills today.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default WhyWritingMattersBlog;
