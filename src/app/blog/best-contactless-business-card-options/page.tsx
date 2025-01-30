"use client";

import { Badge } from "@/components/ui/badge";
import { contactlessCardOptions } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const ContactlessBusinessCardsBlog = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Best Contactless Business Card Options
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "Best Contactless Business Card Options" && (
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
            In today’s fast-paced, digital world, networking is evolving, and
            contactless business cards are leading the way. Gone are the days of
            carrying stacks of paper cards that get lost or forgotten—smart,
            digital alternatives now make sharing contact information seamless,
            eco-friendly, and more efficient. With just a tap or scan,
            contactless business cards allow professionals to instantly share
            phone numbers, emails, websites, social media profiles, and even
            payment details. They work across devices without the need for an
            app, ensuring effortless connections wherever you go. Beyond
            convenience, these modern business cards leave a lasting impression,
            showcasing innovation and adaptability in an increasingly digital
            landscape. Whether you're an entrepreneur, freelancer, or corporate
            professional, making the switch to contactless networking helps you
            stay ahead while reducing waste and embracing a smarter way to
            connect.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            How Can Analytics Help You?
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-balance">
            <li>
              <strong>Measure Networking Success: </strong>See how often your
              card is scanned and which contacts are engaging.
            </li>
            <li>
              <strong>Improve Follow-Ups: </strong>Use lead capture data to
              follow up with interested connections.
            </li>
            <li>
              <strong>Optimize Your Profile: </strong>If one link gets more
              clicks than others, adjust your profile to highlight key content.
            </li>
            <li>
              <strong>Enhance Marketing Efforts: </strong>Track networking event
              performance and measure ROI.
            </li>
          </ul>
        </section>

        {contactlessCardOptions.map((card, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {card.name}
            </h2>
            <p>{card.description}</p>

            <h3 className="text-xl font-medium">Features:</h3>
            <ul className="list-disc pl-6 space-y-1 text-balance grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7">
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {card.productOptions && (
              <div>
                <h3 className="text-xl font-medium">Product Options:</h3>
                <ul className="list-disc pl-6 space-y-1 text-balance grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7">
                  {card.productOptions.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            )}

            {card.analytics && (
              <div>
                <h3 className="text-xl font-medium">Analytics:</h3>
                <p>{card.analytics}</p>
              </div>
            )}
          </section>
        ))}

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title === "Best Contactless Business Card Options" && (
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
            and start enhancing your communication skills today.
          </p>
        </footer>
      </article>
    </main>
  );
};

export default ContactlessBusinessCardsBlog;
