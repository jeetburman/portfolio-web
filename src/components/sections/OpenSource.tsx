import { OpenSourceItem } from "@/types";

interface OpenSourceProps {
  items: OpenSourceItem[];
}

function OpenSourceCard({ item }: { item: OpenSourceItem }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--bd-card)",
      }}
      className="rounded-2xl p-5 flex gap-4 items-start transition-all duration-200 hover:border-[var(--bd-card-hov)] hover:bg-[var(--bg-card-hov)]"
    >
      {/* GitHub icon */}
      <div
        style={{
          background: "rgba(39,80,10,0.2)",
          border: "1px solid rgba(104,211,145,0.2)",
        }}
        className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1C3.7 1 1 3.7 1 7c0 2.65 1.72 4.9 4.1 5.7.3.06.4-.13.4-.29v-.99c-1.66.36-2.01-.8-2.01-.8-.27-.69-.66-.87-.66-.87-.54-.37.04-.36.04-.36.6.04.91.62.91.62.53.9 1.38.64 1.72.49.05-.38.21-.64.38-.79-1.31-.15-2.69-.66-2.69-2.93 0-.65.23-1.18.61-1.6-.06-.15-.27-.75.06-1.56 0 0 .5-.16 1.64.62A5.7 5.7 0 017 4.94c.5 0 1.01.07 1.49.21 1.14-.78 1.64-.62 1.64-.62.33.81.12 1.41.06 1.56.38.42.61.95.61 1.6 0 2.28-1.39 2.78-2.71 2.93.21.18.4.55.4 1.11v1.64c0 .16.1.35.41.29C11.29 11.9 13 9.65 13 7c0-3.3-2.7-6-6-6z"
            fill="var(--ac-green)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            
             <a href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--tx-primary)" }}
              className="text-sm font-semibold hover:text-[color:var(--ac-blue)] transition-colors"
            >
              {item.repo}
            </a>
            <p
              style={{ color: "var(--tx-muted)" }}
              className="text-[11px] mt-0.5"
            >
              
            <a href={item.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--ac-blue)] transition-colors"
              >
                {item.org}
              </a>
            </p>
          </div>
        </div>

        <p
          style={{ color: "var(--tx-secondary)" }}
          className="text-xs leading-relaxed mb-2"
        >
          {item.description}
        </p>

        <p
          style={{ color: "var(--ac-green)" }}
          className="text-[11px] font-medium"
        >
          {item.stat}
        </p>
      </div>
    </div>
  );
}

export default function OpenSource({ items }: OpenSourceProps) {
  return (
    <section
      id="opensource"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      <div
        style={{ color: "var(--ac-blue)" }}
        className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase mb-8"
      >
        <span className="block w-4 h-px bg-[var(--ac-blue)]" />
        Open Source
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <OpenSourceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}