"use client"

export function KoiFish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fish body */}
      <ellipse cx="50" cy="25" rx="35" ry="14" fill="currentColor" />
      {/* Tail */}
      <path
        d="M80 25 C90 10, 110 8, 115 20 C110 18, 105 22, 100 25 C105 28, 110 32, 115 30 C110 42, 90 40, 80 25Z"
        fill="currentColor"
      />
      {/* Eye */}
      <circle cx="28" cy="22" r="4" fill="white" />
      <circle cx="27" cy="21" r="2" fill="black" />
      {/* Mouth */}
      <path d="M15 25 Q18 28, 22 26" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Dorsal fin */}
      <path
        d="M40 11 C45 2, 55 3, 60 11"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Side pattern - manga style markings */}
      <path
        d="M35 18 Q40 15, 50 17"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M38 30 Q45 33, 55 31"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

export function KoiPondScene() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Ripples */}
      {[
        { x: "30%", y: "40%", delay: "0s", size: 40 },
        { x: "60%", y: "60%", delay: "1s", size: 30 },
        { x: "45%", y: "75%", delay: "2s", size: 50 },
        { x: "70%", y: "30%", delay: "0.5s", size: 35 },
      ].map((ripple, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-foreground/10 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDelay: ripple.delay,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Swimming koi fish */}
      <div
        className="absolute animate-swim text-foreground"
        style={{ top: "35%", left: "20%", animationDelay: "0s" }}
      >
        <KoiFish className="w-20 h-9" />
      </div>
      <div
        className="absolute animate-swim text-foreground/60"
        style={{ top: "55%", left: "50%", animationDelay: "2s", animationDuration: "10s" }}
      >
        <KoiFish className="w-16 h-7" />
      </div>
      <div
        className="absolute animate-swim text-foreground/40"
        style={{ top: "70%", left: "10%", animationDelay: "4s", animationDuration: "12s" }}
      >
        <KoiFish className="w-12 h-5" />
      </div>
    </div>
  )
}
