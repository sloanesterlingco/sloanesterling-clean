import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LuxeSculpt™ — Engineered for Movement",
  description: "Adaptive compression architecture for form, flow, and power.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Global, fixed navbar */}
        <NavBar />

        {/* Offset to clear the fixed navbar height */}
        <div className="pt-[72px]">{children}</div>

        {/* Single global footer */}
        <Footer />
      </body>
    </html>
  );
}