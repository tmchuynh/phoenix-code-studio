"use client";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  websiteServices,
  contentCreationServices,
  paymentPlans,
} from "@/lib/constants";
import { BpCheckbox } from "@/components/ui/checkbox-custom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const ContactUsPage: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    websiteServices: [] as string[],
    contentCreationServices: [] as string[],
    paymentPlan: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showWebsiteServices, setShowWebsiteServices] = useState(false);
  const [showContentCreationServices, setShowContentCreationServices] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === "websiteServices") {
      setShowWebsiteServices(checked);
    } else if (name === "contentCreationServices") {
      setShowContentCreationServices(checked);
    }
  };

  const handleServiceSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    serviceType: "websiteServices" | "contentCreationServices"
  ) => {
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      websiteServices: [],
      contentCreationServices: [],
      paymentPlan: "",
    });
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Contact Us
      </h1>
      <p>
        We would love to hear from you! Whether you have questions about our
        services, need more information, or are ready to start your next
        project, we’re here to help. Please fill out the form below, and one of
        our team members will get back to you as soon as possible.
      </p>

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

            {/* Website Services Section */}
            <div className="mb-4">
              <label className="inline-flex items-center text-lg font-semibold">
                <BpCheckbox
                  name="websiteServices"
                  checked={showWebsiteServices}
                  onChange={handleServiceChange}
                  className="mr-2"
                />
                Website Services
              </label>
              {showWebsiteServices && (
                <div className="pl-4 grid grid-cols md:grid-cols-2 lg:grid-cols-3">
                  {websiteServices.map((service, index) => (
                    <div key={index} className="my-2">
                      <label className="inline-flex items-center text-lg font-semibold text-accent-1">
                        <BpCheckbox
                          value={service.name}
                          checked={formData.websiteServices.includes(
                            service.name
                          )}
                          onChange={(e) =>
                            handleServiceSelect(e, "websiteServices")
                          }
                          className="mr-2"
                        />
                        {service.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content Creation Services Section */}
            <div className="mb-4">
              <label className="inline-flex items-center text-lg font-semibold">
                <BpCheckbox
                  name="contentCreationServices"
                  checked={showContentCreationServices}
                  onChange={handleServiceChange}
                  className="mr-2"
                />
                Content Creation Services
              </label>
              {showContentCreationServices && (
                <div className="pl-4 grid grid-cols md:grid-cols-2 lg:grid-cols-3">
                  {contentCreationServices.map((service, index) => (
                    <div key={index} className="my-2">
                      <label className="inline-flex items-center text-lg font-semibold text-accent-1">
                        <BpCheckbox
                          value={service.name}
                          checked={formData.contentCreationServices.includes(
                            service.name
                          )}
                          onChange={(e) =>
                            handleServiceSelect(e, "contentCreationServices")
                          }
                          className="mr-2"
                        />
                        {service.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4">
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
                          paymentPlan: plan.title, // Update selected payment plan
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
