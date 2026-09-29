import { SmoothScroll } from './components/SmoothScroll';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreeTierShowcase } from './components/ThreeTierShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#070809] text-white selection:bg-[#00ff87]/30 selection:text-[#00ff87] font-sans">
        {/* Subtle, lightweight tactile grain texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Interactive Ambient Canvas Spotlight & Floating Particles */}
        <BackgroundEffects />

        {/* Clean Luxury Header (No Resume, No Light Mode) */}
        <Header />

        {/* Main Content Flow */}
        <main className="relative z-10">
          <Hero />
          <ThreeTierShowcase />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Colophon & Cairo Local Time */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
