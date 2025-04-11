import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogs } from "@/lib/blog-posts";
import usePagination from "@/lib/usePagination";
import useSmallScreen from "@/lib/useSmallScreen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FeaturedBlogCard from "./cards/Blogs/FeaturedBlogCard";
import { Button } from "./ui/button";

const FeaturedBlogs = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToBlogs = () => {
    router.push("/info/blogs");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const featuredBlogs = blogs
    .filter((blog) => blog.featured)
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
    <section className="mx-auto py-6 w-10/12 md:w-11/12">
      <h2 className="text-center">Featured Blogs</h2>
      <Pagination className="flex items-center gap-5 pb-5">
        <PaginationPrevious
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          variant={currentPage === 1 ? "disabled" : "outline"}
          className={
            currentPage === 1 ? "cursor-not-allowed" : "cursor-default"
          }
        />
        <section className="text-center">
          {currentBlogs.length > 0 ? (
            <p>
              Showing {currentPage * articlesPerPage - articlesPerPage + 1} to{" "}
              {Math.min(currentPage * articlesPerPage, featuredBlogs.length)} of{" "}
              {featuredBlogs.length} featured blogs
            </p>
          ) : (
            <p>No featured blogs available</p>
          )}
        </section>
        <PaginationNext
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          variant={currentPage === totalPages ? "disabled" : "outline"}
          className={
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-default"
          }
        />
      </Pagination>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full">
        {currentBlogs.map((blog, index) => (
          <FeaturedBlogCard key={index} blog={blog} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button
          variant={theme === "dark" ? "outline" : "tertiary"}
          className="my-3 w-1/2"
          onClick={navigateToBlogs}
        >
          Read Our Blogs
        </Button>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
