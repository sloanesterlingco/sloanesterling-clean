import { NextResponse } from "next/server";
import { admin } from "@/app/library/firebase-admin";

export async function GET() {
  try {
    const db = admin.firestore();
    const ts = Date.now();

    await db.collection("heartbeat").doc("ping").set({ ts }, { merge: true });

    return NextResponse.json({ ok: true, ts });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
