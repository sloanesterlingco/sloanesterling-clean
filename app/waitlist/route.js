import { NextResponse } from "next/server";
import { admin } from "@/app/library/firebase-admin";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const db = admin.firestore();

    await db.collection("waitlist").doc(email).set({
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}