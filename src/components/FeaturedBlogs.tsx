import useSmallScreen from "@/lib/useSmallScreen";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { blogs } from "@/lib/blog-posts";
import { setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

const FeaturedBlogs = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToBlogs = () => {
    router.push("/info/blogs");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(6);

  // Filtered blogs
  const featuredBlogs = blogs
    .filter((blog) => blog.featured === true)
    .sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentBlogs = featuredBlogs.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(featuredBlogs.length / articlesPerPage);

  return (
    <section className="w-10/12 md:w-11/12 mx-auto py-6">
      <h2 className="text-center">Featured Blogs</h2>
      <Pagination className="gap-5 flex items-center pb-5">
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
          {currentBlogs.length > 0 ? (
            <p>
              Showing {indexOfFirstArticle + 1} to{" "}
              {indexOfLastArticle > featuredBlogs.length
                ? featuredBlogs.length
                : indexOfLastArticle}{" "}
              of {featuredBlogs.length} featured blogs
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
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col justify-between"
          >
            <div className="flex flex-col justify-around">
              <h3 className="font-semibold text-center h-32 flex justify-center items-center">
                {blog.title}
              </h3>
              <div>
                <h5 className="text-center text-md">
                  {blog.date.month}/{blog.date.day}/{blog.date.year}
                </h5>
                <p className="text-pretty mt-4">
                  {isSmallScreen
                    ? `${blog.excerpt.substring(0, 60)}...`
                    : `${blog.excerpt.substring(0, 360)}...`}
                </p>
              </div>
            </div>
            <Button
              variant={"accent"}
              onClick={() => {
                router.push(`/info/blogs/${setSlug(blog.title)}`);
              }}
              className="mt-7 w-full"
            >
              Read More
            </Button>
            <div className="justify-between pt-6 hidden md:flex">
              {blog.icons.map((icon, iconIndex) => (
                <Image
                  key={iconIndex}
                  src={`/images/blog_icons/${icon}`}
                  width={30}
                  height={30}
                  alt={`${icon}-Icon`}
                  className="mr-2 w-8 h-8"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          variant={theme === "dark" ? "outline" : "tertiary"}
          className="w-1/2 my-3"
          onClick={navigateToBlogs}
        >
          Read Our Blogs
        </Button>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
