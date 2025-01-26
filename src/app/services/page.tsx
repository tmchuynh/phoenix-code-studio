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

const ServicesPage: FC = () => {
  const router = useRouter();

  const navigateToService = (serviceName: string) => {
    router.push(`/web/${serviceName.toLowerCase().replace(/ /g, "-")}`);
  };

  const navigateToContent = (serviceName: string) => {
    const formattedServiceName = serviceName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/\//g, "-");

    router.push(`/content/${formattedServiceName}`);
  };

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Introduction Section */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Our Services
        </h1>
        <p className="text-lg my-4">
          Explore the services we offer. Whether it's web development or content
          creation, we've got you covered.
        </p>
      </section>

      {/* Company Services Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Services for Companies
        </h2>
        <div className="space-y-8">
          {companySpecificServices.map((service, index) => (
            <div key={index}>
              <div
                key={service.name}
                className="flex justify-between items-end pb-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {service.name}
                  </h3>
                  <p className="mt-4">{service.details}</p>
                  <p className="mt-4">
                    <strong>Starting at: </strong>
                    {formatCurrency(service.startingPrice)}
                  </p>
                </div>
                <Button
                  onClick={() => navigateToService(service.name)}
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
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
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
                  <h3 className="text-xl font-semibold text-secondary">
                    {service.name}
                  </h3>
                  <p className="mt-4">{service.details}</p>
                  <p className="mt-4">
                    <strong>Starting at: </strong>
                    {formatCurrency(service.startingPrice)}
                  </p>
                </div>
                <Button
                  onClick={() => navigateToService(service.name)}
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
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
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
                  <h3 className="text-xl font-semibold text-secondary">
                    {service.name}
                  </h3>
                  <p className="mt-4">{service.details}</p>
                  <p className="mt-4">
                    <strong>Starting at: </strong>
                    {formatCurrency(service.startingPrice)}
                  </p>
                </div>
                <Button
                  onClick={() => navigateToContent(service.name)}
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
