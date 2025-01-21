import { Send } from "lucide-react";
import { FaCalendarCheck, FaInfoCircle, FaLaptop, FaMoneyBillAlt, FaPenAlt, FaQuestion, FaSignature } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";


export const data = {
  navMain: [
    {
      title: "About",
      url: "/about",
      icon: FaInfoCircle,
    },
    {
      title: "Website Services",
      icon: FaLaptop,
      items: [
        {
          title: "Custom Website Design",
          url: "#",
        },
        {
          title: "eCommerce Development",
          url: "#",
        },
        {
          title: "Single-Page Applications (SPAs)",
          url: "#",
        },
        {
          title: "Database Management",
          url: "#",
        },
        {
          title: "User Interface (UI) Design",
          url: "#",
        },
        {
          title: "User Experience (UX) Design",
          url: "#",
        },
        {
          title: "Wireframing & Prototyping",
          url: "#",
        },
        {
          title: "Authentication and Authorization",
          url: "#",
        },
        {
          title: "Domain Registration",
          url: "#",
        },
        {
          title: "Web Hosting Setup",
          url: "#",
        },
      ],
    },
    {
      title: "Content Creation Services",
      icon: FaPenAlt,
      items: [
        {
          title: "Brand Storytelling",
          url: "#",
        },
        {
          title: "Website Copywriting",
          url: "#",
        },
        {
          title: "Product Guides/Manuals",
          url: "#",
        },
        {
          title: "Blog Writing",
          url: "#",
        },
        {
          title: "Technical Writing",
          url: "#",
        },
        {
          title: "Online Courses",
          url: "#",
        },
        {
          title: "eBook Creation",
          url: "#",
        },
        {
          title: "FAQs",
          url: "#",
        },
        {
          title: "SEO Content Writing",
          url: "#",
        },
        {
          title: "Product Descriptions",
          url: "#",
        },
        {
          title: "Newsletters",
          url: "#",
        },
        {
          title: "Proposal Writing",
          url: "#",
        },
      ],
    },
  ],
  information: [
    {
      title: "FAQs",
      url: "/badges",
      icon: FaQuestion,
    },
    {
      title: "Pricing",
      url: "/badges",
      icon: FaMoneyBillAlt,
    },
    {
      title: "Payment Plans",
      url: "/challenges",
      icon: FaCalendarCheck,
    },
    {
      title: "Contracts",
      url: "#",
      icon: FaSignature,
    },
    {
      title: "Testimonials",
      url: "#",
      icon: MdPeople,
    },
    {
      title: "Research",
      url: "#",
      icon: IoBookSharp,
    },
    {
      title: "Past Projects",
      url: "#",
      icon: AiOutlineFundProjectionScreen,
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};