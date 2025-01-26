"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSidebar } from "@/components/ui/sidebar";
import { pastProjects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FC, useState, useEffect } from "react";

const PastProjectsPage: FC = () => {
  const { open } = useSidebar();

  // Filter states
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtersCleared, setFiltersCleared] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(25);

  // Calculate the indexes for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  // Filtered projects
  const [filteredProjects, setFilteredProjects] = useState(pastProjects);
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleProjectsPerPageChange = (value: number) => {
    setProjectsPerPage(value);
    setCurrentPage(1); // Reset to the first page when articles per page changes
  };

  // Update filtered projects when filters change
  const handleFilter = () => {
    let filtered = pastProjects;

    if (selectedLanguages.length > 0) {
      filtered = filtered.filter((project) =>
        selectedLanguages.every((language) =>
          project.languages.includes(language)
        )
      );
    }

    if (selectedFrameworks.length > 0) {
      filtered = filtered.filter((project) =>
        selectedFrameworks.every((framework) =>
          project.frameworks?.includes(framework)
        )
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTags.every((tag) => project.tags.includes(tag))
      );
    }

    if (filtered.length === 0) {
      if (filtersCleared) {
        setTimeout(() => setNoResults(true), 2500);
      } else {
        setNoResults(true);
        setTimeout(() => {
          setSelectedLanguages([]);
          setSelectedFrameworks([]);
          setSelectedTags([]);
        }, 1000);
      }
      setFilteredProjects(pastProjects);
      setTimeout(() => setNoResults(false), 4000);
    } else {
      setNoResults(false);
      setFilteredProjects(filtered);
    }
  };

  // Handle filter changes
  const handleLanguageChange = (language: string, checked: boolean) => {
    setSelectedLanguages((prev) =>
      checked ? [...prev, language] : prev.filter((lang) => lang !== language)
    );
  };

  const handleFrameworkChange = (framework: string, checked: boolean) => {
    setSelectedFrameworks((prev) =>
      checked ? [...prev, framework] : prev.filter((fw) => fw !== framework)
    );
  };

  const handleTagChange = (tag: string, checked: boolean) => {
    setSelectedTags((prev) =>
      checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedFrameworks([]);
    setSelectedTags([]);
    setNoResults(false);
    setFiltersCleared(true);
    setFilteredProjects(pastProjects);
    setTimeout(() => setFiltersCleared(false), 4000);
  };

  // Extract unique languages, frameworks, and tags
  const allLanguages = Array.from(
    new Set(pastProjects.flatMap((p) => p.languages))
  );
  const allFrameworks = Array.from(
    new Set(pastProjects.flatMap((p) => p.frameworks || []))
  );
  const allTags = Array.from(
    new Set(pastProjects.flatMap((p) => p.tags || []))
  );

  useEffect(() => {
    handleFilter();
  }, [selectedLanguages, selectedFrameworks, selectedTags]);

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Past Projects</h1>
      <p className="text-center text-lg my-4">
        Check out some of the projects I've worked on in the past.
      </p>

      {/* Filter Controls */}
      <section className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages Filter */}
          <div>
            <h3 className="text-lg font-semibold">Filter by Languages</h3>
            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 justify-start items-start w-full gap-2",
                {
                  "md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2": open,
                }
              )}
            >
              {allLanguages.map((language) => (
                <div key={language} className="flex items-center">
                  <input
                    type="checkbox"
                    id={language}
                    checked={selectedLanguages.includes(language)}
                    onChange={(e) =>
                      handleLanguageChange(language, e.target.checked)
                    }
                    className="mr-2"
                  />
                  <label htmlFor={language}>{language}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks Filter */}
          <div>
            <h3 className="text-lg font-semibold">Filter by Frameworks</h3>
            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 justify-start items-start w-full gap-2",
                {
                  "md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2": open,
                }
              )}
            >
              {allFrameworks.map((framework) => (
                <div key={framework} className="flex items-center">
                  <input
                    type="checkbox"
                    id={framework}
                    checked={selectedFrameworks.includes(framework)}
                    onChange={(e) =>
                      handleFrameworkChange(framework, e.target.checked)
                    }
                    className="mr-2"
                  />
                  <label htmlFor={framework}>{framework}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h3 className="text-lg font-semibold">Filter by Tags</h3>
            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 justify-start items-start w-full gap-2",
                {
                  "md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2": open,
                }
              )}
            >
              {allTags.map((tag) => (
                <div key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(e) => handleTagChange(tag, e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor={tag}>{tag}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clear Filters Button */}
      <section
        className={cn(
          "w-11/12 md:w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center",
          {
            "w-10/12 md:w-11/12 md:items-start lg:items-center": open,
          }
        )}
      >
        <Button variant="destructive" onClick={clearFilters}>
          Clear Filters
        </Button>

        {/* Articles per page DropdownMenu */}
        <section
          className={cn(
            "flex flex-col md:flex-row md:justify-end items-center",
            {
              "md:flex-col lg:flex-row": open,
            }
          )}
        >
          <label htmlFor="articlesPerPage" className="mr-2">
            Articles per page:
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-sm bg-gray-200 rounded">
                {projectsPerPage} articles per page
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(10)}>
                10 articles per page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(15)}>
                15 articles per page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(25)}>
                25 articles per page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(50)}>
                50 articles per page
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>

      <section className="h-14 p-3">
        {/* Confirmation Text for Filters Cleared */}
        <div className="mt-4 text-center">
          {filtersCleared && (
            <p className="text-secondary m-0 p-0">
              Filters have been cleared successfully!
            </p>
          )}
        </div>

        {/* No results warning */}
        <div className="mt-4 text-center">
          {noResults && (
            <p className="text-destructive m-0">
              No blogs match your selected filters. Filters have been cleared.
            </p>
          )}
        </div>
      </section>

      {/* Pagination controls */}
      <Pagination className="gap-5">
        <PaginationPrevious
          onClick={() => handlePageChange(currentPage - 1)}
          className={currentPage === 1 ? "hidden" : ""}
        />
        <PaginationNext
          onClick={() => handlePageChange(currentPage + 1)}
          className={currentPage === totalPages ? "hidden" : ""}
        />
      </Pagination>

      {/* Projects List */}
      <section className="my-8">
        <div className={"grid md:grid-cols-1 xl:grid-cols-2 gap-8"}>
          {currentProjects.map((project, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>

                <div
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2",
                    {
                      "md:grid-cols-2": open,
                    }
                  )}
                >
                  <div>
                    <p className="font-semibold">Languages:</p>
                    <ul className="list-disc pl-4 mb-4">
                      {project.languages.map((language, idx) => (
                        <li key={idx} className="text-gray-600">
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.frameworks && (
                    <div>
                      <p className="font-semibold">Frameworks:</p>
                      <ul className="list-disc pl-4 mb-4">
                        {project.frameworks.map((tech, idx) => (
                          <li key={idx} className="text-gray-600">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && (
                    <div>
                      <p className="font-semibold">Technologies:</p>
                      <ul className="list-disc pl-4 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <li key={idx} className="text-gray-600">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Optional links */}
              <div className="flex justify-center items-center">
                {project.liveLink && (
                  <Button
                    variant="link"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    View Live Website
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    variant="link"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    View GitHub Repo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PastProjectsPage;
