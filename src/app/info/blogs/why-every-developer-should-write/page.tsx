"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { whyWritingMattersContent } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const WhyWritingMattersBlog = () => {
  const router = useRouter();

  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Writing Matters
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "Why Every Developer Should Write" && (
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
            Asking why writing matters is like asking why communication is
            essential—both are fundamental to how we share ideas, express
            ourselves, and collaborate with others. Whether in professional
            settings, academic pursuits, or personal interactions, the ability
            to convey thoughts clearly and effectively is invaluable. Writing
            provides a structured way to communicate complex ideas, persuade
            audiences, and document knowledge for future reference.
          </p>
          <p>
            In today’s digital world, strong writing skills are more critical
            than ever. With the rise of remote work, online content, and digital
            collaboration, written communication has become the primary way we
            interact—whether through emails, reports, social media, or technical
            documentation. The ability to write well not only improves
            productivity and professionalism but also fosters stronger
            relationships and deeper understanding between technical and
            non-technical audiences.
          </p>
          <p>
            Moreover, writing proficiency is a skill that transcends industries
            and career paths. Whether you're a developer documenting code, a
            business leader drafting proposals, or a creative professional
            storytelling through blogs, the ability to write persuasively and
            concisely enhances your effectiveness. As technology advances and
            communication continues to evolve, the demand for clear, structured,
            and compelling writing will only grow. Ultimately, writing is more
            than just putting words on a page—it is a powerful tool for
            influence, connection, and knowledge-sharing. Investing in strong
            writing skills is an investment in better opportunities, stronger
            professional impact, and long-term success.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.benefits.title}
          </h2>
          <p>{whyWritingMattersContent.benefits.description}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.howToStart.title}
          </h2>
          <p>{whyWritingMattersContent.howToStart.description}</p>
        </section>

        <section className="relative flex flex-col w-full text-pretty pt-14 pb-6 border-t-2 border-b-2">
          <FaQuoteLeft className="absolute size-7 top-7 text-tertiary" />
          <p className="indent-10">
            {" "}
            In fact, the importance of writing has perhaps increased in the last
            decade or so, thanks to trends in technology...In matters of
            business, when every second counts, strong writing makes the
            difference between smooth operations and clumsy footing.
          </p>
          <FaQuoteRight className="absolute right-8 bottom-4 size-7 text-tertiary" />
          <p className="self-end mx-24">HuffPost</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.tips.title}
          </h2>
          <ul>
            {whyWritingMattersContent.tips.points.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Writing can be an incredibly rewarding experience—not just as a way
            to share knowledge and ideas, but also as a means of self-expression
            and personal growth. Whether you write to educate, entertain, or
            inspire, every piece of content you create helps refine your skills,
            broaden your understanding, and connect with others in meaningful
            ways.
          </p>
          <p>
            At the same time, writing is a deeply personal choice, and there’s
            no single "right way" to contribute. Some people find joy in sharing
            their expertise through blog posts or tutorials, while others prefer
            writing privately for self-reflection or professional development.
            It all depends on your goals, interests, and available time
          </p>
          <p>
            Not everyone has the bandwidth to publish content regularly, and
            that’s perfectly fine. Writing should never feel like an
            obligation—it should be something you do because you genuinely enjoy
            it or find value in it. If you feel inspired, embrace it; if you
            need a break, step back. The most important thing is to write at
            your own pace and in a way that aligns with your personal and
            professional journey.
          </p>
          <p>
            At the end of the day, do what feels right for you. Whether you
            choose to contribute frequently to your industry, occasionally share
            insights, or simply write for yourself, your words hold value.
            Writing is a tool that can help you grow, learn, and connect with
            others, but how you choose to use it is entirely up to you.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title === "Why Every Developer Should Write" && (
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
            and start enhancing your communication skills today.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default WhyWritingMattersBlog;
