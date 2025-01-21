import { Send } from "lucide-react";
import { FaCalendarCheck, FaInfoCircle, FaLaptop, FaMoneyBillAlt, FaPenAlt, FaQuestion, FaSignature } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FAQ } from "./interfaces";


export const data = {
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