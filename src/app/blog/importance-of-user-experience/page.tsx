import { Badge } from "@/components/ui/badge";
import {
  whyUXMattersList,
  keyElementsOfGreatUX,
  howToImproveUX,
} from "@/lib/content-constants";

import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            The Importance of User Experience in Web Design
          </h1>
          <p className="text-sm">By John Doe – August 15, 2025</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #UXUIDesign
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #WebDesign
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #UserExperience
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg">
            <strong>User experience (UX)</strong> is one of the most important
            factors when designing a website. It directly impacts how users
            interact with your website, and ultimately affects conversion rates.
            In this post, we’ll explore why UX matters, how it influences user
            behavior, and actionable strategies to improve UX in your web design
            projects.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is User Experience (UX)?
          </h2>
          <p className="text-lg">
            User experience refers to the overall experience a person has when
            interacting with a website or digital product. It encompasses
            usability, accessibility, visual appeal, and the emotional
            connection users feel when navigating your site. A seamless,
            enjoyable user experience encourages engagement, fosters trust, and
            drives conversions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Why UX Matters in Web Design
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {whyUXMattersList.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Key Elements of Great UX in Web Design
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {keyElementsOfGreatUX.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            How to Improve UX on Your Website
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {howToImproveUX.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Final Thoughts
          </h2>
          <p className="text-lg">
            User experience is more than just a buzzword—it’s a vital component
            of successful web design. By prioritizing UX, you can create a
            website that not only attracts visitors but also keeps them engaged
            and compels them to act. Investing in UX design is investing in your
            brand’s success.
          </p>
          <p className="text-lg">
            If you’re looking to enhance your website’s UX or want to learn more
            about best practices, follow our blog for expert insights and tips.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            For more posts like this, visit our{" "}
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
