import { Send } from "lucide-react";
import { FaCalendarCheck, FaInfoCircle, FaLaptop, FaMoneyBillAlt, FaPenAlt, FaQuestion, FaSignature } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FAQ } from "./interfaces";


export const menu = {
  navMain: [
    {
      title: "Website Services",
      icon: FaLaptop,
      items: [
        {
          title: "Custom Website Design",
          url: "/web/custom-website-design",
        },
        {
          title: "eCommerce Development",
          url: "/web/e-commerce-design",
        },
        {
          title: "Single-Page Applications (SPAs)",
          url: "/web/single-page-application",
        },
        {
          title: "Database Management",
          url: "/web/database-management",
        },
        {
          title: "User Interface (UI) Design",
          url: "/web/user-interface-design",
        },
        {
          title: "User Experience (UX) Design",
          url: "/web/user-experience-design",
        },
        {
          title: "Wireframing & Prototyping",
          url: "/web/wireframing-prototyping",
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
          title: "Brochures and Flyers",
          url: "/content/brochures-and-flyers",
        },
        {
          title: "Training Manual and Onboarding Papers Creation",
          url: "/content/training-manual-and-onboarding",
        },
        {
          title: "Study Guide Creation",
          url: "/content/study-guides",
        },
        {
          title: "eBook Creation",
          url: "/content/e-book-creation",
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
    name: "Custom Website Design",
    startingPrice: 2500,
    info: "Create a unique, fully-responsive website that fits your brand and business goals.",
    details: "Our custom website design services focus on building websites tailored to your specific needs. We work with you to define the look, feel, and functionality of your site, ensuring that it delivers a seamless user experience and meets business objectives."
  },
  {
    name: "E-Commerce Development",
    startingPrice: 3500,
    info: "Develop a scalable e-commerce platform with integrated payment systems and user-friendly interfaces.",
    details: "We specialize in building e-commerce websites that provide a secure, fast, and user-friendly shopping experience. From product listings to checkout, we integrate the latest technologies and payment gateways to help your online store succeed."
  },
  {
    name: "Single Page Application",
    startingPrice: 2000,
    info: "Build a fast, interactive, and single-page application (SPA) with modern front-end technologies.",
    details: "Our SPAs are designed to provide a fast and engaging user experience. By loading all necessary content dynamically without page reloads, we create smooth, fast interactions that improve user retention and performance."
  },
  {
    name: "Database Management",
    startingPrice: 1500,
    info: "Ensure efficient management, scalability, and security of your data with custom database solutions.",
    details: "Our database management services ensure that your data is stored, organized, and accessible. We design databases that can scale as your business grows, integrate real-time data, and ensure high levels of security to protect sensitive information."
  },
  {
    name: "UI Design",
    startingPrice: 1800,
    info: "Craft visually appealing, intuitive, and user-centered interfaces for a seamless experience.",
    details: "Our UI design services focus on creating visually attractive, user-friendly interfaces that promote ease of use. We ensure that your website or app provides an engaging and aesthetically pleasing experience to the user."
  },
  {
    name: "UX Design",
    startingPrice: 2200,
    info: "Enhance user experience through research, wireframing, and prototyping to solve real user problems.",
    details: "We focus on understanding user behavior and needs to create designs that simplify user interactions. Our UX design process includes user research, wireframing, prototyping, and usability testing to ensure that your website or app is easy to use and highly effective."
  },
  {
    name: "Wireframing & Prototyping",
    startingPrice: 1500,
    info: "Visualize and test user interactions with wireframes and prototypes before development.",
    details: "Wireframing and prototyping are essential steps in the design process. We build low-fidelity wireframes and high-fidelity prototypes that simulate real user interactions, helping you identify potential problems and improve usability before development begins."
  }
];

export const contentCreationServices = [
  {
    name: "Brand Storytelling",
    startingPrice: 2000,
    info: "Create compelling stories that resonate with your audience and define your brand identity.",
    details: "We help brands tell their unique stories, building a narrative that reflects your values, vision, and goals. Through strategic storytelling, we connect with your target audience on an emotional level, strengthening brand loyalty."
  },
  {
    name: "Website Copywriting",
    startingPrice: 1500,
    info: "Write persuasive, SEO-friendly copy that effectively communicates your brand message.",
    details: "We craft copy that is both engaging and optimized for search engines. Our website copywriting services ensure that your site communicates your message clearly while driving organic traffic through SEO best practices."
  },
  {
    name: "Product Guides/Manuals",
    startingPrice: 1200,
    info: "Create detailed, easy-to-understand product guides and manuals to assist customers.",
    details: "Our product guides and manuals are designed to help users understand and get the most out of your products. We provide clear, step-by-step instructions and troubleshooting tips to ensure a positive user experience."
  },
  {
    name: "Blog Writing",
    startingPrice: 500,
    info: "Engage your audience and boost SEO with high-quality, informative blog posts.",
    details: "We write engaging and informative blog posts that keep your audience interested while improving your SEO. Our blog content is tailored to your brand voice, ensuring that every post is relevant and valuable to your readers."
  },
  {
    name: "Technical Writing",
    startingPrice: 2000,
    info: "Write detailed and accurate technical documentation to explain complex concepts.",
    details: "Our technical writing services focus on making complex information accessible. Whether it’s software documentation, user manuals, or technical reports, we ensure that the content is clear, precise, and easy to follow."
  },
  {
    name: "Online Courses",
    startingPrice: 3000,
    info: "Design and create interactive online courses with multimedia content to educate your audience.",
    details: "We help you create online courses that provide real value to your audience. From video tutorials to quizzes, we ensure your courses are engaging, informative, and structured in a way that enhances learning."
  },
  {
    name: "Tutorial Creation",
    startingPrice: 1000,
    info: "Develop step-by-step tutorials for your products or services to help users get the most out of them.",
    details: "We create tutorials that break down complex tasks into manageable steps. Whether for software, hardware, or services, our tutorials ensure users can follow along easily and achieve their goals."
  },
  {
    name: "Brochures and/or Flyers",
    startingPrice: 800,
    info: "Design attention-grabbing brochures and flyers to market your products and services.",
    details: "Our brochure and flyer design services help you market your products effectively. We focus on making sure your message is clear and the design stands out, giving your marketing materials maximum impact."
  },
  {
    name: "Training Manual and Onboarding Paperwork Creation",
    startingPrice: 1500,
    info: "Develop comprehensive training materials and onboarding documents for new employees or clients.",
    details: "We create thorough and easy-to-understand training manuals and onboarding paperwork. These documents help onboard new employees, clients, or users with the necessary information to succeed."
  },
  {
    name: "Study Guide Creation",
    startingPrice: 1000,
    info: "Create detailed study guides to help students or professionals excel in their subjects.",
    details: "We craft comprehensive study guides that help learners understand and retain critical information. Whether for academic or professional use, our study guides are designed to make complex material easy to grasp."
  },
  {
    name: "eBook Creation",
    startingPrice: 2000,
    info: "Write and design professional eBooks for educational, marketing, or content purposes.",
    details: "Our eBook creation service combines writing and design expertise to deliver a professional, polished product. Whether for marketing, education, or publishing, we ensure your eBook is well-written and visually appealing."
  },
  {
    name: "Newsletters",
    startingPrice: 800,
    info: "Design and write engaging newsletters to keep your audience informed and connected.",
    details: "Our newsletter services ensure you stay connected with your audience by providing valuable, timely content. We handle both the writing and design, ensuring that your newsletter stands out in inboxes."
  },
  {
    name: "Proposal Writing",
    startingPrice: 1500,
    info: "Craft well-structured and persuasive proposals to win new clients and projects.",
    details: "We create detailed, persuasive proposals that increase your chances of winning clients and projects. Whether for business, academic, or government proposals, we ensure your document is compelling and professional."
  }
];


export const FAQs: FAQ[] = [
  {
    question: "What sets Crimson Lotus Creations apart?",
    answer:
      "At Crimson Lotus Creations, we seamlessly combine cultural sophistication with innovative technology to deliver digital experiences that are both highly functional and profoundly meaningful. Drawing inspiration from the lotus flower—a timeless emblem of growth and resilience—we craft designs that empower your business to flourish in the digital realm."
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
    buttonLabel: "Learn More & Get Started",
    route: "/contact"
  },
  {
    title: "Standard Plan",
    description: "Perfect for medium-sized projects, providing more flexible payment terms and installments.",
    details: [
      "Split payments into 3-6 installments",
      "Priority support during the project",
      "Up to 6 months payment term"
    ],
    buttonLabel: "Learn More & Get Started",
    route: "/contact"
  },
  {
    title: "Premium Plan",
    description: "For large-scale, ongoing projects requiring continuous work and support. Flexible and extended payment options.",
    details: [
      "Monthly retainer payments",
      "Up to 12-month payment terms",
      "Full service including ongoing support"
    ],
    buttonLabel: "Learn More & Get Started",
    route: "/contact"
  },
  {
    title: "Custom Plan",
    description: "Tailored payment options based on the complexity and size of your project. We can create a custom plan to fit your budget.",
    details: [
      "Flexible payment terms based on project scope",
      "Options for ongoing support and scaling",
      "Up to 24 months term based on agreement"
    ],
    buttonLabel: "Learn More & Get Started",
    route: "/contact"
  }
];

export const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Innovators",
    image: "/images/john-doe.jpg",
    quote:
      "This service helped us transform our business. The team was fantastic, and the results exceeded our expectations!",
  },
  {
    name: "Sarah Smith",
    position: "Founder, Creative Solutions",
    image: "/images/sarah-smith.jpg",
    quote:
      "A professional and reliable partner. The process was smooth, and the final product truly captures our vision.",
  },
  {
    name: "Michael Lee",
    position: "CTO, NextGen Technologies",
    image: "/images/michael-lee.jpg",
    quote:
      "The quality of work and attention to detail was exceptional. We saw a noticeable improvement in user engagement.",
  },
  {
    name: "Emma Johnson",
    position: "Marketing Director, Bright Horizons",
    image: "/images/emma-johnson.jpg",
    quote:
      "Absolutely amazing experience. The team was highly collaborative and delivered exactly what we needed, on time!",
  },
];

export const blogs = [
  {
    title: "The Importance of User Experience in Web Design",
    author: "John Doe",
    date: "August 15, 2025",
    topics: ["UX/UI Design", "Web Design"],
    excerpt:
      "User experience (UX) is one of the most important factors when designing a website. It directly impacts how users interact with your website, and ultimately affects conversion rates.",
    slug: "/blog/importance-of-user-experience",
  },
  {
    title: "How Tailwind CSS Can Speed Up Your Development Process",
    author: "Jane Smith",
    date: "July 10, 2025",
    topics: ["CSS", "Frontend Development"],
    excerpt:
      "Tailwind CSS is a utility-first CSS framework that provides a highly customizable approach to building modern user interfaces. In this blog post, we'll explore how it can speed up your development process.",
    slug: "/blog/how-tailwind-css-can-speed-up-your-development",
  },
  {
    title: "The Future of JavaScript Frameworks",
    author: "Michael Lee",
    date: "June 5, 2025",
    topics: ["JavaScript", "Web Development"],
    excerpt:
      "With the rapid evolution of JavaScript frameworks like React, Vue, and Angular, it's important to stay up-to-date with the latest trends. This article explores the future of JavaScript frameworks.",
    slug: "/blog/future-of-javascript-frameworks",
  },
  {
    title: "Why Accessibility Matters in Web Development",
    author: "Sarah Kim",
    date: "May 22, 2025",
    topics: ["Web Accessibility", "UX/UI Design"],
    excerpt:
      "Accessibility should be a priority in every web development project. Ensuring that your website is usable by people with disabilities opens your content to a wider audience and improves user satisfaction.",
    slug: "/blog/why-accessibility-matters",
  },
];

export const pastProjects = [
  {
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce website built with modern tools.",
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["React", "Node.js", "Express"],
    technologies: ["MongoDB", "Stripe API", "Redux"],
    liveLink: "https://ecommerce-website.com",
    githubLink: "https://github.com/username/ecommerce-website"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    languages: ["HTML", "CSS", "JavaScript"],
    frameworks: ["Next.js"],
    technologies: ["Tailwind CSS", "Vercel"],
    liveLink: "https://username-portfolio.com",
    githubLink: "https://github.com/username/portfolio"
  },
  {
    title: "Blog Application",
    description: "A simple blog platform where users can create and manage posts.",
    languages: ["Python", "HTML", "CSS"],
    frameworks: ["Django"],
    technologies: ["SQLite", "Bootstrap"],
    liveLink: "",
    githubLink: "https://github.com/username/blog-application"
  },
];
