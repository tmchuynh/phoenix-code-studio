"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material"; // MUI components
import {
  websiteServices,
  contentCreationServices,
  paymentPlans,
} from "@/lib/constants";

const ContactUsPage: FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    websiteServices: [],
    contentCreationServices: [],
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
      if (!checked)
        setFormData((prevState) => ({ ...prevState, websiteServices: [] }));
    } else if (name === "contentCreationServices") {
      setShowContentCreationServices(checked);
      if (!checked)
        setFormData((prevState) => ({
          ...prevState,
          contentCreationServices: [],
        }));
    }
  };

  const handleServiceSelect = (
    e: React.ChangeEvent<{ value: unknown }>,
    serviceType: string
  ) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [serviceType]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
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
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Contact Us
      </h1>
      <p className="text-center text-lg my-4">
        We would love to hear from you! Please fill out the form below, and
        we'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <section className="my-8">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          {submitted && (
            <div className="bg-green-500 text-white p-4 rounded-md mb-4">
              <p>
                Thank you for contacting us! We will get back to you shortly.
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Website Services Section */}
            <div className="mb-4">
              <label className="inline-flex items-center text-sm font-semibold text-gray-700">
                <input
                  type="checkbox"
                  name="websiteServices"
                  checked={showWebsiteServices}
                  onChange={handleServiceChange}
                  className="mr-2"
                />
                Website Services
              </label>
              {showWebsiteServices && (
                <div className="pl-4">
                  {websiteServices.map((service, index) => (
                    <div key={index} className="">
                      <label className="inline-flex items-center text-sm font-semibold text-gray-700">
                        <input
                          type="checkbox"
                          name={service.name}
                          checked={formData.websiteServices.includes(
                            service.name
                          )}
                          onChange={(e) =>
                            handleServiceSelect(e, "websiteServices")
                          }
                          value={service.name}
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
              <label className="inline-flex items-center text-sm font-semibold text-gray-700">
                <input
                  type="checkbox"
                  name="contentCreationServices"
                  checked={showContentCreationServices}
                  onChange={handleServiceChange}
                  className="mr-2"
                />
                Content Creation Services
              </label>
              {showContentCreationServices && (
                <div className="pl-4">
                  {contentCreationServices.map((service, index) => (
                    <div key={index} className="">
                      <label className="inline-flex items-center text-sm font-semibold text-gray-700">
                        <input
                          type="checkbox"
                          name={service.name}
                          checked={formData.contentCreationServices.includes(
                            service.name
                          )}
                          onChange={(e) =>
                            handleServiceSelect(e, "contentCreationServices")
                          }
                          value={service.name}
                          className="mr-2"
                        />
                        {service.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Payment Plan Dropdown */}
            <div className="mb-4">
              <FormControl fullWidth>
                <InputLabel id="payment-plan-label">
                  Select Payment Plan
                </InputLabel>
                <Select
                  labelId="payment-plan-label"
                  value={formData.paymentPlan}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      paymentPlan: e.target.value,
                    }))
                  }
                  input={<OutlinedInput label="Select Payment Plan" />}
                >
                  {paymentPlans.map((plan, idx) => (
                    <MenuItem key={idx} value={plan.title}>
                      {plan.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-primary rounded-md hover:bg-primary-dark"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Additional Links */}
      <section className="my-8 text-center">
        <p className="text-lg mt-2">
          <a href="/payment-plans" className="text-primary underline">
            View Our Payment Plans
          </a>
        </p>
        <p className="text-lg mt-2">
          <a href="/contracts" className="text-primary underline">
            View Example Contracts
          </a>
        </p>
      </section>
    </main>
  );
};

export default ContactUsPage;
