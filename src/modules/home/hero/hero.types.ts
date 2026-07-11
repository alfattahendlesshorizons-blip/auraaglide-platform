export type HeroTrustIcon =
  | "foundation"
  | "network"
  | "execution";

export type HeroTrustItem = {
  title: string;
  description: string;
  icon: HeroTrustIcon;
};

export type HeroContent = {
  eyebrow: string;

  title: {
    primary: string;
    secondary: string;
    accent: string;
  };

  description: string;

  trustItems: HeroTrustItem[];

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction: {
    label: string;
    href: string;
  };

  reassurance: string;

  image: {
    src: string;
    alt: string;
  };
};
