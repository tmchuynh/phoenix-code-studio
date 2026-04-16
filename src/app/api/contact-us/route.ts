import ContactUsTemplate from "@/components/email_templates/contactUsTemplate";
import { InquiryTypes } from "@/lib/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const { firstName, lastName, email, phoneNumber, inquiryType, message } =
      await request.json();

    // Basic validation: ensure required fields are present.
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate inquiry type
    const validInquiryTypes: InquiryTypes[] = [
      "General Inquiry",
      "Web Design",
      "Custom Website Development",
      "Other",
    ];
    if (!validInquiryTypes.includes(inquiryType)) {
      return NextResponse.json(
        { error: "Invalid inquiry type" },
        { status: 400 }
      );
    }

    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.FROM_CONTACT_US_EMAIL || !process.env.TO_EMAIL) {
      console.error("Email addresses not configured");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Initialize Resend with your API key.
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Send the email with a formatted HTML message.
    await resend.emails.send({
      from: process.env.FROM_CONTACT_US_EMAIL as string, // Verified sender email.
      to: process.env.TO_EMAIL as string, // Recipient email.
      subject: `Contact Us Message from ${firstName} ${lastName} - ${inquiryType}`,
      react: ContactUsTemplate({
        formData: {
          firstName,
          lastName,
          email,
          phoneNumber,
          inquiryType,
          message,
        },
      }),
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
