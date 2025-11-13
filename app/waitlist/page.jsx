"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function submitEmail(e) {
    e.preventDefault();

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setStatus(data.success ? "success" : "error");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-white">Join the Waitlist</h1>
        <p className="mt-3 text-neutral-400">
          Be the first to access LuxeSculpt™ ARC 01 when it launches in 2026.
        </p>

        <form onSubmit={submitEmail} className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your email"
            className="px-4 py-3 rounded-md bg-neutral-900 text-white border border-neutral-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-[#F5C84C] hover:bg-[#e6b93f] text-black font-semibold shadow-md transition-all duration-300 rounded-md px-6 py-3"
          >
            Join the Waitlist
          </button>
        </form>

        {status === "success" && (
          <p className="mt-6 text-green-400">You're officially on the list!</p>
        )}

        {status === "error" && (
          <p className="mt-6 text-red-400">Something went wrong. Try again.</p>
        )}
      </div>
    </div>
  );
}
