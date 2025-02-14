"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";
import { newsletterData } from "@/lib/content-constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const NewsletterServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Header */}
      <h1>Captivate & Convert with Expertly Crafted Newsletters</h1>
      <p>
        Our Newsletter Writing and Design Services help businesses create
        compelling, brand-aligned content that captures attention and drives
        engagement. Whether you’re sharing company updates, launching new
        products, or delivering industry insights, we craft newsletters that
        inform, inspire, and build stronger connections with your audience.
      </p>
      <p>
        A well-written newsletter isn’t just a message—it’s a powerful marketing
        tool that keeps your brand top-of-mind while nurturing leads and
        boosting customer loyalty. Our team ensures that every newsletter
        reflects your brand’s voice, resonates with your audience, and provides
        value that encourages action.
      </p>
      <p>
        We focus on clear, persuasive copy and visually engaging designs that
        are optimized for readability across all devices. By combining strategic
        messaging with a seamless layout, we create newsletters that enhance
        your digital marketing strategy, improve open rates, and maximize
        conversions. Let us help you deliver professional, high-impact
        newsletters that strengthen your brand presence and keep your
        subscribers engaged.
      </p>

      {/* Dynamic Section Rendering */}
      {newsletterData.map((section, index) => (
        <section key={index} className="my-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {section.category}
          </h2>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="font-bold text-secondary">{item.title}:</span>
                {item.description}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Pricing
        </h2>
        <p>
          Pricing depends on the frequency, length, and complexity of your
          newsletters.
        </p>
        {contentCreationServices.map((service) => (
          <>
            {service.name === "Engaging & Impactful Newsletters" && (
              <ul>
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
        ))}
      </section>

      {/* Get Started Section */}
      <section className="my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Get Started Today
        </h2>
        <p>
          Ready to elevate your communication with professional newsletters?
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

export default NewsletterServices;
