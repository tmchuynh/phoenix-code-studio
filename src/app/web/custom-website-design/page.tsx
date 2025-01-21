"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CustomWebsite: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Custom Website Design Services
      </h1>
      <p className="text-center text-lg my-4">
        Crafting tailored websites that showcase your brand’s unique identity,
        engage users, and drive results.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          What is Custom Website Design?
        </h2>
        <p className="my-4">
          Custom website design focuses on creating a website from scratch,
          fully aligned with your brand’s goals and delivering a personalized
          user experience. Unlike pre-designed templates, our designs are unique
          and built to cater specifically to your business requirements.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Unique Branding:</span>{" "}
            Reflect your brand’s identity and values in every detail.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Tailored Functionality:
            </span>{" "}
            Features designed to meet your business needs, such as booking
            systems, product filters, or custom integrations.
          </li>
          <li>
            <span className="font-bold text-secondary">Scalability:</span>{" "}
            Future-proof designs that adapt as your business grows.
          </li>
          <li>
            <span className="font-bold text-secondary">SEO Optimization:</span>{" "}
            Structured designs to improve your website’s visibility on search
            engines.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enhanced User Experience:
            </span>{" "}
            Intuitive, accessible, and user-friendly interfaces for all
            audiences.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-secondary">Consultation:</span> We
            start by understanding your goals, brand, and audience.
          </li>
          <li>
            <span className="font-bold text-secondary">Planning:</span> Develop
            a detailed sitemap, wireframes, and a comprehensive strategy.
          </li>
          <li>
            <span className="font-bold text-secondary">Design:</span> Craft
            high-fidelity prototypes, incorporating your feedback at every
            stage.
          </li>
          <li>
            <span className="font-bold text-secondary">Development:</span> Build
            a responsive, high-performance website using cutting-edge
            technologies.
          </li>
          <li>
            <span className="font-bold text-secondary">Testing:</span> Rigorous
            testing for functionality, compatibility, speed, and accessibility.
          </li>
          <li>
            <span className="font-bold text-secondary">Launch:</span> Deploy
            your site with secure hosting and domain registration.
          </li>
          <li>
            <span className="font-bold text-secondary">Ongoing Support:</span>{" "}
            Offer continuous updates, maintenance, and improvements post-launch.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Typical
          projects take 4–8 weeks, depending on the complexity and scope of the
          website.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Domain Registration and Web Hosting
        </h2>
        <p className="my-4">
          We provide complete solutions for domain registration and web hosting,
          ensuring fast, secure, and reliable performance.
        </p>
        <h3 className="text-xl font-bold">Domain Registration</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">
              Domain Name Selection:
            </span>{" "}
            Collaborate with us to choose a domain that aligns with your brand.
          </li>
          <li>
            <span className="font-bold text-secondary">Extensions:</span> (.com,
            .org, .net) customized to suit your industry and audience.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Privacy Protection:
            </span>{" "}
            Safeguard your personal information.
          </li>
          <li>
            <span className="font-bold text-secondary">Management:</span>{" "}
            Seamless renewals and updates for your domain.
          </li>
        </ul>
        <h3 className="text-xl font-bold">Web Hosting</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Managed Hosting:</span>{" "}
            Enjoy stress-free hosting with regular updates and backups.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Optimized Performance:
            </span>{" "}
            Fast, secure servers for high-speed websites.
          </li>
          <li>
            <span className="font-bold text-secondary">SSL Certificates:</span>{" "}
            Enhance security and improve SEO rankings.
          </li>
          <li>
            <span className="font-bold text-secondary">
              99.9% Uptime Guarantee:
            </span>{" "}
            Ensure your website is always accessible.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Scalable Hosting Plans:
            </span>{" "}
            Flexible solutions to fit businesses of all sizes.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools and Technologies</h2>
        <p className="my-4">
          We leverage industry-leading tools and technologies to create
          efficient, scalable, and secure websites:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js for fast, SEO-friendly development</li>
          <li>Tailwind CSS for responsive, accessible designs</li>
          <li>Figma for wireframes and prototyping</li>
          <li>Cloudflare for security and CDN services</li>
          <li>Google Analytics for tracking performance</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing Tiers</h2>
        <p className="my-4">
          Our pricing is customized based on your website’s features,
          complexity, and scope:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Basic Websites:</span>{" "}
            Starting at $2,500 for a simple, informational website (5–10 pages).
          </li>
          <li>
            <span className="font-bold text-secondary">Advanced Websites:</span>{" "}
            Starting at $4,000 for custom functionality, integrations, and
            dynamic content.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Hosting and Domain Packages:
            </span>{" "}
            Starting at $15/month.
          </li>
        </ul>
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
