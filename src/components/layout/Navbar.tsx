"use client";

import { useTheme } from "@/context/ThemeContext";
import { Person } from "@/types";

interface NavbarProps {
  person: Person;
}

const navLinks = [
  { label: "projects",    href: "#projects" },
  { label: "experience",  href: "#experience" },
  { label: "open source", href: "#opensource" },
  { label: "hackathons",  href: "#hackathons" },
  { label: "skills",      href: "#skills" },
  { label: "about",       href: "#about" },
];

export default function Navbar({ person }: NavbarProps) {
  const { theme, toggle } = useTheme();

  return (
    <nav
      style={{
        backgroundColor: "var(--bg-base)",
        borderBottom: "1px solid var(--bd-card)",
      }}
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300"
    >
      {/* Logo */}
      <span className="text-gradient text-[15px] font-semibold tracking-tight">
        {person.name}
      </span>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          
           <a key={link.href}
            href={link.href}
            style={{ color: "var(--tx-muted)" }}
            className="text-[12px] transition-colors duration-200 hover:text-[color:var(--ac-blue)]"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        
        <a  href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--ac-blue)",
            border: "1px solid var(--bd-card-hov)",
          }}
          className="text-[12px] rounded-lg px-4 py-[5px] transition-colors duration-200 hover:bg-[var(--bg-card)]"
        >
          resume ↗
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          style={{ border: "1px solid var(--bd-card)" }}
          className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-card)] transition-all duration-200 hover:border-[var(--bd-card-hov)]"
        >
          {theme === "dark" ? (
            /* Sun icon */
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
              stroke="var(--tx-secondary)" strokeWidth="1.4" strokeLinecap="round">
              <circle cx="8" cy="8" r="3.5" />
              <line x1="8" y1="1"  x2="8"  y2="3"  />
              <line x1="8" y1="13" x2="8"  y2="15" />
              <line x1="1" y1="8"  x2="3"  y2="8"  />
              <line x1="13" y1="8" x2="15" y2="8"  />
              <line x1="3.05"  y1="3.05"  x2="4.46"  y2="4.46"  />
              <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
              <line x1="3.05"  y1="12.95" x2="4.46"  y2="11.54" />
              <line x1="11.54" y1="4.46"  x2="12.95" y2="3.05"  />
            </svg>
          ) : (
            /* Moon icon */
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
              stroke="var(--tx-secondary)" strokeWidth="1.4" strokeLinecap="round">
              <path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}