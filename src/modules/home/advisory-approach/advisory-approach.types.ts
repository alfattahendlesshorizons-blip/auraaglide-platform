export type AdvisoryStepId =
  | "understand"
  | "assess"
  | "structure"
  | "execute"
  | "support";

export interface AdvisoryStep {
  id: AdvisoryStepId;
  label: string;
  eyebrow: string;
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  description: string;
  points: string[];
  href: string;
  ctaLabel: string;
}

export interface AdvisoryApproachContent {
  eyebrow: string;
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  quote: string;
  quoteCaption: string;
  introduction: string;
  steps: AdvisoryStep[];
}
