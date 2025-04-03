import { BlogPost } from "@/lib/interfaces";
import { setSlug } from "@/lib/utils";
import Image from "next/image";
import router from "next/router";
import { title } from "process";
import { useState, useEffect } from "react";

interface BlogCardProps {
  blog: BlogPost;
  isSmallScreen: boolean;
}

const BlogCard = ({ blog, isSmallScreen }: BlogCardProps) => {
  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${setSlug(blog.title)}`);

        if (!response.ok) {
          throw new Error("Blog post not found");
        }
        const data = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    fetchBlog();
    checkFileExist(setSlug(title) as string);
  }, [title, router]);

  /**
   * Asynchronously checks if a file exists based on the provided slug.
   *
   * This function constructs a file path using the given slug, encodes the file name,
   * and attempts to fetch the file from the server. If the file is found, it sets the
   * file name and updates the state to indicate the file exists. If the file is not found,
   * it updates the state to indicate the file does not exist.
   *
   * @param {string} slug - The slug used to construct the file path.
   * @returns {Promise<void>} - A promise that resolves when the file existence check is complete.
   */
  const checkFileExist = async (slug: string): Promise<void> => {
    // Check if the file exists
    try {
      const fileName = `/images/blog_images/${slug}-1.jpg`;
      setFileName(fileName);
      console.log(fileName);
      const encodedFileName = encodeURIComponent(fileName); // Ensure the filename is properly encoded
      const fileResponse = await fetch(encodedFileName);
      if (!fileResponse.ok) {
        throw new Error("Image not found");
      }

      const data = await fileResponse.json();
      console.log("data", data);

      if (!fileResponse.ok) {
        throw new Error("Image not found");
      }

      setFileExists(true);
    } catch (err: any) {
      setFileExists(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="relative w-full h-full flex flex-col justify-end overflow-hidden rounded-2xl pt-80 sm:pt-48 lg:pt-80 bg-gradient-to-t from-white from-5% via-white via-15% to-transparent to-100% group hover:underline">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={`/images/blog_card_images/${setSlug(blog.title)}.jpg`}
          alt={blog.title}
          className="w-full h-full object-cover"
          layout="fill"
        />
      </div>
      <div className="w-full h-full px-9 py-5 z-20">
        <h3 className="mt-3 text-lg font-semibold text-background z-10 group-hover:underline underline-offset-4">
          <a href={`/blogs/${blog.title}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </a>
        </h3>
        <p className="text-sm text-background z-10">{blog.excerpt}</p>
      </div>
    </article>
  );
};

export default BlogCard;
