"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { uxDesignResources } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import React from "react";

const BlogPage = () => {
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
                            className="text-sm lowercase"
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
            <strong>User experience (UX)</strong> is a critical factor in web
            design that determines how users engage with your website, shaping
            their journey from the moment they land on a page. A well-optimized
            UX ensures that visitors can navigate effortlessly, find the
            information they need, and complete desired actions with minimal
            friction. When a website is intuitive, fast, and visually appealing,
            users are more likely to stay engaged, explore further, and convert
            into customers or loyal followers. A poor UX, on the other hand,
            leads to frustration, higher bounce rates, and lost opportunities.
            If a site is difficult to use, slow to load, or cluttered with
            unnecessary elements, visitors may abandon it in favor of a
            competitor with a more seamless experience. Investing in UX design
            not only improves customer satisfaction but also enhances brand
            perception and credibility.
          </p>
          <p>
            User experience (UX) refers to the overall experience a person has
            when interacting with a website or digital product. It encompasses
            various elements such as usability, accessibility, visual design,
            responsiveness, and the emotional connection users feel while
            navigating your site. A well-designed UX ensures that users can
            interact with your website smoothly and efficiently, making their
            journey intuitive and frustration-free.
          </p>
          <p>
            A great UX goes beyond aesthetics; it focuses on functionality, ease
            of use, and user satisfaction. When visitors find a website easy to
            navigate, fast-loading, and informative, they are more likely to
            stay engaged, trust the brand, and take action—whether that means
            making a purchase, signing up for a service, or returning for future
            visits. A poor UX, on the other hand, can lead to high bounce rates,
            lost conversions, and diminished brand credibility.
          </p>
          <p>
            UX design is a critical component of any successful digital
            presence, influencing everything from customer retention to business
            growth. By prioritizing user experience, businesses can create
            digital products that not only look great but also provide
            meaningful, enjoyable interactions that leave a lasting impression.
          </p>
        </section>

        {uxDesignResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            <ul>
              {categoryItem.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Final Thoughts
          </h2>
          <p>
            User experience is more than just a buzzword—it’s a vital component
            of successful web design. By prioritizing UX, you can create a
            website that not only attracts visitors but also keeps them engaged
            and compels them to act. Investing in UX design is investing in your
            brand’s success.
          </p>
          <p>
            If you’re looking to enhance your website’s UX or want to learn more
            about best practices, follow our blog for expert insights and tips.
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
            <a href="/blog" className="text-primary underline">
              Blog
            </a>
            . Stay connected with us for the latest trends in{" "}
            <strong>UX/UI Design</strong> and <strong>Web Design</strong>!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
