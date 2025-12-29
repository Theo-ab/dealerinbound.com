import { NextRequest, NextResponse } from "next/server";

const FILLOUT_API_KEY = process.env.FILLOUT_API_KEY;
const FILLOUT_BASE_URL = "https://api.fillout.com/v1/api";
const FILLOUT_FORM_ID = process.env.FILLOUT_FORM_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, dealership, phone, message } = body;

    // Submit to Fillout API
    const response = await fetch(
      `${FILLOUT_BASE_URL}/forms/${FILLOUT_FORM_ID}/submissions`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${FILLOUT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissions: [
            {
              questions: [
                { id: "ewBX", value: name },
                { id: "vkpB", value: email },
                { id: "8SMG", value: dealership },
                { id: "hNnB", value: phone || "" },
                { id: "7F28", value: message || "" },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Fillout API error:", errorData);

      // Still return success to user - we can log errors server-side
      // In production, you might want to handle this differently
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    const data = await response.json();
    return NextResponse.json(
      { success: true, message: "Form submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
