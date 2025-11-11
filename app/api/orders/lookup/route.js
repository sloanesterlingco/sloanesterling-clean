// /app/api/orders/lookup/route.js
import { NextResponse } from "next/server";
import { stripe } from "@/library/stripe";


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });

    return NextResponse.json({ session });
  } catch (err) {
    console.error("❌ Orders lookup error:", err);
    return NextResponse.json({ error: "Unable to look up session" }, { status: 500 });
  }
}

