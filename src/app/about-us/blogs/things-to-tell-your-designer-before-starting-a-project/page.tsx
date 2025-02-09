"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { startingAProject } from "@/lib/blog-constants";
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
            Things To Tell Your Designer Before Starting A Project
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Things To Tell Your Designer Before Starting A Project" && (
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
            Starting a design project is exciting, but clear communication is
            key to making sure everything goes smoothly. Whether you’re working
            on a new website, a logo, or a rebranding project, there are several
            essential things to tell your designer before getting started.
            Properly setting expectations and providing the right context will
            help the designer understand your vision and create a design that
            meets your needs.
          </p>
        </header>

        {startingAProject.map((categoryItem, categoryIndex) => (
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
            Clear communication is the foundation of any successful design
            project. By providing your designer with detailed information about
            your business goals, target audience, brand identity, and other
            important factors, you ensure that they can create a design that
            truly reflects your vision. Taking the time to have these
            conversations upfront will save you time and resources in the long
            run and ultimately lead to a better outcome.
          </p>
          <p className="mb-4">
            The more transparent and collaborative the process, the more likely
            you are to achieve a final design that meets your expectations and
            exceeds your goals.
          </p>
          <p>
            Now that you’re equipped with these insights, let’s make sure your
            next design project is a success!
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Things To Tell Your Designer Before Starting A Project" && (
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
              onClick={() => router.push("/about-us/blogs")}
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
