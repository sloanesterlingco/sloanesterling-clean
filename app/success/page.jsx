// app/success/page.jsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SuccessPage() {
  const q = useSearchParams();
  const sessionId = q.get("session_id");
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/orders/lookup?session_id=${encodeURIComponent(sessionId)}`)
      .then(r => r.json()).then(d => setSession(d.session)).catch(() => {});
  }, [sessionId]);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      {/* ...same JSX as above... */}
    </main>
  );
}
