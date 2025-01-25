import { Send } from "lucide-react";
import {
  FaBuilding,
  FaCalendarCheck,
  FaInfoCircle,
  FaLaptop,
  FaMoneyBillAlt,
  FaPenAlt,
  FaQuestion,
  FaSignature,
} from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FAQ } from "./interfaces";
import { BiWorld } from "react-icons/bi";

export const menu = {
  navMain: [
    {
      title: "Services Overview",
      url: "/services",
      icon: BiWorld,
    },
    {
      title: "Services for Companies",
      icon: FaBuilding,
      items: [
        {
          title: "Company Rebranding",
          url: "/company/company-rebranding"
        },
        {
          title: "Custom Website Design",
          url: "/company/custom-website-design",
        },
        {
          title: "E-Commerce Site Development",
          url: "/company/e-commerce-site-development",
        },
        {
          title: "Single-Page Applications (SPAs)",
          url: "/company/single-page-application",
        },
        {
          title: "Database Management",
          url: "/company/database-management",
        },
      ]
    },
    {
      title: "Website Services",
      icon: FaLaptop,
      items: [
        {
          title: "SEO Optimization",
          url: "/web/seo-optimization",
        },
        {
          title: "User Experience (UX) Design",
          url: "/web/user-experience-design",
        },
        {
          title: "Wireframing & Prototyping",
          url: "/web/wireframing-&-prototyping",
        },
      ],
    },
    {
      title: "Content Creation Services",
      icon: FaPenAlt,
      items: [
        {
          title: "Brand Storytelling",
          url: "/content/brand-storytelling",
        },
        {
          title: "Website Copywriting",
          url: "/content/website-copywriting",
        },
        {
          title: "Product Guides/Manuals",
          url: "/content/product-guides-manuals",
        },
        {
          title: "Blog Writing",
          url: "/content/blog-writing",
        },
        {
          title: "Technical Writing",
          url: "/content/technical-writing",
        },
        {
          title: "Online Courses",
          url: "/content/online-courses",
        },
        {
          title: "Tutorial Creation",
          url: "/content/tutorial-creation",
        },
        {
          title: "Brochures & Flyers",
          url: "/content/brochures-and-or-flyers",
        },
        {
          title: "Training Manual & Onboarding Papers Creation",
          url: "/content/training-manual-and-onboarding-paperwork-creation",
        },
        {
          title: "Study Guide Creation",
          url: "/content/study-guide-creation",
        },
        {
          title: "eBook Creation",
          url: "/content/ebook-creation",
        },
        {
          title: "Newsletters",
          url: "/content/newsletters",
        },
        {
          title: "Proposal Writing",
          url: "/content/proposal-writing",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: FaMoneyBillAlt,
    },
    {
      title: "Payment Plans",
      url: "/payment-plans",
      icon: FaCalendarCheck,
    },
    {
      title: "FAQs",
      url: "/frequently-asked-questions",
      icon: FaQuestion,
    },
  ],
  information: [
    {
      title: "About",
      url: "/about",
      icon: FaInfoCircle,
    },
    {
      title: "Testimonials",
      url: "/testimonials",
      icon: MdPeople,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: IoBookSharp,
    },
    {
      title: "Past Projects",
      url: "/past-projects",
      icon: AiOutlineFundProjectionScreen,
    },
    {
      title: "Contracts",
      url: "/contracts",
      icon: FaSignature,
    },
  ],
  navSecondary: [
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: Send,
    },
  ],
};

export const websiteServices = [
  {
    name: "User Experience Design",
    startingPrice: 3500,
    info: "We design intuitive, functional interfaces that prioritize usability and accessibility. Through user research, wireframing, prototyping, and testing, we create visually appealing designs that solve real user problems and deliver seamless, memorable experiences.",
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
    info: "Our wireframing and prototyping services bring your ideas to life while ensuring designs are user-friendly and practical. We create low-fidelity wireframes to map structure and navigation, and high-fidelity prototypes to simulate real interactions. These tools help you visualize and refine the user journey, saving time and ensuring functionality before development.",
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
    info: "Our SEO optimization services boost your website’s visibility in search engines and drive organic traffic. Using strategies like keyword research, on-page optimization, content enhancement, and link-building, we help your site rank higher in search results. By staying current with search engine algorithms, we ensure you maintain a competitive edge in your industry.",
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

export const companySpecificServices = [
  {
    name: "Company Rebranding",
    startingPrice: 5000,
    info: "Our comprehensive rebranding services are designed to give your company a fresh, modern identity that resonates with your audience and aligns with your business goals. We redefine your visual and strategic branding to help you stand out in a competitive market.",
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
    info: "We deliver custom website designs that perfectly align with your business goals and branding. Our websites are fully responsive, visually appealing, and optimized for an outstanding user experience.",
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
    info: "We design scalable, secure, and user-friendly e-commerce platforms that enhance customer experience, drive sales, and support your business growth with intuitive navigation, robust security, and seamless payment integration.",
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
    info: "We create dynamic, fast-loading single-page applications (SPAs) that offer seamless navigation, real-time updates, and exceptional performance, delivering an engaging and responsive user experience across all devices.",
    details:
      "We build SPAs designed for speed and interactivity. By loading content dynamically, our applications enhance user retention and deliver a seamless experience.",
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
    info: "Our database management services provide secure, scalable, and efficient solutions to store, organize, and access your data. Tailored to your needs, we ensure optimized performance, advanced security, and seamless scalability to support your business growth.",
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
  }
];


export const contentCreationServices = [
  {
    name: "Brand Storytelling",
    startingPrice: 2000,
    info: "We create compelling narratives that define your brand identity and resonate with your audience. Through strategic storytelling, we connect your brand to your audience's emotions, fostering loyalty and trust.",
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
  {
    name: "Website Copywriting",
    startingPrice: 1500,
    info: "We write clear, persuasive, and SEO-optimized website content that effectively communicates your brand's message. Our copy is crafted to captivate visitors and drive organic traffic to your site.",
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
    info: "We create detailed, user-friendly product guides and manuals that simplify complex information and ensure a positive customer experience. Our content is clear, precise, and designed for easy comprehension.",
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
    info: "We create engaging, informative blog posts that resonate with your audience while boosting your website's SEO. Our content is tailored to align with your brand voice, ensuring every post adds value and enhances your online presence.",
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
    info: "Our technical writing services transform complex information into clear, precise documentation. From software manuals to white papers, we ensure your technical content is both accurate and user-friendly.",
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
    info: "We design and develop interactive online courses that combine multimedia elements to educate and engage your audience effectively. Whether you're sharing expertise, training employees, or offering educational content, our courses are tailored to meet your goals and captivate learners.",
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
    info: "We create step-by-step tutorials designed to simplify complex tasks and help users achieve their goals. Our tutorials are clear, concise, and user-friendly, ensuring your audience can easily follow along and succeed.",
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
    info: "We design eye-catching brochures and flyers that effectively showcase your products and services. With a focus on clear messaging and impactful visuals, our designs help you stand out and leave a lasting impression.",
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
    info: "We develop detailed and professional training materials and onboarding documents to streamline the onboarding process for employees, clients, or users. Our materials are designed to ensure clarity, engagement, and successful integration.",
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
    info: "We design and develop detailed study guides that empower students and professionals to excel in their subjects. Our guides are tailored to simplify complex concepts, enhance retention, and support effective learning strategies.",
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
    info: "We specialize in crafting professional eBooks tailored for educational, marketing, or publishing needs. From compelling content to eye-catching design, our eBooks are created to engage readers and achieve your goals.",
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
    info: "We create and design captivating newsletters to help you engage, inform, and connect with your audience. Whether you need a one-time newsletter or an ongoing series, our services ensure your communication is effective and visually appealing.",
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
  {
    name: "Proposal Writing",
    startingPrice: 500,
    info: "Our proposal writing services help you communicate your ideas and goals clearly and persuasively. We create tailored, results-driven proposals to secure clients, win bids, or present compelling cases for funding, ensuring professionalism and strategic impact.",
    details: "Our team specializes in creating professional, compelling proposals tailored to your needs. From business and academic to government projects, we enhance your chances of success with meticulously crafted documents.",
    pricingTiers: [
      {
        name: "Standard Proposals (1-3 pages)",
        startingPrice: 500,
        info: "Starting at $500, this tier is ideal for short, focused proposals that require clear and concise communication."
      },
      {
        name: "In-Depth Proposals (5-10 pages)",
        startingPrice: 1500,
        info: "Starting at $1,500, this tier is designed for comprehensive proposals that require detailed analysis, thorough research, and robust arguments."
      }
    ]
  }
];


export const FAQs: FAQ[] = [
  {
    question: "What sets Phoenix Code Studio apart?",
    answer:
      "At Phoenix Code Studio, we seamlessly combine cultural sophistication with innovative technology to deliver digital experiences that are both highly functional and profoundly meaningful. Drawing inspiration from the lotus flower—a timeless emblem of growth and resilience—we craft designs that empower your business to flourish in the digital realm."
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of web development services tailored to small businesses, including custom website creation, brand reimagining, and website makeovers. Our goal is to deliver modern, approachable designs that reflect your brand identity and resonate with your audience."
  },
  {
    question: "Can you help with rebranding my business?",
    answer:
      "Absolutely! Our brand reimagining service focuses on refreshing your digital presence to better align with your evolving goals. From updating your logo and color palette to redesigning your website, we’ll ensure your brand feels fresh, cohesive, and impactful."
  },
  {
    question: "Can you help with content creation for my website?",
    answer:
      "Yes! We offer comprehensive content creation services to ensure your website communicates effectively and engages your audience. Our team can craft clear and compelling messaging that aligns with your brand’s identity and goals. Whether you need persuasive copy for landing pages, informative blog posts to connect with your audience, or SEO-optimized content to improve visibility, we’ve got you covered. We tailor every piece of content to resonate with your target audience, drive engagement, and support your business objectives."
  },
  {
    question: "Do you offer ongoing support after a project is completed?",
    answer:
      "Yes! We offer ongoing support and maintenance packages to ensure your website remains functional, secure, and up to date. We’re here to help as your business grows and evolves."
  },
  {
    question: "How do you tailor your services for small businesses?",
    answer:
      "We understand the unique challenges small businesses face. That’s why we offer bespoke solutions designed to meet your specific goals, budget, and vision. Our team works closely with you to ensure every project is aligned with your needs and objectives."
  },
  {
    question: "What does 'bespoke' mean in the context of your services?",
    answer:
      "In the context of our services, 'bespoke' means that every project is uniquely tailored to your specific needs and vision. We avoid using generic, one-size-fits-all templates. Instead, we focus on creating custom solutions that reflect your brand’s identity, align with your business goals, and resonate with your target audience. From design to functionality, every detail is crafted to ensure your digital presence is as unique as your business."
  },
  {
    question: "What industries do you work with?",
    answer:
      "Although we focus on empowering small businesses, our expertise extends across diverse industries such as retail, hospitality, creative services, and more. No matter your field, we’re committed to delivering tailored digital solutions that meet your unique needs."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity of the work. On average, website projects take between 6–10 weeks. We’ll provide a detailed timeline during our initial consultation to ensure clarity and alignment."
  },

  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply reach out to us via our contact form or email, and we’ll schedule a consultation to discuss your vision, goals, and how we can bring them to life."
  }
];

export const paymentPlans = [
  {
    title: "Basic Plan",
    description: "Ideal for small projects or businesses just getting started. Pay as you go with flexible terms.",
    details: [
      "Pay per service or milestone",
      "Monthly payments available",
      "Up to 3 months payment term"
    ],
    route: "/payment-plans/basic-plan"
  },
  {
    title: "Standard Plan",
    description: "Perfect for medium-sized projects, providing more flexible payment terms and installments.",
    details: [
      "Split payments into 3-6 installments",
      "Priority support during the project",
      "Up to 6 months payment term"
    ],
    route: "/payment-plans/standard-plan"
  },
  {
    title: "Premium Plan",
    description: "For large-scale, ongoing projects requiring continuous work and support. Flexible and extended payment options.",
    details: [
      "Monthly retainer payments",
      "Up to 12-month payment terms",
      "Full service including ongoing support"
    ],
    route: "/payment-plans/premium-plan"
  },
  {
    title: "Custom Plan",
    description: "Tailored payment options based on the complexity and size of your project. We can create a custom plan to fit your budget.",
    details: [
      "Flexible payment terms based on project scope",
      "Options for ongoing support and scaling",
      "Up to 24 months term based on agreement"
    ],
    route: "/payment-plans/custom-plan"
  }
];

export const testimonials = [
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

export const blogs = [
  {
    title: "The Importance of User Experience in Web Design",
    author: "John Doe",
    date: "August 15, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Design", "Web Development"],
    excerpt:
      "User experience (UX) is one of the most important factors when designing a website. It directly impacts how users interact with your website, and ultimately affects conversion rates.",
    slug: "/blog/importance-of-user-experience",
  },
  {
    title: "How Tailwind CSS Can Speed Up Your Development Process",
    author: "Jane Smith",
    date: "July 10, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Web Development"],
    excerpt:
      "Tailwind CSS is a utility-first CSS framework that provides a highly customizable approach to building modern user interfaces. In this blog post, we'll explore how it can speed up your development process.",
    slug: "/blog/how-tailwind-css-can-speed-up-your-development",
  },
  {
    title: "The Future of JavaScript Frameworks",
    author: "Michael Lee",
    date: "June 5, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["JavaScript", "Web Development"],
    excerpt:
      "With the rapid evolution of JavaScript frameworks like React, Vue, and Angular, it's important to stay up-to-date with the latest trends. This article explores the future of JavaScript frameworks.",
    slug: "/blog/future-of-javascript-frameworks",
  },
  {
    title: "Why Accessibility Matters in Web Development",
    author: "Sarah Kim",
    date: "May 22, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Accessibility", "Design"],
    excerpt:
      "Accessibility should be a priority in every web development project. Ensuring that your website is usable by people with disabilities opens your content to a wider audience and improves user satisfaction.",
    slug: "/blog/why-accessibility-matters",
  },
  {
    title: "Decoding Blockchain: Exploring the World of Decentralized Systems",
    author: "Alex Johnson",
    date: "April 10, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Blockchain"],
    excerpt:
      "Blockchain technology is transforming industries by providing secure, decentralized systems. Discover the fundamentals and future potential of blockchain in this blog.",
    slug: "/blog/decoding-blockchain-decentralized-systems",
  },
  {
    title: "Demystifying Data Science: Transforming Data into Actionable Insights",
    author: "Emily Carter",
    date: "March 18, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Data Science", "Analytics"],
    excerpt:
      "Data science is changing how we solve problems and make decisions. Learn how data scientists turn raw data into insights that drive success.",
    slug: "/blog/demystifying-data-science",
  },
  {
    title: "Revolutionizing Connectivity: Innovations in IoT Development",
    author: "Samuel Green",
    date: "February 25, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["IoT"],
    excerpt:
      "The Internet of Things (IoT) is connecting the world like never before. Explore how IoT innovations are transforming industries and daily life.",
    slug: "/blog/revolutionizing-connectivity-iot",
  },
  {
    title: "Creative Data Harvesting: The Wonders of Web Scraping",
    author: "Olivia Martin",
    date: "January 15, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Data Science", "Web Development"],
    excerpt:
      "Web scraping opens up endless possibilities for collecting and analyzing data. Dive into the ethical and technical aspects of this powerful technique.",
    slug: "/blog/creative-data-harvesting-web-scraping",
  },
  {
    title: "Behind the Code: Insights into the World of Tech Startups",
    author: "David Lee",
    date: "December 5, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Entrepreneurship"],
    excerpt:
      "Tech startups are driving innovation in the digital age. Explore the challenges and successes behind the scenes of these groundbreaking companies.",
    slug: "/blog/insights-into-tech-startups",
  },
  {
    title: "Navigating the Digital Revolution: Emerging Tech Trends",
    author: "Sophia White",
    date: "November 20, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: true,
    topics: ["Innovation"],
    excerpt:
      "Stay ahead of the curve with a look at the latest technology trends reshaping the digital landscape and industries worldwide.",
    slug: "/blog/navigating-tech-trends",
  },
  {
    title: "Mastering User-Friendly Design: Gems of GUI Development",
    author: "Lucas Brown",
    date: "October 15, 2023",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Design", "Web Development"],
    excerpt:
      "Great graphical user interfaces (GUIs) are key to intuitive user experiences. Discover tips and techniques for designing user-friendly interfaces.",
    slug: "/blog/mastering-gui-design",
  },
  {
    title: "From Startup Garage to Tech Giant: Stories of Tech Entrepreneurs",
    author: "Ethan Garcia",
    date: "August 5, 2024",
    img: "/images/blog-placeholder.jpg",
    featured: false,
    topics: ["Entrepreneurship"],
    excerpt:
      "Tech entrepreneurs are changing the world. Explore inspiring stories of how industry disruptors started from scratch and achieved greatness.",
    slug: "/blog/stories-of-tech-entrepreneurs",
  },
];

