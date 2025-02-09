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
import { useTheme } from "next-themes";

const ServicesPage: FC = () => {
  const { theme } = useTheme();
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
            <h1>Digital Services by Phoenix Code Studio</h1>
            <p>
              Unlock your business’s full potential with our all-embracing
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
              Corporate Digital Solutions for Growth & Competitive Edge
            </h2>
            <p>
              Our corporate solutions empower businesses of all sizes to
              strengthen their online presence, streamline digital operations,
              and enhance user experiences. Whether you need custom web
              development, e-commerce solutions, UX/UI design, or data-driven
              digital marketing strategies, we deliver SEO-optimized,
              results-driven solutions tailored to your business objectives. Our
              team of experts in web design, branding, and conversion
              optimization works to boost search rankings, increase traffic, and
              maximize engagement, ensuring your brand stands out in a crowded
              digital marketplace. Let us help you turn visitors into loyal
              customers, drive long-term success, and establish a lasting
              competitive advantage.
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
                      variant={theme === "dark" ? "outline" : "secondary"}
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
                className="m-0 w-full text-wrap py-10 md:py-0 lg:text-lg"
              >
                Book a consultation today to discuss how our bespoke business
                solutions can revolutionize your business
              </Button>
            </div>
          </section>

          {/* Website Services Section */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              Comprehensive Website Solutions for Growth & Visibility
            </h2>
            <p>
              Our website services provide end-to-end solutions to help
              businesses establish, enhance, and scale their digital presence
              effectively. Whether you need a custom website design,
              high-performance development, or seamless functionality, we
              deliver tailored solutions to meet your unique needs. Our
              expertise includes responsive web design, e-commerce integrations,
              SEO optimization, and UX enhancements, ensuring your site is both
              visually striking and conversion-driven. With a strong emphasis on
              speed, accessibility, and mobile-first design, we create websites
              that engage visitors, improve search rankings, and fuel business
              growth—helping you stay ahead in today’s competitive digital
              landscape.
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
                      variant={theme === "dark" ? "outline" : "secondary"}
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
                className="m-0 w-full text-wrap py-10 md:py-0 lg:text-lg"
              >
                Book a consultation today to discuss how our customized website
                services can revamp your business
              </Button>
            </div>
          </section>

          {/* Content Creation Services Section */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              SEO-Optimized Content Creation for Maximum Brand Impact
            </h2>
            <p>
              Our Content Creation Services are designed to enhance your online
              visibility, drive organic traffic, and engage your target audience
              with compelling, high-quality, and search engine-optimized
              content. From SEO-friendly blog articles and persuasive website
              copy to engaging social media posts and conversion-driven product
              descriptions, we craft content that not only captivates readers
              but also ranks higher on search engines. Whether you aim to
              increase brand awareness, boost audience engagement, or establish
              authority in your industry, our expertly crafted content
              strategies ensure your brand stands out. Let us help you create
              content that fuels growth, builds trust, and maximizes your
              digital presence.
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
                      variant={theme === "dark" ? "outline" : "secondary"}
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
                className="m-0 w-full text-wrap py-10 md:py-0 lg:text-lg"
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
