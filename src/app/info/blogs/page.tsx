"use client";

import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BpCheckbox } from "@/components/ui/checkbox-custom";
import Image from "next/image";
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
import useBetweenLargeAndXL from "@/lib/onlyLargerScreens";
import useSmallScreen from "@/lib/useSmallScreen";
import { formatDate, setSlug } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState, useCallback } from "react";
import { blogs } from "@/lib/blog-posts";

const BlogDisplayPage: FC = () => {
  const router = useRouter();
  const isSmallDevice = useSmallScreen();
  const isLargerScreen = useBetweenLargeAndXL();

  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState({
    topic: false,
    date: false,
    author: false,
  });
  const [filtersCleared, setFiltersCleared] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

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

  // Manage which collapsible is open
  const handleCollapsibleChange = (
    collapsible: "topic" | "date" | "author"
  ) => {
    setOpenCollapsible(openCollapsible === collapsible ? null : collapsible); // Toggle the collapsible or close it
  };

  const handleFilter = useCallback(() => {
    let filtered = blogs;

    // Filter by topics
    if (selectedTopics.length > 0) {
      filtered = filtered.filter((blog) =>
        blog.topics.some((topic) => selectedTopics.includes(topic))
      );
    }

    // Filter by dates
    if (selectedDates.length > 0) {
      filtered = filtered.filter((blog) => selectedDates.includes(blog.date));
    }

    // Filter by authors
    if (selectedAuthors.length > 0) {
      filtered = filtered.filter((blog) =>
        selectedAuthors.includes(blog.author)
      );
    }

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
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

      // Sort original blogs
      setFilteredBlogs(
        blogs.sort((a, b) => {
          const dateA = new Date(formatDate(a.date));
          const dateB = new Date(formatDate(b.date));

          // Compare by year
          if (dateA.getFullYear() !== dateB.getFullYear()) {
            return dateB.getFullYear() - dateA.getFullYear();
          }

          // Compare by month (if years are the same)
          if (dateA.getMonth() !== dateB.getMonth()) {
            return dateA.getMonth() - dateB.getMonth();
          }

          // Compare by day (if both year and month are the same)
          return dateA.getDate() - dateB.getDate();
        })
      );

      setTimeout(() => setNoResults(false), 4000);
    } else {
      setNoResults(false);
      // Sort filtered
      setFilteredBlogs(
        filtered.sort((a, b) => {
          const dateA = new Date(formatDate(a.date));
          const dateB = new Date(formatDate(b.date));

          // Compare by year
          if (dateA.getFullYear() !== dateB.getFullYear()) {
            return dateB.getFullYear() - dateA.getFullYear();
          }

          // Compare by month (if years are the same)
          if (dateA.getMonth() !== dateB.getMonth()) {
            return dateA.getMonth() - dateB.getMonth();
          }

          // Compare by day (if both year and month are the same)
          return dateA.getDate() - dateB.getDate();
        })
      );
    }
  }, [
    blogs,
    selectedTopics,
    selectedDates,
    selectedAuthors,
    searchQuery,
    filtersCleared,
  ]);

  const clearFilters = (e?: string) => {
    setSelectedTopics([]);
    setSelectedDates([]);
    setSelectedAuthors([]);
    setSearchQuery("");
    setOpenCollapsible(null);
    setNoResults(false);
    setFilteredBlogs(
      blogs.sort((a, b) => {
        const dateA = new Date(formatDate(a.date));
        const dateB = new Date(formatDate(b.date));

        // Compare by year
        if (dateA.getFullYear() !== dateB.getFullYear()) {
          return dateB.getFullYear() - dateA.getFullYear();
        }

        // Compare by month (if years are the same)
        if (dateA.getMonth() !== dateB.getMonth()) {
          return dateA.getMonth() - dateB.getMonth();
        }

        // Compare by day (if both year and month are the same)
        return dateA.getDate() - dateB.getDate();
      })
    );
    if (!e) {
      setFiltersCleared(true);
      setTimeout(() => setFiltersCleared(false), 4000);
    }
  };

  const dates = Array.from(new Set(blogs.map((blog) => blog.date)));
  // const authors = Array.from(new Set(blogs.map((blog) => blog.author)));

  const topicCounts: Record<string, number> = blogs.reduce((acc, blog) => {
    blog.topics.forEach((topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const dateCounts = dates.reduce((acc, date) => {
    acc[date] = blogs.filter((blog) => blog.date === date).length;
    return acc;
  }, {} as Record<string, number>);

  // const authorCounts = authors.reduce((acc, author) => {
  //   acc[author] = blogs.filter((blog) => blog.author === author).length;
  //   return acc;
  // }, {} as Record<string, number>);

  const topics = Object.keys(topicCounts).sort();

  const handleTopicChange = (updatedTopics: string[]) => {
    setSelectedTopics(updatedTopics);
  };

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  function handleOpen(dropdown: "topic" | "date" | "author") {
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

  // const handleAuthorCheckboxChange = (author: string, checked: boolean) => {
  //   if (checked) {
  //     setSelectedAuthors((prevAuthors) => [...prevAuthors, author]);
  //   } else {
  //     setSelectedAuthors((prevAuthors) =>
  //       prevAuthors.filter((t) => t !== author)
  //     );
  //   }
  //   handleOpen("author");
  // };

  const handleDateCheckboxChange = (date: string, checked: boolean) => {
    if (checked) {
      setSelectedDates([...selectedDates, date]);
    } else {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    }
    handleOpen("date");
  };

  const handleTopicClick = (topic: string) => {
    clearFilters("topic");
    if (!selectedTopics.includes(topic)) {
      const updatedTopics = [...selectedTopics, topic];
      setSelectedTopics(updatedTopics);
      handleFilter();
    }
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
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
      <section className="mb-8">
        <section className="flex flex-col lg:flex-row justify-center sm:items-end sm:space-y-4 md:gap-4">
          <div className="w-full gap-3 grid grid-cols-1 pb-5 items-start">
            {/* Topic Filter */}
            <div className="flex flex-wrap items-center">
              <Collapsible
                open={openCollapsible === "topic"}
                onOpenChange={() => handleCollapsibleChange("topic")}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center w-full">
                      <ChevronsUpDown className="h-4 w-4" />{" "}
                      <label htmlFor="topic" className="ml-2 text-lg w-full">
                        <p>Filter by Topic:</p>
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2 ml-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-start items-start w-full">
                    {topics.sort().map((topic) => (
                      <div key={topic} className="flex items-center mr-1">
                        <BpCheckbox
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
                          <p>
                            {topic}
                            <span className="ml-1 text-accent-4">
                              ({topicCounts[topic]})
                            </span>
                          </p>
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
                open={openCollapsible === "date"}
                onOpenChange={() => handleCollapsibleChange("date")}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center w-full">
                      <ChevronsUpDown className="h-4 w-4" />
                      <label htmlFor="topic" className="ml-2 text-lg w-full">
                        <p>Filter by Date:</p>
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2 ml-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-start items-start w-full">
                    {dates
                      .sort((a, b) => {
                        // Convert the date strings to Date objects
                        const dateA = new Date(formatDate(a));
                        const dateB = new Date(formatDate(b));

                        // Compare by year
                        if (dateA.getFullYear() !== dateB.getFullYear()) {
                          return dateA.getFullYear() - dateB.getFullYear();
                        }

                        // Compare by month (if years are the same)
                        if (dateA.getMonth() !== dateB.getMonth()) {
                          return dateA.getMonth() - dateB.getMonth();
                        }

                        return dateA.getDate() - dateB.getDate();
                      })
                      .map((date) => (
                        <div key={date} className="flex items-center mr-1">
                          <BpCheckbox
                            checked={selectedDates.includes(date)}
                            onChange={(e) =>
                              handleDateCheckboxChange(date, e.target.checked)
                            }
                          />
                          <label
                            htmlFor={date}
                            className={`ml-2 flex items-center ${
                              selectedDates.includes(date)
                                ? "font-bold text-accent-2"
                                : ""
                            }`}
                            onClick={() => handleOpen("date")}
                          >
                            <p>
                              {" "}
                              {date}{" "}
                              <span className="ml-1 text-accent-4">
                                ({dateCounts[date]})
                              </span>
                            </p>
                          </label>
                        </div>
                      ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Author Filter */}
            {/* <div className="flex flex-wrap items-center">
              <Collapsible
                open={openCollapsible === "author"}
                onOpenChange={() => handleCollapsibleChange("author")}
                className="w-full space-y-2"
              >
                <div className="flex items-center justify-between space-x-4">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center w-full">
                      <ChevronsUpDown className="h-4 w-4" />
                      <label htmlFor="author" className="ml-2 text-lg w-full">
                        <p>Filter by Author:</p>
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2 ml-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-start items-start w-full">
                    {authors.sort().map((author) => (
                      <div key={author} className="flex items-center mr-1">
                        <BpCheckbox
                          className={theme === "dark" ? "text-foreground" : ""}
                          checked={selectedAuthors.includes(author)}
                          onChange={(e) =>
                            handleAuthorCheckboxChange(author, e.target.checked)
                          }
                        />
                        <label
                          htmlFor={author}
                          className={`ml-2 flex items-center ${
                            selectedDates.includes(author)
                              ? "font-bold text-accent-2"
                              : ""
                          }`}
                          onClick={() => handleOpen("date")}
                        >
                          <p>
                            {" "}
                            {author}{" "}
                            <span className="ml-1 text-accent-4">
                              ({authorCounts[author]})
                            </span>
                          </p>
                        </label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div> */}
          </div>
        </section>

        {/* Search Bar */}
        <section className="flex pb-5">
          <Input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-border rounded w-11/12 md:w-full mx-auto md:h-12 lg:h-14 md:text-md lg:text-xl placeholder:text-accent-2"
          />
        </section>

        <section className="w-11/12 md:w-full mx-auto flex flex-row gap-10 justify-center md:justify-between ">
          {/* Clear Filters Button */}
          <Button
            variant={"destructive"}
            className="mt-9 md:my-5"
            onClick={() => clearFilters()}
            size={isSmallDevice ? "sm" : "default"}
          >
            Clear Filters
          </Button>

          {/* Articles per page DropdownMenu */}
          <section className="flex flex-col md:flex-row md:justify-end items-center">
            <label htmlFor="articlesPerPage" className="mr-2">
              <p>Articles per page:</p>
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 bg-muted text-sm md:text-md lg:text-lg rounded px-5">
                  {articlesPerPage} articles per page
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(10)}
                  className="md:text-md lg:text-lg px-3"
                >
                  10 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(15)}
                  className="md:text-md lg:text-lg px-3"
                >
                  15 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(25)}
                  className="md:text-md lg:text-lg px-3"
                >
                  25 articles per page
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleArticlesPerPageChange(50)}
                  className="md:text-md lg:text-lg px-3"
                >
                  50 articles per page
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        </section>

        <section className="h-12 p-1">
          {/* Confirmation Text for Filters Cleared */}
          <div className="my-4 text-center">
            {filtersCleared && (
              <p className="text-destructive font-extrabold m-0 p-0">
                Filters have been cleared successfully!
              </p>
            )}
          </div>

          {/* No results warning */}
          <div className="my-4 text-center">
            {noResults && (
              <p className="text-destructive font-extrabold m-0 p-0">
                No blogs match your selected filters. Filters have been cleared.
              </p>
            )}
          </div>
        </section>
      </section>

      {/* Pagination controls */}
      <Pagination className="gap-5 flex items-center">
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
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:flex-row">
          {currentArticles.map((blog, index) => (
            <Card
              key={index}
              className="border-2 border-transparent dark:hover:border-border rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                {blog.img !== "" && (
                  <Image
                    src={blog.img}
                    width={500}
                    height={300}
                    alt={blog.title}
                    className="w-full h-36 rounded-t-md object-cover mx-auto mb-1"
                  />
                )}
                <div className="px-4 pb-2 flex flex-col justify-between h-[20em] md:h-[25em] 2xl:h-[35em] relative">
                  <div>
                    <p>
                      <Button
                        variant="ghost"
                        className="text-primary underline underline-offset-2 px-0 mt-5 mb-2 font-SofiaSans tracking-wider font-bold hover:bg-transparent hover:text-primary hover:no-underline text-wrap text-left text-md md:text-lg lg:text-xl 2xl:text-2xl"
                        onClick={() => {
                          router.push(`/info/blogs/${setSlug(blog.title)}`);
                        }}
                      >
                        {blog.title}
                      </Button>
                    </p>
                    <p className="mb-0 text-sm md:text-lg lg:text-lg">
                      <strong className="text-foreground">By:</strong>{" "}
                      {blog.author}
                    </p>
                    <p className="mt-0">
                      <span className="italic text-sm lg:text-lg">
                        {blog.date}
                      </span>
                    </p>
                    <p className="py-4">{blog.excerpt}</p>
                  </div>

                  {isSmallDevice ? null : isLargerScreen ? (
                    <div className="mt-4 flex flex-col bottom-2 absolute md:text-md lg:text-lg">
                      {blog.topics.length > 0 && (
                        <div className="mt-6">
                          {blog.topics.sort().map((topic, index) => (
                            <Badge
                              key={index}
                              variant={"secondary"}
                              className="mr-2 cursor-pointer"
                              onClick={() => handleTopicClick(topic)}
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-4 absolute bottom-4 md:text-md lg:text-lg">
                      {blog.topics.length > 0 && (
                        <div className="mt-6 gap-2 flex flex-wrap">
                          {blog.topics.sort().map((topic, index) => (
                            <Badge
                              key={index}
                              variant={"secondary"}
                              className="mr-2 cursor-pointer"
                              onClick={() => handleTopicClick(topic)}
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pagination controls */}
      <Pagination className="gap-5 flex items-center">
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
