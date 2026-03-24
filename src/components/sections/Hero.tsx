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
      className="overflow-hidden px-8 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >

      {/* Left — text */}
      <div className="relative z-10">
        <div
          style={{ color: "var(--ac-blue)" }}
          className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-4"
        >
          <span className="block w-5 h-px bg-[var(--ac-blue)]" />
          3rd Year Computer Science & Engineering Student
        </div>

        <h1
          style={{ color: "var(--tx-primary)" }}
          className="text-5xl font-semibold leading-[1.1] tracking-tight mb-4"
        >
          {person.tagline}
          <br />
          <span className="text-gradient">{person.taglineAccent}</span>
        </h1>

        <p
          style={{ color: "var(--tx-secondary)" }}
          className="text-sm leading-relaxed max-w-md mb-8"
        >
          {person.bio}
        </p>

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

      {/* Right — photo */}
      <div className="flex flex-col gap-3">

        {/* Photo card */}
        <div
          style={{ border: "1px solid var(--bd-card)" }}
          className="rounded-2xl overflow-hidden relative w-80 h-96 mx-auto"
        >
          <img
            src="/images/avatar.jpeg"
            alt={person.name}
            className="w-full h-full object-cover object-top"
          />
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
      </div>
    </section>
  );
}