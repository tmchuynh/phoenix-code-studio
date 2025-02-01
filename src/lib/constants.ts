import { BlogPost, FAQ, JobPosition, Menu, PaymentPlan, Project, Services, Testimonial } from "./interfaces";

export const about: Menu[] = [
  {
    title: "About",
    href: "/about",
    description:
      "Learn more about our mission, vision, and what drives us forward.",
  },
  {
    title: "Careers",
    href: "/careers",
    description:
      "Learn more about our mission, vision, and what drives us forward.",
  },
  {
    title: "Blogs",
    href: "/blogs",
    description:
      "Stay updated with the latest news, tips, and insights from our blog.",
  },
  {
    title: "FAQs",
    href: "/frequently-asked-questions",
    description:
      "Find answers to common questions about our products and services.",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description:
      "Read success stories and reviews from our satisfied customers.",
  },
  {
    title: "Past Projects",
    href: "/past-projects",
    description:
      "Learn more about our mission, vision, and what drives us forward.",
  },
];

export const services: Menu[] = [
  {
    title: "Overview",
    href: "/services",
    description:
      "Explore our pricing options and find the perfect plan for your needs.",
  },
  {
    title: "Example Contracts",
    href: "/contracts",
    description:
      "Explore our pricing options and find the perfect plan for your needs.",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description:
      "Explore our pricing options and find the perfect plan for your needs.",
  },
];

export const paymentOptions: Menu[] = [
  {
    title: "Basic Plan",
    href: "/payment-plans/basic-plan",
    description:
      "Explore our pricing options and find the perfect plan for your needs.",
  },
  {
    title: "Standard Plan",
    href: "/payment-plans/standard-plan",
    description:
      "Explore our pricing options and find the perfect plan for your needs.",
  },
  {
    title: "Premium Plan",
    href: "/payment-plans/premium-plan",
    description:
      "Discover flexible payment plans tailored to suit different budgets.",
  },
  {
    title: "Custom Plan",
    href: "/payment-plans/custom-plan",
    description:
      "Discover flexible payment plans tailored to suit different budgets.",
  },
];

export const websites: Menu[] = [
  {
    title: "SEO Optimization",
    href: "/website-services/seo-optimization",
    description:
      "Boost your website's visibility with strategies to improve search engine rankings.",
  },
  {
    title: "User Experience (UX) Design",
    href: "/website-services/user-experience-design",
    description:
      "Craft intuitive and engaging designs that enhance user satisfaction and accessibility.",
  },
  {
    title: "Wireframing & Prototyping",
    href: "/website-services/wireframing-&-prototyping",
    description:
      "Visualize and test design concepts through effective wireframes and prototypes.",
  },
];

export const content: Menu[] = [
  {
    title: "Website Copywriting",
    href: "/content-creation-services/website-copywriting",
    description:
      "Create compelling and optimized website content that drives engagement and conversions.",
  },
  {
    title: "Blog Writing",
    href: "/content-creation-services/blog-writing",
    description:
      "Craft informative and engaging blog posts to attract and retain your audience.",
  },
  {
    title: "Newsletters",
    href: "/content-creation-services/newsletters",
    description:
      "Develop clear and detailed guides or manuals to help users understand your products.",
  },
  {
    title: "Technical Writing",
    href: "/content-creation-services/technical-writing",
    description:
      "Produce precise and structured documentation for technical processes and tools.",
  },
  {
    title: "Study Guides",
    href: "/content-creation-services/study-guide-creation",
    description:
      "Design and develop comprehensive online courses to educate and inspire learners.",
  },
  {
    title: "Tutorial Creation",
    href: "/content-creation-services/tutorial-creation",
    description:
      "Create step-by-step tutorials to guide users through tasks and improve understanding.",
  },
  {
    title: "Product Guides/Manuals",
    href: "/content-creation-services/product-guides-manuals",
    description:
      "Develop clear and detailed guides or manuals to help users understand your products.",
  },
  {
    title: "Brochures and/or Flyers",
    href: "/content-creation-services/brochures-and-or-flyers",
    description:
      "Create compelling and optimized website content that drives engagement and conversions.",
  },
  {
    title: "Training Manual & Onboarding Paperwork",
    href: "/content-creation-services/training-manual-and-onboarding-paperwork-creation",
    description:
      "Create compelling and optimized website content that drives engagement and conversions.",
  },
  {
    title: "Online Courses",
    href: "/content-creation-services/online-courses",
    description:
      "Design and develop comprehensive online courses to educate and inspire learners.",
  },
  {
    title: "eBooks",
    href: "/content-creation-services/ebook-creation",
    description:
      "Create compelling and optimized website content that drives engagement and conversions.",
  },
];

export const companies: Menu[] = [
  {
    title: "Company Rebranding",
    href: "/comapny-specific-services/company-rebranding",
    description:
      "Transform your company’s identity with a refreshed logo, messaging, and brand strategy.",
  },
  {
    title: "Brand Storytelling",
    href: "/comapny-specific-services/brand-storytelling",
    description:
      "Craft compelling narratives to communicate your brand's mission, vision, and values.",
  },
  {
    title: "Custom Website Design",
    href: "/comapny-specific-services/custom-website-design",
    description:
      "Create a unique, user-focused website tailored to your brand’s needs and goals.",
  },
  {
    title: "E-Commerce Site Development",
    href: "/comapny-specific-services/e-commerce-site-development",
    description:
      "Develop seamless online shopping experiences to boost sales and customer engagement.",
  },
  {
    title: "Single-Page Applications (SPAs)",
    href: "/comapny-specific-services/single-page-application",
    description:
      "Build fast, dynamic web applications with intuitive user interfaces and streamlined performance.",
  },
  {
    title: "Database Management",
    href: "/comapny-specific-services/database-management",
    description:
      "Ensure secure and efficient management of your data with scalable database solutions.",
  },
];

export const websiteServices: Services[] = [
  {
    name: "User Experience Design",
    startingPrice: 3500,
    info: "We specialize in designing intuitive, functional interfaces that seamlessly blend usability, accessibility, and aesthetic appeal. By conducting in-depth user research, we gain valuable insights into your target audience's needs, behaviors, and pain points. This understanding guides every step of our process, from wireframing and prototyping to rigorous testing and refinement. Our goal is to create designs that not only look stunning but also provide practical solutions to real user challenges. By prioritizing accessibility, we ensure that our interfaces are inclusive and can be enjoyed by all users, regardless of their abilities. The result is a seamless, engaging, and memorable user experience that leaves a lasting positive impression and drives meaningful interactions..",
    details:
      "Our UX design services focus on creating seamless and engaging user experiences. By conducting thorough research and usability testing, we deliver designs that simplify interactions and enhance effectiveness. Services include user research, wireframing, prototyping, and testing.",
    pricingTiers: [
      {
        name: "User Research & Prototyping",
        startingPrice: 3500,
        info: "Starting at $3,500, this package covers user research, interviews, and detailed prototyping to understand and design for user needs."
      },
      {
        name: "Comprehensive UX Design",
        startingPrice: 5000,
        info: "Starting at $5,000, this package includes end-to-end UX design, incorporating research, prototyping, usability testing, and final design delivery."
      }
    ]
  },
  {
    name: "Wireframing & Prototyping",
    startingPrice: 1000,
    info: "Our wireframing and prototyping services turn your ideas into tangible, user-centric designs. Starting with low-fidelity wireframes, we outline the structure, navigation, and layout to establish a clear blueprint. Then, we develop high-fidelity prototypes that simulate real interactions, providing a dynamic preview of the final product. These tools not only help you visualize and refine the user journey but also streamline the design process, saving time and ensuring practicality and functionality before full-scale development begins.",
    details:
      "We provide wireframing and prototyping services to help you visualize user interactions and refine design ideas before development begins. These tools are essential for identifying usability issues and ensuring an optimal user experience.",
    pricingTiers: [
      {
        name: "Low-Fidelity Wireframes",
        startingPrice: 1000,
        info: "Starting at $1,000, these quick, basic sketches outline the layout and navigation of your site or app."
      },
      {
        name: "High-Fidelity Wireframes",
        startingPrice: 2000,
        info: "Starting at $2,000, these detailed wireframes showcase user interface designs with a focus on usability and aesthetics."
      },
      {
        name: "Interactive Prototypes",
        startingPrice: 2500,
        info: "Starting at $2,500, this tier provides clickable prototypes that simulate real user interactions for testing and validation."
      }
    ]
  },
  {
    name: "SEO Optimization",
    startingPrice: 1000,
    info: "Our SEO optimization services are designed to enhance your website's visibility, attract organic traffic, and improve search engine rankings. Through comprehensive keyword research, on-page optimization, content improvement, and strategic link-building, we tailor solutions to meet your specific goals. By staying up-to-date with the latest search engine algorithms and best practices, we ensure your website remains competitive and relevant in an ever-changing digital landscape. Let us help you reach your audience effectively and maximize your online potential.",
    details:
      "Our SEO optimization services focus on enhancing your website’s visibility in search engines. From keyword research to link-building, we implement effective techniques to drive organic traffic and improve your site's ranking and overall performance.",
    pricingTiers: [
      {
        name: "SEO Audit",
        startingPrice: 1000,
        info: "Starting at $1,000, this audit evaluates your site's current SEO performance and identifies areas for improvement."
      },
      {
        name: "On-Page SEO",
        startingPrice: 1500,
        info: "Starting at $1,500, this package optimizes on-page elements like meta tags, content, images, and internal linking for better rankings."
      },
      {
        name: "Full SEO Package",
        startingPrice: 3000,
        info: "Starting at $3,000, this comprehensive package includes an SEO audit, on-page optimization, link-building, and performance tracking."
      }
    ]
  }
];

