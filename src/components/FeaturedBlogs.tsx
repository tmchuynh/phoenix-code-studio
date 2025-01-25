import { blogs } from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

const FeaturedBlogs = () => {
  const isSmallScreen = useSmallScreen();
  const { open } = useSidebar();
  const router = useRouter();

  const navigateToBlogs = () => {
    router.push("/blog");
  };

  return (
    <section
      className={cn("my-16 w-11/12 md:w-full mx-auto", {
        "mx-0 w-11/12": open,
      })}
    >
      <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
        Featured Blogs
      </h2>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full",
          {
            "w-11/12 mx-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2":
              open,
          }
        )}
      >
        {blogs.map(
          (blog, index) =>
            blog.featured && (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col justify-around"
              >
                <div>
                  <h3 className="text-xl font-semibold text-center text-primary">
                    {blog.title}
                  </h3>
                  <h5 className="text-center text-xs">{blog.date}</h5>
                </div>
                <p className="text-center mt-4">
                  {open ? (
                    <span className="whitespace-nowrap text-wrap overflow-hidden text-ellipsis">
                      {isSmallScreen
                        ? `${blog.excerpt.substring(0, 60)}...`
                        : blog.excerpt}
                    </span>
                  ) : (
                    <span>{blog.excerpt}</span>
                  )}
                </p>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    router.push(blog.slug);
                  }}
                >
                  Read More
                </Button>
              </div>
            )
        )}
      </div>
      <div className="text-center mt-8">
        <Button onClick={navigateToBlogs}>Read Our Blogs</Button>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
