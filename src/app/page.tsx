import { Navbar } from "@/components/navigation";
import { HomeBackground } from "@/design-system/background";
import { SectionTransition } from "@/design-system/patterns/section-transition";
import { BusinessJourneySection } from "@/modules/home/business-journey";
import { HeroSection } from "@/modules/home/hero";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <Navbar />

      <main>
        <HeroSection />

        <SectionTransition
          variant="panel-to-canvas"
        />

        <BusinessJourneySection />
      </main>
    </>
  );
}
