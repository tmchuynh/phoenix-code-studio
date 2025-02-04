"use client";
import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { booksToRead } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Books to Read as a Developer
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "Books to Read as a Developer" && (
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
                            className="text-sm lowercase cursor-default"
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
            Choosing a career in tech means embracing a lifelong journey of
            learning and adaptation. The industry is constantly evolving, with
            new programming languages, frameworks, tools, and best practices
            emerging all the time. Staying ahead requires curiosity, dedication,
            and a willingness to continuously expand your skill set. But then
            again, isn’t that true for any career? Growth and improvement are
            essential in every field, and technology is no exception. The best
            developers, engineers, and tech professionals are those who actively
            seek out knowledge, refine their craft, and adapt to change. Whether
            you’re learning a new coding language, mastering a complex
            algorithm, or understanding better ways to collaborate with a team,
            improvement is the key to success. The ever-changing nature of tech
            might seem overwhelming, but it’s also what makes it so exciting.
            Every project, challenge, and breakthrough presents an opportunity
            to learn something new. In this dynamic field, the willingness to
            stay curious and continuously grow is what sets apart great
            professionals from the rest.
          </p>
        </header>

        {booksToRead.map((book, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {book.category}
            </h2>
            <p>{book.description}</p>
            {book.trends?.map((details, index) => (
              <p key={index}>{details}</p>
            ))}
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            The world of software development is constantly evolving, and so is
            the knowledge that fuels it. Whether you're a beginner looking for
            foundational books or an experienced developer searching for deeper
            insights, there are countless resources that can enhance your
            skills, expand your thinking, and help you stay ahead in the
            industry.
          </p>
          <p>
            But with so many books available, no one can read them all! That's
            why we want to hear from you. Which programming, design, or
            career-focused books have had the biggest impact on you? As new
            developers join the industry and groundbreaking publications emerge,
            sharing recommendations can help everyone discover hidden gems and
            essential reads that make a difference.
          </p>
        </section>

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
            and stay informed about best practices and emerging trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
