import { NextResponse } from "next/server";
import { stripe } from "@/app/library/stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Handle event types
    if (event.type === "checkout.session.completed") {
      console.log("💰 Payment completed:", event.data.object.id);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
