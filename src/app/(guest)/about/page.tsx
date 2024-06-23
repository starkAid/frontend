import TeamSection from "@/components/home/TeamSection";
import ImpactSection from "@/components/home/ImpactSection";
import Testimonial15 from "@/components/home/Testimonial15";
import RecentProjects from "@/components/home/RecentProjects";
import AboutSection from "@/components/home/AboutSection";

export default function About() {
  return (
      <main className="w-full min-h-screen">
          <AboutSection />
            <ImpactSection />
      <TeamSection />
        <Testimonial15 />
    </main>
  );
}
