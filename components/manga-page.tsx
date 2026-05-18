"use client"

import { MangaNav } from "./manga-nav"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { WorkSection } from "./work-section"
import { ShelfSection } from "./shelf-section"
import { ContactSection } from "./contact-section"
import { FooterSection } from "./footer-section"
import { TransitionPanel } from "./transition-panel"
import { ScrollProgress } from "./ink-effects"

export function MangaPage() {
  return (
    <main className="relative noise-overlay min-h-screen">
      <ScrollProgress />
      <MangaNav />

      {/* Spacer for fixed nav */}
      <div className="h-14" />

      <HeroSection />
      <TransitionPanel />
      <AboutSection />
      <TransitionPanel />
      <WorkSection />
      <TransitionPanel />
      <ShelfSection />
      <TransitionPanel />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
