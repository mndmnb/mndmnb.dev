"use client"

import { MangaPanel } from "./manga-panel"
import { SpeedLines } from "./speed-lines"
import { SFXText } from "./sfx-text"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="p-[var(--panel-gap)]" id="about">
      {/* Section header strip */}
      <MangaPanel
        className="p-3 md:p-4 flex items-center gap-4 mb-[var(--panel-gap)]"
        delay={0}
      >
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground">
          CHAPTER 02
        </span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-lg md:text-xl font-black tracking-tight">ABOUT</span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground">
          PAGE 02
        </span>
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--panel-gap)]">
        {/* Portrait panel - developer at desk */}
        <MangaPanel
          className="md:col-span-5 min-h-[400px] md:min-h-[500px] relative"
          delay={0.1}
          direction="left"
          thick
        >
          <Image
            src="/images/dev-at-desk.jpg"
            alt="Manga-style illustration of developer working at computer from behind"
            fill
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute top-4 left-4 z-10">
            <SFXText text="CLICK!" size="sm" />
          </div>
          {/* Panel corner marks */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-foreground/30" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-foreground/30" />
        </MangaPanel>

        {/* Text panels */}
        <div className="md:col-span-7 grid grid-rows-[auto_1fr_auto] gap-[var(--panel-gap)]">
          {/* Name panel */}
          <MangaPanel
            className="p-6 md:p-8 relative"
            delay={0.2}
            direction="right"
          >
            <SpeedLines direction="horizontal" count={6} />
            <div className="relative z-10">
              <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground block mb-2">
                THE PROTAGONIST
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter">
                MUNEEB MENNAD
              </h2>
              <p className="mt-1 text-sm text-muted-foreground font-mono">
                Software Developer
              </p>
            </div>
          </MangaPanel>

          {/* Bio panel - main */}
          <MangaPanel
            className="p-6 md:p-8 relative"
            delay={0.3}
            direction="right"
          >
            <div className="halftone-subtle absolute inset-0" />
            <div className="relative z-10 space-y-4">
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                {"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                {["React", "TypeScript", "Next.js", "Node.js", "Python", "Go"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono border border-foreground/20 text-foreground/70 hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </MangaPanel>

          {/* Stats panel */}
          <MangaPanel
            className="p-4 md:p-6"
            delay={0.4}
            direction="up"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "OPEN", label: "To Work" },
                { value: "4", label: "Projects" },
                { value: "\u221E", label: "Curiosity" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl md:text-3xl font-black">{stat.value}</span>
                  <p className="text-xs font-mono text-muted-foreground mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </MangaPanel>
        </div>
      </div>
    </section>
  )
}
