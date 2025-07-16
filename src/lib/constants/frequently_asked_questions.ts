interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

const faqs: FAQCategory[] = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What sets Phoenix Code Studio apart?",
        answer:
          "At Phoenix Code Studio, we offer exceptional digital solutions that combine cutting-edge technology with cultural depth to deliver impactful results. Specializing in custom web development, UX/UI design, branding services, and digital marketing, we help businesses enhance their online presence and achieve sustained business growth. Whether you need to develop user-friendly websites, design responsive mobile applications, create SEO-optimized content, or build brand identity, we focus on delivering transformative, high-performance solutions that drive traffic, engagement, and conversion rates. Our team of experts leverages the latest web technologies, search engine optimization (SEO) strategies, and UX best practices to ensure your digital experiences are both innovative and user-centric, ultimately fostering long-term success in a competitive digital landscape.",
      },
      {
        question: "What services do you offer?",
        answer:
          "We offer a comprehensive range of web design and development services, including custom website design, full-stack web development, UX/UI design, SEO optimization, e-commerce solutions, branding, and digital strategy. Our goal is to build high-performing, accessible, and user-centric digital experiences that support your business growth long term. From wireframing to final deployment and ongoing support, we manage the entire lifecycle of your project with precision and care.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline depends on the complexity and scope of your project. A simple website typically takes 2–4 weeks, while more advanced, feature-rich projects—like e-commerce platforms or custom applications—can take 6–12 weeks or more. Factors such as design complexity, content availability, feedback cycles, and integrations all influence the duration. We provide a detailed timeline during your initial consultation to ensure clarity and alignment from day one.",
      },
      {
        question: "Do you work with clients outside your local area?",
        answer:
          "Absolutely. We work with clients across the country and internationally. Our workflows are designed for remote collaboration, using tools like Zoom, Slack, Figma, and project management platforms to keep everything running smoothly. Whether you’re in the same city or halfway around the world, you’ll receive the same level of communication, professionalism, and attention to detail throughout the entire project.",
      },
    ],
  },
  {
    category: "Design & Development Process",
    questions: [
      {
        question: "What is your design process?",
        answer:
          "Our design process starts with discovery and research to understand your brand, audience, and goals. From there, we move into wireframing and low-fidelity prototypes, followed by visual design in alignment with your branding. We maintain an iterative approach with client feedback and reviews at every key stage. Final designs are then refined and prepared for development. This structured process ensures alignment, efficiency, and results that meet your expectations.",
      },
      {
        question: "Can I see examples of your previous work?",
        answer:
          "Yes. We’re happy to share examples of past projects during our consultation. While some work is protected under confidentiality agreements, we can show you relevant case studies, live websites, and portfolio samples that align with your industry or project goals. This gives you a clear picture of the design quality, technical execution, and business impact of our solutions.",
      },
      {
        question: "Do you use templates or create custom designs?",
        answer:
          "We specialize in creating custom designs tailored to your unique business needs, branding, and goals. While we may use modern frameworks or design systems to enhance performance and efficiency, all designs are built from scratch to reflect your vision. This ensures that your website is one-of-a-kind, user-friendly, and aligned with accessibility standards and best practices.",
      },
    ],
  },
  {
    category: "Technical Questions",
    questions: [
      {
        question: "What technologies do you use?",
        answer:
          "We utilize modern, scalable technologies tailored to your project’s goals. This includes React, Next.js, TypeScript, Node.js, and Tailwind CSS. We also work with headless CMS solutions, REST/GraphQL APIs, and serverless functions depending on the architecture needed. Our technology stack is selected based on performance, security, and maintainability to ensure your site is future-proof and efficient.",
      },
      {
        question:
          "Can you redesign my existing website without starting from scratch?",
        answer:
          "Absolutely! If you already have a website but require a visual update, improved UX/UI design, or enhanced SEO optimization, we can revamp your existing site without the need for a complete rebuild. Our website redesign services focus on boosting mobile responsiveness, optimizing page speed, and enhancing the overall user experience (UX). We ensure that your site aligns seamlessly with your current brand strategy, improves conversion rates, and stays competitive in search rankings.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. Every website we build uses a mobile-first design approach and fully responsive layouts to ensure optimal performance across all devices. We rigorously test our sites on various screen sizes and devices to deliver seamless experiences on smartphones, tablets, and desktops alike. This is essential not only for usability but also for SEO and conversion performance.",
      },
      {
        question: "How do you ensure the security of my website?",
        answer:
          "Website security is a top priority at Phoenix Code Studio. We implement the latest website security practices to protect your site from potential threats. Our services include SSL certification to encrypt data and ensure safe communication between users and your website, as well as security monitoring to detect and resolve vulnerabilities. We also use secure web development practices, including regular updates, backups, and malware protection, to ensure your website remains secure and reliable, safeguarding your data and your users.",
      },
      {
        question: "Will my website be search engine optimized?",
        answer:
          "Yes. SEO is built into every stage of our development process—from proper HTML structure and fast load times to schema markup and metadata management. We optimize your site to improve visibility in search engines, helping you rank for relevant terms and attract more organic traffic. We also offer ongoing SEO services, including content strategy, technical audits, and performance monitoring.",
      },
      {
        question: "Can you help with website hosting?",
        answer:
          "Yes, we can guide you through the entire hosting setup process. We work with several reliable hosting providers and can recommend options that match your technical needs, budget, and expected traffic. If preferred, we also offer optional hosting management as part of our ongoing support packages—this includes monitoring uptime, installing updates, handling renewals, and maintaining backups so your website remains secure and performs well.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How much does a website cost?",
        answer:
          "Website pricing varies depending on factors like design complexity, required functionality, integrations, and content needs. A basic brochure-style site may range from $3,000–$5,000, while custom websites, e-commerce platforms, or fully branded experiences may fall between $7,000–$25,000 or more. We’ll provide a detailed proposal and fixed pricing once we understand your project requirements through an initial consultation.",
      },
      {
        question: "What is your payment structure?",
        answer:
          "We typically require a deposit to begin work, which secures your place in our schedule and covers the initial planning and design phases. The remaining balance is divided into milestone-based payments, usually tied to specific project stages such as design approval, development completion, and final launch. This phased approach keeps things transparent and ensures you're only paying for completed work. Full details will be included in your project proposal.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options for larger or long-term projects. We understand that budgeting for a custom website can be a significant investment, so we’re happy to work with you to establish a payment plan that aligns with your financial situation. These plans typically involve milestone-based billing or monthly installments, depending on the project scope and timeline. We’ll outline all available options during your consultation and tailor the structure to your needs.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes, we offer various support and maintenance packages to keep your website secure, updated, and performing optimally. Our services include regular updates, bug fixes, performance monitoring, uptime checks, and security enhancements. Whether you need technical support, feature enhancements, or help managing your content, we act as your long-term partner to ensure your digital presence continues to deliver results.",
      },
      {
        question: "Can I update my website myself?",
        answer:
          "Yes. If your website is built on a CMS or includes a custom content management interface, you’ll be able to update content, upload images, publish blog posts, and more without needing a developer. We provide training, documentation, and optional ongoing support to help you manage your site confidently and efficiently.",
      },
      {
        question: "What happens if my website breaks?",
        answer:
          "If your website encounters an issue—whether due to a plugin conflict, server error, or update gone wrong—we’re here to help. We offer dedicated maintenance and support plans that include proactive monitoring, regular backups, and quick turnaround on fixes. In emergencies, we prioritize downtime and security issues to get your site back up and running as fast as possible. We also provide documentation and guidance if you’d prefer to handle basic troubleshooting internally.",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "What do I need to prepare before contacting you?",
        answer:
          "It’s helpful to have a general idea of your goals, your target audience, and any specific features or functionality you’re considering, such as e-commerce, booking systems, or custom integrations. Visual references, branding materials, and examples of sites you like are also useful. That said, if you’re unsure, don’t worry—we’ll help guide you through all the important decisions during our initial discovery and consultation phase.",
      },
      {
        question: "What information do you need to provide a quote?",
        answer:
          "To provide an accurate quote, we’ll need to understand the scope and goals of your project. This includes details about your business, the features you want, your design preferences, current branding, timeline expectations, and budget range. The more detailed your input, the more precise and customized our proposal will be. We’ll walk you through everything during our initial consultation.",
      },
      {
        question:
          "What Web Development Services does Phoenix Code Studio offer?",
        answer:
          "At Phoenix Code Studio, we provide a comprehensive suite of web development services tailored to meet your business’s digital needs. Our services include custom websites, UX/UI design, SEO optimization, branding services, and more. Whether you’re looking for a responsive website, an SEO-friendly platform, or a complete brand redesign, we ensure your digital presence stands out and performs. Additionally, we specialize in single-page applications (SPAs), website copywriting, blog writing, and content creation, ensuring your website communicates your brand’s message effectively. We also offer wireframing & prototyping to ensure intuitive and user-friendly designs. Our e-commerce web development services enable businesses to create and manage fully functional online stores, including product listings, secure payment gateways, and inventory management. For businesses looking to improve user experience, we focus on intuitive design and seamless navigation to boost engagement and conversions. Beyond front-end development, we provide database creation and maintenance, ensuring secure and efficient data management for your website. By combining SEO strategies with a focus on performance, security, and conversion optimization, we help drive traffic and increase sales, making Phoenix Code Studio your go-to partner for all things web development.",
      },
      {
        question: "Do you offer consultations before starting a project?",
        answer:
          "Yes! We offer digital consultations before starting any project to thoroughly understand your business goals, target audience, and digital requirements. During this session, we’ll dive into everything from SEO strategies and website optimization to the specific features and functionalities you need for your custom website. This ensures that the project is not only aligned with your brand objectives but also tailored to provide an outstanding user experience and achieve measurable business growth.",
      },
    ],
  },
];

export default faqs;
