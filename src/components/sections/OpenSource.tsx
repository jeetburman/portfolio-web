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