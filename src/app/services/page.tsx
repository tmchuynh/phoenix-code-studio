"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  websiteServices,
  contentCreationServices,
  companySpecificServices,
} from "@/lib/constants";
import { cn, formatCurrency } from "@/lib/utils";
import useMediumScreen from "@/lib/useMediumScreen";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import RootLayout from "../layout";
import useSmallScreen from "@/lib/useSmallScreen";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

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
        title="Elevate Your Business with Our Digital Services - Phoenix Code Studio"
        description="Discover Phoenix Code Studio's Digital Services for custom web design, SEO, and content creation to elevate your brand. We bring your vision to life!"
      >
        <main className="w-10/12 md:w-11/12 mx-auto py-6">
          <DynamicBreadcrumb />
          {/* Introduction Section */}
          <section className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Digital Services by Phoenix Code Studio
            </h1>
            <p>
              Unlock your business’s full potential with our comprehensive
              digital solutions. From cutting-edge web development that delivers
              high-performance websites to intuitive design that enhances user
              experience, we craft strategies that make an impact. Our expertise
              in content creation and digital marketing ensures your brand
              stands out, driving engagement, increasing visibility, and
              boosting conversions. Whether you're launching a new venture,
              reimagining your online presence, or expanding into new markets,
              we provide tailored solutions that align with your vision and set
              you apart in today’s competitive digital landscape.
            </p>
          </section>

          {/* Company Services Section */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              Tailored Services for Businesses
            </h2>
            <p>
              Our business services are designed to help companies of all sizes
              enhance their online presence, optimize digital operations, and
              improve user experiences. Whether you're looking for custom web
              development, e-commerce solutions, UX/UI design, or digital
              marketing strategies, we provide SEO-optimized, data-driven
              solutions tailored to your goals. Our team of experts in web
              design, branding, and conversion optimization works with you to
              boost search engine rankings, increase traffic, and maximize
              engagement, ensuring your brand stands out in today’s competitive
              digital landscape. Let us help you turn visitors into loyal
              customers and achieve long-term success.
            </p>
            <div>
              {companySpecificServices.map((service, index) => (
                <div key={index} className="mb-8">
                  <div
                    key={service.name}
                    className={cn(
                      "flex flex-col md:flex-row justify-between md:items-end relative",
                      index !== contentCreationServices.length - 1 ? "pb-7" : ""
                    )}
                  >
                    <div>
                      <h3 className="font-semibold text-accent-5">
                        {service.name}
                      </h3>
                      <p className="md:pb-10">
                        {!isMediumScreen ? service.info : service.details}
                      </p>
                      <p>
                        <strong>Starting at: </strong>
                        {formatCurrency(service.startingPrice)}
                      </p>
                    </div>
                    <Button
                      variant={"secondary"}
                      size={isSmallScreen ? "sm" : "default"}
                      onClick={() => navigateToCompanyService(service.name)}
                      className={
                        isSmallScreen
                          ? "text-xs relative"
                          : "absolute right-0 w-64 2xl:w-80 2xl:px-44"
                      }
                    >
                      Learn About {service.description}
                    </Button>
                  </div>
                  {index !== companySpecificServices.length - 1 && <hr />}
                </div>
              ))}
              <Button
                onClick={() => router.push("/contact-us")}
                className="m-0 w-full text-wrap py-10 md:py-0"
              >
                Book a consultation today to discuss how our content creation
                services can transform your business
              </Button>
            </div>
          </section>

          {/* Website Services Section */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              Comprehensive Website Solutions
            </h2>
            <p>
              Our website services offer end-to-end solutions to help businesses
              build, optimize, and scale their digital presence. Whether you
              need a custom website design, high-performance development, or
              seamless functionality, we provide tailored solutions to match
              your unique requirements. Our expertise includes responsive web
              design, e-commerce integrations, SEO optimization, and user
              experience enhancements to ensure your site is both visually
              compelling and conversion-focused. With a focus on speed,
              accessibility, and mobile-first design, we create websites that
              engage users, boost search rankings, and drive business growth.
            </p>
            <div>
              {websiteServices.map((service, index) => (
                <div key={index} className="mb-8">
                  <div
                    key={service.name}
                    className={cn(
                      "flex flex-col md:flex-row justify-between md:items-end relative",
                      index !== contentCreationServices.length - 1 ? "pb-7" : ""
                    )}
                  >
                    <div>
                      <h3 className="font-semibold text-accent-5">
                        {service.name}
                      </h3>
                      <p className="md:pb-10">
                        {!isMediumScreen ? service.info : service.details}
                      </p>
                      <p className="pb-3 md:pb-0">
                        <strong>Starting at: </strong>
                        {formatCurrency(service.startingPrice)}
                      </p>
                    </div>
                    <Button
                      variant={"secondary"}
                      size={isSmallScreen ? "sm" : "default"}
                      onClick={() => navigateToWebService(service.name)}
                      className={
                        isSmallScreen
                          ? "text-xs relative"
                          : "absolute right-0 w-64 2xl:w-80 2xl:px-44"
                      }
                    >
                      Learn About {service.description}
                    </Button>
                  </div>
                  {index !== websiteServices.length - 1 && <hr />}
                </div>
              ))}
              <Button
                onClick={() => router.push("/contact-us")}
                className="m-0 w-full text-wrap py-10 md:py-0"
              >
                Book a consultation today to discuss how our content creation
                services can transform your business
              </Button>
            </div>
          </section>

          {/* Content Creation Services Section */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              Engaging Content Creation Services
            </h2>
            <p>
              Our Content Creation Services are designed to elevate your brand
              with high-quality, engaging, and SEO-friendly content that
              captures attention and drives results. We specialize in blog
              writing, website copy, social media content, product descriptions,
              and more, ensuring your brand's message is clear, compelling, and
              optimized for search engines. Whether you're looking to increase
              website traffic, enhance audience engagement, or establish
              industry authority, our content strategies help you stand out in
              the digital space. Let us craft tailored, conversion-focused
              content that strengthens your brand’s voice and fuels your growth.
            </p>
            <div>
              {contentCreationServices.map((service, index) => (
                <div key={index} className="mb-8">
                  <div
                    key={service.name}
                    className={cn(
                      "flex flex-col md:flex-row justify-between md:items-end relative",
                      index !== contentCreationServices.length - 1 ? "pb-7" : ""
                    )}
                  >
                    <div>
                      <h3 className="font-semibold text-accent-5">
                        {service.name}
                      </h3>
                      <p className="md:pb-10">
                        {!isMediumScreen ? service.info : service.details}
                      </p>
                      <p className="pb-3 md:pb-0">
                        <strong>Starting at: </strong>
                        {formatCurrency(service.startingPrice)}
                      </p>
                    </div>
                    <Button
                      variant={"secondary"}
                      size={isSmallScreen ? "sm" : "default"}
                      onClick={() => navigateToContentService(service.name)}
                      className={
                        isSmallScreen
                          ? "text-xs relative"
                          : "absolute right-0 w-64 2xl:w-80 2xl:px-44"
                      }
                    >
                      Learn About {service.description}
                    </Button>
                  </div>
                  {index !== contentCreationServices.length - 1 && <hr />}
                </div>
              ))}
              <Button
                onClick={() => router.push("/contact-us")}
                className="m-0 w-full text-wrap py-10 md:py-0"
              >
                Book a consultation today to discuss how our content creation
                services can transform your business
              </Button>
            </div>
          </section>
        </main>
      </RootLayout>
    </>
  );
};

export default ServicesPage;
