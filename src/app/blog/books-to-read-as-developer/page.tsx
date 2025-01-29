"use client";
import { Badge } from "@/components/ui/badge";
import { booksToRead } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Books to Read as a Developer
          </h1>
          <p>
            Choosing a career in tech is choosing an endless life of learning.
            But then again, which career isn't like that? Improvement is
            critical after all.
          </p>
          <div className="flex justify-center space-x-2">
            <Badge variant={"outline"} className="text-sm">
              #books
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #self-development
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #career
            </Badge>
          </div>
        </header>

        {booksToRead.map((book, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {book.title}
            </h2>
            <p>{book.description}</p>
            {book.details.map((details, index) => (
              <p key={index}>{details}</p>
            ))}
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Are there any other must-read books you'd recommend? As new
            developers enter the industry, fresh editions and groundbreaking
            books continue to emerge. Which ones do you think deserve a spot on
            this list? With so many valuable resources out there, no one can
            read them all—but we can share and learn together!
          </p>
          <p>Happy coding!</p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on <strong>Software Development</strong>, check
            out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and stay informed about best practices and emerging trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
