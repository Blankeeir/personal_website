
import Header from './components/Layout/Header';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import EducationSection from './components/Education/EducationSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import LeadershipSection from './components/Leadership/LeadershipSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
      </main>
    </div>
  );
}

export default App;
