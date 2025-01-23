"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { websiteServices, contentCreationServices } from "@/lib/constants";
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
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold text-primary">Our Services</h1>
        <p className="text-lg my-4">
          Explore the services we offer. Whether it's web development or content
          creation, we've got you covered.
        </p>
      </section>

      {/* Website Services Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Website Services
        </h2>
        <div className="space-y-8">
          {websiteServices.map((service, index) => (
            <>
              <div key={index} className="pb-3">
                <h3 className="text-xl font-semibold text-primary">
                  {service.name}
                </h3>
                <p className="mt-4">{service.details}</p>
                <p className="mt-4">
                  <strong>Starting at: </strong>
                  {formatCurrency(service.startingPrice)}
                </p>
                <Button
                  variant="secondary"
                  onClick={() => navigateToService(service.name)}
                  className="mt-4 bg-secondary hover:bg-secondary-dark"
                >
                  Learn More
                </Button>
              </div>
              {index !== websiteServices.length - 1 && <hr />}
            </>
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
            <>
              <div key={index} className="pb-3">
                <h3 className="text-xl font-semibold text-primary">
                  {service.name}
                </h3>
                <p className="mt-4">{service.details}</p>
                <p className="mt-4">
                  <strong>Starting at: </strong>
                  {formatCurrency(service.startingPrice)}
                </p>
                <Button
                  variant="secondary"
                  onClick={() => navigateToContent(service.name)}
                  className="mt-4 bg-secondary rounded-md hover:bg-secondary-dark"
                >
                  Learn More
                </Button>
              </div>
              {index !== contentCreationServices.length - 1 && <hr />}
            </>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
