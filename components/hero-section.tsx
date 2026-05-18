"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MangaPanel } from "./manga-panel"
import { SpeedLines } from "./speed-lines"
import { SFXText } from "./sfx-text"
import { InkDrip } from "./ink-effects"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen p-[var(--panel-gap)]">
      <InkDrip />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--panel-gap)] h-full min-h-[calc(100vh-12px)]">
        {/* Main hero panel */}
        <MangaPanel
          className="md:col-span-8 min-h-[50vh] md:min-h-0 flex flex-col justify-end p-6 md:p-10"
          thick
          delay={0.1}
        >
          <SpeedLines direction="radial" count={24} />
          <div className="halftone-subtle absolute inset-0" />
          <motion.div style={{ y, opacity }} className="relative z-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="h-1 bg-foreground mb-6"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-balance">
              SOFTWARE
              <br />
              <span className="text-foreground/30">DEVEL</span>
              <br />
              OPER
            </h1>
            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-md font-mono tracking-wide leading-relaxed">
              Building digital experiences with clean code.
              <br />
              Fueled by curiosity and caffeine.
            </p>
          </motion.div>
        </MangaPanel>

        {/* Side panels */}
        <div className="md:col-span-4 grid grid-rows-2 gap-[var(--panel-gap)]">
          {/* Scenery panel */}
          <MangaPanel
            className="relative overflow-hidden"
            delay={0.3}
            direction="right"
          >
            <img
              src="/images/hero-scenery.jpg"
              alt="Manga-style cherry blossom tree overlooking a city skyline at night"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-3 right-3 z-10">
              <SFXText text="WHOOSH!" size="sm" />
            </div>
          </MangaPanel>

          {/* Chapter label panel */}
          <MangaPanel
            className="flex flex-col justify-center items-center p-6 relative"
            delay={0.5}
            direction="right"
          >
            <SpeedLines direction="horizontal" count={8} />
            <div className="relative z-10 text-center">
              <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
                Chapter 01
              </span>
              <p className="text-2xl md:text-3xl font-black tracking-tight mt-2">
                Welcome
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="h-0.5 bg-foreground mt-3 w-16 mx-auto"
              />
            </div>
          </MangaPanel>
        </div>
      </div>

      {/* Bottom strip panel */}
      <div className="mt-[var(--panel-gap)]">
        <MangaPanel
          className="p-4 flex items-center justify-between"
          delay={0.7}
          direction="up"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-0.5"
          >
            <div className="w-4 h-4 border-b-2 border-r-2 border-foreground rotate-45" />
          </motion.div>
          <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground">
            PAGE 01 / 05
          </span>
        </MangaPanel>
      </div>
    </section>
  )
}