export const companySpecificServices: Services[] = [
  {
    name: "Company Rebranding",
    startingPrice: 5000,
    info: "Our comprehensive rebranding services are designed to breathe new life into your company’s identity, delivering a fresh, modern transformation that resonates deeply with your audience and aligns perfectly with your business goals. We specialize in redefining every aspect of your brand, from striking logo designs and compelling messaging to a cohesive, forward-thinking brand strategy. By crafting a unique and authentic identity, we help your business rise above the competition, build lasting customer trust, and leave a powerful impression that drives meaningful growth and long-term success.",
    details:
      "Our rebranding services include a full strategy to redefine your brand image. From logo redesign to complete brand strategies, we ensure your company stands out and connects with your audience.",
    pricingTiers: [
      {
        name: "Brand Identity Overhaul",
        startingPrice: 5000,
        info: "Starting at $5,000, this package includes a complete refresh of your brand identity, such as redesigning your logo, updating your color palette, and creating a cohesive visual design for all branding materials."
      },
      {
        name: "Full Brand Strategy",
        startingPrice: 8000,
        info: "Starting at $8,000, this comprehensive package includes market research, target audience analysis, competitor benchmarking, and a brand messaging strategy to ensure consistent and effective communication."
      },
      {
        name: "Brand Guidelines & Style Guide",
        startingPrice: 3000,
        info: "Starting at $3,000, we create detailed brand guidelines covering logo usage, typography, tone of voice, and visual design standards for consistent representation across all platforms."
      },
      {
        name: "Website Rebranding",
        startingPrice: 5000,
        info: "Starting at $5,000, this service includes updating your website to align with your new branding, featuring refreshed visuals, layouts, and messaging to reflect your evolved identity."
      }
    ]
  },
  {
    name: "Custom Website Design",
    startingPrice: 2500,
    info: "We design custom websites that don’t just look amazing but also work hard for your business. Aligned with your goals and tailored to reflect your unique brand identity, every website we create is a seamless blend of creativity and functionality. Fully responsive and optimized for performance, our designs deliver flawless experiences across all devices—from desktops to smartphones. With intuitive navigation, lightning-fast load times, and captivating visuals, we craft websites that engage your audience, inspire action, and fuel your business's growth. Let us help you make a lasting impression online and achieve success like never before.",
    details:
      "We specialize in creating custom websites that align with your brand and business objectives. From layout design to functionality, we ensure a seamless user experience.",
    pricingTiers: [
      {
        name: "Basic",
        startingPrice: 2500,
        info: "Starting at $2,500, this package provides an informational website with up to 5 pages. It’s perfect for small businesses or startups looking for a clean, professional online presence."
      },
      {
        name: "Advanced Websites",
        startingPrice: 4000,
        info: "Starting at $4,000, this option is tailored for businesses requiring custom functionality, integrations, and dynamic content, featuring up to 10 pages."
      },
      {
        name: "Premium",
        startingPrice: 6500,
        info: "Starting at $6,500, this tier includes a feature-rich website with advanced functionalities, up to 20 pages, SEO optimization, and responsive design for an enhanced user experience."
      },
      {
        name: "Hosting and Domain Packages",
        startingPrice: 15,
        info: "Starting at $15/month, we offer reliable hosting and domain management to keep your website running smoothly and securely."
      }
    ]
  },
  {
    name: "E-Commerce Site Development",
    startingPrice: 3500,
    info: "We design scalable, secure, and user-friendly e-commerce platforms tailored to elevate customer experience and drive sales. With intuitive navigation, seamless payment integration, and robust security, our platforms make shopping easy and secure. Built for growth, they include advanced features like personalized recommendations, inventory management, and analytics to optimize performance. Whether launching a new store or upgrading an existing one, we deliver solutions that showcase your brand and maximize success.",
    details:
      "We create e-commerce websites designed for security, scalability, and user satisfaction. From product pages to checkout systems, we provide the tools for a successful online store.",
    pricingTiers: [
      {
        name: "Starter Package",
        startingPrice: 3500,
        info: "Starting at $3,500, this package includes essential e-commerce features like product listings, a shopping cart, and a secure checkout system."
      },
      {
        name: "Growth Package",
        startingPrice: 5000,
        info: "Starting at $5,000, this tier offers advanced features such as loyalty programs, custom integrations, and enhanced user experience elements."
      },
      {
        name: "Enterprise Package",
        startingPrice: 10000,
        info: "Starting at $10,000+, this package is tailored for large-scale e-commerce operations, offering multi-vendor support, analytics dashboards, and advanced scalability."
      },
      {
        name: "Monthly Hosting & Maintenance",
        startingPrice: 50,
        info: "Starting at $50/month, this service includes ongoing hosting, security updates, and performance monitoring for your e-commerce platform."
      }
    ]
  },
  {
    name: "Single Page Application",
    startingPrice: 2000,
    info: "We specialize in developing dynamic, fast-loading single-page applications (SPAs) that prioritize seamless navigation, real-time updates, and exceptional performance. By leveraging modern frameworks and technologies, our SPAs provide an engaging, interactive experience that adapts flawlessly to various devices and screen sizes. Designed with both speed and user retention in mind, our applications ensure smooth transitions, reduced load times, and responsive interactions, creating a user experience that is not only efficient but also memorable. Whether it’s enhancing functionality or optimizing performance, our SPAs are tailored to meet the unique needs of your audience.",
    details:
      "We create SPAs optimized for speed and interactivity, dynamically loading content to ensure seamless experiences and boost user engagement..",
    pricingTiers: [
      {
        name: "Starter Package",
        startingPrice: 2000,
        info: "Starting at $2,000, this package includes the development of a basic SPA with core features like responsive design and smooth navigation."
      },
      {
        name: "Growth Package",
        startingPrice: 7000,
        info: "Starting at $7,000, this tier includes advanced interactivity, API integrations for real-time functionality, and dynamic content handling."
      },
      {
        name: "Enterprise Package",
        startingPrice: 12000,
        info: "Starting at $12,000+, this package offers a scalable SPA with Progressive Web App (PWA) capabilities, high-performance features, and real-time updates."
      },
      {
        name: "Ongoing Support & Maintenance",
        startingPrice: 200,
        info: "Starting at $200/month, this service ensures your SPA remains updated, secure, and optimized for peak performance."
      }
    ]
  },
  {
    name: "Database Management",
    startingPrice: 1500,
    info: "Our database management services deliver secure, scalable, and efficient solutions designed to store, organize, and access your data with ease. Tailored to meet your specific needs, we optimize database performance to ensure fast and reliable operations, even as your data grows. Advanced security measures protect sensitive information, maintaining compliance with industry standards and safeguarding against potential threats. With seamless scalability, our solutions are built to adapt to your evolving business requirements, empowering your organization with the tools to handle complex data demands and support sustained growth.",
    details:
      "Our database management services ensure that your data is stored, organized, and accessible. We design databases that can scale as your business grows, integrate real-time data, and ensure high levels of security to protect sensitive information.",
    pricingTiers: [
      {
        name: "Starter Package",
        startingPrice: 1500,
        info: "Starting at $1,500, this package is designed for small-scale database solutions, featuring secure data storage and basic relational models."
      },
      {
        name: "Growth Package",
        startingPrice: 3000,
        info: "Starting at $3,000, this option includes database optimization, API integrations, and scalability enhancements for growing businesses."
      },
      {
        name: "Enterprise Package",
        startingPrice: 10000,
        info: "Starting at $10,000, this package delivers large-scale database solutions with advanced features such as multi-database management and real-time data processing."
      },
      {
        name: "Database Management Plans",
        startingPrice: 100,
        info: "Starting at $100/month, we provide ongoing database management, updates, monitoring, and performance tuning services."
      }
    ]
  },
  {
    name: "Brand Storytelling",
    startingPrice: 2000,
    info: "We craft compelling brand narratives that authentically define your identity and deeply resonate with your audience. By leveraging the power of strategic storytelling, we bridge the gap between your brand and your audience’s emotions, creating a connection that goes beyond transactions. Our approach builds a meaningful story around your values, mission, and vision, fostering loyalty, trust, and long-term engagement. Whether it’s through messaging, visuals, or campaigns, we ensure your brand stands out and remains memorable in a competitive marketplace..",
    details: "We help brands tell their unique stories, building a narrative that reflects your values, vision, and goals. Through strategic storytelling, we connect with your target audience on an emotional level, strengthening brand loyalty.",
    pricingTiers: [
      {
        name: "Core Narrative Development",
        startingPrice: 2000,
        info: "Starting at $2,500, this tier develops your brand's core story, highlighting your values, mission, and unique identity."
      },
      {
        name: "Comprehensive Storytelling Strategy",
        startingPrice: 5000,
        info: "Starting at $5,000, this option includes an in-depth storytelling strategy, complete with narrative frameworks, content plans, and audience engagement techniques."
      }
    ]
  },
];

