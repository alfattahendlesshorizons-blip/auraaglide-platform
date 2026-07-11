import { Navbar } from "@/components/navigation";
import { HomeBackground } from "@/design-system/background";
import { HeroSection } from "@/modules/home/hero";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <Navbar />

      <main>
        <HeroSection />
      </main>
    </>
  );
}
