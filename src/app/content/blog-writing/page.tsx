"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

const BlogWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Blog Writing Services</h1>
      <p className="text-center text-lg my-4">
        Engage your audience and boost your online presence with expertly
        crafted blog content.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Blog Writing Matters</h2>
        <p className="my-4">
          Blogging is a powerful tool for building brand authority, driving
          website traffic, and connecting with your audience. High-quality blog
          content not only informs and educates but also fosters trust and
          loyalty.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Increase Visibility:
            </span>{" "}
            Blogs help improve your search engine rankings and attract organic
            traffic.
          </li>
          <li>
            <span className="font-bold text-secondary">Build Authority:</span>{" "}
            Showcase your expertise in your industry and position your brand as
            a thought leader.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Engage Your Audience:
            </span>{" "}
            Provide valuable, actionable insights that keep readers coming back.
          </li>
          <li>
            <span className="font-bold text-secondary">Drive Conversions:</span>{" "}
            Use blogs as part of your content marketing strategy to convert
            readers into customers.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Blog Writing Services</h2>
        <p className="my-4">
          We provide end-to-end blog writing solutions tailored to your brand
          and audience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Topic Ideation:</span>{" "}
            Generate engaging and relevant blog topics aligned with your
            audience’s interests.
          </li>
          <li>
            <span className="font-bold text-secondary">SEO Optimization:</span>{" "}
            Craft blogs optimized for search engines with strategic keywords.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Industry Expertise:
            </span>{" "}
            Write content tailored to your specific niche, ensuring credibility
            and accuracy.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Content Formatting:
            </span>{" "}
            Deliver blogs formatted for readability, including subheadings,
            bullet points, and callouts.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Regular Publishing:
            </span>{" "}
            Provide consistent blog content to maintain audience engagement.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Discovery:</span>{" "}
            Understand your brand, audience, and content goals.
          </li>
          <li>
            <span className="font-bold text-secondary">Research:</span> Conduct
            in-depth research to identify trends and keywords in your industry.
          </li>
          <li>
            <span className="font-bold text-secondary">Content Creation:</span>{" "}
            Write engaging, informative, and SEO-friendly blogs.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Editing & Proofreading:
            </span>{" "}
            Ensure every blog is polished, accurate, and error-free.
          </li>
          <li>
            <span className="font-bold text-secondary">Delivery:</span> Provide
            ready-to-publish content or upload directly to your CMS.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Blogs are
          typically delivered within 3–7 business days, depending on complexity
          and word count.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We use industry-leading tools to ensure quality and optimize
          performance:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Grammarly for proofreading</li>
          <li>SEMRush for keyword research</li>
          <li>Google Analytics for performance tracking</li>
          <li>WordPress for blog publishing</li>
          <li>Canva for custom blog visuals</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our pricing is tailored to your needs and the scope of the project.
          Factors that affect pricing include word count, complexity, and SEO
          requirements.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Single Blog Post:</span>{" "}
            Starting at $200 for up to 500 words.
          </li>
          <li>
            <span className="font-bold text-secondary">Long-Form Blogs:</span>{" "}
            Starting at $400 for 1,000+ words.
          </li>
          <li>
            <span className="font-bold text-secondary">Monthly Packages:</span>{" "}
            Custom pricing for regular publishing (e.g., 4+ blogs per month).
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your brand with high-quality blog content?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and customized quote.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default BlogWritingServices;
