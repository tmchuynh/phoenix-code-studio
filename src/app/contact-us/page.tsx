"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { paymentPlans } from "@/lib/constants";
import Image from "next/image";
import { BpCheckbox } from "@/components/ui/checkbox-custom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { capitalize, cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { allServices } from "@/lib/service-categories";

export type ServiceTypeKeys =
  | "comprehensiveWebsiteSolutions"
  | "seoOptimizedContentCreationServices"
  | "corporateDigitalSolutions";

export interface FormDataType {
  name: string;
  email: string;
  subject: string;
  message: string;
  paymentPlan: string;
  comprehensiveWebsiteSolutions: string[];
  seoOptimizedContentCreationServices: string[];
  corporateDigitalSolutions: string[];
}

const ContactUsPage: FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
    paymentPlan: "",
    comprehensiveWebsiteSolutions: [],
    seoOptimizedContentCreationServices: [],
    corporateDigitalSolutions: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  // Handle text input and textarea changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checking/unchecking a specific service
  function handleServiceSelect(
    e: React.ChangeEvent<HTMLInputElement>,
    serviceType: ServiceTypeKeys
  ) {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedServices = checked
        ? [...prevState[serviceType], value]
        : prevState[serviceType].filter((service) => service !== value);

      return {
        ...prevState,
        [serviceType]: updatedServices,
      };
    });
  }

  const handleMainServiceCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    serviceType: string
  ) => {
    const { checked } = e.target;

    setExpandedServices((prev) => {
      if (checked) {
        // Add this serviceType if not already in array
        return prev.includes(serviceType) ? prev : [...prev, serviceType];
      } else {
        // Remove serviceType if it was there
        return prev.filter((type) => type !== serviceType);
      }
    });
  };

  const handleSubServiceSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    serviceType: ServiceTypeKeys
  ) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentArr = prev[serviceType];
      let updatedArr: string[];

      if (checked) {
        updatedArr = currentArr.includes(value)
          ? currentArr
          : [...currentArr, value];
      } else {
        updatedArr = currentArr.filter((sub) => sub !== value);
      }

      return {
        ...prev,
        [serviceType]: updatedArr,
      };
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted formData:", formData);

    setSubmitted(true);
    // Reset form if desired
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      comprehensiveWebsiteSolutions: [],
      seoOptimizedContentCreationServices: [],
      corporateDigitalSolutions: [],
      paymentPlan: "",
    });
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <div className="flex items-end">
        <div>
          <h1>Contact Us</h1>
          <p>
            Have questions or ready to start a project? We’re here to help!
            Whether you need more information about our services or assistance
            with a specific request, reach out to us and we’ll respond as soon
            as possible.
          </p>
        </div>
        <Image
          src="/images/logo.png"
          alt="Phoenix Code Studio Logo"
          width={500}
          height={500}
          className={cn(
            "w-44 md:w-64 lg:w-80 rounded-t-md object-cover mx-auto mb-1",
            theme === "dark" ? "bg-muted border rounded-full p-5" : ""
          )}
        />
      </div>

      {/* Contact Form */}
      <section className="my-8">
        <div className="py-6 p-6">
          {submitted && (
            <div className="p-4 mb-4">
              <p>
                Thank you for contacting us! We will get back to you shortly.
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Dynamically Render All Services */}
            <h2 className="text-xl font-semibold mt-6 mb-2">Select Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-2">
              {allServices.map((service, index) => (
                <div key={index} className="my-2">
                  <label className="inline-flex items-center text-lg font-semibold">
                    <BpCheckbox
                      // "expanded" or "checked" state based on expandedServices
                      checked={expandedServices.includes(service.type)}
                      onChange={(e) => handleMainServiceCheck(e, service.type)}
                      className="mr-2"
                    />
                    {capitalize(service.name.replace(/-/g, " "))}
                  </label>

                  {expandedServices.includes(service.type) && (
                    <div className="pl-6 mt-2 space-y-2">
                      {service.info.subServices.map((sub) => (
                        <label key={sub} className="flex items-center">
                          <BpCheckbox
                            value={sub}
                            checked={formData[service.type].includes(sub)}
                            onChange={(e) =>
                              handleSubServiceSelect(e, service.type)
                            }
                            className="mr-2"
                          />
                          {capitalize(sub.replace(/-/g, " "))}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Payment Plan (Dropdown) */}
            <div className="mt-6 mb-4">
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild>
                  <button className="w-full text-start p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-between">
                    {formData.paymentPlan || "Select a Payment Plan"}
                    <FaChevronDown />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 sm:w-64 md:w-96 lg:w-[50em] 2xl:w-[80em]">
                  {paymentPlans.map((plan, idx) => (
                    <DropdownMenuItem
                      key={idx}
                      onClick={() => {
                        setFormData((prevState) => ({
                          ...prevState,
                          paymentPlan: plan.title,
                        }));
                      }}
                    >
                      {plan.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-1/2 mx-auto">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
