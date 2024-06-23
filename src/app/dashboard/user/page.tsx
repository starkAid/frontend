import HeroSection from "@/components/user/HeroSection";
import MyProjects from "@/components/user/MyProjects";

export default function User() {
    return (
        <main className="w-full min-h-screen">
            <HeroSection />
            <MyProjects />
        </main>
    )
}