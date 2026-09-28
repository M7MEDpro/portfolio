import type { Project } from '../data/projectsData';

interface RoadmapGutterProps {
  projects: Project[];
  activeIndex: number;
  onSelectProject: (index: number) => void;
  scrollProgress: number; // 0 to 1
}

export function RoadmapGutter({
  projects,
  activeIndex,
  onSelectProject,
  scrollProgress,
}: RoadmapGutterProps) {
  return (
    <div
      className="hidden md:flex flex-col items-center justify-between relative h-full select-none"
      aria-label="Projects Roadmap Progress"
    >
      {/* Background static connecting line */}
      <div className="absolute top-6 bottom-6 w-[2px] bg-border rounded-full" />

      {/* Dynamic progress fill line */}
      <div
        className="absolute top-6 w-[2px] bg-accent rounded-full transition-all duration-300 ease-out"
        style={{
          height: `calc(${Math.min(100, Math.max(0, scrollProgress * 100))}% - 48px)`,
        }}
        aria-hidden="true"
      />

      {/* Nodes list */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full py-8">
        {projects.map((project, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <div key={project.id} className="relative flex items-center justify-center my-auto">
              <button
                type="button"
                onClick={() => onSelectProject(idx)}
                className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                  isActive
                    ? 'scale-110 shadow-lg'
                    : 'scale-90 hover:scale-100 opacity-60 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isActive
                    ? 'var(--surface)'
                    : isPassed
                    ? 'var(--surface-2)'
                    : 'var(--surface)',
                  borderColor: isActive
                    ? project.accentColor
                    : isPassed
                    ? 'var(--accent)'
                    : 'var(--border)',
                  borderWidth: '2px',
                }}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Jump to project ${project.number}: ${project.title}`}
              >
                {/* Active node soft pulse ring */}
                {isActive && (
                  <span
                    className="absolute -inset-1.5 rounded-full opacity-35 animate-ping"
                    style={{ backgroundColor: project.accentColor }}
                    aria-hidden="true"
                  />
                )}

                {/* Node Number */}
                <span
                  className="font-mono text-xs font-bold transition-colors"
                  style={{
                    color: isActive
                      ? project.accentColor
                      : isPassed
                      ? 'var(--text)'
                      : 'var(--muted)',
                  }}
                >
                  {project.number}
                </span>

                {/* Hover Tooltip on desktop */}
                <span className="absolute left-14 px-2.5 py-1 rounded-md bg-surface-2 border border-border text-xs text-text font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md z-30">
                  {project.title}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
