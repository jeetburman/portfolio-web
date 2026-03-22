import { Hackathon, Achievement } from "@/types";

interface HackathonsProps {
  hackathons: Hackathon[];
  achievements: Achievement[];
}

const medalStyles = {
  gold: {
    bg: "rgba(183,121,31,0.15)",
    border: "rgba(183,121,31,0.35)",
    fill: "#b7791f",
    star: "#fef3c7",
  },
  silver: {
    bg: "rgba(100,100,100,0.15)",
    border: "rgba(160,160,160,0.25)",
    fill: "#5F5E5A",
    star: "#D3D1C7",
  },
  bronze: {
    bg: "rgba(180,100,40,0.15)",
    border: "rgba(180,100,40,0.30)",
    fill: "#9C4221",
    star: "#FBD38D",
  },
};

function MedalIcon({ type }: { type: "gold" | "silver" | "bronze" }) {
  const s = medalStyles[type];
  return (
    <div
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5" fill={s.fill} />
        <path
          d="M7 3.5l.9 2.7h2.8l-2.2 1.6.8 2.7L7 8.9l-2.3 1.6.8-2.7-2.2-1.6h2.8z"
          fill={s.star}
        />
      </svg>
    </div>
  );
}

export default function Hackathons({
  hackathons,
  achievements,
}: HackathonsProps) {
  return (
    <section
      id="hackathons"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Hackathons & Achievements
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hackathons */}
        <div>
          <p
            style={{ color: "var(--tx-muted)" }}
            className="text-[11px] font-medium tracking-widest uppercase mb-4"
          >
            Hackathons
          </p>
          <div className="flex flex-col gap-3">
            {hackathons.map((h) => (
              <div
                key={h.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
                className="rounded-2xl p-4 flex gap-3 items-start transition-all duration-200 hover:border-[var(--bd-card-hov)]"
              >
                <MedalIcon type={h.medalType} />
                <div>
                  <p
                    style={{ color: "var(--tx-primary)" }}
                    className="text-sm font-semibold"
                  >
                    {h.event}
                  </p>
                  <p
                    style={{ color: "var(--tx-muted)" }}
                    className="text-xs mt-0.5"
                  >
                    {h.placement} · {h.level} · {h.year}
                  </p>
                  <p
                    style={{ color: "var(--tx-secondary)" }}
                    className="text-xs mt-1.5 leading-relaxed"
                  >
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <p
            style={{ color: "var(--tx-muted)" }}
            className="text-[11px] font-medium tracking-widest uppercase mb-4"
          >
            Achievements
          </p>
          <div className="flex flex-col gap-3">
            {achievements.map((a) => (
              <div
                key={a.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bd-card)",
                }}
                className="rounded-2xl p-4 flex gap-3 items-start transition-all duration-200 hover:border-[var(--bd-card-hov)]"
              >
                <MedalIcon type={a.medalType} />
                <div>
                  <p
                    style={{ color: "var(--tx-primary)" }}
                    className="text-sm font-semibold"
                  >
                    {a.title}
                  </p>
                  <p
                    style={{ color: "var(--tx-secondary)" }}
                    className="text-xs mt-1.5 leading-relaxed"
                  >
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}