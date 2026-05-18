"use client"

import { MangaPanel } from "./manga-panel"
import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="p-[var(--panel-gap)]">
      <MangaPanel className="p-6 md:p-8 relative" delay={0}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / name */}
          <div className="text-center md:text-left">
            <span className="text-2xl md:text-3xl font-black tracking-tighter">
              MUNEEB MENNAD
            </span>
            <p className="text-xs font-mono text-muted-foreground mt-1 tracking-wide">
              SOFTWARE DEV // 2026
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {["About", "Work", "Shelf", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-mono tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* End mark */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground tracking-wide">
              END
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-4 h-4 border border-foreground/30"
            />
          </div>
        </div>

        {/* Large decorative text */}
        <div className="mt-8 overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-[80px] md:text-[120px] font-black tracking-tighter text-foreground/[0.03] mx-4 select-none"
              >
                SOFTWARE DEV
              </span>
            ))}
          </motion.div>
        </div>
      </MangaPanel>
    </footer>
  )
}
