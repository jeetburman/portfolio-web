import { Person } from "@/types";

interface FooterProps {
  person: Person;
}

export default function Footer({ person }: FooterProps) {
  return (
    <footer
      style={{ borderTop: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-12"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left — name + tagline */}
        <div>
          <span className="text-gradient text-lg font-semibold tracking-tight">
            {person.name}
          </span>
          <p
            style={{ color: "var(--tx-muted)" }}
            className="text-xs mt-1"
          >
            {person.tagline} {person.taglineAccent}
          </p>
        </div>

        {/* Center — nav links */}
        <div className="flex flex-wrap gap-6">
          {[
            { label: "projects",    href: "#projects" },
            { label: "experience",  href: "#experience" },
            { label: "open source", href: "#opensource" },
            { label: "hackathons",  href: "#hackathons" },
            { label: "skills",      href: "#skills" },
          ].map((link) => (
            
            <a key={link.href}
              href={link.href}
              style={{ color: "var(--tx-muted)" }}
              className="text-xs hover:text-[color:var(--ac-blue)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — contact links */}
        <div className="flex items-center gap-4">
          
           <a href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tx-muted)" }}
            className="text-xs hover:text-[color:var(--ac-blue)] transition-colors flex items-center gap-1.5"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1C3.7 1 1 3.7 1 7c0 2.65 1.72 4.9 4.1 5.7.3.06.4-.13.4-.29v-.99c-1.66.36-2.01-.8-2.01-.8-.27-.69-.66-.87-.66-.87-.54-.37.04-.36.04-.36.6.04.91.62.91.62.53.9 1.38.64 1.72.49.05-.38.21-.64.38-.79-1.31-.15-2.69-.66-2.69-2.93 0-.65.23-1.18.61-1.6-.06-.15-.27-.75.06-1.56 0 0 .5-.16 1.64.62A5.7 5.7 0 017 4.94c.5 0 1.01.07 1.49.21 1.14-.78 1.64-.62 1.64-.62.33.81.12 1.41.06 1.56.38.42.61.95.61 1.6 0 2.28-1.39 2.78-2.71 2.93.21.18.4.55.4 1.11v1.64c0 .16.1.35.41.29C11.29 11.9 13 9.65 13 7c0-3.3-2.7-6-6-6z"
                fill="currentColor"
              />
            </svg>
            github
          </a>

          
        <a href={`mailto:${person.email}`}
            style={{ color: "var(--tx-muted)" }}
            className="text-xs hover:text-[color:var(--ac-blue)] transition-colors flex items-center gap-1.5"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {person.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--bd-card)",
          color: "var(--tx-muted)",
        }}
        className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]"
      >
        <span>
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </span>
        <span>Built with Next.js · Tailwind CSS · Deployed on Vercel</span>
      </div>
    </footer>
  );
}