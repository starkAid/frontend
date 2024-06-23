import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TeamSection from "@/components/home/TeamSection";
import ImpactSection from "@/components/home/ImpactSection";
import Testimonial15 from "@/components/home/Testimonial15";
import Stats from "@/components/home/Stats";
import RecentProjects from "@/components/home/RecentProjects";
import Partnership from "@/components/shared/Partnership";
import Newsletter from "@/components/shared/Newsletter";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <TeamSection />
      <ImpactSection />
      <RecentProjects />
      <Partnership />
      <Testimonial15 />
      <Stats />
      <Newsletter />
    </main>
  );
}
