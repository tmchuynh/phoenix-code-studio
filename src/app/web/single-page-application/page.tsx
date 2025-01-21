"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

const SPAServices: FC = () => {
  const router = useRouter();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">
        Single Page Application (SPA) Development Services
      </h1>
      <p className="text-center text-lg my-4">
        Build fast, interactive, and user-friendly applications with our
        tailored SPA solutions.
      </p>

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
            <span className="font-bold text-secondary">Faster Load Times:</span>{" "}
            Initial loading is faster, with subsequent interactions handled
            dynamically.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Improved User Experience:
            </span>{" "}
            Seamless navigation without disruptive page reloads.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Highly Interactive:
            </span>{" "}
            SPAs support real-time features and rich interactivity.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Cross-Platform Compatibility:
            </span>{" "}
            Works smoothly across devices and platforms.
          </li>
          <li>
            <span className="font-bold text-secondary">
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
            <span className="font-bold text-secondary">
              Custom SPA Development:
            </span>{" "}
            Build SPAs using modern frameworks like React, Angular, or Vue.
          </li>
          <li>
            <span className="font-bold text-secondary">Responsive Design:</span>{" "}
            Create SPAs optimized for all devices, from desktops to mobile.
          </li>
          <li>
            <span className="font-bold text-secondary">API Integration:</span>{" "}
            Seamlessly connect your SPA with RESTful or GraphQL APIs.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Real-Time Functionality:
            </span>{" "}
            Enable live updates and real-time interactions using WebSockets or
            similar technologies.
          </li>
          <li>
            <span className="font-bold text-secondary">
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
            <span className="font-bold text-secondary">Consultation:</span>{" "}
            Understand your project requirements, audience, and objectives.
          </li>
          <li>
            <span className="font-bold text-secondary">Planning:</span> Develop
            a clear roadmap with wireframes and prototypes.
          </li>
          <li>
            <span className="font-bold text-secondary">Development:</span> Build
            your SPA using modern frameworks and technologies.
          </li>
          <li>
            <span className="font-bold text-secondary">Testing:</span> Conduct
            rigorous performance, usability, and security testing.
          </li>
          <li>
            <span className="font-bold text-secondary">Deployment:</span> Launch
            your SPA with optimized hosting solutions.
          </li>
          <li>
            <span className="font-bold text-secondary">Support:</span> Provide
            ongoing maintenance, updates, and enhancements.
          </li>
        </ul>
        <p className="my-4">
          <span className="font-bold text-secondary">Timeline:</span> Most SPA
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
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-secondary">Starter Package:</span>{" "}
            $5,000 – Basic SPA with core features and responsive design.
          </li>
          <li>
            <span className="font-bold text-secondary">Growth Package:</span>{" "}
            $10,000 – Advanced interactivity, API integration, and real-time
            functionality.
          </li>
          <li>
            <span className="font-bold text-secondary">
              Enterprise Package:
            </span>{" "}
            $15,000+ – Complex SPAs with PWA features, real-time updates, and
            scalability for high-traffic platforms.
          </li>
        </ul>
        <p>Ongoing support and maintenance plans start at $200/month.</p>
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
