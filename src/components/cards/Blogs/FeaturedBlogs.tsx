import { Button } from "@/components/ui/button";
import { blogs } from "@/lib/constants/blog-posts";
import { featuredArray } from "@/lib/utils/sort";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import FeaturedBlogCard from "./FeaturedBlogCard";

const FeaturedBlogs = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToBlogs = () => {
    router.push("/blogs");
  };

  const featuredBlogs = featuredArray(blogs).splice(0, 6);

  return (
    <section className="mx-auto py-6 w-10/12 md:w-11/12">
      <h2 className="text-center">Featured Blogs</h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full">
        {featuredBlogs.map((blog, index) => (
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
