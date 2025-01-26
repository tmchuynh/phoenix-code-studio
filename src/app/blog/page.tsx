"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { blogs } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BlogDisplayPage: FC = () => {
  const router = useRouter();
  const { open } = useSidebar();
  const [topicIsOpen, setTopicIsOpen] = useState(false);
  const [dateIsOpen, setDateIsOpen] = useState(false);

  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState({
    topic: false,
    date: false,
  });
  const [filtersCleared, setFiltersCleared] = useState(false);

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

  const handleFilter = () => {
    let filtered = blogs;

    if (selectedTopics.length > 0) {
      filtered = filtered.filter((blog) =>
        blog.topics.some((topic) => selectedTopics.includes(topic))
      );
    }

    if (selectedDates.length > 0) {
      filtered = filtered.filter((blog) => selectedDates.includes(blog.date));
    }

    if (filtered.length === 0) {
      if (filtersCleared) {
        setTimeout(() => setNoResults(true), 2500);
      } else {
        setNoResults(true);
        setTimeout(() => {
          setSelectedTopics([]);
          setSelectedDates([]);
        }, 1000);
      }
      setFilteredBlogs(blogs);
      setTimeout(() => setNoResults(false), 4000);
    } else {
      setNoResults(false);
      setFilteredBlogs(filtered);
    }
  };

  const clearFilters = () => {
    setSelectedTopics([]);
    setSelectedDates([]);
    setNoResults(false);
    setFiltersCleared(true);
    setFilteredBlogs(blogs);
    setTimeout(() => setFiltersCleared(false), 4000);
  };

  const topics = Array.from(new Set(blogs.flatMap((blog) => blog.topics)));
  const dates = Array.from(new Set(blogs.map((blog) => blog.date)));

  const handleTopicChange = (updatedTopics: string[]) => {
    setSelectedTopics(updatedTopics);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedTopics, selectedDates]);

  function handleOpen(dropdown: "topic" | "date") {
    setDropdownOpen({
      ...dropdownOpen,
      [dropdown]: !dropdownOpen[dropdown],
    });
  }

  const handleTopicCheckboxChange = (topic: string, checked: boolean) => {
    if (checked) {
      handleTopicChange([...selectedTopics, topic]);
    } else {
      handleTopicChange(selectedTopics.filter((t) => t !== topic));
    }
    handleOpen("topic");
  };

  const handleDateCheckboxChange = (date: string, checked: boolean) => {
    if (checked) {
      setSelectedDates([...selectedDates, date]);
    } else {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    }
    handleOpen("date");
  };

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Our Latest Blogs</h1>
      <p className="text-center text-lg mt-4">
        Stay up-to-date with our latest insights and trends in web development.
      </p>

      {/* Filter Options */}
      <section className="mb-8">
        <section
          className={cn(
            "flex flex-col lg:flex-row justify-center sm:items-end sm:space-y-4 md:gap-4",
            {
              "md:items-center lg:items-end lg:flex-row": open,
            }
          )}
        >
          <div
            className={cn("w-full gap-3 grid grid-cols-1 pb-5 items-start", {
              "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1": open,
            })}
          >
            {/* Topic Filter */}
            <div className="flex flex-wrap items-center">
              <Collapsible
                open={topicIsOpen}
                onOpenChange={setTopicIsOpen}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center w-full">
                      <ChevronsUpDown className="h-4 w-4" />
                      <label htmlFor="topic" className="ml-2 text-lg w-full">
                        Filter by Topic:
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div
                    className={cn(
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start items-start w-full",
                      {
                        "lg:grid-cols-1": open,
                      }
                    )}
                  >
                    {topics.sort().map((topic) => (
                      <div key={topic} className="flex items-center mr-1">
                        <Checkbox
                          checked={selectedTopics.includes(topic)}
                          onChange={(e) =>
                            handleTopicCheckboxChange(topic, e.target.checked)
                          }
                        />
                        <label
                          htmlFor={topic}
                          className="ml-2"
                          onClick={() => handleOpen("topic")}
                        >
                          {topic}
                        </label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Date Filter */}
            <div className="flex flex-wrap items-center">
              <Collapsible
                open={dateIsOpen}
                onOpenChange={setDateIsOpen}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center w-full">
                      <ChevronsUpDown className="h-4 w-4" />
                      <label htmlFor="topic" className="ml-2 text-lg w-full">
                        Filter by Date:
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div
                    className={cn(
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start items-start w-full",
                      {
                        "lg:grid-cols-1": open,
                      }
                    )}
                  >
                    {dates
                      .sort((a, b) => {
                        // Convert the date strings to Date objects
                        const dateA = new Date(a);
                        const dateB = new Date(b);

                        // Compare the dates by their timestamp (milliseconds)
                        return dateA.getTime() - dateB.getTime();
                      })
                      .map((date) => (
                        <div key={date} className="flex items-center mr-1">
                          <Checkbox
                            checked={selectedDates.includes(date)}
                            onChange={(e) =>
                              handleDateCheckboxChange(date, e.target.checked)
                            }
                          />
                          <label
                            htmlFor={date}
                            className="ml-2"
                            onClick={() => handleOpen("date")}
                          >
                            {date}
                          </label>
                        </div>
                      ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        <section
          className={cn(
            "w-11/12 md:w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center",
            {
              "w-10/12 md:w-11/12 md:items-start lg:items-center": open,
            }
          )}
        >
          {/* Clear Filters Button */}
          <Button
            variant={"destructive"}
            className="my-5"
            onClick={clearFilters}
          >
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
                  {articlesPerPage} articles per page
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(10)}
                >
                  10 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(15)}
                >
                  15 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(25)}
                >
                  25 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(50)}
                >
                  50 articles per page
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        </section>

        <section className="h-1 p-3">
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

      {/* Displaying filtered blog cards dynamically */}
      <section className="my-8">
        <section className="text-center my-4">
          <p className="text-lg">
            Showing {indexOfFirstArticle + 1} to{" "}
            {indexOfLastArticle > filteredBlogs.length
              ? filteredBlogs.length
              : indexOfLastArticle}{" "}
            of {filteredBlogs.length} blogs
          </p>
        </section>
        <div
          className={cn(
            "flex flex-col xl:grid xl:grid-cols-3 2xl:flex-row gap-8",
            {
              "lg:grid lg:grid-cols-2": !open,
            },
            {
              "2xl:grid-cols-4": open,
            }
          )}
        >
          {currentArticles.map((blog, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-36 rounded-t-md object-cover border mx-auto mb-1"
                />
                <div className="px-4 pb-2 flex flex-col justify-between h-[25em]">
                  <div>
                    <Button
                      variant="ghost"
                      className="text-primary underline underline-offset-2 px-0 my-5 font-SofiaSans text-xl tracking-wider font-bold hover:bg-transparent hover:text-primary hover:no-underline text-wrap text-left"
                      onClick={() => {
                        router.push(blog.slug);
                      }}
                    >
                      {blog.title}
                    </Button>
                    <p className="mb-0">
                      <span>
                        <strong>By:</strong> {blog.author}
                      </span>
                    </p>
                    <p>
                      <span className="italic text-xs">{blog.date}</span>
                    </p>
                    <p className="text-md py-4">{blog.excerpt}</p>
                  </div>
                  <p className="text-sm mb-4">
                    <strong>Topics:</strong> {blog.topics.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDisplayPage;
