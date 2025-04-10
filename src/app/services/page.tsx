"use client";
import LoadingIndicator from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { allServices } from "@/lib/service-categories";
import { subServiceDetails } from "@/lib/sub-services";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, formatCurrency, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  /**
   * Navigates to the details page of a specific service.
   *
   * This function formats the provided service category and service name into slugs
   * and then constructs a URL to navigate to the service details page.
   *
   * @param {string} serviceCategory - The category of the service.
   * @param {string} serviceName - The name of the service.
   */
  const navigateToDetails = (serviceCategory: string, serviceName: string) => {
    const formattedServiceName = setSlug(serviceName);
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}/${formattedServiceName}`);
  };

  /**
   * Navigates to the specified service category page.
   *
   * @param {string} serviceCategory - The name of the service category to navigate to.
   */
  const navigateToCategory = (serviceCategory: string) => {
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}`);
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      {/* Introduction Section */}
      <section className="mb-8">
        <h1>Digital Services by Phoenix Code Studio</h1>
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
          <div className="flex flex-col pb-3">
            <h2 className="mb-6 font-semibold text-3xl text-center text-secondary">
              {service.title}
            </h2>

            {isSmallScreen ? (
              <p>{service.info.short}</p>
            ) : isMediumScreen ? (
              <p>{service.info.detail}</p>
            ) : (
              <>
                <p>{service.info.intro}</p>

                {service.info.description.map((info, infoIndex) => (
                  <p key={infoIndex}>{info}</p>
                ))}
              </>
            )}

            <div className="md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:px-24">
              <Button
                className="mt-6 w-full self-start"
                variant={theme === "dark" ? "accent" : "outline"}
                size={isSmallScreen ? "sm" : "default"}
                onClick={() => navigateToCategory(service.name)}
              >
                View More Details
              </Button>

              <Button
                className="mt-6 w-full self-start"
                variant={theme === "dark" ? "accent" : "outline"}
                size={isSmallScreen ? "sm" : "default"}
                onClick={() => router.push("/services/pricing/payment-plans")}
              >
                Explore Our Payment Plans
              </Button>
            </div>
          </div>

          {service.info.sub.map((subService, subIndex) => {
            const subServiceDetail = subServiceDetails.find(
              (item) => item.name === subService
            );

            if (subServiceDetail) {
              return (
                <div
                  key={subIndex}
                  className={cn(
                    "flex flex-col md:flex-row justify-between md:items-end relative mt-5",
                    index !== service.info.sub.length - 1 ? "pb-7" : ""
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
                    {subServiceDetail.info.startingPrice && (
                      <p className="pb-3 md:pb-0">
                        <strong className="uppercase tracking-wider">
                          Starting at:{" "}
                        </strong>
                        {formatCurrency(subServiceDetail.info.startingPrice)}
                      </p>
                    )}
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
            className="my-15 py-10 md:py-0 w-full text-wrap lg:text-lg"
          >
            Book a Consultation Today to Discuss {service.short}
          </Button>
        </section>
      ))}
    </main>
  );
};

export default ServicesPage;
