import { blogs } from "../blog-posts";
import { BlogPost } from "../interfaces";

/**
 * Groups blog posts by year, month, and day, and counts the number of blog posts.
 *
 * @param {BlogPost[]} data - An array of blog posts to be grouped.
 * @returns {Object} An object where the keys are years, and the values are objects
 *                   with months as keys. Each month object contains a count of blog
 *                   posts and an array of arrays of blog posts grouped by day.
 *
 * @example
 * const blogPosts = [
 *   { date: { year: 2023, month: 10, day: 1 }, title: "Post 1" },
 *   { date: { year: 2023, month: 10, day: 2 }, title: "Post 2" },
 *   { date: { year: 2023, month: 10, day: 1 }, title: "Post 3" },
 * ];
 * const grouped = getBlogPostsByYearMonthDayAndCount(blogPosts);
 * // grouped = {
 * //   2023: {
 * //     10: {
 * //       count: 3,
 * //       groupedByDay: [
 * //         [{ date: { year: 2023, month: 10, day: 1 }, title: "Post 1" },
 * //          { date: { year: 2023, month: 10, day: 1 }, title: "Post 3" }],
 * //         [{ date: { year: 2023, month: 10, day: 2 }, title: "Post 2" }]
 * //       ]
 * //     }
 * //   }
 * // }
 */
function getBlogPostsByYearMonthDayAndCount(data: BlogPost[]): {
  [year: number]: {
    [month: number]: {
      count: number;
      groupedByDay: BlogPost[][];
    };
  };
} {
  // Group blogs by year and month, and count the number of blogs
  const groupedData = data.reduce((acc, blog) => {
    const { year, month, day } = blog.date;

    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = { count: 0, groupedByDay: [] };
    }

    acc[year][month].count += 1;

    // Group by day
    let dayGroup = acc[year][month].groupedByDay.find(
      (group) => group[0].date.day === day
    );
    if (!dayGroup) {
      dayGroup = [];
      acc[year][month].groupedByDay.push(dayGroup);
    }
    dayGroup.push(blog);

    return acc;
  }, {} as { [year: number]: { [month: number]: { count: number; groupedByDay: BlogPost[][] } } });

  return groupedData;
}

/**
 * Transforms and sorts blog post data by year and month.
 *
 * @param {Object} blogs - The blog posts data.
 * @returns {Array} An array of objects, each representing a year with its corresponding months and blog data.
 * Each year object contains:
 * - `year` (number): The year.
 * - `months` (Array): An array of month objects, each containing:
 *   - `month` (number): The month number.
 *   - `count` (number): The count of blog posts for the month.
 *   - `blogsForMonth` (Object): The blog data grouped by day for the month.
 */
export const sortedData = Object.entries(
  getBlogPostsByYearMonthDayAndCount(blogs)
).map(([year, yearData]) => {
  return {
    year: parseInt(year), // Convert the year to number
    months: Object.entries(yearData)
      .map(([month, monthData]) => ({
        month: parseInt(month), // Convert the month to number
        count: monthData.count,
        blogsForMonth: monthData.groupedByDay, // You can use this to get the blog data for the month
      }))
      .sort((a, b) => a.month - b.month), // Sort months by month number
  };
});

/**
 * Calculates the count of each topic from a list of blogs.
 *
 * @param blogs - An array of blog objects, each containing a list of topics.
 * @returns A record where the keys are topic names and the values are the counts of each topic.
 */
export const topicCounts: Record<string, number> = blogs.reduce((acc, blog) => {
  blog.topics.forEach((topic) => {
    acc[topic] = (acc[topic] || 0) + 1;
  });
  return acc;
}, {} as Record<string, number>);

export const readingLength = Array.from(
  new Set(blogs.map((blog) => blog.timeSpan))
);

// const authorCounts = authors.reduce((acc, author) => {
//   acc[author] = blogs.filter((blog) => blog.author === author).length;
//   return acc;
// }, {} as Record<string, number>);

// const authors = Array.from(new Set(blogs.map((blog) => blog.author)));



/**
 * Calculates the count of each subtopic from a list of blogs.
 *
 * @param blogs - An array of blog objects, each containing an optional array of subtopics.
 * @returns A record where the keys are subtopic names and the values are the counts of those subtopics.
 */
export const subTopicCounts: Record<string, number> = blogs.reduce(
  (acc, blog) => {
    blog.subtopics?.forEach((topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
    });
    return acc;
  },
  {} as Record<string, number>
);

export const subTopics = Object.keys(subTopicCounts).sort();

export const topics = Object.keys(topicCounts).sort();

/**
 * Calculates the count of blogs for each reading length.
 *
 * @param readingLength - An array of possible reading lengths.
 * @param blogs - An array of blog objects, each containing a `timeSpan` property.
 * @returns An object where the keys are reading lengths and the values are the count of blogs for each length.
 */
export const lengthCount = readingLength.reduce((acc, length) => {
  acc[length] = blogs.filter((blog) => blog.timeSpan === length).length;
  return acc;
}, {} as Record<string, number>);








