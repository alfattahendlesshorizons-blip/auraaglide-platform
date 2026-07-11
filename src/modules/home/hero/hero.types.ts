export type HeroRailItem = {
  label: string;
  href: string;
  description: string;
  enabled: boolean;
  order: number;
};

export type HeroContent = {
  eyebrow: string;

  title: {
    primary: string;
    secondary: string;
    accent: string;
  };

  description: string;

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction: {
    label: string;
    href: string;
  };

  reassurance: string;

  railItems: HeroRailItem[];

  image: {
    src: string;
    alt: string;
  };
};

export type HeroTrustIcon =
  | "foundation"
  | "network"
  | "execution";

