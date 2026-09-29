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
      className="hidden lg:flex flex-col items-center justify-between relative h-full select-none w-14"
      aria-label="Projects Roadmap Progress"
    >
      {/* Background Curved Circuit Track (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 50 800"
      >
        {/* Base circuit track */}
        <path
          d="M 25 30 L 25 180 Q 25 210 38 225 Q 50 240 50 270 L 50 350 Q 50 380 38 395 Q 25 410 25 440 L 25 560 Q 25 590 12 605 Q 0 620 0 650 L 0 710 Q 0 740 12 755 Q 25 770 25 780"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Dynamic Glowing Neon Track Fill */}
        <path
          d="M 25 30 L 25 180 Q 25 210 38 225 Q 50 240 50 270 L 50 350 Q 50 380 38 395 Q 25 410 25 440 L 25 560 Q 25 590 12 605 Q 0 620 0 650 L 0 710 Q 0 740 12 755 Q 25 770 25 780"
          fill="none"
          stroke="#00ff87"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-glow transition-all duration-300 ease-out"
          style={{
            strokeDasharray: '900',
            strokeDashoffset: `${Math.max(0, 900 - scrollProgress * 900)}`,
          }}
        />
      </svg>

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
                className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'scale-115 shadow-[0_0_25px_rgba(0,255,135,0.5)] border-2 border-[#00ff87] bg-[#0c1219]'
                    : isPassed
                    ? 'border border-[#00ff87]/50 bg-[#0e141a] hover:scale-105'
                    : 'border border-white/10 bg-[#090c10] opacity-50 hover:opacity-100 hover:scale-105'
                }`}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Jump to project ${project.number}: ${project.title}`}
              >
                {/* Active Neon Pulse Ring */}
                {isActive && (
                  <span
                    className="absolute -inset-1 rounded-2xl opacity-40 animate-ping"
                    style={{ backgroundColor: project.accentColor }}
                    aria-hidden="true"
                  />
                )}

                {/* Node Number */}
                <span
                  className="font-mono text-xs font-bold transition-colors"
                  style={{
                    color: isActive ? project.accentColor : isPassed ? '#00ff87' : 'var(--muted)',
                  }}
                >
                  {project.number}
                </span>

                {/* Hover Tooltip */}
                <span className="absolute left-16 px-3 py-1.5 rounded-xl bg-[#0f141c] border border-white/10 text-xs text-white font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl z-30">
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
