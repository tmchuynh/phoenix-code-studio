"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  websiteServices,
  contentCreationServices,
  companySpecificServices,
} from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, formatCurrency, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import useMediumScreen from "@/lib/useMediumScreen";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const { theme } = useTheme();

  const navigateToCompanyService = (serviceName: string) => {
    router.push(
      `/services/comapny-specific-services/${serviceName
        .toLowerCase()
        .replace(/ /g, "-")}`
    );
  };

  const navigateToWebService = (serviceName: string) => {
    router.push(
      `/services/website-services/${serviceName
        .toLowerCase()
        .replace(/ /g, "-")}`
    );
  };

  const navigateToContentService = (serviceName: string) => {
    const formattedServiceName = setSlug(serviceName);

    router.push(`/services/content-creation-services/${formattedServiceName}`);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Introduction Section */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Digital Services by Phoenix Code Studio
        </h1>
        <p>
          Unlock your business’s full potential with our all-embracing digital
          solutions. From cutting-edge web development that delivers
          high-performance websites to intuitive design that enhances user
          experience, we craft strategies that make an impact. Our expertise in
          content creation and digital marketing ensures your brand stands out,
          driving engagement, increasing visibility, and boosting conversions.
          Whether you're launching a new venture, reimagining your online
          presence, or expanding into new markets, we provide tailored solutions
          that align with your vision and set you apart in today’s competitive
          digital landscape.
        </p>
      </section>

      {/* Company Services Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Scalable Corporate Solutions for Growth & Digital Success
        </h2>
        <p>
          Our corporate digital solutions are designed to help businesses of all
          sizes enhance their online visibility, optimize digital operations,
          and improve user engagement. Whether you need custom web development,
          high-converting e-commerce solutions, intuitive UX/UI design, or
          data-driven digital marketing strategies, we provide SEO-optimized,
          performance-focused solutions tailored to your specific business
          objectives.
        </p>
        <p>
          Our team of web design experts, branding specialists, and conversion
          optimization strategists works to boost search engine rankings,
          increase organic traffic, and maximize audience engagement, ensuring
          that your brand outshines the competition in today’s saturated digital
          marketplace.
        </p>
        <p>
          By leveraging advanced SEO strategies, responsive web design, and
          conversion-driven digital experiences, we help businesses turn website
          visitors into loyal customers, accelerate revenue growth, and
          establish a powerful competitive edge. Partner with us to create
          scalable, future-proof digital solutions that drive long-term success
          and position your business as a leader in your industry.
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
          End-to-End Website Solutions for a High-Performing Digital Presence
        </h2>
        <p>
          Our website development services provide comprehensive, scalable
          solutions to help businesses establish, optimize, and grow their
          online presence. Whether you need a custom website design, high-speed
          development, or seamless functionality, we create tailored digital
          experiences that enhance brand visibility, user engagement, and
          conversions.
        </p>
        <p>
          With expertise in responsive web design, e-commerce development,
          advanced SEO strategies, and UX/UI enhancements, we ensure your
          website is visually compelling, mobile-optimized, and search
          engine-friendly. Our focus on fast-loading pages, intuitive
          navigation, and conversion-driven architecture ensures that your
          visitors enjoy a seamless experience while boosting your search
          rankings and online authority.
        </p>
        <p>
          By integrating the latest SEO best practices, accessibility standards,
          and mobile-first design principles, we craft websites that not only
          attract and retain customers but also drive sustainable business
          growth. Stay ahead of the competition with a high-performance website
          that delivers real results and maximizes your digital potential.
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
          SEO-Optimized Content Creation Services That Elevate Your Brand &
          Drive Results
        </h2>
        <p>
          Our Content Creation Services are designed to boost online visibility,
          attract organic traffic, and engage your target audience with
          compelling, high-quality, SEO-optimized content. We craft content that
          is strategic, audience-focused, and built to rank, ensuring your brand
          stands out in search engine results and captivates readers.
        </p>
        <p>
          From SEO-friendly blog articles and persuasive website copy to
          engaging social media content and high-converting product
          descriptions, we create content that drives engagement, builds brand
          authority, and increases conversions. Whether your goal is to enhance
          brand awareness, improve search rankings, or establish credibility in
          your industry, our tailored content marketing strategies help you
          achieve measurable success.
        </p>
        <p>
          Let us help you create content that fuels business growth, strengthens
          customer trust, and maximizes your digital presence—all while ensuring
          that every word works toward your SEO and marketing goals.
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
  );
};

export default ServicesPage;
