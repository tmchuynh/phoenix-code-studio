"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { webDesignResources } from "@/lib/blog-constants";
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
            What is Web Design? A Comprehensive Guide
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "What is Web Design? A Comprehensive Guide" && (
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
            Web design is the process of planning, creating, and updating
            websites. It involves a combination of graphic design, user
            experience (UX) design, and coding to build a functional and
            visually appealing site. Whether it’s a personal blog or an
            e-commerce platform, web design is crucial to establishing a strong
            online presence. A well-designed website not only enhances user
            experience but also drives business success by engaging visitors and
            encouraging them to take action.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Web Design?
          </h2>
          <p>
            <strong>Web design</strong> is the art of creating and organizing
            content on the internet. A website’s design plays a critical role in
            attracting visitors and shaping their perception of the brand.
            Effective web design combines both aesthetics and functionality to
            create a seamless user experience. It involves understanding the
            target audience, crafting a visual identity, and applying web
            technologies like HTML, CSS, and JavaScript to bring the design to
            life.
          </p>
          <p>
            Web design isn’t just about looking good—it’s about creating a
            website that works well on all devices, from desktops to
            smartphones. Responsive design ensures that a website adapts its
            layout and content to fit the screen size of the device being used.
          </p>
        </section>

        {webDesignResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            {categoryItem.category === "Core Principles of Web Design" ? (
              <ol className="list-decimal pl-6 space-y-2">
                {categoryItem.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ol>
            ) : (
              <ul>
                {categoryItem.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p className="mb-4">
            Web design is an ever-evolving field that blends creativity with
            technical expertise to create digital experiences. As more
            businesses and individuals turn to the web for communication,
            commerce, and community-building, the importance of having a
            well-designed website cannot be overstated. A well-executed website
            can help build trust, engage customers, and achieve your business
            goals.
          </p>
          <p className="mb-4">
            The future of web design continues to focus on enhancing user
            experiences through speed, accessibility, and interactivity. Whether
            you';re designing for desktop or mobile, the goal remains the
            same—to create a website that is both functional and beautiful.
          </p>
          <p>
            So, how will you make your mark on the web? The possibilities are
            limitless, and with the right design, your website can become a
            powerful tool for success.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title === "What is Web Design? A Comprehensive Guide" && (
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
            and stay informed about the latest trends in web design.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
