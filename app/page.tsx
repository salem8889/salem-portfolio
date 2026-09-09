import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImpactMetrics from "./components/ImpactMetrics";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ApproachSection from "./components/ApproachSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <HeroSection />
        <ImpactMetrics />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}