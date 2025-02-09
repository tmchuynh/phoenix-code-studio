"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { uxDesignResources } from "@/lib/blog-constants";
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
            The Importance of User Experience in Web Design
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "The Importance of User Experience in Web Design" && (
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
            A website is more than just a digital presence—it’s an interactive
            experience that shapes how users perceive your brand. User
            Experience (UX) design plays a crucial role in ensuring that
            visitors not only find what they need but also enjoy the process,
            leading to higher engagement, retention, and conversions. A
            well-designed UX focuses on usability, accessibility, and intuitive
            navigation, ensuring that every element—from page layout to
            interactive features—works seamlessly and efficiently. A poor user
            experience, on the other hand, leads to frustration, high bounce
            rates, and lost business opportunities. Beyond aesthetics, UX design
            enhances functionality by prioritizing speed, responsiveness, and
            accessibility for all users, including those with disabilities. By
            implementing user research, wireframing, and usability testing,
            businesses can create websites that not only look great but also
            provide a smooth, frustration-free experience.
          </p>
        </header>

        <section className="space-y-4"></section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is User Experience (UX)?
          </h2>
          <p>
            <strong>User experience (UX)</strong> is a vital aspect of web
            design that directly influences how users interact with a website. A
            well-crafted UX ensures seamless navigation, clear information flow,
            and an intuitive design that guides visitors toward their goals with
            minimal friction. When a website is fast, responsive, and easy to
            use, users are more likely to stay engaged, complete desired
            actions, and return for future visits. Conversely, a poor
            UX—characterized by slow load times, confusing layouts, or
            accessibility barriers—can lead to frustration, high bounce rates,
            and lost opportunities. Investing in UX design not only enhances
            user satisfaction but also strengthens brand credibility and fosters
            long-term customer relationships.
          </p>
          <p>
            Great UX goes beyond aesthetics; it prioritizes functionality, ease
            of use, and accessibility to create a meaningful and enjoyable
            experience. Every element, from responsive design and performance
            optimization to thoughtful visual hierarchy and clear calls to
            action, contributes to a website’s effectiveness. By focusing on UX
            best practices, businesses can differentiate themselves in a crowded
            digital landscape, improve customer retention, and drive
            conversions. Prioritizing UX isn’t just about making a website look
            good—it’s about delivering value, ensuring usability, and creating
            lasting positive impressions.
          </p>
        </section>

        {uxDesignResources.map((categoryItem, categoryIndex) => (
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
            Conclusion: The Power of UX in Web Design
          </h2>
          <p>
            User experience (UX) is more than just aesthetics—it's the
            foundation of a successful website. A well-designed UX ensures that
            visitors not only find what they need quickly but also enjoy their
            interaction with your site, leading to higher engagement,
            satisfaction, and conversions. A seamless, intuitive, and accessible
            experience fosters trust, strengthens brand credibility, and builds
            long-term relationships with users. By prioritizing UX, businesses
            can create a digital presence that is not only visually appealing
            but also functional and user-friendly. From improving site speed and
            navigation to enhancing accessibility and responsiveness, every
            aspect of UX contributes to making a website more effective. A
            strong user experience doesn’t just benefit visitors—it drives
            measurable business outcomes, from increased customer retention to
            higher conversion rates.
          </p>
          <p>
            Whether you’re building a new website or optimizing an existing one,
            focusing on UX is a smart investment that pays dividends in
            engagement, customer satisfaction, and brand loyalty. The digital
            landscape is constantly evolving, and keeping up with UX best
            practices is essential for staying competitive.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more posts like this about{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "The Importance of User Experience in Web Design" && (
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
            . Stay connected with us for the latest trends in{" "}
            <strong>UX/UI Design</strong> and <strong>Web Design</strong>!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
