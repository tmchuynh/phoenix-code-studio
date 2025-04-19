"use client";

import BlogCard from "@/components/cards/Blogs/BlogCard";
import LoadingIndicator from "@/components/states/Loading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogs } from "@/lib/blog-posts";
import { IconDisplay } from "@/lib/IconDisplay";
import { AlertContentType } from "@/lib/types";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, parseReadingTimeToSeconds, sortBlogsByDate } from "@/lib/utils";
import {
  lengthCount,
  readingLength,
  topicCounts,
  topics,
} from "@/lib/utils/sort";
import { ChevronsUpDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";

const BlogDisplayPage: FC = () => {
  const router = useRouter();
  const isSmallDevice = useSmallScreen();
  const isMediumDevice = useMediumScreen();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(sortBlogsByDate(blogs));
  const [selectedLength, setSelectedLength] = useState<string[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const [showGettingStartedCheckboxes, setShowGettingStartedCheckboxes] =
    useState(false);

  const [dropdownOpen, setDropdownOpen] = useState({
    topic: false,
    author: false,
  });
  const [filtersCleared, setFiltersCleared] = useState(false);

  /**
   * Determines the content of an alert based on the state of filters and search results.
   *
   * @constant
   * @type {AlertContentType}
   * @param {boolean} filtersCleared - Indicates whether the filters have been cleared.
   * @param {boolean} noResults - Indicates whether there are no results matching the selected filters.
   * @returns {AlertContentType | null} The content of the alert to be displayed.
   *
   * @property {string} title - The title of the alert.
   * @property {string} description - The description of the alert.
   * @property {React.ComponentType} icon - The icon to be displayed in the alert.
   * @property {string} type - The type of the alert, either "filter" or "results".
   */
  const alertContent: AlertContentType = filtersCleared
    ? {
        title: "Filters Cleared",
        description: "You can now start a new search or modify your filters.",
        icon: FaFilterCircleXmark,
        type: "filter",
      }
    : noResults
    ? {
        title: "No Results",
        description:
          "No blogs match your selected filters. Filters have been cleared.",
        icon: GoAlertFill,
        type: "results",
      }
    : null;

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(25);

  // Calculate the indexes for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredBlogs.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle articles per page change
  const handleArticlesPerPageChange = (value: number) => {
    setArticlesPerPage(value);
    setCurrentPage(1); // Reset to the first page when articles per page changes
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredBlogs.length / articlesPerPage);

  const handleCollapsibleChange = (collapsible: "topic") => {
    switch (collapsible) {
      case "topic":
        setOpenCollapsible(
          openCollapsible === collapsible ? null : collapsible
        );
        break;

      default:
        break;
    }
  };

  const handleFilter = useCallback(() => {
    let filtered = sortBlogsByDate(blogs);

    // Filter by topics and subtopics
    if (selectedTopics.length > 0) {
      filtered = filtered.filter((blog) =>
        blog.topics.some((topic) => selectedTopics.includes(topic))
      );
    }

    // Filter by reading time
    if (selectedLength.length > 0) {
      filtered = filtered
        .filter((blog) => selectedLength.includes(blog.timeSpan))
        .sort((a, b) => {
          const aTime = parseReadingTimeToSeconds(a.time);
          const bTime = parseReadingTimeToSeconds(b.time);

          return aTime - bTime;
        });
    }

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.topics.includes(searchQuery.toLowerCase())
      );
    }

    if (filtered.length === 0) {
      if (filtersCleared) {
        setTimeout(() => setNoResults(true), 500);
      } else {
        setNoResults(true);
        setTimeout(() => {
          setSelectedTopics([]);
          setSelectedLength([]);
        }, 2050);
      }

      // Sort original blogs
      setFilteredBlogs(sortBlogsByDate(blogs));

      setTimeout(() => setNoResults(false), 3500);
    } else {
      setNoResults(false);
      setFilteredBlogs(sortBlogsByDate(filtered));
    }
  }, [blogs, selectedTopics, selectedLength, searchQuery, filtersCleared]);

  function handleOpen(dropdown: "topic") {
    setDropdownOpen({
      ...dropdownOpen,
      [dropdown]: !dropdownOpen[dropdown],
    });
  }

  const handleTopicCheckboxChange = (
    topic: string,
    checked?: boolean | string
  ) => {
    setFiltersCleared(false);
    if (checked) {
      setSelectedTopics([...selectedTopics, topic]);
      if (topic === "Getting Started") {
        setShowGettingStartedCheckboxes(true);
      } else {
        setShowGettingStartedCheckboxes(false);
      }
    } else {
      setShowGettingStartedCheckboxes(false);
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    }
    handleOpen("topic");
    handleFilter();
  };

  /**
   * Handles the click event for selecting a reading length filter.
   * Clears the existing reading length filter, updates the selected lengths,
   * and triggers the filter handling function.
   *
   * @param {string} length - The reading length to be added to the selected lengths.
   */
  const handleReadingLengthClick = (length: string) => {
    clearFilters("readingLength");
    setFiltersCleared(false);
    if (!selectedLength.includes(length)) {
      const updatedLength = [...selectedLength, length];
      setSelectedLength(updatedLength);
      handleFilter();
    }
  };

  const handleSelectAllSubtopics = (checked: boolean | string) => {
    if (checked) {
      setSelectedTopics((prev) => [...prev, "Getting Started"]);
    } else {
      setSelectedTopics((prev) => prev.filter((t) => t !== "Getting Started"));
    }
    handleFilter();
  };

  const clearFilters = (e?: string) => {
    setSelectedTopics([]);
    setSelectedLength([]);
    setSearchQuery("");
    setOpenCollapsible(null);
    setNoResults(false);
    setFilteredBlogs(sortBlogsByDate(blogs));
    if (!e) {
      setFiltersCleared(true);
      setTimeout(() => setFiltersCleared(false), 3500);
    }
  };

  useEffect(() => {
    if (theme) {
      setTheme(theme);
      setIsMounted(true);
    }

    // Call handleFilter directly instead of using the hook inside useEffect
    handleFilter();
  }, [handleFilter, theme]);

  if (!isMounted) {
    return <LoadingIndicator />;
  }

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>Phoenix Code Studio Blogs</h1>
      <p className="mt-4">
        Stay ahead in the ever-evolving world of web development, UX design, and
        digital strategy with expert insights, cutting-edge trends, and
        actionable best practices. Whether you’re looking to optimize
        performance, boost conversions, or leverage emerging technologies, our
        content provides practical solutions to enhance your online presence,
        user engagement, and business growth.
      </p>
      <p>
        Explore a wealth of industry updates, innovative strategies, and expert
        tips designed to keep you competitive, informed, and inspired. From
        conversion-driven design to SEO optimization and user experience
        enhancements, our blogs equip you with the knowledge to build for the
        future. Stay informed, stay inspired, and stay ahead with Phoenix Code
        Studio.
      </p>

      {/* Filter Options */}
      <section className="relative mb-8">
        <section className="flex lg:flex-row flex-col justify-center sm:items-end md:gap-4 sm:space-y-4">
          <div className="items-start gap-3 grid grid-cols-1 pb-5 w-full">
            {/* Topic Filter */}
            <div className="flex flex-wrap items-center">
              <Collapsible
                open={openCollapsible === "topic"}
                onOpenChange={() => handleCollapsibleChange("topic")}
                className="space-y-2 w-full"
              >
                <div className="flex justify-between items-center space-x-4">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center w-full">
                      <ChevronsUpDown className="w-4 h-4" />{" "}
                      <label htmlFor="topic" className="ml-2 w-full text-lg">
                        <p>Filter by Topic:</p>
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2 ml-5">
                  <div className="justify-start items-start grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full">
                    {topics.map((topic) => {
                      if (topic === "Getting Started") {
                        return (
                          <div key={topic} className="flex flex-col">
                            <div className="flex items-center mr-1">
                              <Checkbox
                                id={topic}
                                checked={selectedTopics.includes(topic)}
                                onCheckedChange={(checked) =>
                                  setShowGettingStartedCheckboxes(
                                    !showGettingStartedCheckboxes
                                  )
                                }
                              />
                              <label htmlFor={topic} className="ml-2">
                                <p>
                                  {topic}
                                  <span className="ml-1 text-accent">
                                    ({topicCounts[topic]})
                                  </span>
                                </p>
                              </label>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={topic} className="flex items-center mr-1">
                            <Checkbox
                              id={topic}
                              checked={selectedTopics.includes(topic)}
                              onCheckedChange={(checked) =>
                                handleTopicCheckboxChange(topic, checked)
                              }
                            />
                            <label htmlFor={topic} className="ml-2">
                              <p>
                                {topic}
                                <span className="ml-1 text-accent">
                                  ({topicCounts[topic]})
                                </span>
                              </p>
                            </label>
                          </div>
                        );
                      }
                    })}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="flex pb-5">
          <Input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mx-auto p-2 border border-border rounded w-11/12 md:w-full md:h-12 lg:h-14 md:text-md lg:text-xl placeholder:text-accent"
          />
        </section>

        {/* Reading Length Times */}
        <section
          className={cn(
            "grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-4 md:gap-2 lg:gap-4",
            isSmallDevice && "w-11/12 mx-auto"
          )}
        >
          {readingLength
            .sort((a, b) => {
              if (a.length === b.length) {
                return b.localeCompare(a);
              }
              return a.length - b.length;
            })
            .map((length, index) => (
              <Button
                variant={theme === "dark" ? "accent" : "outline"}
                size={isMediumDevice ? "sm" : "default"}
                className="capitalize"
                key={index}
                onClick={() => handleReadingLengthClick(length)}
              >
                {length} Articles{" "}
                <small className="font-normal">({lengthCount[length]})</small>
              </Button>
            ))}
        </section>

        <section className="flex md:flex-row flex-col justify-center md:justify-between gap-2 mx-auto w-11/12 md:w-full">
          {/* Articles per page DropdownMenu */}
          <section className="flex flex-col md:justify-end items-center mt-4">
            <label htmlFor="articlesPerPage" className="mr-2">
              <p>Articles per page:</p>
            </label>
            <DropdownMenu className="w-full">
              <DropdownMenuTrigger className="w-full">
                <div className="bg-muted px-5 p-2 rounded text-sm md:text-md lg:text-lg">
                  {articlesPerPage} articles per page
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(15)}
                  className="px-3 md:text-md lg:text-lg"
                >
                  15 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(25)}
                  className="px-3 md:text-md lg:text-lg"
                >
                  25 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(50)}
                  className="px-3 md:text-md lg:text-lg"
                >
                  50 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(75)}
                  className="px-3 md:text-md lg:text-lg"
                >
                  75 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(100)}
                  className="px-3 md:text-md lg:text-lg"
                >
                  100 articles per page
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          {/* Clear Filters Button */}
          <Button
            variant={"destructive"}
            className="md:mt-16"
            onClick={() => clearFilters()}
            size={isSmallDevice ? "sm" : "default"}
          >
            Clear Filters
          </Button>
        </section>

        {alertContent && (
          <section className="md:left-1/4 2xl:left-1/4 xl:left-[12em] z-10 absolute p-1 md:w-1/2 2xl:w-1/2 xl:w-3/4 h-24">
            <div className="my-4 md:my-0">
              <Alert
                className="flex items-center space-x-3 xl:space-x-9 xl:px-11"
                variant={
                  alertContent.type === "results" ? "warning" : "tertiary"
                }
              >
                <IconDisplay Icon={alertContent.icon} />
                <div>
                  <AlertTitle>{alertContent.title}</AlertTitle>
                  <AlertDescription>
                    {alertContent.description}
                  </AlertDescription>
                </div>
              </Alert>
            </div>
          </section>
        )}
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
        {!isSmallDevice && (
          <section className="text-center">
            {indexOfLastArticle >= filteredBlogs.length && totalPages === 1 ? (
              filteredBlogs.length === blogs.length ? (
                <p>Showing all {filteredBlogs.length} blogs</p>
              ) : (
                <p>Showing all {filteredBlogs.length} filtered blogs</p>
              )
            ) : (
              <p>
                Showing {indexOfFirstArticle + 1} to{" "}
                {indexOfLastArticle > filteredBlogs.length
                  ? filteredBlogs.length
                  : indexOfLastArticle}{" "}
                of {filteredBlogs.length} blogs
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

      {/* Displaying filtered blog cards dynamically */}
      <section className="my-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          {currentArticles.map((blog, index) => (
            <BlogCard
              blog={blog}
              index={index}
              key={index}
              clearFilters={clearFilters}
              setFiltersCleared={setFiltersCleared}
              selectedTopics={selectedTopics}
              setSelectedTopics={setSelectedTopics}
              handleFilter={handleFilter}
            />
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
        {!isSmallDevice && (
          <section className="text-center">
            {indexOfLastArticle >= filteredBlogs.length && totalPages === 1 ? (
              filteredBlogs.length === blogs.length ? (
                <p>Showing all {filteredBlogs.length} blogs</p>
              ) : (
                <p>Showing all {filteredBlogs.length} filtered blogs</p>
              )
            ) : (
              <p>
                Showing {indexOfFirstArticle + 1} to{" "}
                {indexOfLastArticle > filteredBlogs.length
                  ? filteredBlogs.length
                  : indexOfLastArticle}{" "}
                of {filteredBlogs.length} blogs
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

export default BlogDisplayPage;
