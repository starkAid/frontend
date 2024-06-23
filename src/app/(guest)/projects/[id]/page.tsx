import AboutProject from "@/components/projectDetails/AboutProject";
import Details from "@/components/projectDetails/Details";
import HeroSection from "@/components/projectDetails/HeroSection";
import Newsletter from "@/components/shared/Newsletter";
import Validator from "@/components/shared/Validator";


export default function ProjectDetails() {
    return (
        <main className="w-full min-h-screen">
            <HeroSection />
            <Details />
            <AboutProject />
            <Validator />
            <Newsletter />
        </main>
    )
}
