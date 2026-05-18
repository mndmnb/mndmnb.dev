"use client"

import { MangaPanel } from "./manga-panel"
import { SpeedLines } from "./speed-lines"
import { SFXText } from "./sfx-text"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import Image from "next/image"

export function ContactSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <section className="p-[var(--panel-gap)]" id="contact">
      {/* Section header */}
      <MangaPanel
        className="p-3 md:p-4 flex items-center gap-4 mb-[var(--panel-gap)]"
        delay={0}
      >
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground">
          CHAPTER 05
        </span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-lg md:text-xl font-black tracking-tight">CONTACT</span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground">
          PAGE 05
        </span>
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--panel-gap)]">
        {/* Art panel - static zen garden illustration */}
        <MangaPanel
          className="md:col-span-5 min-h-[300px] md:min-h-[500px] relative"
          delay={0.1}
          direction="left"
          thick
        >
          <Image
            src="/images/contact-pigeon.jpg"
            alt="Manga-style zen garden with a paper airplane floating through the air"
            fill
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute top-4 right-4 z-10">
            <SFXText text="FWIP~" size="sm" />
          </div>
          {/* Panel number */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[10px] font-mono text-muted-foreground bg-card/80 px-2 py-1">
              FIG. 05.1
            </span>
          </div>
        </MangaPanel>

        {/* Contact content */}
        <div className="md:col-span-7 grid gap-[var(--panel-gap)]">
          {/* CTA panel */}
          <MangaPanel
            className="p-6 md:p-10 relative"
            delay={0.2}
            direction="right"
          >
            <SpeedLines direction="radial" count={16} className="opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9]">
                {"LET'S"}
                <br />
                <span className="text-foreground/30">BUILD</span>
                <br />
                SOMETHING
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="h-1 bg-foreground mt-4"
              />
            </div>
          </MangaPanel>

          {/* Social links */}
          <div className="grid grid-cols-2 gap-[var(--panel-gap)]">
            {[
              { name: "TWITTER", handle: "@yourhandle" },
              { name: "GITHUB", handle: "yourgithub" },
              { name: "LINKEDIN", handle: "yourlinkedin" },
              { name: "EMAIL", handle: "hello@you.com" },
            ].map((social, i) => (
              <MangaPanel
                key={social.name}
                className="p-4 md:p-5 cursor-pointer group relative overflow-hidden"
                delay={0.3 + i * 0.1}
                direction="up"
              >
                <div className="absolute inset-0 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="relative z-10">
                  <span className="text-xs font-mono tracking-[0.2em] block mb-1 text-muted-foreground group-hover:text-primary-foreground/60 transition-colors">
                    {social.name}
                  </span>
                  <span className="text-sm md:text-base font-black tracking-tight text-foreground group-hover:text-primary-foreground transition-colors">
                    {social.handle}
                  </span>
                </div>
              </MangaPanel>
            ))}
          </div>

          {/* Message panel */}
          <MangaPanel className="p-6 md:p-8 relative" delay={0.6} direction="up">
            <div className="halftone-subtle absolute inset-0" />
            <form ref={formRef} className="relative z-10 space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono tracking-[0.2em] text-muted-foreground"
                >
                  DROP A MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Your message here..."
                  className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-foreground outline-none resize-none text-sm font-mono py-2 placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
              <button
                type="button"
                className="px-6 py-2.5 bg-foreground text-primary-foreground text-xs font-mono tracking-[0.2em] hover:bg-foreground/80 transition-colors"
              >
                SEND IT
              </button>
            </form>
          </MangaPanel>
        </div>
      </div>
    </section>
  )
}
