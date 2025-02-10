import { FaDesktop, FaSearch } from "react-icons/fa";
import { SubServiceItem } from "./interfaces";

export const subServiceDetails: SubServiceItem[] = [
  {
    category: "company-specific-services",
    name: "branding-storytelling",
    info: {
      name: "Authentic Brand Storytelling That Captivates & Connects",
      description: "Brand Awareness",
      startingPrice: 2000,
      info: "We craft compelling brand narratives that authentically define your identity and create a deep emotional connection with your audience. Through strategic storytelling, we go beyond transactions—bridging the gap between your brand’s values, mission, and vision to build trust and long-term loyalty. Our approach ensures that every message, visual, and campaign aligns seamlessly, reinforcing a strong, memorable presence in a competitive marketplace. Whether launching a new brand or revitalizing an existing one, we help you tell your story in a way that inspires, engages, and resonates.",
      details: "We help brands tell their unique stories, building a narrative that reflects your values, vision, and goals. Through strategic storytelling, we connect with your target audience on an emotional level, strengthening brand loyalty.",
      short: "Create an emotional connection with your audience through authentic brand storytelling. We craft compelling narratives that reflect your brand's values, mission, and vision, building trust and loyalty while ensuring your message resonates in a competitive market.",
      featured: true,
      Icon: FaDesktop,
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
  },
  {
    category: "company-specific-services",
    name: "company-rebranding-and-design-services",
    info: {
      name: "Transform Your Brand with Our Rebranding Services",
      description: "Marketing Strategy",
      startingPrice: 5000,
      info: "Our comprehensive rebranding services give your company a fresh, modern identity that truly connects with your audience and aligns with your business goals. We specialize in logo design, brand messaging, visual identity, and strategic positioning, ensuring every element reflects your brand’s unique vision. By crafting a cohesive, future-ready brand strategy, we help you stand out from the competition, build trust, and create a lasting impact. Elevate your business with a powerful transformation that fuels growth and long-term success.",
      details:
        "Our rebranding services include a full strategy to redefine your brand image. From logo redesign to complete brand strategies, we ensure your company stands out and connects with your audience.",
      short: "Revitalize your brand with impactful rebranding services that combine strategic storytelling and design to engage your audience. We help you craft a distinctive, authentic brand identity that builds trust, fosters loyalty, and makes a lasting impression, whether you’re refreshing your look or redefining your brand message.",
      featured: false,
      Icon: FaDesktop,
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
  },
  {
    category: "website-services",
    name: "custom-website-development",
    info: {
      name: "Custom Websites Designed for Impact and Performance",
      description: "Brand Differentiation",
      startingPrice: 2500,
      info: "We create custom websites that do more than just look great—they work strategically to drive your business forward. Every website we design is a seamless blend of creativity and functionality, tailored to reflect your brand identity and business goals. Our fully responsive, high-performance designs ensure flawless experiences across desktops, tablets, and smartphones. With intuitive navigation, fast load speeds, and engaging visuals, we craft websites that captivate audiences, boost conversions, and fuel growth. Let’s build a digital presence that makes a lasting impact and sets your brand apart.",
      details:
        "We specialize in creating custom websites that align with your brand and business objectives. From layout design to functionality, we ensure a seamless user experience.",
      short: "Elevate your digital presence with custom-built websites that combine exceptional UX/UI design, smooth functionality, and SEO optimization. Whether you’re starting fresh or redesigning an existing site, our personalized solutions deliver a visually appealing, high-performing, and intuitive experience that enhances user engagement and drives business growth.",
      featured: true,
      Icon: FaDesktop,
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
  },
  {
    category: "company-specific-services",
    name: "blog-writing",
    info: {
      name: "SEO-Optimized, Engaging Blog Content",
      description: "Web Traffic",
      startingPrice: 200,
      info: "We create compelling, informative blog posts that not only captivate your audience but also enhance your website’s SEO performance. Every post is carefully crafted to align with your brand voice and industry expertise, ensuring authenticity and consistency. By delivering valuable, relevant content, we help establish your brand as an authority in your field, boost organic traffic, and foster deeper connections with your audience. Our blogs are designed to educate, inspire, and engage, driving higher visibility, increased engagement, and long-term growth for your online presence.",
      details: "Our blog writing services deliver engaging, SEO-optimized content that captivates your audience and boosts search rankings. Tailored to your brand voice and industry, our blog posts provide valuable insights, drive organic traffic, and establish your authority online.",
      short: "Create SEO-optimized, engaging blog content that drives organic traffic and boosts search rankings. Tailored to your brand voice and industry, our blog posts provide valuable insights that foster audience engagement, establish authority, and support long-term growth.",
      featured: true,
      Icon: FaDesktop,
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
  },
  {
    category: "company-specific-services",
    name: "technical-writing-services",
    info: {
      name: "Expert Technical Writing for Clarity & Precision",
      description: "Documentation",
      startingPrice: 750,
      info: "Our technical writing services transform complex concepts into clear, concise, and user-friendly documentation. Whether you need software manuals, API documentation, white papers, or technical guides, we deliver accurate, well-structured content that enhances understanding and usability. By prioritizing clarity, precision, and accessibility, we ensure your audience can easily navigate and apply the information, improving their experience and confidence in your product or service. Our expertly crafted documents support seamless adoption, reduced learning curves, and enhanced user engagement across technical and non-technical audiences alike.",
      details: "Our technical writing services transform complex information into clear, concise, and user-friendly documentation. Whether it's software guides, user manuals, or technical reports, we ensure accuracy, readability, and a seamless user experience.",
      short: "Transform complex information into clear, concise, and user-friendly technical documentation. From software manuals to API guides, we create precise, accessible content that enhances understanding, reduces learning curves, and ensures seamless adoption for both technical and non-technical audiences.",
      featured: true,
      Icon: FaDesktop,
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
  },
  {
    category: "company-specific-services",
    name: "newsletter-creation-services",
    info: {
      name: "Engaging & Impactful Newsletters",
      description: "Measurable Results",
      startingPrice: 300,
      info: "We design and craft engaging, visually appealing newsletters that keep your audience informed, inspired, and connected. Whether it’s a one-time announcement or a recurring series, our newsletters blend compelling content, strategic messaging, and eye-catching design to ensure maximum impact. Ideal for building relationships, boosting engagement, and strengthening brand loyalty, our newsletters help you stay top-of-mind with your audience.",
      details: "We create well-crafted, visually appealing newsletters that keep your audience engaged. From compelling content to strategic design, we ensure your message stands out while optimizing for open rates, readability, and conversions.",
      short: "Create engaging, visually appealing newsletters that keep your audience informed and connected. With compelling content and strategic design, our newsletters drive engagement, build relationships, and strengthen brand loyalty, ensuring your message stands out and delivers measurable results.",
      featured: true,
      Icon: FaDesktop,
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
  },
  {
    category: "company-specific-services",
    name: "database-creation-and-management",
    info: {
      name: "Optimized & Secure Database Management Solutions",
      description: "Data Security",
      startingPrice: 1500,
      info: "Our database management services provide secure, scalable, and high-performance solutions that streamline data storage, organization, and accessibility. Designed to meet your unique business needs, we ensure fast and reliable operations with optimized performance, even as your data scales. Advanced security protocols safeguard sensitive information, ensuring compliance with industry standards and protecting against potential threats. Whether you need real-time data processing, seamless integrations, or scalable storage solutions, our expert database management empowers your business to handle complex data demands while supporting long-term growth and efficiency.",
      details:
        "Our database management services ensure that your data is stored, organized, and accessible. We design databases that can scale as your business grows, integrate real-time data, and ensure high levels of security to protect sensitive information.",
      short: "Empower your business with secure, scalable, and high-performance database management solutions. We design optimized systems for seamless data storage, real-time processing, and integration, while ensuring top-tier security to protect sensitive information and support long-term growth.",
      featured: true,
      Icon: FaDesktop,
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
  },
  {
    category: "website-services",
    name: "seo-optimization",
    info: {
      name: "Maximize Your Online Reach with Expert SEO Optimization",
      description: "Organic Traffic",
      startingPrice: 1000,
      info: "Our SEO optimization services are designed to increase your website’s visibility, attract high-quality organic traffic, and drive conversions—whether that means boosting e-commerce sales, growing newsletter subscriptions, or enhancing brand awareness. We implement data-driven strategies that include in-depth keyword research, on-page optimization, high-value content improvements, and strategic link-building to improve your search engine rankings. By staying ahead of algorithm updates and industry best practices, we ensure your site remains competitive, relevant, and optimized for long-term success in an evolving digital landscape. Let us help you connect with the right audience and maximize your online potential.",
      details:
        "Our SEO optimization services focus on enhancing your website’s visibility in search engines. From keyword research to link-building, we implement effective techniques to drive organic traffic and improve your site's ranking and overall performance.",
      short: "Boost your online presence with expert SEO optimization that drives organic traffic and enhances your website's visibility. Through strategic keyword research, on-page optimization, content improvements, and link-building, we help you connect with the right audience and achieve long-term success in search engine rankings.",
      featured: true,
      Icon: FaSearch,
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
    },
  },
  {
    category: "website-services",
    name: "wireframing-and-prototyping-services",
    info: {
      name: "From Concept to Clickable: Wireframing & Prototyping Services",
      description: "User-Centric Designs",
      startingPrice: 1000,
      info: "Our wireframing and prototyping services transform your ideas into functional, user-centric designs that serve as the foundation for a seamless user experience. We begin with low-fidelity wireframes, mapping out the structure, navigation, and layout to establish a clear design blueprint. From there, we create high-fidelity prototypes that mimic real interactions, allowing you to experience and refine the user journey before development begins. These interactive previews help streamline decision-making, improve design efficiency, and ensure practicality and usability, ultimately saving time and resources while optimizing the final product.",
      details:
        "We provide wireframing and prototyping services to help you visualize user interactions and refine design ideas before development begins. These tools are essential for identifying usability issues and ensuring an optimal user experience.",
      short: "Transform your ideas into interactive, user-centric designs with our wireframing and prototyping services. From low-fidelity wireframes to high-fidelity prototypes, we help visualize and refine the user experience before development, ensuring seamless usability and optimizing the final product.",
      featured: false,
      Icon: FaDesktop,
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
  },
];