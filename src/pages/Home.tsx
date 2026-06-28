import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import SkillsSection from "../components/sections/SkillsSection";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ServicesPreview from "../components/sections/ServicesPreview";
import ContactCTA from "../components/sections/ContactCTA";

function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCTA />
    </div>
  );
}

export default Home;