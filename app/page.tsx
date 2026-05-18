"use client"

import Link from "next/link"

export default function Hub() {
  return (
    <main className="bg-background text-foreground">
      {/* SCREEN 1 — VOLUME COVER */}
      <section className="relative h-screen w-full flex flex-col">
        <div className="flex justify-between items-center px-6 py-4 border-b-[3px] border-foreground text-[10px] font-bold tracking-[0.15em] font-mono">
          <span>MNDMNB</span>
          <span>VOL. 01</span>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-2 px-6">
          <div className="text-[11px] font-bold tracking-[0.35em] opacity-55 font-mono">
            THE COLLECTED WORKS OF
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] text-center">
            MUNEEB
          </h1>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] opacity-[0.28] text-center">
            MENNAD
          </h1>
          <div className="mt-4 w-16 h-[3px] bg-foreground" />
          <div className="mt-4 text-[11px] font-bold tracking-[0.2em] font-mono">
            SOFTWARE DEVELOPER
          </div>
          <div className="absolute top-20 right-8 rotate-[8deg] font-manga text-2xl">
            vol.1
          </div>
        </div>

        <div className="pb-6 flex justify-center items-center gap-2 text-[10px] font-bold tracking-[0.2em] font-mono animate-pulse">
          <span>OPEN THE VOLUME</span>
          <span className="text-sm">↓</span>
        </div>
      </section>

      {/* SCREEN 2 — TABLE OF CONTENTS */}
      <section className="min-h-screen w-full">
        <div className="flex justify-between items-center px-6 py-4 border-b-[3px] border-foreground text-[10px] font-bold tracking-[0.15em] font-mono">
          <span>MNDMNB</span>
          <span>TABLE OF CONTENTS</span>
          <span>VOL.01</span>
        </div>

        <div className="px-6 py-5 max-w-4xl mx-auto">
          {/* CH 01 — PORTFOLIO (live) */}
          <Link
            href="/portfolio"
            className="flex items-baseline gap-4 py-5 border-b-[1.5px] border-foreground group hover:opacity-60 transition-opacity"
          >
            <span className="text-sm font-black min-w-[60px]">CH. 01</span>
            <div className="flex-1">
              <div className="text-2xl font-black tracking-tight">PORTFOLIO</div>
              <div className="text-[11px] font-semibold opacity-60 mt-0.5">
                who I am · what I&apos;ve built · contact
              </div>
            </div>
            <span className="text-sm font-extrabold">p. 02</span>
            <span className="text-[9px] font-extrabold border-2 border-foreground px-2 py-1">
              LIVE →
            </span>
          </Link>

          {/* CH 02 — THE LIBRARY (soon) */}
          <div className="flex items-baseline gap-4 py-5 border-b-[1.5px] border-foreground">
            <span className="text-sm font-black min-w-[60px]">CH. 02</span>
            <div className="flex-1">
              <div className="text-2xl font-black tracking-tight">THE LIBRARY</div>
              <div className="text-[11px] font-semibold opacity-60 mt-0.5">
                manga · manhwa · light novels — what I&apos;m reading
              </div>
            </div>
            <span className="text-sm font-extrabold">p. 14</span>
            <span className="text-[9px] font-extrabold border-2 border-foreground px-2 py-1 opacity-45">
              SOON
            </span>
          </div>

          {/* CH 03 — placeholder */}
          <div className="flex items-baseline gap-4 py-5 border-b-[1.5px] border-foreground opacity-40">
            <span className="text-sm font-black min-w-[60px]">CH. 03</span>
            <div className="flex-1">
              <div className="text-2xl font-black tracking-tight">— — — — —</div>
              <div className="text-[11px] font-semibold opacity-60 mt-0.5">
                future volume
              </div>
            </div>
            <span className="text-sm font-extrabold">p. ??</span>
          </div>

          <div className="flex justify-between items-center mt-5 pt-3.5 border-t-[3px] border-foreground text-[10px] font-bold tracking-[0.15em] font-mono">
            <span>MNDMNB.DEV</span>
            <span>SELECT A CHAPTER TO ENTER →</span>
          </div>
        </div>
      </section>
    </main>
  )
}