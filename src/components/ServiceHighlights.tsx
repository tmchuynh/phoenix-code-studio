import { FC, useState } from "react";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { subServiceDetails } from "@/lib/sub-services";

const IconDisplay: FC<{
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({ Icon }) => {
  return (
    <div>
      {/* Render the icon */}
      <Icon className="text-4xl text-accent-5 mx-auto my-5" />
    </div>
  );
};

const ServiceHighlights = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage, setServicesPerPage] = useState(6);

  const featuredServices = subServiceDetails
    .filter((service) => service.info.featured === true)
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
    router.push("/info/blogs");
  };

  return (
    <section className="w-10/12 md:w-11/12 mx-auto py-6">
      <h2>What We Do</h2>
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
            {/* Pass the correct Icon component */}
            <IconDisplay Icon={service.info.Icon} />

            <h3 className="font-semibold text-center text-secondary h-32 px-5 flex justify-center items-center">
              {service.info.name}
            </h3>

            <p className="text-center mt-4">{service.info.short}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          variant={"tertiary"}
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
