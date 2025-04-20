import { Card } from "@/components/ui/card";
import { BlogPost } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedBlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border rounded-lg transition-shadow">
      <Link href={`/blogs/${setSlug(blog.title)}`} className="group">
        <Image
          src={`/images/blog_card_images/${setSlug(blog.title)}.jpg`}
          width={500}
          height={300}
          alt={blog.title}
          className="mx-auto mb-1 rounded-t-md w-full h-40 md:h-52 xl:h-64 object-cover object-center"
        />
        <div className="relative flex flex-col justify-between px-4 pb-2 h-fit md:h-[20rem] lg:h-[25em]">
          <div>
            <h3 className="underline-offset-2 group-hover:underline decoration-1">
              {blog.title}
            </h3>

            <p className="md:text-[15px] lg:text-[18px] 2xl:text-[20px] leading-6 line-clamp-4 xl:line-clamp-9">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
