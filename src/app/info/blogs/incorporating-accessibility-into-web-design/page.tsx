"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { accessibilityContent } from "@/lib/blog-constants";
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
            Making the Web Inclusive: How to Incorporate Accessibility into Web
            Design
          </h1>
          <div>
            {blogs.map((blog, index) =>
              blog.title ===
              "Making the Web Inclusive: How to Incorporate Accessibility into Web Design" ? (
                <div key={index}>
                  <p>
                    <span className="font-bold">Written By: </span>
                    {blog.author}
                  </p>
                  <p>{blog.date}</p>
                  <div className="flex space-x-2 mb-8">
                    {blog.topics.map((topic, index) => (
                      <Badge
                        variant={"accent"}
                        className="text-sm lowercase cursor-default"
                        key={index}
                      >
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
          <p>
            Websites serve as the gateway to information, services, and
            opportunities, connecting people across the globe. However, many
            websites still fail to accommodate users with disabilities, creating
            barriers to accessibility and limiting equal participation in the
            digital world.
          </p>
          <p>
            With over 1 billion people worldwide living with a disability,
            ensuring inclusive web design is not just a legal or ethical
            obligation—it’s a way to create a more equitable, user-friendly
            internet for all. By implementing accessible design principles,
            businesses and content creators can expand their audience reach,
            improve usability, and enhance overall user experience for everyone,
            not just those with disabilities. Prioritizing web accessibility
            means removing barriers, improving engagement, and ensuring that
            digital spaces are truly open and usable for all
            individuals—regardless of their abilities.
          </p>
        </header>

        {accessibilityContent.map((section, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {section.category}
            </h2>
            <p>{section.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {section.items?.map((topic, trendIndex) => (
                <li key={trendIndex}>
                  <strong>{topic.title}: </strong>
                  {topic.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion: Make the Web a More Inclusive Place
          </h2>
          <p>
            Web accessibility isn’t just about meeting legal requirements—it’s
            about creating an inclusive, seamless digital experience that
            welcomes all users, regardless of their abilities. By designing with
            accessibility in mind, we ensure that everyone, including
            individuals with disabilities, aging populations, and those using
            assistive technologies, can fully engage with online content. A
            truly accessible web fosters equality, usability, and innovation,
            making digital spaces more navigable, efficient, and impactful.
          </p>
          <p>
            Implementing accessibility best practices doesn’t just benefit users
            with disabilities; it enhances the overall user experience (UX),
            search engine optimization (SEO), and brand reputation. Websites
            that prioritize semantic HTML, keyboard navigation, optimized
            contrast, and screen reader compatibility provide a smoother, more
            user-friendly experience for everyone. Accessible design also
            improves engagement, reduces bounce rates, and broadens audience
            reach, making it a win-win for both users and businesses.
          </p>
          <p>
            The journey to an accessible web starts with small, actionable
            steps. Optimize contrast, ensure proper heading structures, add
            descriptive alt text, and test your website with assistive
            technologies. As accessibility becomes an integral part of web
            design, we move closer to a digital world that is inclusive,
            user-friendly, and empowering for all individuals. Every effort
            towards accessibility makes a difference. Whether you’re a
            developer, designer, content creator, or business owner, embracing
            inclusive design principles today helps shape a more equitable and
            accessible web for future generations.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p>
            Explore more insights on{" "}
            {blogs.map((blog) =>
              blog.title ===
              "Making the Web Inclusive: How to Incorporate Accessibility into Web Design"
                ? blog.topics.map((topic, index) => (
                    <strong key={index} className="hover:text-tertiary">
                      #{topic}{" "}
                    </strong>
                  ))
                : null
            )}
            on our{" "}
            <Button
              onClick={() => router.push("/info/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            and stay updated on best practices and trends in web accessibility.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
