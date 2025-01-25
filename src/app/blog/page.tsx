"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { blogs } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  FormControl,
  InputLabel,
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
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [noResults, setNoResults] = useState(false);
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

    if (selectedDate) {
      filtered = filtered.filter((blog) => blog.date === selectedDate);
    }

    if (filtered.length === 0) {
      setNoResults(true);
      setFilteredBlogs(blogs);
      setTimeout(() => setNoResults(false), 4000);
    } else {
      setNoResults(false);
      setFilteredBlogs(filtered);
    }
  };

  const clearFilters = () => {
    setSelectedTopics([]);
    setSelectedDate("");
    setNoResults(false);
    setFiltersCleared(true);
    setFilteredBlogs(blogs);
    setTimeout(() => setFiltersCleared(false), 4000);
  };

  const topics = Array.from(new Set(blogs.flatMap((blog) => blog.topics)));
  const dates = Array.from(new Set(blogs.map((blog) => blog.date)));

  function handleTopicChange(event: SelectChangeEvent<typeof selectedTopics>) {
    const {
      target: { value },
    } = event;
    setSelectedTopics(typeof value === "string" ? value.split(",") : value);
  }

  useEffect(() => {
    handleFilter();
  }, [selectedTopics, selectedDate]);

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

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Our Latest Blogs</h1>
      <p className="text-center text-lg my-4">
        Stay up-to-date with our latest insights and trends in web development.
      </p>

      {/* Filter Options */}
      <section className="my-8">
        {/* Confirmation Text for Filters Cleared */}
        {filtersCleared && (
          <div className="my-4 text-center">
            <p className="text-secondary">
              Filters have been cleared successfully!
            </p>
          </div>
        )}

        {/* No results warning */}
        {noResults && (
          <section className="my-8 text-center">
            <p className="text-destructive">
              No blogs match your selected filters. Filters have been cleared.
            </p>
          </section>
        )}

        <div
          className={cn(
            "flex flex-col md:flex-row justify-center sm:items-end sm:space-y-4 md:gap-4",
            {
              "md:items-center lg:items-end lg:flex-row xl:flex-row": open,
            }
          )}
        >
          <div
            className={cn(
              "flex flex-col md:flex-row justify-start space-y-4 sm:space-x-4 md:space-y-0 w-full pb-5",
              {
                "md:flex-col md:space-x-0 md:space-y-4 lg:flex-row lg:space-y-0 xl:flex-row":
                  open,
              }
            )}
          >
            <div className="flex flex-wrap items-center">
              <label htmlFor="topic" className="mr-2 text-lg w-full">
                Filter by Topic:
              </label>
              {/* Topic Filter */}
              <div className="flex items-center w-full">
                <FormControl className="w-11/12">
                  <InputLabel id="demo-multiple-topic-label">
                    Select Topics
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-topic-label"
                    id="demo-multiple-topic"
                    multiple
                    value={selectedTopics}
                    onChange={(e) => {
                      handleTopicChange(e);
                      handleOpen("topic");
                    }}
                    input={<OutlinedInput label="Select Topics" />}
                    onMouseLeave={handleMouseLeave}
                    onOpen={() => handleOpen("topic")}
                    open={dropdownOpen.topic}
                  >
                    {topics.map((topic) => (
                      <MenuItem key={topic} value={topic}>
                        {topic}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="flex flex-wrap items-center">
              <label htmlFor="date" className="mr-2 text-lg w-full">
                Filter by Date:
              </label>
              {/* Date Filter */}
              <div className="flex items-center w-full">
                <FormControl className="w-11/12">
                  <InputLabel id="demo-date-select-label">
                    Select Date
                  </InputLabel>
                  <Select
                    labelId="demo-date-select-label"
                    id="demo-date-select"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      handleOpen("date");
                    }}
                    input={<OutlinedInput label="Select Date" />}
                    onMouseLeave={handleMouseLeave}
                    onOpen={() => handleOpen("date")}
                    open={dropdownOpen.date}
                  >
                    <MenuItem value="">Select Date</MenuItem>
                    {dates.map((date, index) => (
                      <MenuItem key={index} value={date}>
                        {date}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          <Button
            variant="link"
            className={cn("sm:!mb-7", {
              "md:!mb-0 lg:!mb-7": open,
            })}
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
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
              className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-500 mb-4">
                <span className="font-semibold">By {blog.author}</span> |{" "}
                <span className="italic">{blog.date}</span>
              </p>
              <p className="text-lg mb-4">{blog.excerpt}</p>
              <p className="text-sm text-gray-500 mb-4">
                Topics: {blog.topics.join(", ")}
              </p>
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
