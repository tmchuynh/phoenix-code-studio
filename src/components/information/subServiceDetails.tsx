"use client";

import { subServiceDetails } from "@/lib/sub-services";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, formatCurrency, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface ServiceType {
  info: {
    sub: string[];
  };
}

export default function SubServiceDetails({
  service,
  index,
}: {
  service: ServiceType;
  index: number;
}) {
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const { theme } = useTheme();
  const router = useRouter();

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

  return (
    <>
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
                <h3 className="font-semibold text-accent">
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
    </>
  );
}
