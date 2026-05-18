"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SFXTextProps {
  text: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  sm: "text-lg md:text-xl",
  md: "text-2xl md:text-3xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-6xl md:text-8xl",
}

export function SFXText({ text, className, size = "md" }: SFXTextProps) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: -12 }}
      animate={{ scale: 1, rotate: -6 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className={cn(
        "sfx-text inline-block font-manga text-foreground select-none",
        sizeMap[size],
        className
      )}
    >
      {text}
    </motion.span>
  )
}
