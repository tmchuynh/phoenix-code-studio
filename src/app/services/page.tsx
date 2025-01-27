"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  websiteServices,
  contentCreationServices,
  companySpecificServices,
} from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import useMediumScreen from "@/lib/useMediumScreen";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();

  const navigateToCompanyService = (serviceName: string) => {
    router.push(`/company/${serviceName.toLowerCase().replace(/ /g, "-")}`);
  };

  const navigateToWebService = (serviceName: string) => {
    router.push(`/web/${serviceName.toLowerCase().replace(/ /g, "-")}`);
  };

  const navigateToContentService = (serviceName: string) => {
    const formattedServiceName = serviceName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/\//g, "-");

    router.push(`/content/${formattedServiceName}`);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* Introduction Section */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Our Services
        </h1>
        <p className="text-lg my-4">
          Discover the comprehensive range of services we offer to help your
          business not only thrive but excel in today’s competitive digital
          landscape. Whether you’re looking for cutting-edge web development to
          create a stunning, high-performing website, intuitive design to
          enhance user experience, or impactful content creation that resonates
          with your audience, we’ve got you covered. Our expertise extends to
          digital marketing solutions designed to increase visibility, drive
          traffic, and boost engagement, ensuring your brand stands out in the
          crowded online space. Whatever your goals—be it launching a new
          venture, revitalizing your existing presence, or expanding into new
          markets—we’re dedicated to delivering tailored solutions that align
          with your vision, achieve tangible results, and set you apart from the
          competition.
        </p>
      </section>

      {/* Company Services Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Services for Companies
        </h2>
        <div className="space-y-8">
          {companySpecificServices.map((service, index) => (
            <div key={index}>
              <div
                key={service.name}
                className="flex flex-col md:flex-row justify-between md:items-end pb-4"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-accent-5">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-lg">
                    {!isMediumScreen ? service.info : service.details}
                  </p>
                  <p className="mt-4 text-lg">
                    <strong>Starting at: </strong>
                    {formatCurrency(service.startingPrice)}
                  </p>
                </div>
                <Button
                  onClick={() => navigateToCompanyService(service.name)}
                  className="m-0"
                >
                  Learn More
                </Button>
              </div>
              {index !== companySpecificServices.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </section>

      {/* Website Services Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Website Services
        </h2>
        <div className="space-y-8">
          {websiteServices.map((service, index) => (
            <div key={index}>
              <div
                key={service.name}
                className="flex justify-between items-end pb-4"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-accent-5">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-lg">
                    {!isMediumScreen ? service.info : service.details}
                  </p>
                  <p className="mt-4 text-lg">
                    <strong>Starting at: </strong>
                    {formatCurrency(service.startingPrice)}
                  </p>
                </div>
                <Button
                  onClick={() => navigateToWebService(service.name)}
                  className="m-0"
                >
                  Learn More
                </Button>
              </div>
              {index !== websiteServices.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </section>

      {/* Content Creation Services Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Content Creation Services
        </h2>
        <div className="space-y-8">
          {contentCreationServices.map((service, index) => (
            <div key={index}>
              <div
                key={service.name}
                className="flex justify-between items-end pb-4"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-accent-5">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-lg">
                    {!isMediumScreen ? service.info : service.details}
                  </p>
                  <p className="mt-4 text-lg">
                    <strong>Starting at: </strong>
                    {formatCurrency(service.startingPrice)}
                  </p>
                </div>
                <Button
                  onClick={() => navigateToContentService(service.name)}
                  className="m-0"
                >
                  Learn More
                </Button>
              </div>
              {index !== contentCreationServices.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
