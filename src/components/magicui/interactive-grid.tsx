"use client";

import { cn } from "@/lib/utils";

export default function InteractiveGridPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        className,
      )}
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1">
          <path d="M.5 40V.5H40" fill="none" strokeDasharray="4 2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}