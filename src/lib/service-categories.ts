import { ServiceItem } from "./interfaces";

export const allServices: ServiceItem[] = [
  {
    name: "company-specific-services",
    info: {
      description: "All about company-specific services",
      subServices: [
        "branding-storytelling",
        "company-rebranding-and-design-services",
        "database-creation-and-management",
        "blog-writing",
        "technical-writing-services",
        "newsletter-creation-services",
        "technical-tutorial-creation-services",
        "training-manual-and-onboarding-paperwork-creation-and-design-services",
      ],
    },
  },
  {
    name: "content-creation-services",
    info: {
      description: "All about content creation services",
      subServices: [
        "brochures-and-or-flyers",
        "ebook-creation-services",
        "online-courses-creation",
        "product-guide-manual-creation",
        "study-guide-creation",
      ],
    },
  },
  {
    name: "website-services",
    info: {
      description: "All about website services",
      subServices: [
        "user-experience-and-user-interface-design-services",
        "single-page-application-development",
        "e-commerce-site-development",
        "website-copywriting",
        "seo-optimization",
        "custom-website-development",
        "wireframing-and-prototyping-services",
      ],
    },
  },
];
