import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TeamSection from "@/components/home/TeamSection";
import ImpactSection from "@/components/home/ImpactSection";
import PartnershipSection from "@/components/home/PartnershipSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
        <CategoriesSection />
      <TeamSection />
      <ImpactSection />
      <PartnershipSection />
    </main>
  );
}
