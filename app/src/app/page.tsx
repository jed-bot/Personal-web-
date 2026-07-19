import dynamic from 'next/dynamic';
import HeroSection from '@/components/hero/HeroSection';
import NavSection from '@/components/nav/NavSection';
import Background from '@/components/shared/WaveArcsBackground';

const AboutSection = dynamic(() => import('@/components/about/AboutSection'), {
  loading: () => <div style={{ minHeight: '100vh' }} />,
});
const SkillsSection = dynamic(() => import('@/components/skills/SkillsSection'), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});
const CaseStudySection = dynamic(() => import('@/components/case-study/CaseStudySection'), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});
const ContactSection = dynamic(() => import('@/components/contact/ContactSection'), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});
const FooterSection = dynamic(() => import('@/components/footer/FooterSection'), {
  loading: () => <div style={{ minHeight: '20vh' }} />,
});

export default function Home() {
  return (
    <main>
      <Background />
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