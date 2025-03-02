import { BlogCardProps } from "@/lib/interfaces";
import { setSlug } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const BlogCard = ({ blog, isSmallScreen }: BlogCardProps) => {
  const router = useRouter();

  return (
    <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col justify-between">
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
  );
};

export default BlogCard;
