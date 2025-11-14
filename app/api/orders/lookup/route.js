import { NextResponse } from "next/server";
import { stripe } from "@/app/library/stripe";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json(session);
  } catch (err) {
    console.error("Lookup error:", err);
    return NextResponse.json(
      { error: err.message || "Stripe lookup failed" },
      { status: 500 }
    );
  }
}
