import { Hobby } from "@/types";

interface HobbiesProps {
  hobbies: Hobby[];
}

export default function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <section
      id="hobbies"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Hobbies & Interests
      </div>

      <div className="flex flex-wrap gap-3">
        {hobbies.map((hobby, i) => (
        <div
            key={`${hobby.name}-${i}`}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bd-card)",
            }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-200 hover:border-[var(--bd-card-hov)] hover:bg-[var(--bg-card-hov)]"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: hobby.color }}
            />
            <span
              style={{ color: "var(--tx-secondary)" }}
              className="text-sm capitalize"
            >
              {hobby.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}