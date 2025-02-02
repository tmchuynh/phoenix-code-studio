"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { consultationResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";

const BlogPage = () => {
  const router = useRouter();

  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What To Ask During A Consultation?
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "What To Ask During A Consultation?" && (
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
            A consultation is an essential first step in any design project,
            where you can define your goals, expectations, and project scope.
            Whether you’re meeting with a designer for a website, branding, or
            any other digital service, asking the right questions during the
            consultation can make all the difference in ensuring a successful
            partnership. In this blog post, we’ll walk you through the key
            questions you should ask during your consultation to set the stage
            for a successful project.
          </p>
        </header>

        {consultationResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            <ul>
              {categoryItem.items?.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p className="mb-4">
            A consultation is an important step in setting the foundation for a
            successful design project. By asking the right questions, you ensure
            that both you and your designer are aligned on expectations,
            timelines, and costs. Clear communication at the beginning of the
            project helps avoid misunderstandings and sets the stage for a
            smooth and successful collaboration.
          </p>
          <p className="mb-4">
            Remember, your designer is a partner in this process, and their
            expertise can help bring your vision to life. By asking these
            questions, you’ll have a better understanding of how they work, what
            to expect, and how to create a final design that exceeds your
            expectations.
          </p>
          <p>
            Ready to start your next project? Make sure to ask these essential
            questions during your consultation to set the stage for success!
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title === "What To Ask During A Consultation?" && (
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
            , visit our{" "}
            <Button
              onClick={() => router.push("/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            for more design tips and inspiration.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
