import { Navbar } from "@/components/navigation";
import { HomeBackground } from "@/design-system/background";
import { SectionTransition } from "@/design-system/patterns/section-transition";
import { BusinessJourneySection } from "@/modules/home/business-journey";
import { BusinessRealitySection } from "@/modules/home/business-reality";
import { HeroSection } from "@/modules/home/hero";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <Navbar />

      <main>
        <HeroSection />

        <SectionTransition variant="panel-to-canvas" />

        <BusinessJourneySection />

        <SectionTransition variant="canvas-to-canvas" />

        <BusinessRealitySection />
      </main>
    </>
  );
}
