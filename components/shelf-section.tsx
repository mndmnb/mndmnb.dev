"use client"

import { MangaPanel } from "./manga-panel"
import { SpeedLines } from "./speed-lines"
import { SFXText } from "./sfx-text"
import Image from "next/image"

const mangaList = [
  { title: "Berserk", author: "Kentaro Miura", status: "Completed", rating: "10/10", genre: "Dark Fantasy" },
  { title: "Vagabond", author: "Takehiko Inoue", status: "Reading", rating: "10/10", genre: "Historical" },
  { title: "One Piece", author: "Eiichiro Oda", status: "Current", rating: "9/10", genre: "Adventure" },
  { title: "Chainsaw Man", author: "Tatsuki Fujimoto", status: "Current", rating: "9/10", genre: "Action" },
  { title: "Monster", author: "Naoki Urasawa", status: "Completed", rating: "10/10", genre: "Thriller" },
  { title: "Vinland Saga", author: "Makoto Yukimura", status: "Current", rating: "9/10", genre: "Historical" },
]

const animeList = [
  { title: "Cowboy Bebop", studio: "Sunrise", status: "Watched", rating: "10/10" },
  { title: "Attack on Titan", studio: "MAPPA", status: "Watched", rating: "9/10" },
  { title: "Mob Psycho 100", studio: "Bones", status: "Watched", rating: "9/10" },
  { title: "Jujutsu Kaisen", studio: "MAPPA", status: "Watching", rating: "8/10" },
]

export function ShelfSection() {
  return (
    <section className="p-[var(--panel-gap)]" id="shelf">
      {/* Section header */}
      <MangaPanel
        className="p-3 md:p-4 flex items-center gap-4 mb-[var(--panel-gap)]"
        delay={0}
      >
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground">
          CHAPTER 04
        </span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-lg md:text-xl font-black tracking-tight">THE SHELF</span>
        <div className="flex-1 h-px bg-foreground/20" />
        <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground">
          PAGE 04
        </span>
      </MangaPanel>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--panel-gap)]">
        {/* Shelf illustration panel */}
        <MangaPanel
          className="md:col-span-4 min-h-[300px] md:min-h-[600px] relative"
          delay={0.1}
          direction="left"
          thick
        >
          <Image
            src="/images/manga-cafe.jpg"
            alt="Manga-style cozy manga cafe interior with tall bookshelves"
            fill
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute top-4 left-4 z-10">
            <SFXText text="RUSTLE~" size="sm" />
          </div>
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[10px] font-mono text-muted-foreground bg-card/80 px-2 py-1">
              FIG. 04.1
            </span>
          </div>
        </MangaPanel>

        {/* Lists */}
        <div className="md:col-span-8 grid gap-[var(--panel-gap)]">
          {/* Manga list */}
          <MangaPanel
            className="p-6 md:p-8 relative"
            delay={0.2}
            direction="right"
          >
            <SpeedLines direction="horizontal" count={4} className="opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">MANGA</h3>
                <div className="flex-1 h-px bg-foreground/10" />
                <span className="text-xs font-mono text-muted-foreground">
                  {mangaList.length} TITLES
                </span>
              </div>

              <div className="space-y-0">
                {mangaList.map((manga, i) => (
                  <div
                    key={manga.title}
                    className="flex items-center justify-between py-3 border-b border-foreground/10 last:border-0 group hover:bg-foreground/[0.03] transition-colors -mx-2 px-2"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground/50 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="text-sm md:text-base font-black tracking-tight block">
                          {manga.title}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {manga.author} / {manga.genre}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 ${
                        manga.status === "Current"
                          ? "bg-foreground text-primary-foreground"
                          : manga.status === "Reading"
                          ? "bg-foreground/80 text-primary-foreground"
                          : "bg-foreground/10 text-foreground/60"
                      }`}>
                        {manga.status.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-foreground/50 hidden sm:block">
                        {manga.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MangaPanel>

          {/* Anime list */}
          <MangaPanel
            className="p-6 md:p-8 relative"
            delay={0.3}
            direction="right"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">ANIME</h3>
                <div className="flex-1 h-px bg-foreground/10" />
                <span className="text-xs font-mono text-muted-foreground">
                  {animeList.length} TITLES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--panel-gap)]">
                {animeList.map((anime) => (
                  <div
                    key={anime.title}
                    className="panel-border p-4 hover:bg-foreground hover:text-primary-foreground transition-colors group cursor-default"
                  >
                    <span className="text-sm font-black tracking-tight block">
                      {anime.title}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary-foreground/60 transition-colors">
                      {anime.studio}
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-[10px] font-mono tracking-wider ${
                        anime.status === "Watching"
                          ? "text-foreground group-hover:text-primary-foreground"
                          : "text-foreground/50 group-hover:text-primary-foreground/50"
                      }`}>
                        {anime.status.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-foreground/50 group-hover:text-primary-foreground/50 transition-colors">
                        {anime.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MangaPanel>

          {/* Bottom note */}
          <MangaPanel
            className="p-4 flex items-center justify-between"
            delay={0.4}
            direction="up"
          >
            <span className="text-xs font-mono text-muted-foreground tracking-wide">
              {"THESE ARE PLACEHOLDERS \u2014 SWAP WITH YOUR ACTUAL LISTS"}
            </span>
            <span className="text-xs font-mono text-muted-foreground/50">
              ALWAYS EXPANDING
            </span>
          </MangaPanel>
        </div>
      </div>
    </section>
  )
}
