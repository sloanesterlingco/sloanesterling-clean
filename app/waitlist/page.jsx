"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const joinWaitlist = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white bg-black px-6">
      <h1 className="text-3xl font-bold mb-6">Join the LuxeSculpt™ Waitlist</h1>

      <form onSubmit={joinWaitlist} className="w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded bg-neutral-900 border border-neutral-700 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded font-bold hover:bg-neutral-200 transition"
        >
          Join Waitlist
        </button>

        {status === "loading" && (
          <p className="mt-4 text-yellow-400">Submitting...</p>
        )}
        {status === "success" && (
          <p className="mt-4 text-green-400">You're on the list!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400">Something went wrong.</p>
        )}
      </form>
    </main>
  );
}
