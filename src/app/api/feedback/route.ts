import FeedbackTemplate from "@/components/email_templates/feedbackTemplate";
import { FeedbackFormData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.FROM_FEEDBACK_EMAIL || !process.env.TO_EMAIL) {
      console.error("Email addresses not configured");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Create email subject based on feedback type
    const emailSubject = data.isAnonymous
      ? `Anonymous Feedback - ${data.websiteName} (${data.workType})`
      : `Feedback from ${data.firstName} ${data.lastName} - ${data.websiteName} (${data.workType})`;

    // Send the email with the feedback template
    await resend.emails.send({
      from: process.env.FROM_FEEDBACK_EMAIL as string, // Verified sender email
      to: process.env.TO_EMAIL as string, // Recipient email
      subject: emailSubject,
      react: FeedbackTemplate({
        formData: data,
      }),
    });

    // Here you would typically also:
    // 1. Save the feedback to your database
    // 2. Store for potential display on website (if consented)

    console.log("Feedback received and email sent:", {
      ...data,
      timestamp: new Date().toISOString(),
    });

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
