import { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SeniorHighlights } from './components/SeniorHighlights';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, type Project } from './data/portfolioData';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-neon font-sans">
      {/* Background Interactive Particles Constellation */}
      <ParticleCanvas />

      {/* Modern Sticky Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setIsTerminalOpen(true)} />
        <SeniorHighlights />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <TestimonialsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Command Line Terminal Dialog */}
      <CommandPalette
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSelectProject={(id) => {
          const found = PROJECTS.find((p) => p.id === id);
          if (found) setSelectedProject(found);
        }}
      />

      {/* Deep-Dive Case Study Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
