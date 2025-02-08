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
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import RootLayout from "../layout";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();

  const navigateToCompanyService = (serviceName: string) => {
    router.push(
      `/comapny-specific-services/${serviceName
        .toLowerCase()
        .replace(/ /g, "-")}`
    );
  };

  const navigateToWebService = (serviceName: string) => {
    router.push(
      `/website-services/${serviceName.toLowerCase().replace(/ /g, "-")}`
    );
  };

  const navigateToContentService = (serviceName: string) => {
    const formattedServiceName = serviceName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/\//g, "-");

    router.push(`/content-creation-services/${formattedServiceName}`);
  };

  return (
    <>
      <RootLayout
        title="Our Expert Digital Services - Phoenix Code Studio"
        description="Explore the range of expert services we offer, from custom website design and content creation to full-scale digital marketing strategies. We bring your vision to life!"
      >
        <main className="w-10/12 md:w-11/12 mx-auto py-6">
          <DynamicBreadcrumb />
          {/* Introduction Section */}
          <section className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Our Services
            </h1>
            <p>
              Discover the comprehensive range of services we offer to help your
              business not only thrive but excel in today’s competitive digital
              landscape. Whether you’re looking for cutting-edge web development
              to create a stunning, high-performing website, intuitive design to
              enhance user experience, or impactful content creation that
              resonates with your audience, we’ve got you covered. Our expertise
              extends to digital marketing solutions designed to increase
              visibility, drive traffic, and boost engagement, ensuring your
              brand stands out in the crowded online space. Whatever your
              goals—be it launching a new venture, revitalizing your existing
              presence, or expanding into new markets—we’re dedicated to
              delivering tailored solutions that align with your vision, achieve
              tangible results, and set you apart from the competition.
            </p>
          </section>

          {/* Company Services Section */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              Services for Companies
            </h2>
            <p>
              Our Services for Companies are designed to help businesses of all
              sizes grow and thrive in today’s competitive market. Whether
              you’re looking to enhance your online presence, streamline
              operations, or improve user experiences, we provide tailored
              solutions that align with your goals. From custom web development
              and e-commerce platforms to UX design and marketing strategies,
              our team of experts works with you every step of the way to ensure
              your business achieves its full potential.
            </p>
            <div className="space-y-8">
              {companySpecificServices.map((service, index) => (
                <div key={index}>
                  <div
                    key={service.name}
                    className="flex flex-col md:flex-row justify-between md:items-end pb-4"
                  >
                    <div>
                      <h3 className="font-semibold text-accent-5">
                        {service.name}
                      </h3>
                      <p>{!isMediumScreen ? service.info : service.details}</p>
                      <p>
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
            <p>
              Our Website Services are designed to provide comprehensive
              solutions for businesses looking to establish a powerful online
              presence. Whether you need a custom website design, seamless
              development, or robust functionality, our team delivers tailored
              services to meet your unique needs. From responsive designs to
              e-commerce integrations, we ensure your website not only looks
              great but also performs optimally to engage users and drive
              conversions.
            </p>
            <div className="space-y-8">
              {websiteServices.map((service, index) => (
                <div key={index}>
                  <div
                    key={service.name}
                    className="flex justify-between items-end pb-4"
                  >
                    <div>
                      <h3 className="font-semibold text-accent-5">
                        {service.name}
                      </h3>
                      <p>{!isMediumScreen ? service.info : service.details}</p>
                      <p>
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
            <p>
              Our Content Creation Services are designed to help your brand
              stand out with compelling, high-quality content. From blog posts
              and website copy to social media and product descriptions, we
              specialize in crafting engaging, SEO-friendly content that
              resonates with your audience. Whether you're looking to boost your
              online presence or strengthen your brand's voice, our team
              delivers tailored content that drives results and enhances your
              digital strategy.
            </p>
            <div className="space-y-8">
              {contentCreationServices.map((service, index) => (
                <div key={index}>
                  <div
                    key={service.name}
                    className="flex justify-between items-end pb-4"
                  >
                    <div>
                      <h3 className="font-semibold text-accent-5">
                        {service.name}
                      </h3>
                      <p>{!isMediumScreen ? service.info : service.details}</p>
                      <p>
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
      </RootLayout>
    </>
  );
};

export default ServicesPage;
