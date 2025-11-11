"use client";
import { motion } from "framer-motion";

export default function BrandPulse() {
  return (
    <motion.span
      className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-400 ml-2 shadow-md"
      animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1, 0.9] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}