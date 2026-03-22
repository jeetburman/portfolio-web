"use client";

import { Person } from "@/types";

interface HeroProps {
  person: Person;
}

export default function Hero({ person }: HeroProps) {
  return (
    <section
      id="about"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="relative overflow-hidden px-8 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--glow-1) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-20 w-60 h-60 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--glow-2) 0%, transparent 70%)",
        }}
      />

      {/* Left — text */}
      <div className="relative z-10">
        {/* Eyebrow */}
        <div
          style={{ color: "var(--ac-blue)" }}
          className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-4"
        >
          <span className="block w-5 h-px bg-[var(--ac-blue)]" />
          CS Engineering · 3rd year · Kolkata
        </div>

        {/* Name / tagline */}
        <h1
          style={{ color: "var(--tx-primary)" }}
          className="text-5xl font-semibold leading-[1.1] tracking-tight mb-4"
        >
          {person.tagline}
          <br />
          <span className="text-gradient">{person.taglineAccent}</span>
        </h1>

        {/* Bio */}
        <p
          style={{ color: "var(--tx-secondary)" }}
          className="text-sm leading-relaxed max-w-md mb-8"
        >
          {person.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          
           <a href="#projects"
            className="btn-gradient text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          
           <a href={`mailto:${person.email}`}
            style={{
              border: "1px solid var(--bd-card-hov)",
              color: "var(--tx-secondary)",
            }}
            className="text-sm rounded-lg px-5 py-2.5 transition-colors hover:bg-[var(--bg-card)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Right — photo + stats + languages */}
      <div className="relative z-10 flex flex-col gap-3">

        {/* Photo card */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--bd-card)",
          }}
          className="rounded-2xl overflow-hidden h-56 flex items-center justify-center relative"
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(99,179,237,0.15), rgba(159,122,234,0.15))",
              border: "2px solid var(--bd-card-hov)",
            }}
            className="w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1"
          >
            <span className="text-gradient text-2xl font-semibold">
              {person.initials}
            </span>
            <span
              style={{ color: "var(--tx-muted)" }}
              className="text-[10px] text-center leading-tight"
            >
              your photo
              <br />
              goes here
            </span>
          </div>

          {/* Open to work badge */}
          {person.openToWork && (
            <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ac-green)] animate-pulse" />
              <span
                style={{ color: "var(--tx-muted)" }}
                className="text-[10px]"
              >
                open to work
              </span>
            </div>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          {person.stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bd-card)",
              }}
              className="rounded-xl px-4 py-3"
            >
              <div
                style={{ color: "var(--ac-blue)" }}
                className="text-xl font-semibold mb-0.5"
              >
                {stat.value}
              </div>
              <div
                style={{ color: "var(--tx-muted)" }}
                className="text-[10px]"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Languages row */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--bd-card)",
          }}
          className="rounded-xl px-4 py-3 flex flex-wrap gap-4"
        >
          {person.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: lang.color }}
              />
              <span
                style={{ color: "var(--tx-secondary)" }}
                className="text-xs"
              >
                <span className="font-medium">{lang.name}</span>{" "}
                <span style={{ color: "var(--tx-muted)" }}>{lang.level}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}