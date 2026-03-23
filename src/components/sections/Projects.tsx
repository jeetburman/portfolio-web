import { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

const statusStyles: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  live: {
    label: "live",
    color: "#68d391",
    bg: "rgba(29,158,117,0.15)",
    border: "rgba(29,158,117,0.30)",
  },
  wip: {
    label: "wip",
    color: "#f6ad55",
    bg: "rgba(186,117,23,0.15)",
    border: "rgba(186,117,23,0.30)",
  },
  api: {
    label: "api",
    color: "#63b3ed",
    bg: "rgba(49,130,206,0.15)",
    border: "rgba(49,130,206,0.30)",
  },
  archived: {
    label: "archived",
    color: "#a0aec0",
    bg: "rgba(100,100,100,0.15)",
    border: "rgba(100,100,100,0.30)",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status] ?? statusStyles.wip;

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--bd-card)",
      }}
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[var(--bd-card-hov)] hover:bg-[var(--bg-card-hov)] group"
    >
      {/* Image / thumbnail */}
      <div
        className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    ) : (
      <span
        style={{ color: "var(--tx-muted)" }}
        className="text-xs"
      >
        {project.title}
      </span>
    )}

        {/* Status badge */}
        <span
          style={{
            color: status.color,
            background: status.bg,
            border: `1px solid ${status.border}`,
          }}
          className="absolute top-3 right-3 text-[10px] font-medium px-2.5 py-1 rounded-full"
        >
          {status.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3
          style={{ color: "var(--tx-primary)" }}
          className="text-sm font-semibold"
        >
          {project.title}
        </h3>

        <p
          style={{ color: "var(--tx-muted)" }}
          className="text-xs leading-relaxed flex-1"
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
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

        {/* Links */}
        <div
          style={{ borderTop: "1px solid var(--bd-card)" }}
          className="pt-3 flex items-center gap-4"
        >
          {project.github && (
            
            <a href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--tx-muted)" }}
              className="flex items-center gap-1.5 text-[11px] hover:text-[color:var(--ac-blue)] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 1C2.8 1 1 2.8 1 5c0 1.77 1.15 3.27 2.74 3.8.2.04.27-.09.27-.19v-.67c-1.11.24-1.34-.54-1.34-.54-.27-.69-.66-.87-.66-.87-.54-.37.04-.36.04-.36.6.04.91.62.91.62.53.9 1.38.64 1.72.49.05-.38.21-.64.38-.79-1.31-.15-2.69-.66-2.69-2.93 0-.65.23-1.18.61-1.6-.06-.15-.27-.75.06-1.56 0 0 .5-.16 1.64.62A5.7 5.7 0 015 3.3c.5 0 1 .07 1.49.21 1.14-.78 1.64-.62 1.64-.62.33.81.12 1.41.06 1.56.38.42.61.95.61 1.6 0 2.28-1.39 2.78-2.71 2.93.21.18.4.55.4 1.11v1.64c0 .16.1.35.41.29C7.85 8.27 9 6.77 9 5c0-2.2-1.8-4-4-4z"
                  fill="currentColor"
                />
              </svg>
              github
            </a>
          )}
          {project.live && (
            
            <a  href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--tx-muted)" }}
              className="flex items-center gap-1.5 text-[11px] hover:text-[color:var(--ac-blue)] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 2L2 10M10 2H6M10 2V6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              live site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      style={{ borderBottom: "1px solid var(--bd-card)" }}
      className="px-8 lg:px-12 py-16"
    >
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div
          style={{ color: "var(--ac-blue)" }}
          className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase"
        >
          <span className="block w-4 h-px bg-[var(--ac-blue)]" />
           Projects
        </div>
        
        <a  href="https://github.com/jeetburman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--tx-muted)" }}
          className="text-xs hover:text-[color:var(--ac-blue)] transition-colors"
        >
          view all on github →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}