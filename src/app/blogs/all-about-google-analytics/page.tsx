"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { googleAnalyticsContent } from "@/lib/blog-constants";
import { blogs } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";

const GoogleAnalyticsBlogPage = () => {
  const router = useRouter();

  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            All About Google Analytics
          </h1>
          <div>
            {blogs.map((blog, index) => {
              return (
                blog.title === "All About Google Analytics" && (
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
            Google Analytics is one of the most powerful tools available for
            tracking and analyzing website performance. It provides website
            owners and digital marketers with an in-depth understanding of how
            users interact with their site, where they come from, and what
            actions they take during their visit. With its robust suite of
            reporting tools, Google Analytics enables you to monitor everything
            from traffic sources to user demographics and behavior, all of which
            can help you make informed decisions to enhance your website’s
            performance. By continuously analyzing the data, businesses can
            refine their digital strategies, optimize user experiences, and
            ultimately drive more conversions and achieve their business goals.
          </p>
        </header>

        {googleAnalyticsContent.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            {categoryItem.items?.map((item, itemIndex) => (
              <div key={itemIndex}>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            By analyzing the data provided by Google Analytics, you gain the
            power to make data-driven decisions that can significantly improve
            your website and enhance the overall user experience. Google
            Analytics gives you insights into user behavior, traffic sources,
            and conversion patterns—allowing you to understand exactly how users
            interact with your site. This level of visibility allows you to
            pinpoint areas for improvement and fine-tune your website for better
            performance.
          </p>
          <p>
            For example, if you notice that a certain page has a high bounce
            rate, it’s a signal that users may be leaving the page too quickly,
            potentially due to slow loading times, irrelevant content, or poor
            user interface. Armed with this data, you can optimize the content,
            adjust the design, or implement faster load times to improve the
            user experience, keeping visitors on your site longer. Additionally,
            analyzing engagement metrics can help you identify which pages or
            sections are performing well and which need improvements.
          </p>
          <p>
            Similarly, if you find that traffic from a particular marketing
            channel is low, it might indicate that your efforts in that area are
            not yielding the desired results. For example, if organic search
            traffic is minimal, you can focus on improving your SEO strategy by
            researching the right keywords, optimizing meta descriptions, or
            producing more valuable content that resonates with your target
            audience. Alternatively, if your paid ads are not converting, you
            can adjust your targeting, ad creatives, or budget allocation to
            increase ROI.
          </p>
          <p>
            Another example would be tracking user paths through your website.
            If users are dropping off at specific points, Google Analytics can
            help you identify where the issues lie. It could be a complicated
            checkout process, a confusing call-to-action, or a lack of clear
            next steps. This allows you to refine these steps and make the
            conversion process as smooth as possible.
          </p>
          <p>
            In this way, the insights gained from Google Analytics are
            invaluable for growing your business, increasing engagement, and
            improving your digital strategy. By continually monitoring and
            optimizing based on these insights, you can create a website that
            not only meets your business goals but also delivers a superior
            experience for your users, fostering higher conversion rates,
            customer satisfaction, and long-term success.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            For more insights on{" "}
            {blogs.map((blog) => {
              return (
                blog.title === "All About Google Analytics" && (
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
              onClick={() => router.push("/blogs")}
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

export default GoogleAnalyticsBlogPage;
