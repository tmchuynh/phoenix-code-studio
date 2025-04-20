import { blogs } from "@/lib/constants/blog-posts";
import { setSlug } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to fetch a blog post by its slug.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse object containing the blog post data or an error message.
 *
 * The function extracts the slug from the request URL's pathname, searches for the corresponding blog post,
 * and returns the blog post data if found. If the slug is not provided or the blog post is not found,
 * it returns a 404 status with an appropriate error message.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  // Extract slug from the pathname
  const slug = req.nextUrl.pathname.split("/").pop(); // Get the last part of the URL

  if (!slug) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  // Generate the blog slug dynamically based on the title (if needed)
  const blogPost = blogs.find((blog) => setSlug(blog.title) === slug); // Use setSlug to find the post

  if (!blogPost) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(blogPost); // Return the blog post data
}
