import BlogCard from "@/components/BlogCard";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogs } from "@/lib/blog-posts";
import { BlogPost } from "@/lib/interfaces";
import usePagination from "@/lib/usePagination";
import useSmallScreen from "@/lib/useSmallScreen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const FeaturedBlogs = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToBlogs = () => {
    router.push("/info/blogs");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(6);

  const featuredBlogs = blogs
    .filter((blog) => blog.featured === true)
    .sort((a, b) => a.title.localeCompare(b.title));

  const { currentItems: currentBlogs, totalPages } = usePagination(
    featuredBlogs,
    currentPage,
    articlesPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
              Showing {currentPage * articlesPerPage - articlesPerPage + 1} to{" "}
              {currentPage * articlesPerPage > featuredBlogs.length
                ? featuredBlogs.length
                : currentPage * articlesPerPage}{" "}
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
        {currentBlogs.map((blog: BlogPost, index: number) => (
          <BlogCard
            key={index}
            blog={{ ...blog, icons: blog.icons || [] }}
            isSmallScreen={isSmallScreen}
          />
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