export const contentCreationServices: Services[] = [
  {
    name: "Website Copywriting",
    startingPrice: 1500,
    info: "We create clear, persuasive, and SEO-optimized website content that effectively conveys your brand's message while engaging your audience. Our expertly crafted copy not only captivates visitors but also improves search engine visibility, driving organic traffic to your site. By aligning with your brand voice and audience needs, our content enhances user experience, encourages conversions, and helps establish your online presence as authoritative and trustworthy.",
    details: "Our copywriting services deliver tailored content that is both engaging and optimized for search engines. From homepage messaging to service descriptions, we ensure your website communicates effectively while boosting visibility.",
    pricingTiers: [
      {
        name: "Basic",
        startingPrice: 1500,
        info: "Starting at $1,500, this package includes copywriting for up to 5 pages with basic SEO optimization. Ideal for small or starter websites."
      },
      {
        name: "Standard",
        startingPrice: 2500,
        info: "Starting at $2,500, this option provides SEO-optimized content for up to 10 pages, delivering a complete and professional web presence."
      },
      {
        name: "Premium",
        startingPrice: 4000,
        info: "Starting at $4,000, this package offers comprehensive website copywriting, including blogs, product descriptions, and additional content, fully optimized for SEO."
      }
    ]
  },
  {
    name: "Product Guides/Manuals",
    startingPrice: 750,
    info: "We develop detailed, user-friendly product guides and manuals that break down complex information into clear and accessible content. Designed with your audience in mind, our guides ensure that users can quickly and easily understand your products, enhancing their overall experience. With a focus on clarity, precision, and practical usability, our manuals provide step-by-step instructions and helpful visuals that empower customers to confidently navigate and utilize your offerings.",
    details: "Our product guides and manuals are designed to help users understand and get the most out of your products. We provide clear, step-by-step instructions and troubleshooting tips to ensure a positive user experience.",
    pricingTiers: [
      {
        name: "Quick Start Guides",
        startingPrice: 750,
        info: "Starting at $750, these essential guides provide concise instructions to help users get started quickly with your product."
      },
      {
        name: "User Manuals (10–20 pages)",
        startingPrice: 1500,
        info: "Starting at $1,500, this tier includes detailed user manuals with step-by-step instructions, illustrations, and troubleshooting tips."
      },
      {
        name: "Comprehensive Manuals (20+ pages)",
        startingPrice: 3000,
        info: "Starting at $3,000, these in-depth manuals cover all aspects of your product, offering comprehensive instructions and extensive troubleshooting resources."
      }
    ]
  },
  {
    name: "Blog Writing",
    startingPrice: 200,
    info: "We craft engaging and informative blog posts that captivate your audience while improving your website's SEO performance. Each post is carefully tailored to reflect your brand voice, ensuring consistency and authenticity. By delivering valuable, relevant content, we help establish your authority in your industry, drive organic traffic, and foster stronger connections with your readers, enhancing your overall online presence..",
    details: "We write engaging and informative blog posts that keep your audience interested while improving your SEO. Our blog content is tailored to your brand voice, ensuring that every post is relevant and valuable to your readers.",
    pricingTiers: [
      {
        name: "Single Blog Post",
        startingPrice: 200,
        info: "Starting at $200, this tier includes blog posts of up to 500 words. Perfect for concise, impactful updates and engaging content."
      },
      {
        name: "Long-Form Blogs",
        startingPrice: 500,
        info: "Starting at $500, these blog posts exceed 1,000 words, providing in-depth analysis, detailed storytelling, or comprehensive insights."
      },
      {
        name: "Monthly Packages",
        startingPrice: 1000,
        info: "Starting at $1,000, ideal for businesses looking for consistent, high-quality content. Custom pricing applies for regular publishing, such as 4+ blogs per month."
      }
    ]
  },
  {
    name: "Technical Writing",
    startingPrice: 750,
    info: "Our technical writing services specialize in converting complex concepts into clear, precise, and accessible documentation. Whether it's software manuals, technical guides, or white papers, we deliver content that is both accurate and user-friendly. By focusing on clarity and detail, we ensure your audience can easily understand and utilize the information, enhancing their overall experience and confidence in your product or service.",
    details: "Our technical writing services focus on making complex information accessible. Whether it’s software documentation, user manuals, or technical reports, we ensure that the content is clear, precise, and easy to follow.",
    pricingTiers: [
      {
        name: "Short Guides or SOPs",
        startingPrice: 750,
        info: "Starting at $750, this tier includes short guides or standard operating procedures. Ideal for concise, structured instructions."
      },
      {
        name: "Comprehensive Manuals or Knowledge Bases",
        startingPrice: 1500,
        info: "Starting at $1,500, these detailed manuals or knowledge bases provide comprehensive, well-organized content for advanced topics."
      },
      {
        name: "API Documentation or White Papers",
        startingPrice: 3000,
        info: "Starting at $3,000, this package delivers in-depth API documentation, technical reports, or white papers with extensive research and precise details."
      }
    ]
  },
  {
    name: "Online Courses",
    startingPrice: 2000,
    info: "We design and develop interactive online courses that seamlessly integrate multimedia elements to educate and engage your audience. Whether you’re sharing industry expertise, training employees, or providing educational content, our courses are customized to align with your objectives and deliver impactful learning experiences. With a focus on user engagement, clear structure, and accessibility, our solutions captivate learners and ensure effective knowledge transfer for lasting results.",
    details: "We help you create online courses that provide real value to your audience. From video tutorials to quizzes, we ensure your courses are engaging, informative, and structured in a way that enhances learning.",
    pricingTiers: [
      {
        name: "Short Courses (1–3 modules)",
        startingPrice: 2000,
        info: "Starting at $2,000, this tier includes 1–3 modules with core content, basic multimedia elements, and a streamlined structure ideal for concise learning experiences."
      },
      {
        name: "Medium-Length Courses (4–8 modules)",
        startingPrice: 4500,
        info: "Starting at $4,500, this option covers 4–8 modules with more in-depth content, expanded multimedia features, and additional learning tools like assessments and quizzes."
      },
      {
        name: "Comprehensive Courses (9+ modules)",
        startingPrice: 10000,
        info: "Starting at $10,000, this package is ideal for 9+ module courses featuring advanced multimedia, detailed content, and interactive elements such as custom videos, animations, and complex quizzes."
      }
    ]
  },
  {
    name: "Tutorial Creation",
    startingPrice: 200,
    info: "We develop step-by-step tutorials that simplify complex tasks and empower users to achieve their goals with ease. Designed to be clear, concise, and highly user-friendly, our tutorials provide straightforward instructions and practical guidance. By breaking down processes into manageable steps, we ensure your audience can confidently follow along, enhancing their understanding and success.",
    details: "We create tutorials that break down complex tasks into manageable steps. Whether for software, hardware, or services, our tutorials ensure users can follow along easily and achieve their goals.",
    pricingTiers: [
      {
        name: "Quick Start Guides",
        startingPrice: 200,
        info: "Starting at $200, these guides provide an easy-to-follow introduction to your product or service, covering essential features and functionalities."
      },
      {
        name: "Written Tutorials",
        startingPrice: 350,
        info: "Starting at $350 per guide (up to 1,000 words), these detailed written tutorials provide clear instructions, diagrams, and step-by-step guidance for more complex tasks."
      }
    ]
  },
  {
    name: "Brochures and/or Flyers",
    startingPrice: 50,
    info: "We create visually stunning brochures and flyers that effectively highlight your products and services. Combining clear, persuasive messaging with impactful visuals, our designs are crafted to captivate your audience and communicate your value. Whether for promotions, events, or brand storytelling, our brochures and flyers ensure you stand out and leave a memorable impression.",
    details: "Our brochure and flyer design services help you market your products effectively. We focus on making sure your message is clear and the design stands out, giving your marketing materials maximum impact.",
    pricingTiers: [
      {
        name: "Flyers (One Page)",
        startingPrice: 50,
        info: "Starting at $50 per design, perfect for quick promotions or announcements. Includes a clean, professional layout and visually appealing graphics."
      },
      {
        name: "Bi-Fold Brochures",
        startingPrice: 100,
        info: "Starting at $100 per design, ideal for presenting more detailed information in a compact, foldable format. Includes high-quality design and layout."
      },
      {
        name: "Tri-Fold Brochures",
        startingPrice: 150,
        info: "Starting at $150 per design, these brochures offer ample space for organized content and visuals. Perfect for marketing campaigns that require detailed information and appealing design."
      },
      {
        name: "Custom Multi-Page Brochures",
        startingPrice: 300,
        info: "Starting at $300, tailored to your specific needs. These brochures can include multiple pages, custom layouts, and advanced designs, making them ideal for extensive product or service catalogs."
      }
    ]
  },
  {
    name: "Training Manual and Onboarding Paperwork Creation",
    startingPrice: 500,
    info: "We create comprehensive and professional training materials and onboarding documents to simplify and enhance the onboarding process for employees, clients, or users. Designed with clarity and engagement in mind, our materials provide step-by-step guidance, ensuring smooth transitions and successful integration. By addressing key needs and goals, we help you deliver a seamless onboarding experience that fosters confidence and alignment.",
    details: "We create thorough and easy-to-understand training manuals and onboarding paperwork. These documents help onboard new employees, clients, or users with the necessary information to succeed.",
    pricingTiers: [
      {
        name: "Basic Onboarding Documents",
        startingPrice: 500,
        info: "Starting at $500, this tier covers essential onboarding materials such as checklists, orientation guides, and introductory content tailored to your needs."
      },
      {
        name: "Training Manuals (10–20 pages)",
        startingPrice: 1500,
        info: "Starting at $1,500, this package includes detailed manuals with structured content, step-by-step instructions, and relevant visual aids for effective training."
      },
      {
        name: "Comprehensive Manuals (20–50 pages)",
        startingPrice: 3000,
        info: "Starting at $3,000, this option is ideal for extensive manuals that cover multiple aspects of training, onboarding, or operational guidelines. Includes in-depth explanations, examples, and advanced formatting."
      },
      {
        name: "Advanced Manuals with Multimedia",
        startingPrice: 5000,
        info: "Starting at $5,000, this package integrates multimedia elements such as videos, interactive content, and custom graphics to enhance engagement and understanding."
      }
    ]
  },
  {
    name: "Study Guide Creation",
    startingPrice: 500,
    info: "We design and create comprehensive study guides that help students and professionals master their subjects with confidence. Tailored to simplify complex concepts, our guides are structured to enhance understanding, boost retention, and support effective learning strategies. Whether for academic success or professional growth, our study guides provide the clarity and focus needed to achieve your goals.",
    details: "We craft comprehensive study guides that help learners understand and retain critical information. Whether for academic or professional use, our study guides are designed to make complex material easy to grasp.",
    pricingTiers: [
      {
        name: "Basic Study Guides (5–10 pages)",
        startingPrice: 500,
        info: "Starting at $500, ideal for concise overviews or summaries. These guides provide essential information in a clear, structured format to aid quick understanding."
      },
      {
        name: "Comprehensive Guides (10–30 pages)",
        startingPrice: 1500,
        info: "Starting at $1,500, perfect for in-depth exploration of a subject. These guides include detailed explanations, examples, and diagrams for thorough understanding."
      },
      {
        name: "Interactive Digital Guides",
        startingPrice: 2500,
        info: "Starting at $2,500, these guides incorporate interactive elements such as clickable content, multimedia enhancements, and quizzes to engage learners more effectively."
      },
      {
        name: "Flashcard Sets",
        startingPrice: 300,
        info: "Starting at $300, ideal for quick revision and memorization. These sets include concise, focused content designed to reinforce key concepts."
      }
    ]
  },
  {
    name: "eBook Creation",
    startingPrice: 2500,
    info: "We specialize in creating professional eBooks designed to meet educational, marketing, or publishing objectives. From crafting compelling, high-quality content to delivering visually appealing designs, our eBooks are tailored to captivate readers and effectively convey your message. Whether you aim to educate, promote, or inspire, our eBooks are crafted to engage your audience and achieve your goals.",
    details: "Our eBook creation service combines writing and design expertise to deliver a professional, polished product. Whether for marketing, education, or publishing, we ensure your eBook is well-written and visually appealing.",
    pricingTiers: [
      {
        name: "Basic eBook",
        startingPrice: 2500,
        info: "Starting at $2,500, this option includes content writing and professional design for a high-quality eBook that meets your needs."
      },
      {
        name: "Advanced eBook",
        startingPrice: 4500,
        info: "Starting at $4,500, this package includes advanced formatting, in-depth research, and multimedia enhancements to create a comprehensive and engaging eBook."
      }
    ]
  },
  {
    name: "Newsletters",
    startingPrice: 300,
    info: "We design and create engaging newsletters that help you connect with your audience, keeping them informed and inspired. Whether it’s a one-time update or a recurring series, our newsletters combine compelling content with visually appealing layouts to ensure your message is effective and memorable. Perfect for building relationships and maintaining a strong connection with your audience.",
    details: "Our newsletter services ensure you stay connected with your audience by providing valuable, timely content. We handle both the writing and design, ensuring that your newsletter stands out in inboxes.",
    pricingTiers: [
      {
        name: "Single Newsletter",
        startingPrice: 300,
        info: "Starting at $300, perfect for one-time updates or special announcements. Includes custom content creation and professional design to make a lasting impression."
      },
      {
        name: "Monthly Newsletter Packages",
        startingPrice: 800,
        info: "Starting at $800 per month for up to 4 newsletters. Ideal for maintaining regular communication with your audience, with a focus on consistency and high-quality content."
      },
      {
        name: "Custom Plans",
        startingPrice: 900,
        info: "Starting at $900, tailored for weekly newsletters or highly detailed and customized content. Designed to meet your specific communication needs and audience engagement goals."
      }
    ]
  },
];

