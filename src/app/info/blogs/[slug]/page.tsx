"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/interfaces";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        setLoading(false);
      }
    }

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
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
          {post?.intro.map((intro) => (
            <p>{intro}</p>
          ))}
        </header>

        {post?.list && (
          <>
            <h2>{post?.list?.title}</h2>
            {post?.list?.description && <p>{post?.list?.description}</p>}
            <ul className="list-disc pl-6 space-y-4">
              {post?.list?.details.map((item, index) => (
                <li key={index}>
                  {item.title && <strong>{item.title}: </strong>}
                  <ul className="pl-6">
                    {item.info.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        )}

        {post?.categories.map((section, index) => (
          <section key={index}>
            <h2>{section.category}</h2>

            {/* Render section intro */}
            {section.intro?.map((text, i) => (
              <p key={i}>{text}</p>
            ))}

            {/* Render items */}
            {section.items?.map((item, i) => (
              <div key={i}>
                {item.description.length > 1 ? (
                  <ul className="list-none">
                    <li>
                      {item.title && <h3 className="-ml-5">{item.title} </h3>}
                      {item.description.map((description, j) => (
                        <p key={j}>{description}</p>
                      ))}
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      {item.title && <strong>{item.title}: </strong>}
                      {item.description}
                    </li>
                  </ul>
                )}

                {/* Render item details if available */}
                {item.details && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
                    {item.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}

        <section>
          <h2>Conclusion</h2>
          {post?.conculsions.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <footer className="mt-8 text-center">
          <p>
            Read more related posts about{" "}
            {post?.topics.map((topic, index) => (
              <strong key={index} className="hover:text-tertiary">
                #{topic}{" "}
              </strong>
            ))}
            . Check out our other posts on our
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
      </article>
    </div>
  );
};

export default BlogPostPage;
