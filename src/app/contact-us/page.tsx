"use client";

import LoadingIndicator from "@/components/Loading";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { allContracts } from "@/lib/contract-categories";
import { FormDataType } from "@/lib/interfaces";
import { paymentPlans } from "@/lib/payment-plans";
import { allServices } from "@/lib/service-categories";
import { contractExamples } from "@/lib/sub-contracts";
import { subServiceDetails } from "@/lib/sub-services";
import { capitalize, cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUsPage: FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
    paymentPlan: "",
    selectedServices: [],
    selectedContracts: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedContracts, setSelectedContracts] = useState<string[]>([]);
  const [openCollapsibles, setOpenCollapsibles] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    });
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

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

  const handleOpen = (type: "contract" | "service", id: string) => {
    setOpenCollapsibles((prevState) => ({
      ...prevState,
      [`${type}-${id}`]: !prevState[`${type}-${id}`], // Toggle the clicked one
      // Close all others
      ...Object.keys(prevState).reduce((acc, key) => {
        if (key !== `${type}-${id}`) {
          acc[key] = false; // Set all other collapsibles to false
        }
        return acc;
      }, {} as { [key: string]: boolean }), // Cast the accumulator to have the correct type
    }));
  };

  const handleContractCheckboxChange = (
    contractId: string,
    checked: boolean | string
  ) => {
    if (checked) {
      setSelectedContracts((prev) => [...prev, `${capitalize(contractId)}`]);
    } else {
      setSelectedContracts((prev) =>
        prev.filter((id) => id !== `${capitalize(contractId)}`)
      );
    }
    setFormData((prevState) => ({
      ...prevState,
      selectedContracts: selectedContracts,
    }));
  };

  const handleServiceCheckboxChange = (
    serviceId: string,
    checked: boolean | string
  ) => {
    if (checked) {
      setSelectedServices((prev) => [...prev, `${capitalize(serviceId)}`]);
    } else {
      setSelectedServices((prev) =>
        prev.filter((id) => id !== `${capitalize(serviceId)}`)
      );
    }
    setFormData((prevState) => ({
      ...prevState,
      selectedServices: selectedServices,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted formData:", formData);

    // Set submitted to true
    setSubmitted(true);

    // Get the form element reference
    const formElement = document.getElementById(
      "contact-form"
    ) as HTMLFormElement;

    const formDataToSend = {
      email: formData.email,
      name: capitalize(formData.name),
      subject: capitalize(formData.subject),
      message: capitalize(formData.message),
      selectedServices: formData.selectedServices.join(", "), // Convert array to string
      selectedContracts: formData.selectedContracts.join(", "), // Convert array to string
      paymentPlan: capitalize(formData.paymentPlan),
    };

    // Ensure the form exists before sending the data using emailjs
    if (formElement) {
      emailjs.send("service_8nwkxet", "contact-form-template", {
        from_name: `${formDataToSend.name}`,
        name: `${formDataToSend.name}`,
        email: `${formDataToSend.email}`,
        subject: `${formDataToSend.subject}`,
        message: `${formDataToSend.message}`,
        selectedServices: `${formDataToSend.selectedServices}`,
        selectedContracts: `${formDataToSend.selectedContracts}`,
        paymentPlan: `${formDataToSend.paymentPlan}`,
        reply_to: `${formDataToSend.email}`,
      });
    } else {
      console.error("Form element not found.");
    }

    // Reset form state and selections
    setSelectedServices([]);
    setSelectedContracts([]);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      selectedServices: [],
      selectedContracts: [],
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
          src={theme === "dark" ? "/images/logo_white.png" : "/images/logo.png"}
          alt="Phoenix Code Studio Logo"
          width={500}
          height={500}
          className={cn(
            "w-44 md:w-64 lg:w-80 rounded-t-md object-cover mx-auto mb-1"
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
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            className="w-full flex flex-col"
          >
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">
                Name
              </label>
              <input
                autoCapitalize="on"
                inputMode="text"
                autoComplete="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  handleChange(e);
                }}
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
                autoCapitalize="off"
                inputMode="email"
                autoComplete="email"
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
                autoCapitalize="sentences"
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
                autoCapitalize="sentences"
                spellCheck
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
            {allServices.map((service, index) => (
              <div className="flex flex-wrap items-center" key={index}>
                <Collapsible
                  open={openCollapsibles[`service-${index}`] || false}
                  onOpenChange={() => handleOpen("service", `${index}`)}
                  className="w-full space-y-2"
                >
                  <div className="flex items-center justify-between space-x-4">
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center">
                        <ChevronDown className="h-4 w-4" />
                        <label
                          htmlFor="service"
                          className="ml-2 text-lg w-full"
                        >
                          <p>{service.title}</p>
                          <span className="sr-only">Toggle Services</span>
                        </label>
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2 ml-5 pb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {service.info.sub.map((subService, subIndex) => {
                        const serviceDetails = subServiceDetails.find(
                          (details) => details.name === subService
                        );

                        if (serviceDetails) {
                          return (
                            <label key={subIndex} className="flex  my-2">
                              <Checkbox
                                value={subService}
                                checked={selectedServices.includes(
                                  capitalize(subService)
                                )}
                                onCheckedChange={(checked) =>
                                  handleServiceCheckboxChange(
                                    subService,
                                    checked
                                  )
                                }
                                className="mr-2"
                              />
                              {capitalize(serviceDetails.info.title)}
                            </label>
                          );
                        }
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}

            <h2 className="text-xl font-semibold mt-6 mb-2">
              Select Contract Examples Interested In (if applicable)
            </h2>
            {allContracts.map((contract, index) => (
              <div className="flex flex-wrap items-center" key={index}>
                <Collapsible
                  open={openCollapsibles[`contract-${index}`] || false}
                  onOpenChange={() => handleOpen("contract", `${index}`)}
                  className="w-full space-y-2"
                >
                  <div className="flex items-center justify-between space-x-4">
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center">
                        <ChevronDown className="h-4 w-4" />
                        <label
                          htmlFor="contract"
                          className="ml-2 text-lg w-full"
                        >
                          <p>{contract.title}</p>
                          <span className="sr-only">Toggle Contracts</span>
                        </label>
                      </div>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-2 ml-5 pb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {contract.info.sub.map((subContract) => {
                        const contractDetails = contractExamples.find(
                          (details) => details.name === subContract
                        );

                        if (contractDetails) {
                          return (
                            <label
                              key={subContract}
                              className="flex items-center my-2"
                            >
                              <Checkbox
                                value={subContract}
                                checked={selectedContracts.includes(
                                  capitalize(subContract)
                                )}
                                onCheckedChange={(checked) =>
                                  handleContractCheckboxChange(
                                    subContract,
                                    checked
                                  )
                                }
                                className="mr-2"
                              />
                              {capitalize(contractDetails.info.title)}
                            </label>
                          );
                        }
                        return null; // Ensure we return null if no contractDetails are found
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}

            {/* Payment Plan (Dropdown) */}
            <div className="mt-6 mb-4">
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild>
                  <button className="w-full text-start p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-between">
                    {capitalize(formData.paymentPlan) ||
                      "Select a Payment Plan"}
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
                          paymentPlan: plan.name,
                        }));
                      }}
                    >
                      {capitalize(plan.name)}
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
