import { pastProjects } from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { useTheme } from "next-themes";

const FeaturedProjects = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToPastProjects = () => {
    router.push("/info/portfolio");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  // Filtered blogs
  const sortedProjects = pastProjects
    .filter((pastProjects) => pastProjects.featured === true)
    .sort((a, b) => {
      return b.title.localeCompare(a.title);
    });

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  return (
    <section className="w-10/12 md:w-11/12 mx-auto py-6">
      <h2 className="text-center">Featured Projects</h2>
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
          {currentProjects.length > 0 ? (
            <p>
              Showing {indexOfFirstProject + 1} to{" "}
              {indexOfLastProject > sortedProjects.length
                ? sortedProjects.length
                : indexOfLastProject}{" "}
              of {sortedProjects.length} featured blogs
            </p>
          ) : (
            <p>No featured blogs available</p>
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
      <div className="w-11/12 lg:w-full mx-auto gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map(
          (project, index) =>
            project.featured && (
              <div
                key={index}
                className="rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground p-7"
              >
                <h3 className="font-semibold text-center text-secondary pt-1">
                  {project.title}
                </h3>
                <p className="text-pretty mt-4">
                  <span className="whitespace-nowrap text-wrap overflow-hidden text-ellipsis">
                    {isSmallScreen
                      ? `${project.short.substring(0, 80)}...`
                      : project.short}
                  </span>
                </p>
              </div>
            )
        )}
      </div>
      <div className="text-center mt-8">
        <Button
          variant={theme === "dark" ? "outline" : "tertiary"}
          className="w-1/2 my-3"
          onClick={navigateToPastProjects}
        >
          View Our Past Projects
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
