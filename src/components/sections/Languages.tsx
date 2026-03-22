import { Language } from "@/types";

interface LanguagesProps {
  languages: Language[];
}

const levelLabels: Record<string, string> = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper Intermediate",
  C1: "Fluent",
  C2: "Native",
};

export default function Languages({ languages }: LanguagesProps) {
  return (
    <section
      id="languages"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Languages
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bd-card)",
            }}
            className="rounded-2xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-200 hover:border-[var(--bd-card-hov)] hover:bg-[var(--bg-card-hov)]"
          >
            {/* Flag */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[var(--bd-card)]">
              <img
                src={lang.flag}
                alt={`${lang.name} flag`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <div>
              <p
                style={{ color: "var(--tx-primary)" }}
                className="text-sm font-semibold"
              >
                {lang.name}
              </p>
              <p
                style={{ color: "var(--tx-muted)" }}
                className="text-[11px] mt-0.5"
              >
                {lang.level} · {levelLabels[lang.level] ?? lang.level}
              </p>
            </div>

            {/* Color accent bar */}
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}