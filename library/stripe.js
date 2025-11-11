// /lib/stripe.js
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  // Helpful during dev
  console.error("❌ Missing STRIPE_SECRET_KEY. Add it to .env.local or Vercel env vars.");
}

// Export a single Stripe instance for the whole app
export const stripe = new Stripe(key ?? "", {
  apiVersion: "2024-06-20",
});
