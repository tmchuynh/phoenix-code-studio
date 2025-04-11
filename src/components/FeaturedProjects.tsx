import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pastProjects } from "@/lib/constants";
import { Project } from "@/lib/interfaces";
import useSmallScreen from "@/lib/useSmallScreen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FeaturedProjectCard from "./cards/Project/FeaturedProjectCard";
import { Button } from "./ui/button";

const FeaturedProjects = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToPastProjects = () => {
    router.push("/info/portfolio");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  /**
   * Filters and sorts the list of past projects to include only those that are featured.
   * The featured projects are then sorted in descending order based on their titles.
   *
   * @constant
   * @type {Array<Project>}
   */
  const sortedProjects: Array<Project> = pastProjects
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
    <section className="mx-auto py-6 w-10/12 md:w-11/12">
      <h2 className="text-center">Featured Projects</h2>
      <Pagination className="flex items-center gap-5 pb-5">
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
      <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 lg:w-full">
        {currentProjects.map(
          (project, index) =>
            project.featured && (
              <FeaturedProjectCard
                project={project}
                key={index}
                index={index}
              />
            )
        )}
      </div>
      <div className="mt-8 text-center">
        <Button
          variant={theme === "dark" ? "outline" : "tertiary"}
          className="my-3 w-1/2"
          onClick={navigateToPastProjects}
        >
          View Our Past Projects
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
