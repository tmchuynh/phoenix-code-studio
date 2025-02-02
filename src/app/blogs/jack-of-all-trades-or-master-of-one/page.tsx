"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { jackOfAllTradesContent } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const JackOfAllTradesBlog = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Who's the Better Hire? - Jack of All Trades OR Master of One
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Who's the Better Hire? - Jack of All Trades OR Master of One" && (
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
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What's a Jack of All Trades?
          </h2>
          <p>
            The phrase "Jack of all trades, master of none" refers to a person
            who is competent in many skills but is not exactly outstanding in
            any of them. Even though "jack of all trades" sometimes is used as
            an insult, it did not begin as one. The complete saying goes "A jack
            of all trades is a master of none, but oftentimes better than a
            master of one." It\'s intended as a compliment and means that a
            person as a generalist rather than a specialist, being versatile and
            adept is better.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Origin of the Saying
          </h2>
          <p>
            The phrase dates back to the 14th century. At this time "Jack" was a
            typical name to describe the ordinary man. The working class often
            had to supplement their income by doing other jobs. A builder would
            supplement his income by painting or farming as well. One very
            well-known jack of all trades was William Shakespeare. He would help
            with the stage, the set, the costumes, and try directing as well.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            How to Become a Jack of All Trades?
          </h2>
          <p>
            When learning new skills (aka on your way to becoming a jack of all
            trades), you learn very useful skills. Some of these benefits
            include better understanding of your own strengths and weaknesses as
            well as learning time management and healthy boundaries.
          </p>
        </section>

        {jackOfAllTradesContent.map((jack, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {jack.category}
            </h2>
            <ul>
              {jack.items?.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Who's the Better Hire? - Jack of All Trades OR Master of One" && (
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
            , check out our{" "}
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
