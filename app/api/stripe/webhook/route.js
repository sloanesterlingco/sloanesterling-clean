import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Initialize Stripe once, globally
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export async function POST(req) {
  const sig = headers().get("stripe-signature");

  let event;

  try {
    const rawBody = await req.text(); // required for signature verification
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // ✅ Handle specific event types
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("💳 Payment completed:", session.id);
    // You can trigger order confirmation logic here
  }

  return NextResponse.json({ received: true });
}

// ✅ Disable body parsing for Stripe signature validation
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