export const FAQs: FAQ[] = [
  {
    question: "What sets Phoenix Code Studio apart?",
    answer:
      "At Phoenix Code Studio, we transcend conventional digital solutions by seamlessly merging cultural depth with cutting-edge technology, creating digital experiences that are both highly functional and deeply transformative. Our work isn’t just about design—it’s about crafting meaningful, intuitive, and powerful digital solutions that drive growth and innovation. Inspired by the legendary phoenix, a symbol of rebirth, resilience, and boundless potential, we approach every project with the same spirit of renewal and reinvention. Just as the phoenix rises from the ashes, we believe in turning challenges into opportunities, breathing new life into digital experiences, and helping brands soar to new heights. At Phoenix Code Studio, we blend artistry and technology to create web designs, branding, UI/UX solutions, and digital strategies that ignite engagement and fuel success. Whether you’re launching a new venture or revitalizing an existing brand, we ensure that your digital presence is not only visually striking but also strategically optimized for long-term impact. When you partner with us, you're not just investing in a service—you’re embracing a philosophy of constant evolution and fearless innovation. Rise, transform, and lead—with Phoenix Code Studio by your side, the future of your brand is limitless."
  },
  {
    question: "What does 'bespoke' mean in the context of your services?",
    answer:
      "In the context of our services, ‘bespoke’ means that every project we create is uniquely tailored to your specific needs, goals, and brand identity. We don’t rely on generic, one-size-fits-all templates or cookie-cutter solutions. Instead, we take the time to understand your business, industry, and audience to craft customized digital experiences that set you apart from the competition. Whether it’s a custom website, brand reimagining, UX/UI design, SEO strategy, or content creation, every element is designed with precision and purpose to ensure it aligns perfectly with your business objectives. From functionality to aesthetics, our bespoke approach ensures your digital presence is not just effective but memorable, distinctive, and impactful."
  },
  {
    question: "Do you offer consultations before starting a project?",
    answer: "Yes! We offer a detailed consultation before providing an estimate to ensure we fully understand your needs, goals, and vision. Since every project varies in complexity and scope, this initial discussion allows us to assess your specific requirements, whether it’s a custom website, branding overhaul, SEO strategy, or content creation. During this session, we’ll talk about your business objectives, target audience, desired features, design preferences, and budget to ensure we develop a solution that aligns perfectly with your vision. We also provide insights on project timelines, deliverables, and pricing to maintain transparency and clear expectations from the start. Our goal is to create a strategic, customized plan that sets your project up for success."
  },
  {
    question: "Do you offer payment plans or flexible pricing options?",
    answer: "Yes! We provide four structured pricing plans to accommodate businesses of all sizes and budgets: Basic, Standard, Premium, and Custom Plans. The Basic Plan is perfect for startups or small businesses needing a professional yet simple online presence, while the Standard Plan includes additional design elements and optimization features. Our Premium Plan offers a more advanced, feature-rich solution with custom functionality, SEO strategies, and enhanced branding, while the Custom Plan is designed for businesses requiring unique, fully tailored solutions like e-commerce platforms, membership sites, or specialized integrations. We also offer flexible payment options and installment plans to make it easier for businesses to invest in their digital transformation without financial strain. During our consultation, we’ll help you determine the best plan for your needs, ensuring you receive the most value from our services."
  },
  {
    question: "What services do you offer?",
    answer:
      "At Phoenix Code Studio, we offer a comprehensive range of digital solutions designed to help businesses establish a strong online presence and elevate their brand. Our services include company rebranding, where we refine and modernize your brand identity to align with your vision, and custom website development, crafting tailored, user-friendly websites that captivate and engage audiences. We specialize in database management, ensuring secure and efficient data handling, and UX/UI design, including wireframing and prototyping, to create seamless digital experiences. Our expertise extends to SEO optimization, enhancing your website’s visibility, and website copywriting, crafting compelling content that resonates with your audience. Additionally, we provide brand storytelling to communicate your unique value effectively, along with the creation of product guides, manuals, training materials, onboarding paperwork, study guides, eBooks, newsletters, and marketing collateral like brochures and flyers. For businesses seeking knowledge-sharing solutions, we develop online courses, tutorials, technical documentation, and blog content to establish authority in your industry. Whether you're looking to reimagine your brand, optimize your digital presence, or create impactful content, Phoenix Code Studio is your partner in innovation and growth."
  },
  {
    question: "What industries do you work with?",
    answer:
      "At Phoenix Code Studio, we specialize in empowering small businesses across a wide range of industries. While our primary focus is on helping startups and growing businesses establish a strong digital presence, our expertise extends to diverse sectors, including retail, hospitality, creative services, technology, healthcare, education, professional services, and more. Whether you run an e-commerce store looking for a sleek, high-converting website, a restaurant in need of a compelling online presence, a design agency requiring a rebrand, or a consulting firm seeking professional content and SEO optimization, we tailor our solutions to meet your unique challenges and goals. Regardless of your industry, our commitment remains the same: to craft bespoke digital solutions that elevate your brand, engage your audience, and drive meaningful results."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on the scope, complexity, and specific requirements of your project. On average, a custom website development project takes between 6–10 weeks, including design, development, content creation, and testing. More complex projects, such as e-commerce platforms, extensive branding overhauls, or custom integrations, may take longer, while smaller-scale updates or landing pages can be completed more quickly. During our initial consultation, we’ll assess your needs and provide a detailed project timeline, ensuring transparency, alignment, and efficient execution. Our goal is to deliver high-quality, tailored solutions without unnecessary delays, keeping your business objectives and deadlines in focus."
  },
  {
    question: "Can you redesign my existing website without starting from scratch?",
    answer: "Yes! Absolutely! If you already have a website but feel it needs a visual refresh, better functionality, or improved user experience, we can redesign and enhance it without rebuilding everything from scratch. Our approach focuses on modernizing the design, optimizing navigation, improving mobile responsiveness, and ensuring faster load times while retaining the core elements that still work well for your business. We also enhance SEO, content structure, and branding alignment to create a more engaging and high-performing website. Whether you need aesthetic updates, functionality improvements, or full-scale UX/UI enhancements, we ensure your website evolves to meet current digital standards and better serve your audience."
  },
  {
    question: "Can you help with content creation for my website?",
    answer:
      "Yes! At Phoenix Code Studio, we provide comprehensive content creation services to ensure your website effectively communicates your brand’s message and engages your audience. Our expert team crafts clear, compelling, and strategic content that aligns with your brand’s identity and business objectives. Whether you need persuasive copy for landing pages, informative blog posts to establish thought leadership, or SEO-optimized content to enhance search engine visibility, we tailor every piece to resonate with your target audience. Our services also include product descriptions, service pages, website copywriting, newsletters, eBooks, online course materials, and technical writing, ensuring a consistent and professional tone throughout your digital presence. We focus on storytelling that drives engagement, builds trust, and converts visitors into loyal customers, helping your business stand out in a crowded digital space. Let us help you craft content that not only informs but also inspires action!"
  },
  {
    question: "Do you create logos and other branding materials?",
    answer: "Yes! We offer comprehensive branding services, including logo design, typography selection, color palette creation, and brand style guides to establish a cohesive and professional identity for your business. In addition to logo design, we create marketing materials such as business cards, brochures, flyers, social media graphics, and digital assets to ensure brand consistency across all platforms. Our branding process focuses on capturing the essence of your business, creating a strong visual identity, and making a lasting impression on your audience. Whether you’re launching a new brand or refreshing your existing one, we tailor our designs to reflect your values, mission, and target market, helping you build a recognizable and impactful presence."
  },
  {
    question: "Do you provide SEO services, and how does SEO benefit my website?",
    answer: "Yes! SEO optimization is an essential part of our website services, designed to improve your search engine rankings, drive organic traffic, and increase online visibility. We implement a combination of on-page, off-page, and technical SEO strategies to ensure your website performs well in search results. This includes keyword research and optimization, meta tag enhancements, internal linking strategies, site speed improvements, mobile responsiveness, and structured data markup. By optimizing your website for user experience and search engines, we help you attract the right audience, improve engagement, and boost conversions. A strong SEO strategy ensures that your business remains competitive and discoverable, ultimately leading to long-term growth and online success."
  },
  {
    question: "Can you help with rebranding my business?",
    answer:
      "Absolutely! Our brand reimagining service is designed to breathe new life into your business, ensuring your digital presence aligns seamlessly with your evolving goals and vision. Whether you're looking to refine your logo, color palette, typography, or overall brand aesthetics, we create a cohesive and modern identity that resonates with your audience. Our team specializes in website redesign, delivering an updated, engaging, and user-friendly experience that reflects your refreshed brand personality. Beyond visuals, we enhance brand storytelling, crafting compelling messaging and website copy to establish a strong emotional connection with your customers. Additionally, we offer SEO optimization, content strategy, and marketing collateral development, ensuring consistency across all touchpoints—from your website and social media presence to brochures, newsletters, and promotional materials. With Phoenix Code Studio, your rebrand won’t just be a facelift—it will be a strategic transformation that elevates your business and sets you apart in your industry."
  },
  {
    question: "Do you offer ongoing support after a project is completed?",
    answer:
      "Yes! At Phoenix Code Studio, we believe that a successful digital presence extends beyond the initial launch, which is why we offer ongoing support and maintenance packages to keep your website running smoothly, securely, and up to date. Our post-launch services include regular updates, security monitoring, performance optimization, content updates, and technical support to ensure your site remains fast, functional, and aligned with your evolving business needs. Whether you need minor tweaks, major updates, or continuous SEO improvements, our team is here to help your website adapt and grow with your business. We also offer training sessions and documentation so you and your team can confidently manage your digital assets. With Phoenix Code Studio, you’re not just getting a one-time service—you’re gaining a long-term partner dedicated to your success."
  },
  {
    question: "What happens if my website has issues after launch?",
    answer: "We provide ongoing support and maintenance to ensure your website remains secure, functional, and up to date. As part of our monthly maintenance packages, we offer technical support, performance monitoring, security updates, content updates, and bug fixes to keep your site running smoothly. Whether you encounter unexpected technical issues, need software updates, or want to add new features, we are here to help. We also provide website backups, malware protection, and optimization services to ensure the long-term health of your site. Our goal is to offer peace of mind so you can focus on growing your business while we handle the technical aspects."
  },
  {
    question: "How do you tailor your services for small businesses?",
    answer:
      "At Phoenix Code Studio, we understand that small businesses have unique challenges, from limited budgets to the need for a strong digital presence in a competitive market. That’s why we offer bespoke, scalable solutions tailored to your specific goals, industry, and vision. We work closely with you to understand your brand, target audience, and business objectives, ensuring every project—whether it's a custom website, branding refresh, SEO strategy, or content creation—is aligned with your needs. Our approach is cost-effective and strategic, providing high-quality results without unnecessary complexity. We prioritize user-friendly designs, mobile responsiveness, and SEO best practices to help you attract and retain customers. Additionally, we offer flexible maintenance and support plans, empowering you to grow at your own pace while we handle the technical details. With Phoenix Code Studio, small businesses get enterprise-level solutions without the hefty price tag, ensuring long-term success in the digital landscape."
  },
];

