export type ClientImpactId =
  | "startup-foundation"
  | "operational-readiness"
  | "coordinated-growth";

export interface ClientImpactOutcome {
  label: string;
  description: string;
}

export interface ClientImpactStory {
  id: ClientImpactId;
  label: string;
  eyebrow: string;
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  summary: string;
  outcomes: ClientImpactOutcome[];
  ctaLabel: string;
  href: string;
}

export interface ClientImpactContent {
  eyebrow: string;
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  quote: string;
  quoteCaption: string;
  helper: string;
  stories: ClientImpactStory[];
}
