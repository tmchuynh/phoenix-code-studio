"use client";

import { Badge } from "@/components/ui/badge";
import { contactlessCardOptions } from "@/lib/blog-constants";
import React from "react";

const ContactlessBusinessCardsBlog = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Best Contactless Business Card Options
          </h1>
          <div className="flex justify-center space-x-2">
            <Badge variant={"outline"} className="text-sm">
              #resources
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #business
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #career
            </Badge>
          </div>
        </header>

        {contactlessCardOptions.map((card, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {card.name}
            </h2>
            <p>{card.description}</p>

            <h3 className="text-xl font-medium">Features:</h3>
            <ul className="list-disc pl-6 space-y-1">
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {card.productOptions && (
              <div>
                <h3 className="text-xl font-medium">Product Options:</h3>
                <ul className="list-disc pl-6 space-y-1">
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
            For more insights on <strong>Writing and Development</strong>, check
            out our{" "}
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
