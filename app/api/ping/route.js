import { NextResponse } from "next/server";
import { admin } from "@/library/firebase-admin";

export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      message: "Ping success",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
