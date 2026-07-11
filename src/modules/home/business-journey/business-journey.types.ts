export type JourneyStageId =
  | "idea"
  | "launch"
  | "running"
  | "growth"
  | "expansion";

export type JourneyTone =
  | "light"
  | "steel"
  | "gold";

export type JourneyHeadingLine = {
  text: string;
  tone: JourneyTone;
};

export type JourneyService = {
  label: string;
  href: string;
};

export type JourneyStage = {
  id: JourneyStageId;
  label: string;
  shortLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  visualKey: JourneyStageId;
  services: JourneyService[];
  cta: {
    label: string;
    href: string;
  };
  enabled: boolean;
  order: number;
  featured?: boolean;
};

export type BusinessJourneyContent = {
  eyebrow: string;

  heading: JourneyHeadingLine[];

  quote: {
    text: string;
    signature: string;
  };

  stages: JourneyStage[];
};
