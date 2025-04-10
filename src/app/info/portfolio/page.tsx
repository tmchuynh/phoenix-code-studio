"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import useLargeScreensOnly from "@/lib/useLargeScreensOnly";
import useSmallScreen from "@/lib/useSmallScreen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const PastProjectsPage: FC = () => {
  const isSmallScreen = useSmallScreen();
  const isLargeScreen = useLargeScreensOnly();
  const { theme } = useTheme();
  const router = useRouter();

  // Filter states
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtersCleared, setFiltersCleared] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(5);

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

  /**
   * Handles the change in the number of projects displayed per page.
   * Updates the state to reflect the new number of projects per page and
   * resets the current page to the first page.
   *
   * @param {number} value - The new number of projects to display per page.
   */
  const handleProjectsPerPageChange = (value: number) => {
    setProjectsPerPage(value);
    setCurrentPage(1); // Reset to the first page when articles per page changes
  };

  /**
   * Filters the list of past projects based on selected criteria such as languages, frameworks, technologies, libraries, and tags.
   *
   * The function applies the following filters in sequence:
   * - Languages: Filters projects that include all selected languages.
   * - Frameworks: Filters projects that include all selected frameworks.
   * - Technologies: Filters projects that include all selected technologies.
   * - Libraries: Filters projects that include all selected libraries.
   * - Tags: Filters projects that include all selected tags.
   *
   * If no projects match the selected criteria, it handles the no-results scenario by:
   * - Displaying a no-results message.
   * - Clearing all selected filters if filters were not previously cleared.
   *
   * The function updates the state with the filtered projects or resets to the original list if no results are found.
   */
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

    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTechnologies.every((technology) =>
          project.technologies?.includes(technology)
        )
      );
    }

    if (selectedLibraries.length > 0) {
      filtered = filtered.filter((project) =>
        selectedLibraries.every((library) =>
          project.libraries?.includes(library)
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
          setSelectedTechnologies([]);
          setSelectedLibraries([]);
          setSelectedTags([]);
        }, 250);
      }
      setFilteredProjects(pastProjects);
      setTimeout(() => setNoResults(false), 4000);
    } else {
      setNoResults(false);
      setFilteredProjects(filtered);
    }
  };

  /**
   * Handles the change event for checkboxes, updating the corresponding state
   * based on the type of checkbox and whether it is checked or unchecked.
   *
   * @param {string} type - The type of checkbox (e.g., "languages", "frameworks", "technologies", "libraries", "tags").
   * @param {string} value - The value of the checkbox.
   * @param {boolean} checked - The checked state of the checkbox.
   */
  const handleCheckboxChange = (
    type: string,
    value: string,
    checked: boolean
  ) => {
    switch (type) {
      case "languages":
        setSelectedLanguages((prev) =>
          checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      case "frameworks":
        setSelectedFrameworks((prev) =>
          checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      case "technologies":
        setSelectedTechnologies((prev) =>
          checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      case "libraries":
        setSelectedLibraries((prev) =>
          checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      case "tags":
        setSelectedTags((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        handleFilter();
        break;
      default:
        break;
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedFrameworks([]);
    setSelectedTags([]);
    setNoResults(false);
    setFilteredProjects(pastProjects);
    setFiltersCleared(true);
    setTimeout(() => setFiltersCleared(false), 4000);
  };

  const allLanguages = Array.from(
    new Set(pastProjects.flatMap((p) => p.languages))
  );
  const allFrameworks = Array.from(
    new Set(pastProjects.flatMap((p) => p.frameworks || []))
  );
  const allTechnologies = Array.from(
    new Set(pastProjects.flatMap((p) => p.technologies || []))
  );
  const allLibraries = Array.from(
    new Set(pastProjects.flatMap((p) => p.libraries || []))
  );
  const allTags = Array.from(
    new Set(pastProjects.flatMap((p) => p.tags || []))
  );

  useEffect(() => {
    handleFilter();
  }, [
    selectedLanguages,
    selectedFrameworks,
    selectedTags,
    selectedTechnologies,
    selectedLibraries,
  ]);

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>Explore Our Portfolio of Successful Projects</h1>
      <p>
        Discover a showcase of our best work, where innovation meets
        functionality. From custom web designs to high-performance applications,
        our portfolio highlights the expertise, creativity, and problem-solving
        approach we bring to every project. Each case study reflects a unique
        challenge and tailored solution, demonstrating our commitment to
        quality, user experience, and client satisfaction. Whether you're
        looking for inspiration or evaluating our capabilities, these projects
        showcase our ability to deliver scalable, efficient, and visually
        stunning digital experiences across industries.
      </p>
      <p>
        Take a look at our proven track record, and{" "}
        <Button
          variant={"link"}
          onClick={() => router.push("/contact-us")}
          className="m-0 p-0 h-fit"
        >
          let’s discuss how we can bring your next project to life!
        </Button>
      </p>
      <p className="text-accent-5">
        <i>Note: Click on the badges on each card to quickly filter by tag</i>
      </p>

      {/* Filter Controls */}
      {isSmallScreen ? (
        <section className="my-8">
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
            {/* Languages Filter */}
            <div>
              <h3>Filter by Languages</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 w-full">
                {allLanguages.map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "languages",
                          language,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={language}>
                      <p>{language}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks Filter */}
            <div>
              <h3>Filter by Frameworks</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 w-full">
                {allFrameworks.map((framework) => (
                  <div key={framework} className="flex items-center">
                    <input
                      type="checkbox"
                      id={framework}
                      checked={selectedFrameworks.includes(framework)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "frameworks",
                          framework,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={framework}>
                      <p>{framework}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Libraries Filter */}
            <div>
              <h3>Filter by Libraries</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 w-full">
                {allLibraries.map((library) => (
                  <div key={library} className="flex items-center">
                    <input
                      type="checkbox"
                      id={library}
                      checked={selectedLibraries.includes(library)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "libraries",
                          library,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={library}>
                      <p>{library}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Filter */}
            <div>
              <h3>Filter by Technologies</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 w-full">
                {allTechnologies.map((technology) => (
                  <div key={technology} className="flex items-center">
                    <input
                      type="checkbox"
                      id={technology}
                      checked={selectedTechnologies.includes(technology)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "technologies",
                          technology,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={technology}>
                      <p>{technology}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div>
              <h3>Filter by Tags</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 w-full">
                {allTags.map((tag) => (
                  <div key={tag} className="flex items-center">
                    <input
                      type="checkbox"
                      id={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() =>
                        handleCheckboxChange(
                          "tags",
                          tag,
                          !selectedTags.includes(tag)
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={tag}>
                      <p>{tag}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="my-8">
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
            {/* Frameworks Filter */}
            <div>
              <h3>Filter by Frameworks</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                {allFrameworks.sort().map((framework) => (
                  <div key={framework} className="flex items-center">
                    <input
                      type="checkbox"
                      id={framework}
                      checked={selectedFrameworks.includes(framework)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "frameworks",
                          framework,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={framework}>
                      <p>{framework}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Filter */}
            <div>
              <h3>Filter by Languages</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                {allLanguages.sort().map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "languages",
                          language,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={language}>
                      <p>{language}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Libraries Filter */}
            <div>
              <h3>Filter by Libraries</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                {allLibraries.sort().map((library) => (
                  <div key={library} className="flex items-center">
                    <input
                      type="checkbox"
                      id={library}
                      checked={selectedLibraries.includes(library)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "libraries",
                          library,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={library}>
                      <p>{library}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div>
              <h3>Filter by Tags</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                {allTags.sort().map((tag) => (
                  <div key={tag} className="flex items-center">
                    <input
                      type="checkbox"
                      id={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() =>
                        handleCheckboxChange(
                          "tags",
                          tag,
                          !selectedTags.includes(tag)
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={tag}>
                      <p>{tag}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Filter */}
            <div>
              <h3>Filter by Technologies</h3>
              <div className="justify-start items-start gap-x-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                {allTechnologies.sort().map((technology) => (
                  <div key={technology} className="flex items-center">
                    <input
                      type="checkbox"
                      id={technology}
                      checked={selectedTechnologies.includes(technology)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "technologies",
                          technology,
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={technology}>
                      <p>{technology}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Clear Filters Button */}
      <section className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-7 mx-auto w-11/12 md:w-full">
        <Button variant="destructive" onClick={() => clearFilters()}>
          Clear Filters
        </Button>

        {/* Articles per page DropdownMenu */}
        <section className="flex md:flex-row flex-col md:justify-end items-center">
          <label htmlFor="articlesPerPage" className="mr-2">
            <p>Projects per page:</p>
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-muted px-5 p-2 rounded text-sm md:text-md lg:text-lg">
                {projectsPerPage} projects per page
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleProjectsPerPageChange(5)}
                className="px-3 md:text-md lg:text-lg"
              >
                5 projects per page
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleProjectsPerPageChange(10)}
                className="px-3 md:text-md lg:text-lg"
              >
                10 projects per page
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleProjectsPerPageChange(15)}
                className="px-3 md:text-md lg:text-lg"
              >
                15 projects per page
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>

      <section className="p-1 h-20">
        {/* Confirmation Text for Filters Cleared */}
        <div className="my-4 text-center">
          {filtersCleared && (
            <p className="m-0 p-0 text-secondary">
              Filters have been cleared successfully!
            </p>
          )}
        </div>

        {/* No results warning */}
        <div className="my-4 text-center">
          {noResults && (
            <p className="m-0 text-destructive">
              No projects match your selected filters. Filters have been
              cleared.
            </p>
          )}
        </div>
      </section>

      {/* Pagination controls */}
      <Pagination className="flex items-center gap-5">
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
        {isSmallScreen ? null : (
          <section className="text-center">
            {indexOfLastProject >= filteredProjects.length &&
            totalPages === 1 ? (
              filteredProjects.length === pastProjects.length ? (
                <p>Showing all {filteredProjects.length} projects</p>
              ) : (
                <p>Showing all {filteredProjects.length} filtered projects</p>
              )
            ) : (
              <p>
                Showing {indexOfFirstProject + 1} to{" "}
                {indexOfLastProject > filteredProjects.length
                  ? filteredProjects.length
                  : indexOfLastProject}{" "}
                of {filteredProjects.length} projects
              </p>
            )}
          </section>
        )}
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

      {/* Projects List */}
      <section className="my-8">
        <div className="gap-8 grid md:grid-cols-1 xl:grid-cols-2">
          {currentProjects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between shadow-lg hover:shadow-xl p-2 border-2 border-transparent dark:hover:border-border rounded-lg h-full transition-shadow"
            >
              <CardContent
                className={
                  isSmallScreen
                    ? "flex flex-col-reverse h-full"
                    : "grid grid-cols-2 md:grid-cols-1 h-full p-3"
                }
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="mt-5 font-semibold">{project.name}</h2>

                    {isSmallScreen ? null : isLargeScreen ? (
                      <div>
                        {project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.tags.sort().map((tag, index) => (
                              <Badge
                                key={index}
                                variant={"secondary"}
                                className="mr-2 cursor-pointer"
                                onClick={() => {
                                  handleCheckboxChange(
                                    "tags",
                                    tag,
                                    !selectedTags.includes(tag)
                                  );
                                }}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        <div>
                          {project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                              {project.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant={"secondary"}
                                  className="mr-2 cursor-default"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    <p className="mb-4">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-2 text-sm lg:text-lg">
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

                      {project.libraries && (
                        <div>
                          <p className="font-semibold">Libraries:</p>
                          <ul>
                            {project.libraries.map((lib, idx) => (
                              <li key={idx}>{lib}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start py-3 h-fit">
                {/* Optional links */}
                <div className="flex md:flex-row flex-col md:justify-around gap-4 mx-auto md:w-full">
                  {project.liveLink && (
                    <Button
                      variant={theme === "dark" ? "tertiary" : "secondary"}
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      View Live Website
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      View GitHub Repo
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Pagination controls */}
      <Pagination className="flex items-center gap-5">
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
        {isSmallScreen ? null : (
          <section className="text-center">
            {indexOfLastProject >= filteredProjects.length &&
            totalPages === 1 ? (
              filteredProjects.length === pastProjects.length ? (
                <p>Showing all {filteredProjects.length} projects</p>
              ) : (
                <p>Showing all {filteredProjects.length} filtered projects</p>
              )
            ) : (
              <p>
                Showing {indexOfFirstProject + 1} to{" "}
                {indexOfLastProject > filteredProjects.length
                  ? filteredProjects.length
                  : indexOfLastProject}{" "}
                of {filteredProjects.length} projects
              </p>
            )}
          </section>
        )}
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
    </main>
  );
};

export default PastProjectsPage;
