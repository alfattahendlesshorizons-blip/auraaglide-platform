export type ServicesJourneyImage = {
  src: string | null;
  alt: string;
};

export type ServicesJourneyCta = {
  label: string;
  href: string;
};

export type ServicesJourneyCategory = {
  id: string;
  slug: string;
  shortLabel: string;
  eyebrow: string;
  title: string;
  question: string;
  description: string;
  quote: string;
  image: ServicesJourneyImage;
  cta: ServicesJourneyCta;
  serviceIds: string[];
  enabled: boolean;
  order: number;
};

export type ServicesJourneyContent = {
  eyebrow: string;
  title: string;
  description: string;
  categories: ServicesJourneyCategory[];
};
