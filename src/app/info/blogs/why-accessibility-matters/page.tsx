"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { accessibilityResources } from "@/lib/blog-constants";
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
            Why Accessibility Matters in Web Development
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title ===
                  "Why Accessibility Matters in Web Development" && (
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
            Web accessibility ensures that everyone, regardless of ability, can
            navigate, understand, and interact with online content. By designing
            websites that accommodate users with visual, auditory, motor, or
            cognitive impairments, businesses create a more inclusive digital
            experience that benefits all visitors. Accessible web design is not
            just about compliance with standards like WCAG (Web Content
            Accessibility Guidelines)—it’s about equal opportunity. Features
            like alt text for images, keyboard-friendly navigation, color
            contrast adjustments, and screen reader compatibility make websites
            more usable for a wider audience, including those with disabilities.
            Beyond inclusivity, accessibility also enhances SEO, improves user
            experience, and expands your reach. A well-designed, accessible
            website ensures faster load times, better readability, and easier
            navigation, benefiting all users, not just those with disabilities.
            Prioritizing web accessibility is a commitment to digital equity,
            ensuring that your site is welcoming, functional, and usable for
            everyone. In today’s web-driven world, accessible design is not just
            an option—it’s a necessity for ethical, legal, and business success.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Web Accessibility?
          </h2>
          <p>
            <strong>Accessibility</strong> should be a priority in every web
            development project. Ensuring that your website is usable by people
            with disabilities not only opens your content to a wider audience
            but also improves user satisfaction, fosters inclusivity, and
            complies with legal requirements.
          </p>
          <p>
            Web accessibility refers to the practice of designing and developing
            websites that can be used by everyone, including individuals with
            disabilities. Disabilities may include visual, auditory, physical,
            cognitive, or neurological impairments that affect how users
            interact with digital content. An accessible website ensures that
            all users, regardless of their abilities, can navigate, understand,
            and interact with its content.
          </p>
        </section>

        {accessibilityResources.map((resource, index) => (
          <section key={index}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {resource.category}
            </h2>
            <ul>
              {resource.items?.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Why Accessibility is a Continuous Process
          </h2>
          <p>
            Web accessibility isn’t a one-time fix—it’s an ongoing commitment to
            inclusivity. As technology, user expectations, and accessibility
            standards evolve, websites must continuously adapt to ensure an
            equitable digital experience for all users. Regular testing and
            updates are essential to identify and resolve accessibility
            barriers. Utilize tools like Lighthouse, WAVE, and Axe to conduct
            audits, detect issues, and implement improvements. Additionally,
            engaging with real users, including those with disabilities,
            provides valuable insights into usability challenges.
          </p>
          <p>
            Accessibility should be integrated from the beginning of the design
            and development process, ensuring a seamless and user-friendly
            experience across all platforms and devices. By prioritizing
            accessibility, businesses not only enhance user engagement but also
            future-proof their websites against evolving compliance
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Prioritizing web accessibility is not just about compliance—it’s
            about creating a digital space that is welcoming, inclusive, and
            user-friendly for everyone. Accessible design benefits all users,
            improving navigation, readability, and usability, while also
            reinforcing your brand’s commitment to inclusivity.
          </p>
          <p>
            Beyond the legal and SEO benefits, an accessible website fosters
            trust, enhances engagement, and opens doors to a broader audience.
            By making accessibility a core part of your web development
            strategy, you are taking a step toward a more equitable digital
            future. Start integrating accessibility into your workflow
            today—because a truly great web experience is one that everyone can
            access.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title ===
                  "Why Accessibility Matters in Web Development" && (
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
            <Button
              onClick={() => router.push("/info/blogs")}
              className="m-0 p-0"
              variant={"link"}
            >
              Blog
            </Button>{" "}
            and stay informed about best practices and emerging trends.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
