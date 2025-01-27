"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import {
  customWebsiteDesignList,
  processStepsList,
  domainRegistrationList,
  webHostingList,
  toolsAndTechnologiesList,
} from "@/lib/content-constants";

import { useRouter } from "next/navigation";
import { FC } from "react";

const CustomWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Custom Website Design Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <p className="text-lg my-4">
            {service.name === "Custom Website Design" ? (
              <span className="mt-4">{service.info}</span>
            ) : null}
          </p>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          What is Custom Website Design?
        </h2>
        <p className="my-4">
          Custom website design is about building a website entirely from
          scratch, tailored to reflect your brand’s unique identity and meet
          your specific business goals. Unlike pre-designed templates, which can
          feel generic and limit your flexibility, custom designs offer a
          personalized approach that sets your business apart. Every element,
          from the layout and color scheme to the functionality and user
          experience, is carefully crafted to align with your vision and cater
          to your audience. With custom website design, you gain complete
          control over the features and aesthetics of your site, ensuring it not
          only looks professional but also functions seamlessly across all
          devices. This approach allows for greater scalability and
          adaptability, so your website can evolve alongside your business.
          Whether you’re looking to enhance engagement, boost conversions, or
          build brand authority, a custom website design provides the foundation
          for a distinctive and impactful online presence that drives results.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {customWebsiteDesignList.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <p>
          Our process for creating a custom website, followed by domain
          registration and web hosting, ensures a seamless and efficient
          experience tailored to your business needs. We start by designing and
          developing your custom website, working closely with you to understand
          your goals, brand identity, and target audience. From crafting a
          visually appealing layout to integrating functionality like
          e-commerce, forms, or other features, we ensure the website is fully
          customized to provide an exceptional user experience.
        </p>
        <p>
          Once the website is ready, we move to secure the ideal domain name
          that reflects your brand and is easy for your audience to remember.
          Following domain registration, we set up a reliable and
          high-performance hosting environment tailored to your website’s
          technical requirements. This ensures fast load times, robust security,
          and scalability to accommodate future growth.
        </p>
        <p>
          After thorough testing for compatibility, responsiveness, and
          performance, we deploy your website to the hosting environment and
          make it live. Post-launch, we provide ongoing support to ensure your
          website operates smoothly and continues to meet your business needs.
        </p>
        <p className="my-4">
          Typical projects for custom website creation, domain registration, and
          web hosting take 6-9 weeks, depending on the complexity of the website
          and additional features required.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {processStepsList.map((step, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">{step.title}:</span>{" "}
              {step.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Domain Registration and Web Hosting
        </h2>
        <p>
          We offer comprehensive solutions for domain registration and web
          hosting, providing everything you need to establish a strong online
          presence. Our services ensure fast, secure, and reliable website
          performance, giving you peace of mind while focusing on your business.
          From selecting the perfect domain name to configuring dependable
          hosting with high uptime and robust security features, we handle it
          all. With scalable options to accommodate growth, our solutions are
          tailored to meet your specific needs and deliver a seamless online
          experience for your audience.
        </p>
        <h3 className="text-xl font-bold">Domain Registration</h3>
        <ul className="list-disc pl-6 space-y-2">
          {domainRegistrationList.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold">Web Hosting</h3>
        <ul className="list-disc pl-6 space-y-2">
          {webHostingList.map((item, index) => (
            <li key={index}>
              <span className="font-bold text-tertiary">{item.title}:</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We leverage industry-leading tools and technologies to create
          efficient, scalable, and secure websites:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {toolsAndTechnologiesList.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your website’s features,
          complexity, and scope:
        </p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Custom Website Design" && (
                <ul className="list-disc pl-6 space-y-2">
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
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to elevate your online presence with a custom website?{" "}
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

export default CustomWebsite;
