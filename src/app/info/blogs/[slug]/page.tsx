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
        const response = await fetch(`/api/blog/${slug}`);
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
                    #{topic}
                  </Badge>
                );
              })}
            </div>
          </div>
          <p>{post?.intro}</p>
        </header>

        {post?.categories?.map((section, index) => (
          <section key={index}>
            <h2>{section.category}</h2>
            {section.items.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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

        <footer className="mt-8 text-center space-y-3">
          <p>
            Share this post on{" "}
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post?.title}`}
            >
              Twitter
            </a>
          </p>

          <hr />

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
