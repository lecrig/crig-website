import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import MissionSection from "@/components/MissionSection";
import ExperiencesSection from "@/components/ExperiencesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ActivitiesSection />
      <MissionSection />
      <ExperiencesSection />
    </main>
  );
}
