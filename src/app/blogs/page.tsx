"use client";

import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BpCheckbox } from "@/components/ui/checkbox-custom";
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
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogs } from "@/lib/constants";
import { ChevronsUpDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const BlogDisplayPage: FC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Manage which collapsible is open
  const handleCollapsibleChange = (
    collapsible: "topic" | "date" | "author"
  ) => {
    setOpenCollapsible(openCollapsible === collapsible ? null : collapsible); // Toggle the collapsible or close it
  };

  const handleFilter = () => {
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
    setSelectedAuthors([]);
    setSearchQuery("");
    setOpenCollapsible(null);
    setNoResults(false);
    setFiltersCleared(true);
    setFilteredBlogs(blogs);
    setTimeout(() => setFiltersCleared(false), 4000);
  };

  const dates = Array.from(new Set(blogs.map((blog) => blog.date)));
  const authors = Array.from(new Set(blogs.map((blog) => blog.author)));

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

  const authorCounts = authors.reduce((acc, author) => {
    acc[author] = blogs.filter((blog) => blog.author === author).length;
    return acc;
  }, {} as Record<string, number>);

  const topics = Object.keys(topicCounts).sort();

  const handleTopicChange = (updatedTopics: string[]) => {
    setSelectedTopics(updatedTopics);
    console.log(updatedTopics);
  };

  useEffect(() => {
    handleFilter();
    console.log(blogs.map((blog) => blog.topics));
  }, [selectedTopics, selectedDates, selectedAuthors, searchQuery]);

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

  const handleAuthorCheckboxChange = (author: string, checked: boolean) => {
    if (checked) {
      setSelectedAuthors((prevAuthors) => [...prevAuthors, author]);
    } else {
      setSelectedAuthors((prevAuthors) =>
        prevAuthors.filter((t) => t !== author)
      );
    }
    handleOpen("author");
  };

  const handleDateCheckboxChange = (date: string, checked: boolean) => {
    if (checked) {
      setSelectedDates([...selectedDates, date]);
    } else {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    }
    handleOpen("date");
  };

  const handleTopicClick = (topic: string) => {
    if (!selectedTopics.includes(topic)) {
      const updatedTopics = [...selectedTopics, topic];
      setSelectedTopics(updatedTopics);
      handleFilter();
    }
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Our Latest Blogs
      </h1>
      <p className="mt-4">
        Stay informed with our latest insights, tips, and trends in web
        development. From cutting-edge technologies and design best practices to
        practical strategies for enhancing user experience and driving online
        growth, we share valuable knowledge to keep you ahead in the
        ever-evolving digital landscape. Explore expert advice, industry
        updates, and innovative ideas to elevate your web presence and achieve
        your business goals.
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
                      <ChevronsUpDown className="h-4 w-4" />
                      <label htmlFor="topic" className="ml-2 text-lg w-full">
                        Filter by Topic:
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start items-start w-full">
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
                          {topic}{" "}
                          <span className="ml-1">( {topicCounts[topic]} )</span>
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
                        Filter by Date:
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start items-start w-full">
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
                            {date}{" "}
                            <span className="ml-1">( {dateCounts[date]} )</span>
                          </label>
                        </div>
                      ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Author Filter */}
            <div className="flex flex-wrap items-center">
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
                        Filter by Author:
                      </label>
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start items-start w-full">
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
                          {author}{" "}
                          <span className="ml-1">
                            ( {authorCounts[author]} )
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="flex pb-5">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded w-11/12 md:w-full mx-auto"
          />
        </section>

        <section className="w-11/12 md:w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
          {/* Clear Filters Button */}
          <Button
            variant={"destructive"}
            className="my-5"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>

          {/* Articles per page DropdownMenu */}
          <section className="flex flex-col md:flex-row md:justify-end items-center">
            <label htmlFor="articlesPerPage" className="mr-2">
              Articles per page:
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 bg-muted text-sm rounded">
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
              <p className="text-destructive font-extrabold m-0 p-0">
                Filters have been cleared successfully!
              </p>
            )}
          </div>

          {/* No results warning */}
          <div className="mt-4 text-center">
            {noResults && (
              <p className="text-destructive font-extrabold m-0 p-0">
                No blogs match your selected filters. Filters have been cleared.
              </p>
            )}
          </div>
        </section>
      </section>

      {/* Pagination controls */}
      <Pagination className="gap-5">
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
        <section className="text-center my-4">
          {indexOfLastArticle >= filteredBlogs.length && totalPages === 1 ? (
            <p>Showing all {filteredBlogs.length} blogs</p>
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
        <div className="flex flex-col xl:grid xl:grid-cols-3 2xl:flex-row gap-8 lg:grid lg:grid-cols-2">
          {currentArticles.map((blog, index) => (
            <Card
              key={index}
              className="border-2 border-transparent dark:hover:border-border rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-36 rounded-t-md object-cover mx-auto mb-1"
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
                    <p className="mb-0 text-sm">
                      <span>
                        <strong>By:</strong> {blog.author}
                      </span>
                    </p>
                    <p className="mt-0">
                      <span className="italic text-sm">{blog.date}</span>
                    </p>
                    <p className="text-md py-4">{blog.excerpt}</p>
                  </div>
                  <p className="mb-4">
                    <strong>Topics:</strong>{" "}
                    {blog.topics.map((topic, index) => (
                      <span key={index}>
                        <Button
                          variant="link"
                          className="p-0 m-0 lowercase"
                          onClick={() => handleTopicClick(topic)}
                        >
                          {topic}
                        </Button>
                        {index !== blog.topics.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDisplayPage;
