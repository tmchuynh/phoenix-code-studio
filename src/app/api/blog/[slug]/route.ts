import { blogs } from "@/lib/blog-posts";
import { NextResponse } from "next/server";

export async function GET( _req: Request, { params }: { params: { slug: string; }; } ) {
  const { slug } = params; // Get the dynamic slug parameter
  const blogPost = blogs.find( blog => blog.slug === slug ); // Find the post by slug

  // If no post is found, return a 404 error
  if ( !blogPost ) {
    return NextResponse.json( { message: "Blog post not found" }, { status: 404 } );
  }

  // If blog post is found, return the data
  return NextResponse.json( blogPost );
}
