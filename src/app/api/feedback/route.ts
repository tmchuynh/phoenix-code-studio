import { FeedbackFormData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data: FeedbackFormData = await request.json();

    // Basic validation
    if (
      !data.websiteName ||
      data.rating < 1 ||
      data.rating > 5 ||
      !data.feedback.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required fields or invalid data" },
        { status: 400 }
      );
    }

    // Additional validation for non-anonymous submissions
    if (!data.isAnonymous) {
      if (!data.firstName || !data.lastName || !data.email) {
        return NextResponse.json(
          {
            error:
              "First name, last name, and email are required for non-anonymous feedback",
          },
          { status: 400 }
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address" },
          { status: 400 }
        );
      }
    }

    // Here you would typically:
    // 1. Save the feedback to your database
    // 2. Send notification emails to your team
    // 3. Store for potential display on website (if consented)

    console.log("Feedback received:", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // For now, we'll just return success
    // In a real implementation, you'd save to database

    return NextResponse.json(
      { message: "Feedback submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
