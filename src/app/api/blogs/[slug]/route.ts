// app/api/blog/[slug]/route.ts
import { blogs } from "@/lib/blog-posts"; // Assuming your blog data is here
import { setSlug } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET( _req: Request, { params }: { params: { slug: string; }; } ) {
  const { slug } = params; // Get the dynamic slug parameter

  // Generate the blog slug dynamically based on the title (if needed)
  const blogPost = blogs.find( ( blog ) => setSlug( blog.title ) === slug ); // Use setSlug to find the post

  if ( !blogPost ) {
    return NextResponse.json( { message: "Blog post not found" }, { status: 404 } );
  }

  return NextResponse.json( blogPost ); // Return the blog post data
}
