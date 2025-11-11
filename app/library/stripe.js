// /library/stripe.js
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

if (!key) {
  console.error("❌ Missing STRIPE_SECRET_KEY in environment variables");
}

export const stripe = new Stripe(key ?? "", {
  apiVersion: "2024-06-20",
});
