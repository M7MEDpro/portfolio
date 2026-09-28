import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoadmapPhoneShowcase } from './components/RoadmapPhoneShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent font-sans">
        {/* Subtle, lightweight tactile grain texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Calm Navigation Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <RoadmapPhoneShowcase />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Calm Colophon & Local Time */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