export const pastProjects = [
  {
    title: "Quiz Application",
    img: "/images/project-image-1.jpg",
    featured: true,
    description: "This is a simple Next.js project.It's a web-based quiz platform designed to offer a variety of quizzes across multiple subjects, including Chemistry, History, Math, and more. The application supports user registration, tracks progress, and allows users to select quizzes based on difficulty and subject. Users can register, reset their passwords, and manage their profiles with the ability to update personal information and choose default profile pictures. The application includes features like quiz progress tracking, score tracking, and a leaderboard to encourage competition. It also stores quiz data in localStorage, ensuring users can resume where they left off. Built with a responsive UI and accessibility features, the app provides a seamless experience across devices. Data management is handled using MySQL, Sequelize, and Next-Auth for secure user authentication and information retrieval.",
    short: "This Next.js app, a conversion of Quizlet-Plus, offers quizzes in subjects like Chemistry, History, and Math. It features user registration, progress tracking, profile management, and a leaderboard. Data is stored in localStorage, with MySQL, Sequelize, and Next-Auth handling authentication. The app is responsive and includes accessibility features for a seamless experience.",
    languages: ["HTML", "TypeScript"],
    frameworks: ["Next.js", "React"],
    technologies: ["MySQL", "Sequelize", "Next-Auth", "localStorage", "Axios"],
    githubLink: "https://github.com/tmchuynh/knowledge_knockout"
  },
  {
    title: "Company Website",
    img: "/images/project-image-1.jpg",
    featured: true,
    description: "The International Activities Club (IAC) website is a user-friendly platform that showcases the organization's educational programs and after-school activities. It highlights the A.R.C. Initiative, focusing on hands-on learning and real-world application of classroom knowledge. The site provides detailed information about the diverse extracurricular options, such as chess, sports, and creative writing, offered to students from 1st grade through high school. With easy navigation, the website ensures parents and schools can explore IAC’s services and find enriching learning opportunities for students.",
    short: "The IAC website highlights educational programs, the A.R.C. Initiative, and after-school activities like chess, sports, and creative writing, offering enriching opportunities for students. It’s designed for easy navigation by parents and schools to explore IAC’s services.",
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Node.js", "Express"],
    technologies: ["Bootstrap CSS", "Chart.js"],
    liveLink: "https://iacafterschools.com/",
  },
  {
    title: "Company Website",
    img: "/images/project-image-1.jpg",
    featured: false,
    description: `
      The FirstGalaxy NPM version Build Status website is designed to showcase the benefits of joining FirstGalaxy Inc. as a real estate agent. It provides helpful resources for starting a real estate career and offers easy access to agent listings.

      The code demonstrates how to filter data by importing an agents object from ./data.js. It uses strict mode, establishes a dropdown menu for filtering options, and toggles its visibility when clicked. The glossary module is also imported to display terms dynamically on the page. Each term is iterated over and printed to the screen, allowing users to easily view the glossary content.`,
    short: "The FirstGalaxy NPM version Build Status website showcases the benefits of joining FirstGalaxy Inc., offers resources for starting a real estate career, and connects users to agent listings. The code demonstrates data filtering, toggling dropdown visibility, and dynamically displaying glossary terms imported from ./data.js.",
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["Bootstrap CSS", "Chart.js"],
    githubLink: "https://github.com/tmchuynh/firstgalaxy"
  },
];
