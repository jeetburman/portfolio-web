import type { Skills } from "@/types";

interface SkillsProps {
  skills: Skills;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      {/* Section header */}
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Skills
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden mb-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-track flex gap-3 w-max">
          {/* Duplicate the list for seamless loop */}
          {[...skills.marquee.map((t, i) => ({ ...t, key: `a-${i}` })), ...skills.marquee.map((t, i) => ({ ...t, key: `b-${i}` }))].map((tech) => (
        <div
          key={tech.key}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bd-card)",
                color: "var(--tx-secondary)",
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.categories.map((cat) => (
          <div
            key={cat.label}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bd-card)",
            }}
            className="rounded-2xl p-5"
          >
            {/* Category label */}
            <p
              style={{
                color: "var(--ac-blue)",
                borderBottom: "1px solid var(--bd-card)",
              }}
              className="text-[10px] font-medium tracking-widest uppercase pb-3 mb-3"
            >
              {cat.label}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    color: "var(--tx-secondary)",
                    border: "1px solid var(--bd-card)",
                    background: "rgba(99,179,237,0.06)",
                  }}
                  className="text-xs px-2.5 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}