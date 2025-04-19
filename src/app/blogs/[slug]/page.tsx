"use client";

import CannotFind from "@/components/states/CannotFind";
import LoadingIndicator from "@/components/states/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/interfaces";
import { setSlug } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [fileName, setFileName] = useState("");

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

    fetchBlog();
    checkFileExist(slug as string);
  }, [slug, router]);

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

  if (error) return <CannotFind />;

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="mx-auto py-6 w-10/12 md:w-11/12">
      <header>
        <h1>{post?.title}</h1>
        <div>
          <p>
            <span className="font-bold">Written By: </span>
            {post?.author}
          </p>
          <p>
            <span className="font-bold">Date: </span>
            {post?.date.month} / {post?.date.day} / {post?.date.year}
          </p>
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

        <div className="flex xl:flex-row md:flex-col flex-col-reverse xl:gap-x-6 md:pb-5 xl:pb-6">
          <div className="xl:flex xl:flex-col xl:justify-between">
            <div>
              {post?.intro.map((intro, index) => (
                <p key={index}>{intro}</p>
              ))}
            </div>

            {post?.icons && (
              <div className="flex flex-wrap gap-7 md:mt-5 mb-3 md:mb-0 lg:mb-3">
                {post?.icons.map((icon, index) => (
                  <Image
                    src={`/images/blog_icons/${icon}`}
                    width={500}
                    height={500}
                    key={index}
                    alt={`${icon}-${index}`}
                    className="mx-auto 2xl:ml-[3em] w-10 md:w-20 lg:w-16 2xl:w-16"
                  />
                ))}
              </div>
            )}
          </div>

          {post?.title && (
            <Image
              src={`/images/blog_images/${setSlug(post?.title)}.jpg`}
              width={500}
              height={300}
              priority={true}
              alt={`${post?.title}-image`}
              className="mx-auto md:mt-4 xl:mt-0 mb-2 w-full lg:h-[25em] object-contain object-center self-center"
            />
          )}
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
                            {innerList.title && (
                              <>
                                <strong className="text-secondary">
                                  {innerList.title}:
                                </strong>{" "}
                              </>
                            )}
                            {innerList.description && innerList.description}
                          </p>

                          {innerList.list && (
                            <ul className="mt-0 list-decimal list-inside">
                              {innerList.list.map((b_list, b_index) => (
                                <li key={b_index}>
                                  {b_list.title && (
                                    <strong className="text-foreground">
                                      {b_list.title}:{" "}
                                    </strong>
                                  )}
                                  {b_list.description}

                                  {b_list.list && (
                                    <ul className="mt-2 ml-4">
                                      {b_list.list.map((c_list, c_index) => (
                                        <li key={c_index}>
                                          {c_list.title && (
                                            <strong className="text-tertiary">
                                              {c_list.title}:{" "}
                                            </strong>
                                          )}
                                          {c_list.description}

                                          {c_list.list && (
                                            <ul className="mt-2 list-decimal list-inside">
                                              {c_list.list.map(
                                                (d_list, d_index) => (
                                                  <li key={d_index}>
                                                    {d_list.title && (
                                                      <strong>
                                                        {d_list.title}:{" "}
                                                      </strong>
                                                    )}
                                                    {d_list.description}

                                                    {d_list.list && (
                                                      <ul className="ml-5">
                                                        {d_list.list.map(
                                                          (e_list, e_index) => (
                                                            <li key={e_index}>
                                                              {e_list.title && (
                                                                <strong className="text-foreground">
                                                                  {e_list.title}
                                                                  :{" "}
                                                                </strong>
                                                              )}
                                                              {
                                                                e_list.description
                                                              }
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    )}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
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

      <section className="flex lg:flex-row xl:flex-row-reverse flex-col md:gap-5 lg:gap-10">
        <div>
          <h2>Conclusion</h2>
          {post?.conclusions.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {fileExists && (
          <Image
            src={`${fileName}`}
            width={500}
            height={300}
            priority={false}
            alt={`Image related to ${post?.title}`}
            className="mx-auto lg:mt-4 xl:mt-0 mb-2 w-full md:w-3/4 lg:w-1/2 xl:w-full h-full object-contain object-center self-center"
          />
        )}
      </section>

      <footer className="mx-auto md:mt-8 xl:mt-0 lg:w-3/4 text-center">
        <p className="leading-3">
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
