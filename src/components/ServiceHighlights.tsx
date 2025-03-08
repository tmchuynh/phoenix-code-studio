import { useState } from "react";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { subServiceDetails } from "@/lib/sub-services";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ServiceHighlights = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage, setServicesPerPage] = useState(6);

  /**
   * Filters and sorts the subServiceDetails array to create a list of featured services.
   *
   * A service is considered featured if:
   * - The `info.featured` property is `true`, or
   * - The `info.startingPrice` property is defined and greater than or equal to 2000.
   *
   * The resulting array is sorted alphabetically by the service name.
   *
   * @param {Array} subServiceDetails - The array of service details to filter and sort.
   * @returns {Array} The filtered and sorted array of featured services.
   */
  const featuredServices = subServiceDetails
    .filter((service) => {
      if (!service.info) return false;

      const isFeatured = service.info.featured === true;

      const hasHighPrice =
        service.info.startingPrice !== undefined &&
        service.info.startingPrice >= 2000;

      return isFeatured || hasHighPrice;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = featuredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(featuredServices.length / servicesPerPage);

  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <section className="w-10/12 md:w-11/12 mx-auto py-6">
      <h2 className="text-center">What We Do</h2>
      <Pagination className="gap-5 flex items-center pb-5">
        <PaginationPrevious
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          variant={currentPage === 1 ? "disabled" : "outline"}
          className={
            currentPage === 1 ? "cursor-not-allowed" : "cursor-default"
          }
        />
        <section className="text-center">
          {currentServices.length > 0 ? (
            <p>
              Showing {indexOfFirstService + 1} to{" "}
              {indexOfLastService > featuredServices.length
                ? featuredServices.length
                : indexOfLastService}{" "}
              of {featuredServices.length} featured services
            </p>
          ) : (
            <p>No featured services available</p>
          )}
        </section>
        <PaginationNext
          onClick={() => {
            if (currentPage < totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
          variant={currentPage === totalPages ? "disabled" : "outline"}
          className={
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-default"
          }
        />
      </Pagination>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {currentServices.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground"
          >
            {service.info.Icon && (
              <Image
                src={`/images/service_icons/${service.info.Icon}`}
                width={500}
                height={500}
                alt={`${service.info.description}-Image`}
                className={cn("w-28 lg:w-24 mx-auto mb-1")}
              />
            )}

            <h3 className="font-semibold text-center text-secondary h-32 px-5 flex justify-center items-center">
              {service.info.name}
            </h3>

            <p className="text-center mt-4">{service.info.short}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          variant={theme === "dark" ? "outline" : "tertiary"}
          className="w-1/2 my-3"
          onClick={navigateToServices}
        >
          View All Available Services
        </Button>
      </div>
    </section>
  );
};

export default ServiceHighlights;
