"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = Math.random() * 3 + 2,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ff2975",
  gradientStopColor = "#ffbd7b",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: any) => {
  const id = useId();
  const [path, setPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const startX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
        const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
        const endX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
        const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

        setPath(`M ${startX} ${startY} Q ${startX + curvature} ${(startY + endY) / 2} ${endX} ${endY}`);
      }
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg fill="none" width="100%" height="100%" className={cn("pointer-events-none absolute left-0 top-0", className)}>
      <path d={path} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" />
      <path d={path} stroke={`url(#${id})`} strokeWidth={pathWidth} strokeOpacity="1" strokeLinecap="round" />
      <defs>
        <motion.linearGradient id={id} gradientUnits="userSpaceOnUse" initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }} animate={{ x1: ["0%", "200%"], x2: ["-100%", "100%"] }} transition={{ duration, delay, repeat: Infinity, ease: "linear" }}>
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="1" stopColor={gradientStopColor} />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};