import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { buildQuoteEmailHtml } from "@/lib/email-template";
import type { FormSubmission, ApiResponse } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: FormSubmission = await request.json();

    // Basic server-side validation
    if (
      !body.formType ||
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.from ||
      !body.to ||
      !body.date
    ) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (body.formType === "quote-wizard" && (!body.bedrooms || !body.furnishing)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please complete all steps of the quote form." },
        { status: 400 }
      );
    }

    if (body.formType === "contact-form" && !body.size) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please select a property size." },
        { status: 400 }
      );
    }

    const html = buildQuoteEmailHtml(body);
    const subjectPrefix =
      body.formType === "quote-wizard" ? "Quote Request" : "Contact Form";
    const subject = `${subjectPrefix}: ${body.name} - ${body.from} to ${body.to}`;

    const { error } = await getResend().emails.send({
      from: "Paradise Removals <quotes@paradiseremovals.com.au>",
      to: "info@paradiseremovals.com.au",
      subject,
      html,
      replyTo: body.email,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message:
            "Failed to send your request. Please try again or call us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Quote request sent successfully!",
    });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message:
          "Something went wrong. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
