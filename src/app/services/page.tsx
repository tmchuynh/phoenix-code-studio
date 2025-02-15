"use client";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { allServices } from "@/lib/service-categories";
import { subServiceDetails } from "@/lib/sub-services";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, formatCurrency, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC } from "react";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const { theme } = useTheme();

  const navigateToDetails = (serviceCategory: string, serviceName: string) => {
    const formattedServiceName = setSlug(serviceName);
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}/${formattedServiceName}`);
  };

  const navigateToCategory = (serviceCategory: string) => {
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}`);
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
      {allServices.map((service, index) => (
        <section className="my-20 pb-9" key={index}>
          <div className="pb-3 flex flex-col">
            <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
              {service.short}
            </h2>
            {service.info.description.map((info, infoIndex) => (
              <p key={infoIndex}>{info}</p>
            ))}
            <Button
              className="self-end w-1/4"
              variant={theme === "dark" ? "outline" : "accent"}
              size={isSmallScreen ? "sm" : "default"}
              onClick={() => navigateToCategory(service.name)}
            >
              View More Details
            </Button>
          </div>

          {service.info.subServices.map((subService, subIndex) => {
            const subServiceDetail = subServiceDetails.find(
              (item) => item.name === subService
            );

            if (subServiceDetail) {
              return (
                <div
                  key={subIndex}
                  className={cn(
                    "flex flex-col md:flex-row justify-between md:items-end relative mt-5",
                    index !== service.info.subServices.length - 1 ? "pb-7" : ""
                  )}
                >
                  <div>
                    <h3 className="font-semibold text-accent-5">
                      {subServiceDetail.info.name}
                    </h3>
                    <p className="md:pb-10">
                      {!isMediumScreen
                        ? subServiceDetail.info.info
                        : subServiceDetail.info.details}
                    </p>
                    <p className="pb-3 md:pb-0">
                      <strong>Starting at: </strong>
                      {formatCurrency(subServiceDetail.info.startingPrice)}
                    </p>
                  </div>
                  <Button
                    variant={theme === "dark" ? "outline" : "secondary"}
                    size={isSmallScreen ? "sm" : "default"}
                    onClick={() =>
                      navigateToDetails(
                        subServiceDetail.category,
                        subServiceDetail.name
                      )
                    }
                    className={
                      isSmallScreen
                        ? "text-xs relative"
                        : "absolute right-0 w-64 2xl:w-80 2xl:px-44"
                    }
                  >
                    Learn About {subServiceDetail.info.description}
                  </Button>
                </div>
              );
            }
            return null;
          })}
          <Button
            onClick={() => router.push("/contact-us")}
            className="my-15 w-full text-wrap py-10 md:py-0 lg:text-lg"
          >
            Book a Consultation Today to Discuss {service.short}
          </Button>
        </section>
      ))}
    </main>
  );
};

export default ServicesPage;
