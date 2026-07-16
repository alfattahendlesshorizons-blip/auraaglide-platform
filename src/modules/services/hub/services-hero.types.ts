export type ServicesHeroCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string;
  targetSection: string;
  ctaLabel: string;
  enabled: boolean;
  order: number;
};

export type ServicesHeroContent = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  categories: ServicesHeroCategory[];
};
