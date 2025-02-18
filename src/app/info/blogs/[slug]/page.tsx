"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/interfaces";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LoadingIndicator from "@/components/Loading";
import Image from "next/image";
import CannotFind from "@/components/CannotFind";
import { setSlug } from "@/lib/utils";

const BlogPostPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
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

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <header>
        <h1>{post?.title}</h1>
        <div>
          <p>
            <span className="font-bold">Written By: </span>
            {post?.author}
          </p>
          <p>{post?.date}</p>
          <div className="flex space-x-2 mb-8">
            {post?.topics.map((topic, index) => {
              return (
                <Badge
                  variant={"accent"}
                  className="text-sm lowercase cursor-default"
                  key={index}
                >
                  #&thinsp;{topic}
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="pb-5 xl:pb-6 xl:flex xl:gap-x-6">
          <div>
            {post?.intro.map((intro, index) => (
              <p key={index}>{intro}</p>
            ))}
          </div>

          <Image
            src={`/images/blog_images/${setSlug(post!.title)}.jpg`}
            width={500}
            height={300}
            alt={post!.title}
            className="w-full lg:h-[30em] object-contain mx-auto object-center mt-4 xl:mt-0"
          />
        </div>
      </header>

      {/* Render Recursive List if it exists */}
      {post?.list &&
        post?.list.map((list, index) => (
          <section className="pb-5" key={index}>
            <h2 className={!list.description ? "my-0" : ""}>
              {list.title && list.title}
            </h2>
            <p>{list.description && list.description}</p>

            {list.list &&
              list.list.map((subList, subIndex) => (
                <div key={subIndex}>
                  {subList.title ? (
                    <h3 className={!list.description ? "pt-2" : ""}>
                      {subList.title}
                    </h3>
                  ) : null}{" "}
                  <p>{subList.description && subList.description}</p>
                  {subList.list &&
                    subList.list.map((innerList, innerIndex) =>
                      innerList.title ? (
                        <div key={innerIndex}>
                          <p>
                            <strong>{innerList.title}:</strong>{" "}
                            {innerList.description && innerList.description}
                          </p>
                        </div>
                      ) : (
                        <ul key={innerIndex}>
                          <li>
                            {innerList.description && innerList.description}
                          </li>
                        </ul>
                      )
                    )}
                </div>
              ))}
          </section>
        ))}

      <section>
        <h2>Conclusion</h2>
        {post?.conclusions.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <footer className="mt-8 text-center md:w-3/4 mx-auto">
        <p>
          Read more related posts about{" "}
          {post?.topics.map((topic, index) => (
            <strong key={index} className="hover:text-tertiary">
              #{topic}{" "}
            </strong>
          ))}
          . Check out our other posts on our{" "}
          <Button
            onClick={() => router.push("/info/blogs")}
            className="m-0 p-0"
            variant={"link"}
          >
            Blog
          </Button>{" "}
          to stay informed about best practices and emerging trends.
        </p>
      </footer>
    </div>
  );
};

export default BlogPostPage;
