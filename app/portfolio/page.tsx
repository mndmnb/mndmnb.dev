"use client"

import Link from "next/link"

export default function Hub() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b-[3px] border-foreground text-[10px] font-bold tracking-[0.15em] font-mono">
        <span>MNDMNB</span>
        <span>TABLE OF CONTENTS</span>
        <span>VOL.01</span>
      </div>

      {/* WIP banner */}
      <div className="px-6 py-2 border-b-[1.5px] border-foreground bg-foreground text-background text-[10px] font-bold tracking-[0.2em] font-mono text-center">
        ⚠ WORK IN PROGRESS ⚠
      </div>

      <div className="flex-1 px-6 py-5 max-w-4xl mx-auto w-full">
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
              manga · manhwa · comics · novels
            </div>
          </div>
          <span className="text-sm font-extrabold">p. 14</span>
          <span className="text-[9px] font-extrabold border-2 border-foreground px-2 py-1 opacity-45">
            SOON
          </span>
        </div>

        {/* CH 03 — SYSTEM (soon) */}
        <div className="flex items-baseline gap-4 py-5 border-b-[1.5px] border-foreground">
          <span className="text-sm font-black min-w-[60px]">CH. 03</span>
          <div className="flex-1">
            <div className="text-2xl font-black tracking-tight">SYSTEM</div>
            <div className="text-[11px] font-semibold opacity-60 mt-0.5">
              homelab · dotfiles · tools
            </div>
          </div>
          <span className="text-sm font-extrabold">p. ??</span>
          <span className="text-[9px] font-extrabold border-2 border-foreground px-2 py-1 opacity-45">
            SOON
          </span>
        </div>

        <div className="flex justify-between items-center mt-5 pt-3.5 border-t-[3px] border-foreground text-[10px] font-bold tracking-[0.15em] font-mono">
          <span>MNDMNB.DEV</span>
          <span>SELECT A CHAPTER →</span>
        </div>
      </div>
    </main>
  )
}