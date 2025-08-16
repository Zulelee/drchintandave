import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, country } = body;

    // Validate required fields
    if (!name || !email || !country) {
      return NextResponse.json(
        { error: "Name, email, and country are required" },
        { status: 400 }
      );
    }

    // Prepare data for Google Apps Script
    const submissionData = {
      name,
      email,
      country,
      timestamp: new Date().toISOString(),
    };

    // Send to Google Apps Script
    const response = await fetch(process.env.BOOK_WAITLIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error(
        `Google Apps Script responded with status: ${response.status}`
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pre-order submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit pre-order request" },
      { status: 500 }
    );
  }
}
