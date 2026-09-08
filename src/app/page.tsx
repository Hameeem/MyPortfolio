import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PlaygroundSection } from "@/components/sections/PlaygroundSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <PlaygroundSection />
      <WritingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
