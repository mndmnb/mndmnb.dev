"use client"

import { MangaPanel } from "./manga-panel"
import { SpeedLines } from "./speed-lines"
import { SFXText } from "./sfx-text"
import Image from "next/image"

const works = [
  {
    title: "Password Manager",
    category: "Security / Full-Stack",
    description: "A vault for your digital life, encrypted end-to-end",
    image: "/images/vault-door.jpg",
    alt: "Manga-style massive vault door with intricate gears and locks",
  },
  {
    title: "Robotics Simulator",
    category: "Simulation / Engineering",
    description: "Bringing machines to life in a virtual world",
    image: "/images/robot-arm.jpg",
    alt: "Manga-style robotic arm emerging from a computer screen",
  },
  {
    title: "Dawn to Dusk",
    category: "Data Viz / Nature",
    description: "Visualizing bird migration patterns across the Netherlands",
    image: "/images/birds-dawn.jpg",
    alt: "Manga-style birds in flight at dawn over Dutch countryside with data overlay",
  },
]

export function WorkSection() {
  return (
    <section className="p-[var(--panel-gap)]" id="work">
      {/* Section header */}
      <MangaPanel
        className="p-3 md:p-4 flex items-center gap-4 mb-[var(--panel-gap)]"
        delay={0}
      >
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground">
          CHAPTER 03
        </span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-lg md:text-xl font-black tracking-tight">WORK</span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground">
          PAGE 03
        </span>
      </MangaPanel>

      {/* Featured work - asymmetric manga layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--panel-gap)]">
        {/* Large featured panel */}
        <MangaPanel
          className="md:col-span-7 min-h-[400px] md:min-h-[500px] relative group cursor-pointer"
          delay={0.1}
          thick
        >
          <Image
            src={works[0].image}
            alt={works[0].alt}
            fill
            className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
          <SpeedLines direction="horizontal" count={6} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="text-xs font-mono tracking-[0.3em] text-primary-foreground/60 block mb-2">
              {works[0].category}
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-primary-foreground">
              {works[0].title}
            </h3>
            <p className="text-sm text-primary-foreground/70 mt-2 font-mono">
              {works[0].description}
            </p>
          </div>
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <SFXText text="BAM!" size="md" className="text-primary-foreground" />
          </div>
        </MangaPanel>

        {/* Stacked side panels */}
        <div className="md:col-span-5 grid grid-rows-2 gap-[var(--panel-gap)]">
          {works.slice(1).map((work, i) => (
            <MangaPanel
              key={work.title}
              className="relative min-h-[200px] md:min-h-0 group cursor-pointer"
              delay={0.2 + i * 0.15}
              direction="right"
            >
              <Image
                src={work.image}
                alt={work.alt}
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-xs font-mono tracking-[0.3em] text-primary-foreground/60 block mb-1">
                  {work.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-primary-foreground">
                  {work.title}
                </h3>
                <p className="text-xs text-primary-foreground/70 mt-1 font-mono">
                  {work.description}
                </p>
              </div>
            </MangaPanel>
          ))}
        </div>
      </div>

      {/* Bottom action panel */}
      <div className="mt-[var(--panel-gap)]">
        <MangaPanel
          className="p-4 md:p-6 flex items-center justify-between group cursor-pointer hover:bg-foreground transition-colors duration-300"
          delay={0.5}
        >
          <span className="text-sm font-mono tracking-wide group-hover:text-primary-foreground transition-colors">
            VIEW ALL WORKS
          </span>
          <div className="flex items-center gap-2 group-hover:text-primary-foreground transition-colors">
            <span className="text-xs font-mono text-muted-foreground group-hover:text-primary-foreground/60 transition-colors">
              3 PROJECTS
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </MangaPanel>
      </div>
    </section>
  )
}
