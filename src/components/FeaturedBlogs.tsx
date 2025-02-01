import { blogs } from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const FeaturedBlogs = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const navigateToBlogs = () => {
    router.push("/blogs");
  };

  return (
    <section className="my-16 w-11/12 mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
        Featured Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {blogs.map(
          (blog, index) =>
            blog.featured && (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-center text-tertiary">
                    {blog.title}
                  </h3>
                  <h5 className="text-center text-md">{blog.date}</h5>
                  <p className="text-pretty mt-4">
                    {isSmallScreen
                      ? `${blog.excerpt.substring(0, 60)}...`
                      : blog.excerpt}
                  </p>
                </div>
                <Button
                  variant={"accent"}
                  onClick={() => {
                    router.push(blog.slug);
                  }}
                  className="mt-7"
                >
                  Read More
                </Button>
              </div>
            )
        )}
      </div>
      <div className="text-center mt-8">
        <Button
          variant={"tertiary"}
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
