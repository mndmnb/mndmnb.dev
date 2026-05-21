"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Shelf", href: "#shelf" },
  { label: "Contact", href: "#contact" },
]

export function MangaNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 p-[var(--panel-gap)]"
    >
      <div className="panel-border bg-card/95 backdrop-blur-sm p-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-black">MM</span>
          </div>
          <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground hidden sm:block">
            PORTFOLIO
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5"
          aria-label="Toggle navigation menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-foreground block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden mt-[var(--panel-gap)]"
      >
        <div className="panel-border bg-card p-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-mono tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-foreground/10 last:border-0"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
