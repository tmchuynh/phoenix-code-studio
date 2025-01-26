"use client";

export const booksToRead = [
  {
    title: "The Pragmatic Programmer",
    description:
      "This book doesn't focus on any one programming language but explains logic and provides wisdom for all languages. Topics include writing code, developing a great team, managing expectations, how expensive tools don't produce better designs, and much more. A book by developers, for developers - not one to miss. Also, check out Pragmatic Programmer Tips.",
  },
  {
    title: "Refactoring: Improving the Design of Existing Code",
    description:
      "Why and when do you refactor? How do you structure classes, methods, etc.? What are unit tests? How to refactor tools? This book takes you through it all! The examples are in Java, but can be applied everywhere.",
  },
  {
    title: "Code Complete: A Practical Handbook of Software Construction",
    description:
      "Wow, 960 pages! Every aspect of software development is contained in this book - code structure, code formatting, variables, methods, team management, etc. The amount of knowledge in this book will make you thankful you picked it up.",
  },
  {
    title: "Peopleware: Productive Projects and Teams",
    description:
      "A book on managing and motivating programmers, not about programming itself. Software development is not an assembly line process. It's a creative process!",
  },
  {
    title: "Head First Design Patterns",
    description:
      "13 essential patterns of basic design explained with plenty of examples and illustrations. It's not another book with endless pages of text blocks. Hand-drawn diagrams and illustrations keep you engaged while learning the concepts.",
  },
  {
    title: "Clean Code",
    description:
      "This focuses on how to write code that is easy to read and maintain by a human being. It contains examples in Java that are helpful to illustrate the concepts.",
  },
  {
    title: "Working Effectively with Legacy Code",
    description:
      "Legacy code is not ideal to work with, but most developers will have to deal with it at some point or another. For those who understand how to approach this the right way, working with legacy code can potentially be an exciting adventure! This book will explain how to examine and stabilize legacy code.",
  },
  {
    title: "A Philosophy of Software Design",
    description:
      "This newer book introduces programming principles that lead to good, maintainable programs. The book does not focus on any particular programming language. The concepts explained are widely applicable.",
  },
];

import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Books to Read as a Developer
          </h1>
          <p className="text-lg">
            Choosing a career in tech is choosing an endless life of learning.
            But then again, which career isn't like that? Improvement is
            critical after all.
          </p>
        </header>

        {booksToRead.map((book, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              {book.title}
            </h2>
            <p className="text-lg">{book.description}</p>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Conclusion
          </h2>
          <p className="text-lg">
            Do you have other books to add to the list? As potential software
            developers are making their way into the industry, new editions and
            new books are being written. What are the ones that have to be read?
            Since one person can't have time to read them all...
          </p>
          <p className="text-lg">Happy coding!</p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
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
