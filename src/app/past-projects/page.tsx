"use client";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { pastProjects } from "@/lib/constants";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { FC, useState, useEffect } from "react";

const PastProjectsPage: FC = () => {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();

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
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Past Projects
      </h1>
      <p>
        Take a look at some of the projects we've had the privilege to work on.
        Each one reflects a unique challenge and solution, showcasing my
        expertise in crafting innovative, functional, and visually appealing
        designs. From dynamic websites to user-friendly applications, these
        projects highlight my commitment to delivering high-quality results that
        meet diverse client needs and goals.
      </p>

      {/* Filter Controls */}
      <section className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages Filter */}
          <div>
            <h3 className="text-lg font-semibold">Filter by Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-start items-start w-full gap-2">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-start items-start w-full gap-2">
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 justify-start items-start w-full gap-2">
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
      <section className="w-11/12 md:w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-7">
        <Button variant="destructive" onClick={clearFilters}>
          Clear Filters
        </Button>

        {/* Articles per page DropdownMenu */}
        <section className="flex flex-col md:flex-row md:justify-end items-center">
          <label htmlFor="articlesPerPage" className="mr-2">
            Projects per page:
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-sm bg-muted rounded">
                {projectsPerPage} projects per page
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(10)}>
                10 projects per page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(15)}>
                15 projects per page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(25)}>
                25 projects per page
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProjectsPerPageChange(50)}>
                50 projects per page
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
              No projects match your selected filters. Filters have been
              cleared.
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
        <section className="text-center my-4">
          <p>
            Showing {indexOfFirstProject + 1} to{" "}
            {indexOfLastProject > filteredProjects.length
              ? filteredProjects.length
              : indexOfLastProject}{" "}
            of {filteredProjects.length} projects
          </p>
        </section>
        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <Card
              key={index}
              className="border-2 border-transparent dark:hover:border-border p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
            >
              <CardContent
                className={
                  isSmallScreen
                    ? "flex flex-col-reverse h-full"
                    : "grid grid-cols-2 md:grid-cols-1 h-full p-3"
                }
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="mb-4">{project.description}</p>

                    <div className="text-sm lg:text-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2">
                      <div>
                        <p className="font-semibold">Languages:</p>
                        <ul>
                          {project.languages.map((language, idx) => (
                            <li key={idx}>{language}</li>
                          ))}
                        </ul>
                      </div>

                      {project.frameworks && (
                        <div>
                          <p className="font-semibold">Frameworks:</p>
                          <ul>
                            {project.frameworks.map((tech, idx) => (
                              <li key={idx}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.technologies && (
                        <div>
                          <p className="font-semibold">Technologies:</p>
                          <ul>
                            {project.technologies.map((tech, idx) => (
                              <li key={idx}>{tech}</li>
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
                        variant="secondary"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        View Live Website
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(project.githubLink, "_blank")
                        }
                      >
                        View GitHub Repo
                      </Button>
                    )}
                  </div>
                </div>

                {project.img && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 pt-9">
                    {isSmallScreen
                      ? project.img.map(
                          (img, index) =>
                            index === 0 && (
                              <img
                                src={`${img}`}
                                alt={project.title}
                                className="w-full h-40 my-4 object-contain"
                              />
                            )
                        )
                      : project.img.map((img, index) => (
                          <img
                            src={`${img}`}
                            alt={project.title}
                            className={
                              isMediumScreen
                                ? "w-48 h-full ml-3 object-contain mx-auto"
                                : "w-72 h-full object-contain mx-auto"
                            }
                          />
                        ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PastProjectsPage;
