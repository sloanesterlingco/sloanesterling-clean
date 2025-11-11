"use client";
import { motion } from "framer-motion";

export default function MotionDivider() {
  return (
    <motion.div
      className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-20"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    />
  );
}


