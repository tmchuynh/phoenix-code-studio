// app/api/services/[category]/route.ts
import { ServiceItem } from "@/lib/interfaces";
import { NextRequest, NextResponse } from "next/server";

// Updated data store (array of objects)
const allServices: ServiceItem[] = [
  {
    name: "company-specific-services",
    info: {
      description: "All about company-specific services",
      subServices: [
        "branding-storytelling",
        "company-rebranding",
        "custom-website-design",
      ],
    },
  },
  {
    name: "content-creation-services",
    info: {
      description: "All about content creation services",
      subServices: ["blog-writing", "technical-writing", "newsletters"],
    },
  },
  {
    name: "website-services",
    info: {
      description: "All about website services",
      subServices: [
        "database-management",
        "performance-optimization",
        "security-audits",
      ],
    },
  },
];

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string; }; }
) {
  const { category } = params;

  // Find the matching category in the allServices array
  const serviceItem = allServices.find( ( item ) => item.name === category );

  // If no matching item is found, return a 404
  if ( !serviceItem ) {
    return NextResponse.json( { error: "Category not found" }, { status: 404 } );
  }

  // Return the category name along with its info
  return NextResponse.json( {
    category: serviceItem.name,
    ...serviceItem.info,
  } );
}
