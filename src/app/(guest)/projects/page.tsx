import HeroSection from "@/components/projects/HeroSection";
import ProjectsDisplay from "@/components/projects/Projects";
import Newsletter from "@/components/shared/Newsletter";
import Partnership from "@/components/shared/Partnership";
import Validator from "@/components/shared/Validator";

export default function Projects() {
    return (
        <main className="w-full min-h-screen">
            <HeroSection />
            <ProjectsDisplay />
            <Partnership />
            <Validator />
            <Newsletter />
        </main>
    )
}