export const paymentPlans: PaymentPlan[] = [
  {
    title: "Basic Plan",
    description: "Ideal for small projects or businesses just getting started, this plan offers straightforward, flexible payment options that help you manage your budget effectively.",
    details: [
      "Pay per service or milestone to maintain financial control",
      "Monthly payments available for added convenience",
      "Up to 3 months payment term to suit short-term projects"
    ],
    route: "/payment-plans/basic-plan"
  },
  {
    title: "Standard Plan",
    description: "Perfect for medium-sized projects, this plan provides more flexibility with manageable payment installments and enhanced support to ensure your project stays on track.",
    details: [
      "Split payments into 3-6 installments for better cash flow",
      "Priority support during the project for smoother execution",
      "Up to 6 months payment term to accommodate project timelines"
    ],
    route: "/payment-plans/standard-plan"
  },
  {
    title: "Premium Plan",
    description: "Designed for large-scale or ongoing projects, this plan offers flexible and extended payment options along with comprehensive support to address evolving needs.",
    details: [
      "Monthly retainer payments for predictable budgeting",
      "Up to 12-month payment terms to manage long-term commitments",
      "Full-service coverage including ongoing support and updates"
    ],
    route: "/payment-plans/premium-plan"
  },
  {
    title: "Custom Plan",
    description: "Tailored for complex or unique projects, this plan allows us to work together to create a payment structure that aligns with your specific needs, timeline, and budget.",
    details: [
      "Flexible payment terms based on the size and scope of your project",
      "Options for scaling and ongoing support to ensure continued success",
      "Up to 24 months payment term based on mutual agreement"
    ],
    route: "/payment-plans/custom-plan"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    featured: true,
    position: "CEO, Tech Innovators",
    image: "/images/avatar-placeholder.jpg",
    quote:
      "This service helped us transform our business. The team was fantastic, and the results exceeded our expectations!",
  },
  {
    name: "Sarah Smith",
    featured: true,
    position: "Founder, Creative Solutions",
    image: "/images/avatar-placeholder.jpg",
    quote:
      "A professional and reliable partner. The process was smooth, and the final product truly captures our vision.",
  },
  {
    name: "Michael Lee",
    featured: true,
    position: "CTO, NextGen Technologies",
    image: "/images/avatar-placeholder.jpg",
    quote:
      "The quality of work and attention to detail was exceptional. We saw a noticeable improvement in user engagement.",
  },
  {
    name: "Emma Johnson",
    featured: true,
    position: "Marketing Director, Bright Horizons",
    image: "/images/avatar-placeholder.jpg",
    quote:
      "Absolutely amazing experience. The team was highly collaborative and delivered exactly what we needed, on time!",
  },
];

