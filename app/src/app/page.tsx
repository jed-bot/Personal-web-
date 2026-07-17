import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import SkillsSection from '@/components/skills/SkillsSection';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import ContactSection from '@/components/contact/ContactSection';
import FooterSection from '@/components/footer/FooterSection';
import WaveArcsBackground from '@/components/shared/WaveArcsBackground';
import NavSection from '@/components/nav/NavSection';

export default function Home() {
  return (
    <main>
      <WaveArcsBackground />
      <NavSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CaseStudySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}