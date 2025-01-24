"use client";

import { Button } from "@/components/ui/button";
import { companySpecificServices } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SPAServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Single Page Application (SPA) Development Services
      </h1>
      {companySpecificServices.map((service) => {
        return (
          <>
            <div className="text-center text-lg my-4">
              {service.name === "Single Page Application" ? (
                <div key={service.name}>
                  <span className="mt-4">{service.details}</span>
                </div>
              ) : null}
            </div>
          </>
        );
      })}

      <section className="my-8">
        <h2 className="text-2xl font-semibold">
          Why Choose Single Page Applications?
        </h2>
        <p className="my-4">
          Single Page Applications (SPAs) provide a seamless and dynamic user
          experience by loading all essential content at once and dynamically
          updating the page without reloading. They are ideal for businesses
          seeking performance, scalability, and interactivity.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">Faster Load Times:</span>{" "}
            Initial loading is faster, with subsequent interactions handled
            dynamically.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Improved User Experience:
            </span>{" "}
            Seamless navigation without disruptive page reloads.
          </li>
          <li>
            <span className="font-bold text-tertiary">Highly Interactive:</span>{" "}
            SPAs support real-time features and rich interactivity.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Cross-Platform Compatibility:
            </span>{" "}
            Works smoothly across devices and platforms.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Efficient Resource Usage:
            </span>{" "}
            Reduces server load with client-side rendering.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our SPA Development Services</h2>
        <p className="my-4">
          We provide end-to-end SPA development services tailored to your
          business goals, ensuring high performance and scalability.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-tertiary">
              Custom SPA Development:
            </span>{" "}
            Build SPAs using modern frameworks like React, Angular, or Vue.
          </li>
          <li>
            <span className="font-bold text-tertiary">Responsive Design:</span>{" "}
            Create SPAs optimized for all devices, from desktops to mobile.
          </li>
          <li>
            <span className="font-bold text-tertiary">API Integration:</span>{" "}
            Seamlessly connect your SPA with RESTful or GraphQL APIs.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Real-Time Functionality:
            </span>{" "}
            Enable live updates and real-time interactions using WebSockets or
            similar technologies.
          </li>
          <li>
            <span className="font-bold text-tertiary">
              Progressive Web App (PWA) Transformation:
            </span>{" "}
            Convert your SPA into a PWA for offline support and enhanced
            performance.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Technologies We Use</h2>
        <p className="my-4">
          We leverage the latest tools and frameworks to deliver cutting-edge
          SPAs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>React.js and Next.js</li>
          <li>Vue.js and Nuxt.js</li>
          <li>Angular</li>
          <li>GraphQL and RESTful APIs</li>
          <li>WebSockets for real-time communication</li>
          <li>Tailwind CSS for responsive design</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Our Process</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold text-tertiary">Consultation:</span>{" "}
            Understand your project requirements, audience, and objectives.
          </li>
          <li>
            <span className="font-bold text-tertiary">Planning:</span> Develop a
            clear roadmap with wireframes and prototypes.
          </li>
          <li>
            <span className="font-bold text-tertiary">Development:</span> Build
            your SPA using modern frameworks and technologies.
          </li>
          <li>
            <span className="font-bold text-tertiary">Testing:</span> Conduct
            rigorous performance, usability, and security testing.
          </li>
          <li>
            <span className="font-bold text-tertiary">Deployment:</span> Launch
            your SPA with optimized hosting solutions.
          </li>
          <li>
            <span className="font-bold text-tertiary">Support:</span> Provide
            ongoing maintenance, updates, and enhancements.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-tertiary">Timeline:</span> Most SPA
          projects are completed within 4–8 weeks, depending on complexity and
          features.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="my-4">
          Our pricing is based on the complexity and features of your SPA
          project. We offer flexible packages to suit businesses of all sizes:
        </p>
        <p>Ongoing support and maintenance plans start at $200/month.</p>
        {companySpecificServices.map((service) => {
          return (
            <>
              {service.name === "Single Page Application" && (
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
          Ready to build a high-performance Single Page Application?{" "}
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

export default SPAServices;