export const blogs: BlogPost[] = [
  {
    title: "The Importance of User Experience in Web Design",
    author: "Tina Huynh",
    date: "August 15, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Design", "Software Engineer"],
    excerpt:
      "User experience (UX) is one of the most important factors when designing a website. It directly impacts how users interact with your website, and ultimately affects conversion rates.",
    slug: "/blogs/importance-of-user-experience",
  },
  {
    title: "Books to Read as a Developer",
    author: "Tina Huynh",
    date: "March 23, 2022",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Self-Development", "Software Engineer", "Career"],
    excerpt:
      "A career in tech demands constant learning and growth. But isn’t that true for any career? After all, continuous improvement is the key to success.",
    slug: "/blogs/books-to-read-as-developer",
  },
  {
    title: "Who's the Better Hire? - Jack of All Trades OR Master of One",
    author: "Tina Huynh",
    date: "April 22, 2022",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Career"],
    excerpt:
      `Even though "jack of all trades" sometimes is used as an insult, it did not begin as one. The complete saying goes "A jack of all trades is a master of none, but oftentimes better than a master of one."`,
    slug: "/blogs/jack-of-all-trades-or-master-of-one",
  },
  {
    title: "Best Contactless Business Card Options",
    author: "Tina Huynh",
    date: "April 22, 2022",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Career", "Resources"],
    excerpt:
      `Contactless business cards are a modern, eco-friendly alternative to paper cards, allowing professionals to share contact details, social media profiles, and more with a simple tap or scan.`,
    slug: "/blogs/best-contactless-business-card-options",
  },
  {
    title: "Why Every Developer Should Write",
    author: "Tina Huynh",
    date: "March 21, 2022",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Career", "Self-Development"],
    excerpt:
      `"In fact, the importance of writing has perhaps increased in the last decade or so, thanks to trends in technology...In matters of business, when every second counts, strong writing makes the difference between smooth operations and clumsy footing."`,
    slug: "/blogs/why-every-developer-should-write",
  },
  {
    title: "How Tailwind CSS Can Speed Up Your Development Process",
    author: "Tina Huynh",
    date: "July 10, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Software Engineer", "Design"],
    excerpt:
      "Tailwind CSS is a utility-first CSS framework that provides a highly customizable approach to building modern user interfaces. In this blog post, we'll explore how it can speed up your development process.",
    slug: "/blogs/how-tailwind-css-can-speed-up-your-development",
  },
  {
    title: "The Future of JavaScript Frameworks",
    author: "Tina Huynh",
    date: "June 5, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Resources", "Software Engineer"],
    excerpt:
      "With the rapid evolution of JavaScript frameworks like React, Vue, and Angular, it's important to stay up-to-date with the latest trends. This article explores the future of JavaScript frameworks.",
    slug: "/blogs/future-of-javascript-frameworks",
  },
  {
    title: "Why Accessibility Matters in Web Development",
    author: "Tina Huynh",
    date: "May 22, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Accessibility", "Design", "Software Engineer"],
    excerpt:
      "Accessibility should be a priority in every web development project. Ensuring that your website is usable by people with disabilities opens your content to a wider audience and improves user satisfaction.",
    slug: "/blogs/why-accessibility-matters",
  },
  {
    title: "Decoding Blockchain: Exploring the World of Decentralized Systems",
    author: "Tina Huynh",
    date: "April 10, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Blockchain", "Resources"],
    excerpt:
      "Blockchain technology is transforming industries by providing secure, decentralized systems. Discover the fundamentals and future potential of blockchain in this blog.",
    slug: "/blogs/decoding-blockchain-decentralized-systems",
  },
  {
    title: "Demystifying Data Science: Transforming Data into Actionable Insights",
    author: "Tina Huynh",
    date: "March 18, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Data Science", "Analytics", "Machine Learning"],
    excerpt:
      "Data science is changing how we solve problems and make decisions. Learn how data scientists turn raw data into insights that drive success.",
    slug: "/blogs/demystifying-data-science",
  },
  {
    title: "Revolutionizing Connectivity: Innovations in IoT Development",
    author: "Tina Huynh",
    date: "February 25, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Innovation"],
    excerpt:
      "The Internet of Things (IoT) is connecting the world like never before. Explore how IoT innovations are transforming industries and daily life.",
    slug: "/blogs/revolutionizing-connectivity-iot",
  },
  {
    title: "Creative Data Harvesting: The Wonders of Web Scraping",
    author: "Tina Huynh",
    date: "January 15, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Data Science", "Software Engineer", "Analytics"],
    excerpt:
      "Web scraping opens up endless possibilities for collecting and analyzing data. Dive into the ethical and technical aspects of this powerful technique.",
    slug: "/blogs/creative-data-harvesting-web-scraping",
  },
  {
    title: "Behind the Code: Insights into the World of Tech Startups",
    author: "Tina Huynh",
    date: "December 5, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Entrepreneurship", "Innovation"],
    excerpt:
      "Tech startups are driving innovation in the digital age. Explore the challenges and successes behind the scenes of these groundbreaking companies.",
    slug: "/blogs/insights-into-tech-startups",
  },
  {
    title: "Navigating the Digital Revolution: Emerging Tech Trends",
    author: "Tina Huynh",
    date: "November 20, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Innovation"],
    excerpt:
      "Stay ahead of the curve with a look at the latest technology trends reshaping the digital landscape and industries worldwide.",
    slug: "/blogs/navigating-tech-trends",
  },
  {
    title: "Mastering User-Friendly Design: Gems of GUI Development",
    author: "Tina Huynh",
    date: "October 15, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Design", "Software Engineer", "Design"],
    excerpt:
      "Great graphical user interfaces (GUIs) are key to intuitive user experiences. Discover tips and techniques for designing user-friendly interfaces.",
    slug: "/blogs/mastering-gui-design",
  },
  {
    title: "From Startup Garage to Tech Giant: Stories of Tech Entrepreneurs",
    author: "Tina Huynh",
    date: "August 5, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Entrepreneurship", "Innovation"],
    excerpt:
      "Tech entrepreneurs are changing the world. Explore inspiring stories of how industry disruptors started from scratch and achieved greatness.",
    slug: "/blogs/stories-of-tech-entrepreneurs",
  },
];

