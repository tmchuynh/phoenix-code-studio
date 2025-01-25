"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { TopicFilterProps } from "@/lib/interfaces";
import { blogs } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Checkbox,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const BlogDisplayPage: FC = () => {
  const router = useRouter();
  const { open } = useSidebar();

  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState({
    topic: false,
    date: false,
  });
  const [filtersCleared, setFiltersCleared] = useState(false);

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

  function handleMouseLeave() {
    setDropdownOpen({
      ...dropdownOpen,
      topic: false,
      date: false,
    });
  }

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
      <p className="text-center text-lg my-4">
        Stay up-to-date with our latest insights and trends in web development.
      </p>

      {/* Filter Options */}
      <section className="my-8">
        <div className="h-40 md:h-32 lg:h-20 flex flex-col justify-between relative">
          {/* Confirmation Text for Filters Cleared */}
          {filtersCleared && (
            <div className="mt-4 text-center h-14">
              <p className="text-secondary m-0 p-0">
                Filters have been cleared successfully!
              </p>
            </div>
          )}

          {/* No results warning */}
          {noResults && (
            <div className="mt-4 text-center h-14">
              <p className="text-destructive m-0">
                No blogs match your selected filters. Filters have been cleared.
              </p>
            </div>
          )}

          {/* Clear Filters Button */}
          <Button
            variant={"destructive"}
            className="my-4 absolute bottom-4"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </div>

        <div
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
            <div className="flex flex-wrap items-center">
              <label htmlFor="topic" className="mr-2 text-lg w-full">
                Filter by Topic:
              </label>
              {/* Topic Filter */}
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start items-start w-full",
                  {
                    "lg:grid-cols-1": open,
                  }
                )}
              >
                {topics.map((topic) => (
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
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleOpen("topic")}
                    >
                      {topic}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center">
              <label htmlFor="date" className="mr-2 text-lg w-full">
                Filter by Date:
              </label>
              {/* Date Filter */}
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start items-start w-full",
                  {
                    "lg:grid-cols-1": open,
                  }
                )}
              >
                {dates.map((date, index) => (
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
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleOpen("date")}
                    >
                      {date}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Displaying filtered blog cards dynamically */}
      <section className="my-8">
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
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="mb-0">
                  <span className="font-semibold">By {blog.author}</span>
                </p>
                <p>
                  <span className="italic">{blog.date}</span>
                </p>
                <p className="text-lg mb-4">{blog.excerpt}</p>
                <p className="text-sm mb-4">Topics: {blog.topics.join(", ")}</p>
              </div>
              <Button
                variant="link"
                className="text-primary underline"
                onClick={() => {
                  router.push(blog.slug);
                }}
              >
                Read Full Article
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDisplayPage;
