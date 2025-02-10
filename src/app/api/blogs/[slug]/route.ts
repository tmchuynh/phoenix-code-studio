import { blogs } from "@/lib/blog-posts";
import { setSlug } from "@/lib/utils";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET( req: NextRequest ) {
  // Extract slug from the pathname
  const slug = req.nextUrl.pathname.split( "/" ).pop(); // Get the last part of the URL

  if ( !slug ) {
    return NextResponse.json( { message: "Blog post not found" }, { status: 404 } );
  }

  // Generate the blog slug dynamically based on the title (if needed)
  const blogPost = blogs.find( ( blog ) => setSlug( blog.title ) === slug ); // Use setSlug to find the post

  if ( !blogPost ) {
    return NextResponse.json( { message: "Blog post not found" }, { status: 404 } );
  }

  return NextResponse.json( blogPost ); // Return the blog post data
}
