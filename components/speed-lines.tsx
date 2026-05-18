"use client"

import { cn } from "@/lib/utils"

interface SpeedLinesProps {
  className?: string
  count?: number
  direction?: "horizontal" | "vertical" | "radial"
}

export function SpeedLines({ className, count = 12, direction = "horizontal" }: SpeedLinesProps) {
  if (direction === "radial") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-[1px] bg-foreground/10 origin-left"
            style={{
              width: `${60 + Math.random() * 40}%`,
              transform: `rotate(${(360 / count) * i}deg)`,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute bg-foreground/[0.06]",
            direction === "horizontal"
              ? "h-[1px] w-full"
              : "w-[1px] h-full"
          )}
          style={{
            [direction === "horizontal" ? "top" : "left"]:
              `${(i / count) * 100 + Math.random() * 3}%`,
          }}
        />
      ))}
    </div>
  )
}
