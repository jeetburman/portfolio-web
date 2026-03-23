import { ExperienceItem } from "@/types";

interface ExperienceProps {
  experience: ExperienceItem[];
}
function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--bd-card)",
      }}
      className="rounded-2xl p-5 flex gap-4 items-start transition-all duration-200 hover:border-[var(--bd-card-hov)] hover:bg-[var(--bg-card-hov)]"
    >
      {/* Logo */}
      <div
        style={{ border: "1px solid var(--bd-card)" }}
        className="w-11 h-11 rounded-xl flex-shrink-0 overflow-hidden bg-white flex items-center justify-center"
      >
        <img
          src={item.logo}
          alt={item.org}
          className="w-full h-full object-contain p-1"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">

        {/* Top row — title + date/proof on desktop */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3
              style={{ color: "var(--tx-primary)" }}
              className="text-sm font-semibold"
            >
              {item.role}
            </h3>

            {/* Date + proof — visible on mobile only, sits under title */}
            <div className="flex items-center flex-wrap gap-2 mt-1.5 mb-1 md:hidden">
              <span
                style={{
                  color: "var(--ac-blue)",
                  background: "rgba(99,179,237,0.08)",
                  border: "1px solid rgba(99,179,237,0.20)",
                }}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg whitespace-nowrap"
              >
                {item.start} – {item.end}
              </span>
              {item.proofUrl && (
                
                 <a href={item.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--tx-muted)",
                    border: "1px solid var(--bd-card)",
                    background: "var(--bg-card)",
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:border-[var(--bd-card-hov)] hover:text-[color:var(--ac-blue)] transition-all duration-200 text-[10px]"
                >
                  {item.proofType === "github" ? (
                    <svg width="12" height="12" viewBox="0 0 98 96" fill="currentColor">
                      <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M6.6 0h86.8C97.1 0 100 2.9 100 6.6v86.8c0 3.6-2.9 6.6-6.6 6.6H6.6C2.9 100 0 97.1 0 93.4V6.6C0 2.9 2.9 0 6.6 0zm62.3 70.1V29.5L30.7 70.1h38.2zm-38.8 0L68.3 29.9H30.1v40.2z"/>
                    </svg>
                  )}
                  Proof of Work
                </a>
              )}
            </div>

            <p
              style={{ color: "var(--tx-muted)" }}
              className="text-xs mt-0.5"
            >
              {item.org} · {item.description}
            </p>
          </div>

          {/* Date + proof — desktop only, right side */}
          <div className="hidden md:flex flex-col items-end gap-2 flex-shrink-0">
            <span
              style={{
                color: "var(--ac-blue)",
                background: "rgba(99,179,237,0.08)",
                border: "1px solid rgba(99,179,237,0.20)",
              }}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg whitespace-nowrap"
            >
              {item.start} – {item.end}
            </span>

            {item.proofUrl && (
              
               <a href={item.proofUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--tx-muted)",
                  border: "1px solid var(--bd-card)",
                  background: "var(--bg-card)",
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:border-[var(--bd-card-hov)] hover:text-[color:var(--ac-blue)] transition-all duration-200 text-[11px]"
              >
                {item.proofType === "github" ? (
                  <svg width="12" height="12" viewBox="0 0 98 96" fill="currentColor">
                    <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M6.6 0h86.8C97.1 0 100 2.9 100 6.6v86.8c0 3.6-2.9 6.6-6.6 6.6H6.6C2.9 100 0 97.1 0 93.4V6.6C0 2.9 2.9 0 6.6 0zm62.3 70.1V29.5L30.7 70.1h38.2zm-38.8 0L68.3 29.9H30.1v40.2z"/>
                  </svg>
                )}
                Proof of Work
              </a>
            )}
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-3 flex flex-col gap-1.5">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{ color: "var(--tx-secondary)" }}
              className="text-xs leading-relaxed flex gap-2"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[var(--ac-blue)]" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                color: "var(--ac-blue)",
                border: "1px solid var(--bd-card)",
                background: "rgba(99,179,237,0.06)",
              }}
              className="text-[10px] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ experience }: ExperienceProps) {
  const internships = experience.filter((e) => e.type === "internship");
  const opensource = experience.filter((e) => e.type === "opensource");

  return (
    <section
      id="experience"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      {/* Section header */}
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Experience
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Internships */}
        <div>
          <p
            style={{ color: "var(--tx-muted)" }}
            className="text-[11px] font-medium tracking-widest uppercase mb-4"
          >
            Internships
          </p>
          <div className="flex flex-col gap-4">
            {internships.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div>
          <p
            style={{ color: "var(--tx-muted)" }}
            className="text-[11px] font-medium tracking-widest uppercase mb-4"
          >
            Open Source
          </p>
          <div className="flex flex-col gap-4">
            {opensource.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}