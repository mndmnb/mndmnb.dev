"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function InkDrip() {
  const [drips, setDrips] = useState<{ left: number; width: number; height: number }[]>([])

  useEffect(() => {
    setDrips(
      [15, 35, 52, 70, 88].map((left) => ({
        left,
        width: 2 + Math.random() * 3,
        height: 15 + Math.random() * 30,
      }))
    )
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-10">
      {drips.map((drip, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 bg-foreground"
          style={{
            left: `${drip.left}%`,
            width: `${drip.width}px`,
            height: `${drip.height}px`,
            borderRadius: "0 0 50% 50%",
          }}
        />
      ))}
    </div>
  )
}

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50">
      <motion.div className="h-full bg-foreground" style={{ width }} />
    </div>
  )
}