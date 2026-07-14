import { Navbar } from "@/components/navigation";
import { HomeBackground } from "@/design-system/background";
import { SectionTransition } from "@/design-system/patterns/section-transition";
import { BusinessJourneySection } from "@/modules/home/business-journey";
import { ConnectedDecisionsSection } from "@/modules/home/connected-decisions";
import { BusinessRealitySection } from "@/modules/home/business-reality";
import { AdvisoryApproachSection } from "@/modules/home/advisory-approach";
import { ClientImpactSection } from "@/modules/home/client-impact";
import { ServicesEcosystemSection } from "@/modules/home/services-ecosystem";
import { HeroSection } from "@/modules/home/hero";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <Navbar />

      <main>
        <HeroSection />

        <div className="homeFlowAmbient">
          <SectionTransition variant="panel-to-canvas" />

          <BusinessJourneySection />

          <SectionTransition variant="canvas-to-canvas" />

          <ServicesEcosystemSection />

          <SectionTransition variant="canvas-to-canvas" />

          <ConnectedDecisionsSection />

          <SectionTransition variant="canvas-to-canvas" />

          <BusinessRealitySection />

          <AdvisoryApproachSection />
          <ClientImpactSection />
        </div>
      </main>
    </>
  );
}
