"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import {
  blogWritingBenefits,
  blogWritingServices,
  processStepsBlog,
  toolsUsedBlog,
} from "@/lib/content-constants";

const BlogWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Blog Writing Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-lg my-4">
            {service.name === "Blog Writing" && (
              <div>
                <span className="mt-4">{service.info}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Why Blog Writing Matters
        </h2>
        <p className="my-4">
          Blogging is an incredibly powerful tool for establishing brand
          authority, increasing website traffic, and building meaningful
          connections with your audience. By consistently publishing
          high-quality, well-researched content, you position your brand as a
          thought leader and a reliable source of information in your industry.
          Blogging not only informs and educates readers but also addresses
          their pain points and answers their questions, fostering trust and
          loyalty over time. Additionally, blogs play a vital role in enhancing
          your website’s search engine optimization (SEO), helping you rank
          higher on search results and attract organic traffic. Whether you’re
          sharing insights, offering solutions, or showcasing expertise, a
          strategic blogging approach strengthens your brand’s credibility and
          encourages long-term engagement with your audience.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {blogWritingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-secondary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Blog Writing Services
        </h2>
        <p className="my-4">
          We offer comprehensive, end-to-end blog writing solutions designed to
          align seamlessly with your brand’s voice and resonate with your target
          audience. From ideation and topic research to crafting engaging,
          SEO-optimized content, our services ensure your blog reflects your
          expertise and values while driving meaningful connections. Whether
          you’re looking to educate, inform, or inspire, we create tailored
          content that enhances your brand authority, attracts organic traffic,
          and keeps your audience engaged.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {blogWritingServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-secondary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Our Process
        </h2>
        <p>
          Our blog writing process is designed to deliver high-quality, tailored
          content that aligns with your brand and engages your audience. We
          begin by collaborating with you to understand your goals, target
          audience, and key topics. Next, we conduct thorough research to gather
          insights, identify trending topics, and ensure factual accuracy. Once
          we’ve developed a content strategy, we craft engaging, SEO-optimized
          articles that reflect your brand’s voice and message. Each blog post
          undergoes rigorous editing to ensure clarity, consistency, and
          professionalism. Finally, we deliver the content and can assist with
          publishing and performance tracking to maximize its impact.
        </p>
        <p className="my-4">
          Typical blog writing projects take 3-5 days per post, depending on the
          complexity and research required.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {processStepsBlog.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Tools We Use
        </h2>
        <p className="my-4">
          We use industry-leading tools to ensure quality and optimize
          performance:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          {toolsUsedBlog.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p className="my-4">
          Our pricing is tailored to your needs and the scope of the project.
          Factors that affect pricing include word count, complexity, and SEO
          requirements.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Blog Writing" && (
                <ul className="list-disc pl-6 space-y-1 text-lg">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-secondary">
                        {pricing.name}:
                      </span>
                      <span className="pl-2">{pricing.info}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          );
        })}
      </section>

      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p className="my-4">
          Ready to elevate your brand with high-quality blog content?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
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
