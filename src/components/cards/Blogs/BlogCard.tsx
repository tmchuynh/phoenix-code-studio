import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BlogPost } from "@/lib/interfaces";
import useLargeScreensOnly from "@/lib/useLargeScreensOnly";
import useSmallScreen from "@/lib/useSmallScreen";
import { parseReadingTimeToMinutes } from "@/lib/utils/convert";
import { formatNumber, setSlug } from "@/lib/utils/format";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BlogCard({
  blog,
  index,
  clearFilters,
  setFiltersCleared,
  selectedTopics,
  setSelectedTopics,
  handleFilter,
}: {
  blog: BlogPost;
  index: number;
  clearFilters: (filterType: string) => void;
  setFiltersCleared: (value: boolean) => void;
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  handleFilter: () => void;
}) {
  const router = useRouter();
  const isSmallDevice = useSmallScreen();
  const isLargerScreen = useLargeScreensOnly();

  /**
   * Handles the click event for a topic. Clears the current topic filters,
   * updates the selected topics, and triggers the filter handler.
   *
   * @param {string} topic - The topic that was clicked.
   */
  const handleTopicClick = (topic: string) => {
    clearFilters("topic");
    setFiltersCleared(false);
    if (!selectedTopics.includes(topic)) {
      const updatedTopics = [...selectedTopics, topic];
      setSelectedTopics(updatedTopics);
      handleFilter();
    }
  };

  return (
    <Card
      key={index}
      className="flex flex-col justify-between shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border rounded-lg transition-shadow"
    >
      <Link href={`/blogs/${setSlug(blog.title)}`} className="group">
        <Image
          src={`/images/blog_card_images/${setSlug(blog.title)}.jpg`}
          width={500}
          height={300}
          alt={blog.title}
          className="mx-auto mb-1 rounded-t-md w-full h-40 md:h-52 xl:h-64 object-cover object-center"
        />
        <div className="relative flex flex-col justify-between px-4 pb-2 h-fit md:h-[20rem] lg:h-[25em] 2xl:h-[35em] xl:h-[30em]">
          <div>
            {blog.wordCount && blog.time && (
              <div className="flex justify-between mx-1 pt-5">
                {blog.wordCount && (
                  <p className="mt-0 text-xs md:text-sm lg:text-md 2xl:text-lg">
                    <strong className="text-foreground">Words:</strong>{" "}
                    <span>~{formatNumber(blog.wordCount)}</span>
                  </p>
                )}
                {blog.time && (
                  <p className="mt-0 text-xs md:text-sm lg:text-md 2xl:text-lg">
                    <strong className="text-foreground">Reading Time:</strong>{" "}
                    <span>~{parseReadingTimeToMinutes(blog.time)}m</span>
                  </p>
                )}
              </div>
            )}

            <h3 className="underline-offset-2 group-hover:underline decoration-1">
              {blog.title}
            </h3>

            <div className="flex md:flex-row flex-col justify-between">
              <p className="md:my-1 mt-0.5 lg:mt-4 text-sm md:text-lg lg:text-lg">
                <strong>Date:</strong> {blog.date.month} / {blog.date.day} /{" "}
                {blog.date.year}
              </p>
            </div>
            <p className="md:text-[15px] lg:text-[18px] 2xl:text-[20px] leading-6 line-clamp-4 xl:line-clamp-9">
              {blog.excerpt}
            </p>
          </div>

          {isSmallDevice ? null : isLargerScreen ? (
            <div className="bottom-2 absolute flex flex-col mt-4">
              {blog.topics.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {blog.topics.sort().map((topic, index) => (
                    <Badge
                      key={index}
                      variant={"secondary"}
                      className="mr-2 cursor-pointer"
                      onClick={() => handleTopicClick(topic)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bottom-4 absolute mt-4">
              {blog.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {blog.topics.sort().map((topic, index) => (
                    <Badge
                      key={index}
                      variant={"secondary"}
                      className="mr-2 cursor-pointer"
                      onClick={() => handleTopicClick(topic)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
}