export const pastProjects: Project[] = [
  {
    title: "Quiz Application",
    img: ["/images/quizlet-application.png", "/images/quizlet-app-3.png"],
    featured: true,
    description: "This is a simple Next.js project.It's a web-based quiz platform designed to offer a variety of quizzes across multiple subjects, including Chemistry, History, Math, and more. The application supports user registration, tracks progress, and allows users to select quizzes based on difficulty and subject. Users can register, reset their passwords, and manage their profiles with the ability to update personal information and choose default profile pictures. The application includes features like quiz progress tracking, score tracking, and a leaderboard to encourage competition. It also stores quiz data in localStorage, ensuring users can resume where they left off. Built with a responsive UI and accessibility features, the app provides a seamless experience across devices. Data management is handled using MySQL, Sequelize, and Next-Auth for secure user authentication and information retrieval.",
    short: "This Next.js app, a conversion of Quizlet-Plus, offers quizzes in subjects like Chemistry, History, and Math. It features user registration, progress tracking, profile management, and a leaderboard. Data is stored in localStorage, with MySQL, Sequelize, and Next-Auth handling authentication. The app is responsive and includes accessibility features for a seamless experience.",
    tags: ["User Auth", "Progress Tracking", "Dynamic", "Data Filtering"],
    languages: ["HTML", "TypeScript"],
    frameworks: ["Next.js", "React", "jQuery"],
    technologies: ["MySQL", "Sequelize", "Next-Auth", "localStorage", "Axios"],
    githubLink: "https://github.com/tmchuynh/knowledge_knockout",
  },
  {
    title: "Bootstrap Website Mock",
    img: ["/images/bootstrap-1.png", "/images/bootstrap-2.png", "/images/bootstrap-3.png", "/images/bootstrap-4.png"],
    featured: true,
    description: "This is a simple Next.js project.It's a web-based quiz platform designed to offer a variety of quizzes across multiple subjects, including Chemistry, History, Math, and more. The application supports user registration, tracks progress, and allows users to select quizzes based on difficulty and subject. Users can register, reset their passwords, and manage their profiles with the ability to update personal information and choose default profile pictures. The application includes features like quiz progress tracking, score tracking, and a leaderboard to encourage competition. It also stores quiz data in localStorage, ensuring users can resume where they left off. Built with a responsive UI and accessibility features, the app provides a seamless experience across devices. Data management is handled using MySQL, Sequelize, and Next-Auth for secure user authentication and information retrieval.",
    short: "This Next.js app, a conversion of Quizlet-Plus, offers quizzes in subjects like Chemistry, History, and Math. It features user registration, progress tracking, profile management, and a leaderboard. Data is stored in localStorage, with MySQL, Sequelize, and Next-Auth handling authentication. The app is responsive and includes accessibility features for a seamless experience.",
    tags: ["Mock Up", "Dynamic", "Data Filtering"],
    languages: ["HTML", "JavaScript", "CSS", "SCSS"],
    frameworks: ["Bootstrap CSS", "jQuery"],
    githubLink: "https://github.com/tmchuynh/Bootstrap-Icon-Mock",
  },
  {
    title: "Military Fitness Calculator",
    featured: true,
    description: "Army physical fitness test score is calculated by assigning a number of points to doing sit-ups, push-ups, and the time in which you do a 2-mile run. The maximum APFT score is 100 points per discipline, which gives a total of 300 points. To pass the test, it is required to get at least 60 points (60%) in each category. This means that the minimum total score is 180 points. The APFT calculator shows the overall score in the last field. The US Army service members are also obliged to meet body fat standards which take height, neck, waist, and hip measurements into consideration.",
    short: "It is obligatory for US Army service members to go through the fitness test twice a year. It is designed so that soldiers can prove their muscular strength, endurance, and cardiovascular respiratory fitness.",
    tags: ["Educational", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Node.js", "jQuery", "Materialize CSS"],
    technologies: ["vanilla-tilt.js", "Ajax"],
    githubLink: "https://github.com/tmchuynh/Military-Fitness-Calculator",
  },
  {
    title: "IAC Company Website",
    img: ["/images/iac.png", "/images/iac-1.png", "/images/iac-website.png", "/images/iac-2.png"],
    featured: true,
    description: "The International Activities Club (IAC) website is a user-friendly platform that showcases the organization's educational programs and after-school activities. It highlights the A.R.C. Initiative, focusing on hands-on learning and real-world application of classroom knowledge. The site provides detailed information about the diverse extracurricular options, such as chess, sports, and creative writing, offered to students from 1st grade through high school. With easy navigation, the website ensures parents and schools can explore IAC’s services and find enriching learning opportunities for students.",
    short: "The IAC website highlights educational programs, the A.R.C. Initiative, and after-school activities like chess, sports, and creative writing, offering enriching opportunities for students. It’s designed for easy navigation by parents and schools to explore IAC’s services.",
    tags: ["Educational", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Node.js", "Express"],
    technologies: ["Bootstrap CSS", "Chart.js"],
    liveLink: "https://iacafterschools.com/",
  },
  {
    title: "Emoji Finder",
    featured: true,
    description: "The International Activities Club (IAC) website is a user-friendly platform that showcases the organization's educational programs and after-school activities. It highlights the A.R.C. Initiative, focusing on hands-on learning and real-world application of classroom knowledge. The site provides detailed information about the diverse extracurricular options, such as chess, sports, and creative writing, offered to students from 1st grade through high school. With easy navigation, the website ensures parents and schools can explore IAC’s services and find enriching learning opportunities for students.",
    short: "The IAC website highlights educational programs, the A.R.C. Initiative, and after-school activities like chess, sports, and creative writing, offering enriching opportunities for students. It’s designed for easy navigation by parents and schools to explore IAC’s services.",
    tags: ["Fun", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["jest-dom", "React"],
    githubLink: "https://github.com/tmchuynh/Emoji-Finder",
  },
  {
    title: "FirstGalaxy Company Website",
    img: ["/images/firstgalaxy-website.png", "/images/firstgalaxy.png", "/images/firstgalaxy-1.png", "/images/firstgalaxy-2.png"],
    featured: false,
    description: `
      The FirstGalaxy NPM version Build Status website is designed to showcase the benefits of joining FirstGalaxy Inc. as a real estate agent. It provides helpful resources for starting a real estate career and offers easy access to agent listings.

      The code demonstrates how to filter data by importing an agents object from ./data.js. It uses strict mode, establishes a dropdown menu for filtering options, and toggles its visibility when clicked. The glossary module is also imported to display terms dynamically on the page. Each term is iterated over and printed to the screen, allowing users to easily view the glossary content.`,
    short: "The FirstGalaxy NPM version Build Status website showcases the benefits of joining FirstGalaxy Inc., offers resources for starting a real estate career, and connects users to agent listings. The code demonstrates data filtering, toggling dropdown visibility, and dynamically displaying glossary terms imported from ./data.js.",
    tags: ["Real Estate", "Data Filtering", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS", "jQuery"],
    technologies: ["Bootstrap CSS", "Chart.js"],
    githubLink: "https://github.com/tmchuynh/firstgalaxy",
  },
  {
    title: "Chess Game",
    featured: true,
    description: "The code creates a 2D array of points. The first row is the x-axis and the second row is the y-axis. Each point in the array represents an evaluation of white's king position. The first value in each point is black's evaluation of white's king position, and the second value is white's evaluation of black's king position. [2, 3] evaluates to 0 for both values because it falls on both axes (x and y). [1, 2] evaluates to -1 for both values because it falls on both axes (x and y). [3, 4] evaluates to -4 for white but +5 for black because it falls on only.",
    short: `chessboard.js is a standalone JavaScript Chess Board. It is designed to be "just a board" and expose a powerful API so that it can be used in different ways.The code starts by creating a board and setting up the game. The positionCount variable is used to keep track of how many chess pieces are on the board. var pawnEvalWhite = [ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [5.0, 5.0, 5.0, 5.0], [1., 1., 2., 3.]] var knightEval = [ [-5., -4., -3.]] var bishopEvalWhite = [ [-2., -1.]] var rookEvalWhite = [ [-2.]`,
    tags: ["Fun", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Chessboard.js", "Node.js"],
    githubLink: "https://github.com/tmchuynh/Chess-Game",
  },
];

export const jobPositions: JobPosition[] = [
  {
    title: "Executive Assistant",
    description:
      "We are looking for a highly organized and detail-oriented Executive Assistant to provide administrative and operational support to the CEO. This role requires a proactive and resourceful individual who can efficiently manage schedules, coordinate meetings, handle correspondence, and ensure the smooth operation of executive functions. You will serve as a critical point of contact, requiring professionalism, discretion, and excellent communication skills. The ideal candidate will have experience in executive support, project coordination, and administrative management, with a proven ability to multitask and prioritize effectively.",
    responsibilities: [
      "Manage executive calendars, schedule meetings, and coordinate appointments across multiple time zones (if applicable)",
      "Handle incoming and outgoing correspondence, including emails, phone calls, and reports",
      "Prepare presentations, reports, and documentation for internal and external meetings",
      "Coordinate domestic and international travel arrangements, including accommodations and itineraries",
      "Oversee administrative operations, including expense tracking, record-keeping, and file management",
      "Assist with project management tasks and ensure timely follow-ups on key initiatives",
      "Handle confidential and sensitive information with discretion and professionalism",
    ],
    qualifications: [
      "Proven experience as an Executive Assistant, Personal Assistant, or in a similar administrative role",
      "Ability to work independently and handle multiple projects simultaneously",
      "Excellent written and verbal communication skills",
      "Strong proficiency in Microsoft Office Suite (Word, Excel, PowerPoint, Outlook) and project management tools",
      "Exceptional organizational and time-management skills, with the ability to prioritize tasks effectively",
      "Strong problem-solving skills and the ability to anticipate the needs of executives",
    ],
    information: "Contract | Remote | Flexible schedule",
  },
  {
    title: "Content Writer",
    description:
      "We are seeking a creative and detail-oriented Content Writer to produce high-quality, engaging, and informative content for a variety of digital platforms. The ideal candidate will have excellent writing, editing, and research skills, with a strong understanding of content marketing, SEO optimization, and audience engagement. In this role, you will be responsible for crafting compelling blog posts, articles, email campaigns, social media content, and marketing materials. You should be able to adapt your writing style to different audiences and industries, ensuring that all content aligns with brand messaging and goals.",
    responsibilities: [
      "Write, edit, and proofread engaging content, including blog posts, articles, newsletters, and website content",
      "Conduct in-depth research on industry-related topics to create authoritative and informative content to provide to software developers",
      "Collaborate with designers and marketers to develop content that complements visual branding",
      "Manage content calendars and ensure consistent publishing schedules",
      "Ensure all content aligns with brand voice, tone, and messaging guidelines",
    ],
    qualifications: [
      "Exceptional writing, editing, and proofreading skills",
      "Familiarity with SEO best practices and keyword optimization",
      "Ability to write for various audiences and industries",
      "Proficiency in content management systems (WordPress, Webflow, etc.)",
      "Strong attention to detail and ability to meet tight deadlines",
    ],
    information: "Contract | Remote | Flexible schedule",
  },
  {
    title: "Graphic Designer/Illustrator",
    description:
      "We are seeking a talented and highly creative Graphic Designer/Illustrator to develop visually appealing designs and branding materials that captivate audiences. This role requires a strong eye for aesthetics, a deep understanding of design principles, and the ability to translate concepts into compelling visuals. The ideal candidate should be proficient in digital and print design, branding, UI/UX design, and illustration. You will work closely with marketing, content, and web development teams to create stunning visuals that enhance brand storytelling and user engagement.",
    responsibilities: [
      "Design compelling graphics for websites, social media, advertising, and print materials",
      "Create custom illustrations and visual assets that align with brand identity",
      "Manage multiple design projects simultaneously while meeting deadlines",
      "Collaborate with the marketing and web development teams to enhance user experience through design",
      "Develop brand identity elements, including logos, typography, and color schemes",
      "Ensure design consistency across all marketing and branding materials",
      "Stay up to date with design trends and emerging technologies",
    ],
    qualifications: [
      "A strong portfolio showcasing previous design and illustration work",
      "Ability to create original illustrations and conceptual designs",
      "Strong understanding of branding, typography, and color theory",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects)",
      "Experience in UI/UX design and familiarity with tools like Figma or Sketch",
    ],
    information: "Contract | Remote | Flexible schedule",
  },
  {
    title: "Cybersecurity Specialist",
    description:
      "We are looking for a highly skilled Cybersecurity Specialist to protect our organization's data, networks, and digital assets from cyber threats. The ideal candidate will have experience implementing security protocols, identifying vulnerabilities, and responding to security incidents. You will work closely with the development teams to ensure compliance with industry standards and best practices, as well as train staff on security awareness and risk mitigation.",
    responsibilities: [
      "Train employees on cybersecurity best practices and risk awareness",
      "Conduct security risk assessments, penetration testing, and vulnerability scanning",
      "Monitor and analyze security threats, vulnerabilities, and breaches",
      "Investigate and respond to security incidents, ensuring minimal impact to operations",
      "Develop and implement cybersecurity policies, frameworks, and incident response plans",
      "Manage firewalls, encryption protocols, and security monitoring tools",
    ],
    qualifications: [
      "Relevant cybersecurity certifications (CISSP, CEH, CISM) are preferred (but not required with proven qualifying experience)",
      "Proven experience in cybersecurity, network security, or IT security roles",
      "Familiarity with security frameworks such as ISO 27001, NIST, and CIS",
      "Knowledge of ethical hacking techniques, intrusion detection, and threat intelligence",
      "Strong problem-solving skills and ability to handle high-pressure security situations",
    ],
    information: "Contract | Remote | Growth opportunities",
  },
  {
    title: "Sales Representative",
    description:
      "We are looking for an enthusiastic and results-driven Sales Representative to identify and engage potential clients, build strong customer relationships, and drive business growth. The ideal candidate is a natural communicator with excellent negotiation skills and a proven track record in sales. You will play a crucial role in increasing revenue and expanding our customer base by promoting our products and services to a global audience.",
    responsibilities: [
      "Develop and deliver compelling sales presentations and proposals",
      "Negotiate contracts and close deals to meet or exceed sales targets",
      "Identify, reach out to, and qualify potential clients through various channels",
      "Maintain strong client relationships and provide exceptional customer service",
      "Track sales metrics and report on performance using CRM software",
    ],
    qualifications: [
      "Proven experience in sales, business development, or account management",
      "Excellent communication, negotiation, and interpersonal skills",
      "Strong understanding of branding, marketing, and digital services",
      "Ability to work independently and proactively pursue new business opportunities",
    ],
    information: "Commission-based | Remote | Growth opportunities",
  },
];
