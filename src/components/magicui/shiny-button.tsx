"use client";
import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: { repeat: Infinity, repeatType: "loop", repeatDelay: 1, type: "spring", stiffness: 20, damping: 15, mass: 2, scale: { type: "spring", stiffness: 200, damping: 5, mass: 0.5 } },
} as AnimationProps;

export default function ShinyButton({ text, className }: { text: string; className?: string }) {
  return (
    <motion.button {...animationProps} className={cn("relative rounded-full px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,rgba(163,177,138,0.1)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_rgba(163,177,138,0.2)]", className)}>
      <span className="relative block h-full w-full text-sm uppercase tracking-wide text-[#2D3436]" style={{ maskImage: "linear-gradient(-75deg,#A3B18A calc(var(--x) + 20%),transparent calc(var(--x) + 30%),#A3B18A calc(var(--x) + 100%))" }}>{text}</span>
    </motion.button>
  );
}
