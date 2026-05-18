"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MangaPanel } from "./manga-panel"
import { SpeedLines } from "./speed-lines"

export function TransitionPanel() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const rotate = useTransform(scrollYProgress, [0, 1], [-1, 1])

  return (
    <div ref={ref} className="p-[var(--panel-gap)]">
      <motion.div style={{ scale, rotate }}>
        <MangaPanel
          className="p-8 md:p-16 text-center relative overflow-hidden"
          delay={0}
        >
          <SpeedLines direction="radial" count={30} className="opacity-30" />
          <div className="halftone absolute inset-0 opacity-[0.03]" />
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-[0.4em] text-muted-foreground block mb-4"
            >
              TO BE CONTINUED...
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-px bg-foreground/20 max-w-xs mx-auto"
            />
          </div>
        </MangaPanel>
      </motion.div>
    </div>
  )
}
