import { Education } from "@/types";

interface EducationProps {
  education: Education;
}

const noteStyles: Record<number, { color: string; bg: string; border: string }> = {
  0: {
    color: "#63b3ed",
    bg: "rgba(99,179,237,0.08)",
    border: "rgba(99,179,237,0.25)",
  },
  1: {
    color: "#68d391",
    bg: "rgba(104,211,145,0.08)",
    border: "rgba(104,211,145,0.25)",
  },
};

export default function EducationSection({ education }: EducationProps) {
  return (
    <section
      id="education"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      {/* Section header */}
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Education
      </div>

      {/* Card */}
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--bd-card)",
        }}
        className="rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left — degree info */}
        <div className="flex flex-col gap-4">
          <div>
            <h3
              style={{ color: "var(--tx-primary)" }}
              className="text-base font-semibold mb-1"
            >
              {education.degree}
            </h3>
            <p
              style={{ color: "var(--tx-secondary)" }}
              className="text-sm"
            >
              {education.university}
            </p>
            <p
              style={{ color: "var(--tx-muted)" }}
              className="text-xs mt-1"
            >
              {education.start} – {education.end} (expected)
            </p>
          </div>

          {/* SGPA */}
          <div className="flex items-baseline gap-2">
            <span
              style={{ color: "var(--ac-blue)" }}
              className="text-4xl font-semibold"
            >
              {education.sgpa}
            </span>
            <span
              style={{ color: "var(--tx-muted)" }}
              className="text-xs"
            >
              SGPA
            </span>
          </div>

          {/* Notes / badges */}
          <div className="flex flex-col gap-2">
            {education.notes.map((note, i) => (
              <span
                key={note}
                style={{
                  color: noteStyles[i]?.color ?? "#a0aec0",
                  background: noteStyles[i]?.bg ?? "rgba(160,160,160,0.08)",
                  border: `1px solid ${noteStyles[i]?.border ?? "rgba(160,160,160,0.2)"}`,
                }}
                className="text-xs px-3 py-1.5 rounded-full w-fit"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Right — coursework */}
        <div>
          <p
            style={{ color: "var(--tx-muted)" }}
            className="text-[10px] font-medium tracking-widest uppercase mb-4"
          >
            Relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                style={{
                  color: "var(--tx-secondary)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
                className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:border-[var(--bd-card-hov)]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}