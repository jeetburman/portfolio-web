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
        style={{
          background: `linear-gradient(135deg, ${item.logoBg
            .replace("from-[", "")
            .replace("]", "")
            .replace(" to-[", ", ")
            .replace("]", "")})`,
          border: "1px solid rgba(255,255,255,0.08)",
          color: item.logoColor,
        }}
        className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-semibold"
      >
        {item.logoInitials}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              style={{ color: "var(--tx-primary)" }}
              className="text-sm font-semibold"
            >
              {item.role}
            </h3>
            <p
              style={{ color: "var(--tx-muted)" }}
              className="text-xs mt-0.5"
            >
              {item.org} · {item.description}
            </p>
            <p
              style={{ color: "var(--tx-muted)" }}
              className="text-[11px] mt-0.5 opacity-60"
            >
              {item.start} – {item.end}
            </p>
          </div>

          {/* Metric */}
          {item.metric && (
            <div
              style={{
                color: "var(--tx-muted)",
                border: "1px solid var(--bd-card)",
                background: "var(--bg-card)",
              }}
              className="flex-shrink-0 text-[10px] text-right leading-relaxed px-3 py-1.5 rounded-lg whitespace-pre-line"
            >
              {item.metric}
            </div>
          )}
        </div>

        {/* Bullets */}
        <ul className="mt-3 flex flex-col gap-1.5">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{ color: "var(--tx-secondary)" }}
              className="text-xs leading-relaxed flex gap-2"
            >
              <span
                style={{ color: "var(--ac-blue)" }}
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[var(--ac-blue)]"
              />
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