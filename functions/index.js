const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Stripe = require("stripe");

admin.initializeApp();

// Load your Stripe secret key securely from Firebase config
const stripe = Stripe(functions.config().stripe.secret);

exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: data.items,
      automatic_tax: { enabled: true },
      success_url: "https://luxesculptperformance.com/success",
      cancel_url: "https://luxesculptperformance.com/cancel",
    });

    return { id: session.id };
  } catch (error) {
    console.error("Stripe checkout error:", error);
    throw new functions.https.HttpsError("internal", error.message);
  }
});

