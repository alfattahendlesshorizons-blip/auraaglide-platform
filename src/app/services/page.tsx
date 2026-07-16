import type { Metadata } from "next";

import { Navbar } from "@/components/navigation";
import { seedServiceRepository } from "@/core/content/repositories/seed-service.repository";
import { ServicesHub } from "@/modules/services/hub";

export const metadata: Metadata = {
  title: "Business Support Services | AuraaGlide Solutions",
  description:
    "Explore business registration, GST, tax, compliance, trademark, licences and global company setup support through one connected platform.",
};

export default async function ServicesPage() {
  const services = await seedServiceRepository.getAll({
    preview: true,
  });

  return (
    <>
      <Navbar />

      <main>
        <ServicesHub services={services} />
      </main>
    </>
  );
}
