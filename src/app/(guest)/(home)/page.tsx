import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TeamSection from "@/components/home/TeamSection";
import ImpactSection from "@/components/home/ImpactSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import Testimonial15 from "@/components/home/Testimonial15";
import Stats from "@/components/home/Stats";
import Footer from "@/components/shared/Footer";
import RecentProjects from "@/components/home/RecentProjects";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <TeamSection />
      <ImpactSection />
      <PartnershipSection />
        <Testimonial15 />
        <Stats />

      <RecentProjects />
    </main>
  );
}
