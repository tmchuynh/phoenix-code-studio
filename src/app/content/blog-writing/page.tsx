"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  blogWritingBenefits,
  blogWritingServices,
  contentCreationServices,
  processStepsBlog,
  toolsUsedBlog,
} from "@/lib/constants";

const BlogWritingServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Blog Writing Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <div key={service.name} className="text-center text-lg my-4">
            {service.name === "Blog Writing" && (
              <div>
                <span className="mt-4">{service.details}</span>
              </div>
            )}
          </div>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why Blog Writing Matters</h2>
        <p className="my-4">
          Blogging is a powerful tool for building brand authority, driving
          website traffic, and connecting with your audience. High-quality blog
          content not only informs and educates but also fosters trust and
          loyalty.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {blogWritingBenefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="font-bold text-tertiary">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Blog Writing Services</h2>
        <p className="my-4">
          We provide end-to-end blog writing solutions tailored to your brand
          and audience.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {blogWritingServices.map((service) => (
            <li key={service.title}>
              <span className="font-bold text-tertiary">{service.title}:</span>{" "}
              {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          {processStepsBlog.map((step) => (
            <li key={step.title}>
              <span className="font-bold text-tertiary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Blogs are
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
        <ul className="list-disc pl-6 space-y-2">
          {toolsUsedBlog.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our pricing is tailored to your needs and the scope of the project.
          Factors that affect pricing include word count, complexity, and SEO
          requirements.
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "Blog Writing" && (
                <ul className="list-disc pl-6 space-y-2">
                  {service.pricingTiers.map((pricing) => (
                    <li key={pricing.name}>
                      <span className="font-bold text-tertiary">
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
