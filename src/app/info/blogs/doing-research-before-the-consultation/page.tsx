"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { researchBeforeConsultation } from "@/lib/blog-constants";
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
            Should The Customer Do Research? And Research What Before the
            Consultation?
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Should The Customer Do Research? And Research What Before the Consultation?" && (
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
            Before embarking on a web design project, it's crucial for you, as
            the customer, to have a basic understanding of both your industry
            and some key web design fundamentals. Having this knowledge allows
            you to approach the consultation with a clearer vision of what you
            want, enabling a more productive and efficient discussion. When you
            understand the trends, challenges, and opportunities within your
            industry, you'll be able to convey your specific business needs and
            how they align with your website’s goals. Additionally,
            familiarizing yourself with core design principles—such as user
            experience (UX), mobile responsiveness, and visual hierarchy—will
            empower you to make more informed decisions about the design
            process. This proactive approach ensures that your designer has the
            context they need to create a website that truly reflects your brand
            and objectives, ultimately leading to a better collaboration and a
            final product that meets or exceeds your expectations.
          </p>
        </header>

        {researchBeforeConsultation.map((categoryItem, categoryIndex) => (
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
            Doing your research before your consultation can significantly
            streamline the design process and improve the end result. By
            understanding your industry, having a grasp of web design basics,
            defining your goals, and setting realistic expectations, you ensure
            that you and your designer are on the same page. This not only saves
            time but also guarantees a smoother, more successful design project.
          </p>
          <p>
            Taking the time to prepare will help you get the most out of your
            design consultation and ensure the project runs smoothly from start
            to finish. With the right research and preparation, you’ll be one
            step closer to a website that truly represents your business.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Should The Customer Do Research? And Research What Before the Consultation?" && (
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
              onClick={() => router.push("/info/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            and stay updated on the latest trends and best practices in the
            industry.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
