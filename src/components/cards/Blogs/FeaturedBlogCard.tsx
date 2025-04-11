import { BlogPost } from "@/lib/interfaces";
import { setSlug } from "@/lib/utils";
import Image from "next/image";

export default function FeaturedBlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group relative flex flex-col justify-end bg-gradient-to-t from-5% from-foreground via-15% via-foreground to-100% to-transparent pt-80 sm:pt-48 lg:pt-80 rounded-2xl w-full h-full hover:underline overflow-hidden">
      <div className="-z-10 absolute inset-0 w-full h-full">
        <Image
          src={`/images/blog_card_images/${setSlug(blog.title)}.jpg`}
          alt={blog.title}
          className="w-full h-full object-cover"
          layout="fill"
        />
      </div>
      <div className="z-20 px-9 py-5 w-full h-full">
        <h3 className="z-10 mt-3 font-semibold text-background text-lg underline-offset-4 group-hover:underline">
          <a href={`/blogs/${blog.title}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </a>
        </h3>
        <p className="z-10 text-background text-sm">{blog.excerpt}</p>
      </div>
    </article>
  );
}
