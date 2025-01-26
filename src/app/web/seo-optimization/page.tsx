"use client";

import { Button } from "@/components/ui/button";
import { websiteServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SEOOptimization: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        SEO Optimization Services
      </h1>
      {websiteServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "SEO Optimization" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">What is SEO Optimization?</h2>
        <p className="my-4">
          SEO (Search Engine Optimization) optimization is the practice of
          enhancing your website’s content, structure, and technical aspects to
          rank higher on search engine results pages (SERPs). Our SEO
          optimization services help ensure that your website is discoverable by
          your target audience, increasing organic traffic and boosting your
          visibility.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold text-tertiary">On-Page SEO:</span>{" "}
            Optimize website elements such as titles, meta descriptions,
            headings, and content for search engines.
          </li>
          <li>
            <span className="font-bold text-tertiary">Off-Page SEO:</span>{" "}
            Improve your website's authority by building high-quality backlinks
            from reputable sources.
          </li>
          <li>
            <span className="font-bold text-tertiary">Technical SEO:</span>{" "}
            Optimize the technical aspects of your website, such as loading
            speed, mobile-friendliness, and crawlability.
          </li>
          <li>
            <span className="font-bold text-tertiary">Local SEO:</span> Optimize
            for location-based searches to improve visibility in local search
            results.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Content Optimization:
            </span>{" "}
            Ensuring that the content on your site is high-quality, relevant,
            and keyword-optimized.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">SEO Audit:</span> We start
            by performing a comprehensive SEO audit to identify areas for
            improvement on your website.
          </li>
          <li>
            <span className="font-bold text-tertiary">Keyword Research:</span>{" "}
            Conduct thorough research to identify the most valuable and relevant
            keywords for your business.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              On-Page Optimization:
            </span>{" "}
            Optimize your website's content, meta tags, images, and internal
            linking to ensure that it’s aligned with SEO best practices.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Off-Page SEO & Link Building:
            </span>{" "}
            Develop a strategy for acquiring high-quality backlinks and
            improving domain authority.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Technical SEO Improvements:
            </span>{" "}
            Ensure that your website is technically sound, improving loading
            speeds, mobile responsiveness, and more.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Content Strategy & Creation:
            </span>{" "}
            Create SEO-optimized content such as blogs, articles, and landing
            pages to engage users and drive traffic.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Performance Tracking & Reporting:
            </span>{" "}
            We regularly monitor your website’s performance, providing detailed
            reports and making necessary adjustments.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our SEO optimization services are tailored to fit your business’s
          needs, with pricing based on the complexity of the project and the
          level of optimization required:
        </p>
        {websiteServices.map((service) => {
          return (
            <>
              {service.name === "SEO Optimization" && (
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
          Ready to improve your website’s ranking and visibility?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation and customized SEO strategy.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default SEOOptimization;
