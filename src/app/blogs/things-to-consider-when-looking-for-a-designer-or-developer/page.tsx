"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { thingsToConsiderForDesigner } from "@/lib/blog-constants"; // Updated to use the correct array
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
            Things To Consider When Looking For A Designer
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Things to Consider When Looking For a Designer and/or Developer" && (
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
            Finding the right designer for your project is crucial to ensuring
            that the final product not only meets but exceeds your expectations.
            A designer plays a pivotal role in bringing your vision to life, and
            their work should align with your business goals and target
            audience. Whether you';re looking for a web designer to create an
            engaging online presence, a graphic designer to enhance your brand
            identity, or a UI/UX expert to improve user interaction and
            experience, there are several key factors to consider before making
            your choice. It';s important to evaluate their expertise, portfolio,
            and design process to ensure that they have the skills and
            experience to deliver the results you need. Moreover, consider their
            communication style and approach to collaboration—working with a
            designer who understands your needs and can effectively bring your
            ideas to life will ultimately lead to a smoother design process and
            a more successful final product.
          </p>
        </header>

        {thingsToConsiderForDesigner.map((categoryItem, categoryIndex) => (
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
            Choosing the right designer for your project can make all the
            difference. By considering factors such as expertise, design
            process, budget, and timeline, you can ensure that you’re partnering
            with a designer who will bring your vision to life while keeping
            your goals and expectations aligned throughout the project.
          </p>
          <p>
            Take the time to carefully evaluate potential designers to find the
            one who best understands your needs, fits within your budget, and
            can deliver a high-quality design on time.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Things to Consider When Looking For a Designer and/or Developer" && (
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
            <Button
              onClick={() => router.push("/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            and stay updated on the latest trends in design.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
