// app/cancel/page.jsx
import Link from "next/link";
import { headers } from "next/headers";

// If you want to be extra-safe, tell Next not to prebuild a static HTML file:
export const revalidate = 0;            // dynamic at runtime
export const dynamic = "force-dynamic"; // skip static prerender

export default function CancelPage() {
  const h = headers();
  const referer = h.get("referer") || "";

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-3 text-red-600">Payment cancelled</h1>
        <p className="text-lg text-gray-700 mb-6">
          No charge was made. You can try checkout again or browse other items.
        </p>
        {referer && (
          <p className="text-sm text-gray-500 mb-6">You came from: {referer}</p>
        )}
        <div className="flex gap-3 justify-center">
          <Link href="/cart" className="underline">Back to cart</Link>
          <Link href="/" className="underline">Home</Link>
        </div>
      </div>
    </main>
  );
}
