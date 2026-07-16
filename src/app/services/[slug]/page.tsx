import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/navigation";
import { seedServiceRepository } from "@/core/content/repositories/seed-service.repository";
import type { ServiceLayoutKey } from "@/core/content/service-layouts";
import { createPageMetadata } from "@/core/seo";
import { HomeBackground } from "@/design-system/background";
import { ServicePage } from "@/modules/services/service-page";

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

function resolveLayoutKey(domainId: string): ServiceLayoutKey {
  if (domainId === "domain-global-business") {
    return "service-global-v1";
  }

  if (domainId === "domain-finance-tax") {
    return "service-recurring-compliance-v1";
  }

  return "service-standard-v1";
}

export async function generateStaticParams() {
  const services = await seedServiceRepository.getAll({
    preview: true,
  });

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await seedServiceRepository.getBySlug(slug, {
    preview: true,
  });

  if (!service) {
    return {};
  }

  return createPageMetadata({
    pathname: `/services/${service.slug}`,
    seo: service.seo,
  });
}

export default async function ServiceRoute({
  params,
}: ServiceRouteProps) {
  const { slug } = await params;
  const service = await seedServiceRepository.getBySlug(slug, {
    preview: true,
  });

  if (!service) {
    notFound();
  }

  return (
    <>
      <HomeBackground />
      <Navbar />

      <main>
        <ServicePage
          service={service}
          layoutKey={resolveLayoutKey(service.domainId)}
        />
      </main>
    </>
  );
}
