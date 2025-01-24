"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { contentCreationServices } from "@/lib/constants";

const EbookCreationServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        E-Book Creation Services
      </h1>
      {contentCreationServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "eBook Creation" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Why E-Books Matter</h2>
        <p className="my-4">
          E-books are a powerful way to showcase your expertise, build brand
          authority, and provide value to your audience. Whether for lead
          generation, education, or monetization, a well-crafted e-book can set
          you apart.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">Lead Generation:</span>{" "}
            Use e-books as a free resource to attract and nurture potential
            customers.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Establish Authority:
            </span>{" "}
            Position your brand as an expert in your industry.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Educate Your Audience:
            </span>{" "}
            Provide in-depth insights and actionable information.
          </li>
          <li>
            <span className="font-bold text-tertiary">Scalable Content:</span>{" "}
            Repurpose e-book content for blogs, social media, and more.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our E-Book Creation Services</h2>
        <p className="my-4">
          We handle every aspect of e-book creation, from initial concept to
          final design.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Concept Development:
            </span>{" "}
            Brainstorm and outline ideas that align with your goals and audience
            needs.
          </li>
          <li>
            <span className="font-bold text-tertiary">Content Writing:</span>{" "}
            Write compelling, informative, and engaging content for your e-book.
          </li>
          <li>
            <span className="font-bold text-tertiary">Design and Layout:</span>{" "}
            Create visually appealing designs with custom layouts, graphics, and
            typography.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Editing and Proofreading:
            </span>{" "}
            Ensure your e-book is polished, error-free, and professional.
          </li>
          <li>
            <span className="font-bold text-tertiary">E-Book Formatting:</span>{" "}
            Optimize your e-book for various platforms (PDF, EPUB, MOBI).
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Discovery:</span>{" "}
            Understand your objectives, audience, and topic.
          </li>
          <li>
            <span className="font-bold text-tertiary">Outline Creation:</span>{" "}
            Develop a clear structure and outline for your e-book.
          </li>
          <li>
            <span className="font-bold text-tertiary">Content Writing:</span>{" "}
            Draft high-quality, engaging content that aligns with your goals.
          </li>
          <li>
            <span className="font-bold text-tertiary">Design and Layout:</span>{" "}
            Incorporate your branding into a professionally designed e-book.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Review and Feedback:
            </span>{" "}
            Refine the e-book based on your input and ensure it meets your
            expectations.
          </li>
          <li>
            <span className="font-bold text-tertiary">Final Delivery:</span>{" "}
            Provide the e-book in the desired formats, ready for distribution.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> The
          timeline for e-book creation depends on factors such as the topic,
          length, complexity, target audience, and design requirements. Typical
          projects range from 2 to 6 weeks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <p className="my-4">
          We leverage the best tools to create high-quality e-books:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Google Docs for drafting and collaboration</li>
          <li>Adobe InDesign for professional layouts</li>
          <li>Canva for custom visuals and branding</li>
          <li>Grammarly for proofreading and editing</li>
          <li>Calibre for e-book formatting</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our pricing is tailored to your specific needs and the scope of your
          project. Factors that influence pricing include:
        </p>
        {contentCreationServices.map((service) => {
          return (
            <>
              {service.name === "eBook Creation" && (
                <ul className="list-disc list-inside space-y-2">
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
          Ready to create a captivating e-book that elevates your brand?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation.
          </Button>
        </p>
      </section>
    </main>
  );
};

export default EbookCreationServices;
